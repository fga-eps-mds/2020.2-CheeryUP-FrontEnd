import { SET_PSIC } from "./const";

const initialState = { 
    bio:"",
    nCRP: "",
    genero: "",
    user:{
        username:"",
        email:""
    },
}

export function psicologoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PSIC:
      return action.payload;
    default:
      return state;
  }
}
