import { useRecoilState } from "recoil";
import { EaringsHistoryGraphModel } from "../models/EaringsHistoryGraphModel";
import { createContext, useEffect } from "react";
import { getEaringsHistoryGraph } from '../service/backend-service';
import { earingsHistoryGraphState } from '../store/earingsHistoryState';

const defaultData = {thisYearDatas: [{year: 2023, month: 1, monthName: '', earings: 20}], lastYearDatas: [{year: 2022, month: 1, monthName: '', earings: 20}]};
export const EaringsHistoryGraphContext = createContext<EaringsHistoryGraphModel>(defaultData);

export const EaringsHistoryGraphProvider = (props: any) => {
  const { children } = props;
  const [data, setData] = useRecoilState<EaringsHistoryGraphModel>(earingsHistoryGraphState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getFromAPI = async () => {
      const result = await getEaringsHistoryGraph();
      setData(result);
    };
    getFromAPI();
  }, [data, setData]);
  return (
    <EaringsHistoryGraphContext.Provider value={data}>
      {children}
    </EaringsHistoryGraphContext.Provider>
  )
}