import {SET_AUTH} from './const'

export function setAuth(auth) {
  return { type:SET_AUTH, payload: auth };
}
