import { SET_PSIC } from "./const";

export function setPsic(psic) {
  return { type: SET_PSIC, payload: psic };
}
