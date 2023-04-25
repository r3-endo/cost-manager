import { atom } from "recoil";

export const earingsHistoryGraphState = atom({
  key: 'earingsHistoryGraphState',
  default:
  {
    thisYearDatas: [
    {year: 2022, month:1, monthName: 'January', earings: 100},
    {year: 2022, month:2, monthName: 'February', earings: 200},
    ],
    lastYearDatas: [
    {year: 2023, month:1, monthName: 'January', earings: 300},
    {year: 2023, month:2, monthName: 'January', earings: 400},
    ]
  }
})