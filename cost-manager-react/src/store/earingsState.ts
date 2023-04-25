import { atom } from "recoil";

export const earingsState = atom({
  key: 'earingsState',
  default: { value: 100, difference: 10, positive: false}
})