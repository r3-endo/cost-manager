import React, { createContext, useEffect } from 'react';
import { getEarings } from '../service/backend-service';
import { useRecoilState } from 'recoil';
import { earingsState } from '../store/earingsState';
import { EaringsModel } from '../models/EaringsModel';

const defaultEarings: EaringsModel = {value: 10, difference: 10, positive: true};
export const EaringsContext = createContext<EaringsModel>(defaultEarings);

export const EaringsProvider = (props: any) => {
  const { children } = props;
  const [earingsData, setEaringsData] = useRecoilState<EaringsModel>(earingsState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getFromAPI = async () => {
      const result = await getEarings();
      setEaringsData(result);
    };
    getFromAPI();
  }, [earingsData, setEaringsData]);
  return (
    <>
      <EaringsContext.Provider value={earingsData}>
        {children}
      </EaringsContext.Provider>
    </>
  )
}