import { atom } from "recoil";

export const expenditureGraphState = atom({
  key: 'expenditureGraphState',
  default: {categories: [{label: 'hoge', expenditure: 200, percentage: 20, ranking: 1}]}
})