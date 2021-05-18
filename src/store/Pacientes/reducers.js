import { REMOVE_PAC, SET_PAC } from "./const";

export function pacReducer(state = [], action) {
  switch (action.type) {
    case SET_PAC:
      return action.payload;
    case REMOVE_PAC:
      let pacientes = state.filter(
        (_paciente) => _paciente.cpf !== action.payload
      );
      return pacientes
    default:
      return state;
  }
}
