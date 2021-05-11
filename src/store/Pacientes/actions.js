import { SET_PAC, REMOVE_PAC } from "./const";

export function setPac(pac) {
  return { type: SET_PAC, payload: pac };
}

export const removerPaciente = (cpf) => ({ type: REMOVE_PAC, cpf});
