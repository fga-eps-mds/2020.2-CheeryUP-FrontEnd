import { useState, useEffect, useCallback } from "react";
import "../pages/Registrar/CadastroPaciente";
import axiosInstance from "../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPac } from "./../store/Pacientes/actions";

export default function useFormDelPaciente(callback, validatePac) {

  const { psic, pac } = useSelector((state) => state);
  
    const dispatchPac = useDispatch();
    const changePac = useCallback((pac) => dispatchPac(setPac(pac)), [dispatchPac]);
    // useEffect(() => {

    //    axiosInstance
    //     .get(`api/psicologos/${psic.user.username}/pacientes/${pac.nCPF}/`)
    //     .then((data) => {
    //     console.log(data)
    //     changePac(data.data);
    //     });
    // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("pica");

    // Essa parte de deletar o paciente ainda não está completa
    // Por enquanto, só deleta o paciente se colocar o cpf dele manualmente
    // no lugar de ${pac.nCPF} 
 
    await axiosInstance
      .delete(`api/psicologos/${psic.user.username}/pacientes/${pac.nCPF}/`)
      .then((data) => {
        alert("Paciente deletado com sucesso!");
        console.log(psic);
      })
      .catch((err) => alert("Impossível realizar essa operação!"));
  };

  // Ainda falta completar toda essa parte aqui ksksksks

  return { handleSubmit };
}