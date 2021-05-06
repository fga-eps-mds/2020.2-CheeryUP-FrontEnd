import { SET_PAC } from "./const";

export function pacReducer(state =[], action) {
  switch (action.type) {
    case SET_PAC:
      return action.payload;
    default:
      return state;
  }
}
