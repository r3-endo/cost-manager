import React, { createContext, useEffect, useReducer } from 'react';
import { User, getUserInfo } from '../service/backend-service';


// 初期状態を定義する State
interface UserState {
  loading: boolean;
  user: null | User;
  error: null | Error;
}
const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

// ユーザ情報取得のReducer
type Action = { type: 'FETCH_START' } | { type: 'FETCH_SUCCESS'; payload: User } | { type: 'FETCH_FAILURE'; payload: Error };
function userReducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Context
export const UserContext = createContext<UserState>(initialState);
export const userProvider = (props: any) => {
  const { children } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(userReducer, initialState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
    const getUser = async() => {
      try {
        const result = await getUserInfo();
        dispatch( { type: 'FETCH_SUCCESS', payload: result});
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAILURE', payload: err });
      }
    };
    getUser();
  }, []);
  return (
    <>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </>
  )
}

export default userProvider