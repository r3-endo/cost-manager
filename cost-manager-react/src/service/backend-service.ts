import axios from "axios"
import { ExpenditureModel } from "../models/ExpenditureModel";
import { ExpenditureGraphModel } from "../models/ExpenditureGraphModle";
import { IncomeModel } from "../models/IncomeModel";

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