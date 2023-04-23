import { atom } from "recoil";

export const incomeState = atom({
  key: 'incomeState',
  default: { value: 100, difference: 10, positive: false}
})