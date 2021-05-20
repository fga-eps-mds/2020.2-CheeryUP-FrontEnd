import { SET_AUTH } from "./const";

export function authReducer(state=false, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.payload;
    default:
      return state;
  }
  
}
