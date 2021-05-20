import { SET_MOBILE } from "./const";

export function setMobile(mobile) {
  return { type: SET_MOBILE, payload: mobile };
}
