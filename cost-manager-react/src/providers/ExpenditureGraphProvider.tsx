import React, { createContext, useEffect } from 'react';
import { getExpenditureGraph } from '../service/backend-service';
import { ExpenditureGraphModel } from '../models/ExpenditureGraphModle';
import { useRecoilState } from 'recoil';
import { expenditureGraphState } from '../store/expenditureGraphState';

const defaultData = {categories: [{label: '飲食費', expenditure: 2000, percentage: 20, ranking: 3}, {label: '書籍費', expenditure: 3000, percentage: 30, ranking: 2},  {label: '交際費', expenditure: 5000, percentage: 50, ranking: 1}, ]};
export const ExpenditureGraphContext = createContext<ExpenditureGraphModel>(defaultData);

export const ExpenditureGraphProvider = (props: any) => {
  const { children } = props;
  const [data, setData] = useRecoilState<ExpenditureGraphModel>(expenditureGraphState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getFromAPI = async () => {
      const result = await getExpenditureGraph();
      setData(result);
    };
    getFromAPI();
  }, [data, setData]);
  return (
    <ExpenditureGraphContext.Provider value={data}>
      {children}
    </ExpenditureGraphContext.Provider>
  )
}