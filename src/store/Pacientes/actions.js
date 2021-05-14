import { SET_PAC, REMOVE_PAC } from "./const";

export function setPac(pac) {
  return { type: SET_PAC, payload: pac };
}

export function removerPaciente(cpf) {
  return { type: REMOVE_PAC, payload: cpf };
}
