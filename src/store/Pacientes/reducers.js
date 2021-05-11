import Pacientes from "../../pages/ListaPacientes/Pacientes";
import { REMOVE_PAC, SET_PAC } from "./const";

export function pacReducer(state = [], action) {
  switch (action.type) {
    case SET_PAC:
      return action.payload;
        
    default:
      return state;
  }
}

export default (state = {}, action) => {
  switch(action.type){
    case REMOVE_PAC:
      return {
        ...state,
        pacientes: state.pacientes.filter((_paciente) => _paciente.cpf !== action.cpf )
      }
  }
}
