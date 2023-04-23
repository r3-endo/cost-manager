import { atom } from "recoil";

export const expenditureState = atom({
  key: 'expenditureState',
  default: { value: 10, difference: 10, positive: true}
})