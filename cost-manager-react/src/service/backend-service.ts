import axios from "axios"
import { ExpenditureModel } from "../models/ExpenditureModel";
import { ExpenditureGraphModel } from "../models/ExpenditureGraphModle";
import { IncomeModel } from "../models/IncomeModel";
import { EaringsHistoryGraphModel } from "../models/EaringsHistoryGraphModel";
import { EaringsModel } from "../models/EaringsModel";

export const getExpenditure = async (): Promise<ExpenditureModel> => {
  const response = await axios.get<ExpenditureModel>("/assets/mockAPI/expenditureResponse.json");
  return response.data;
}

export const getIncome= async (): Promise<IncomeModel> => {
  const response = await axios.get<IncomeModel>("/assets/mockAPI/incomeResponse.json");
  return response.data;
}

export const getExpenditureGraph = async (): Promise<ExpenditureGraphModel> => {
  const response = await axios.get<ExpenditureGraphModel>("/assets/mockAPI/expenditureGraphResponse.json");
  return response.data;
}

export const getEaringsHistoryGraph = async (): Promise<EaringsHistoryGraphModel> => {
  const response = await axios.get<EaringsHistoryGraphModel>("/assets/mockAPI/earingsHistoryGraphResponse.json");
  return response.data;
}

export const getEarings = async (): Promise<EaringsModel> => {
  const response = await axios.get<EaringsModel>("/assets/mockAPI/earingsResponse.json");
  return response.data;
}