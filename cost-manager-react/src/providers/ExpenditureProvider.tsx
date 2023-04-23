import React, { createContext, useEffect, useState } from 'react';
import { ExpenditureModel } from "../models/ExpenditureModel";
import { getExpenditure } from '../service/backend-service';
import { useRecoilState } from 'recoil';
import { expenditureState } from '../store/expenditureState';

const defaultExpenditure = {value: 10, difference: 10, positive: true};
export const ExpenditureContext = createContext<ExpenditureModel>(defaultExpenditure);

export const ExpenditureProvider = (props: any) => {
  const { children } = props;
  const [expenditureData, setExpenditureData] = useRecoilState<ExpenditureModel>(expenditureState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getFromAPI = async () => {
      const result = await getExpenditure();
      setExpenditureData(result);
    };
    getFromAPI();
  }, [expenditureData, setExpenditureData]);
  return (
    <>
      <ExpenditureContext.Provider value={expenditureData}>
        {children}
      </ExpenditureContext.Provider>
    </>
  )
}