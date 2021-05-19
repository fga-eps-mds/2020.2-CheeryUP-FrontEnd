import { SET_CONS } from "./const";

export function consReducer(state = [], action) {
  switch (action.type) {
    case SET_CONS:
      return action.payload;
    default:
      return state;
  }
}
