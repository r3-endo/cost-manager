import React, { createContext, useEffect } from 'react';
import { getIncome } from '../service/backend-service';
import { IncomeModel } from '../models/IncomeModel';
import { useRecoilState } from 'recoil';
import { incomeState } from '../store/incomeState';

const defaultIncome = {value: 10, difference: 10, positive: true};
export const IncomeContext = createContext<IncomeModel>(defaultIncome);

export const IncomeProvider = (props: any) => {
  const { children } = props;
  const [incomeData, setIncomeData] = useRecoilState<IncomeModel>(incomeState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getFromAPI = async () => {
      const result = await getIncome();
      setIncomeData(result);
    };
    getFromAPI();
  }, [incomeData, setIncomeData]);
  return (
    <>
      <IncomeContext.Provider value={incomeData}>
        {children}
      </IncomeContext.Provider>
    </>
  )
}