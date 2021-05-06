import { SET_PAC } from "./const";

export function setPac(pac) {
  return { type: SET_PAC, payload: pac };
}
