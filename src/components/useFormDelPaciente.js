import { useState, useEffect, useCallback } from "react";
import "../pages/Registrar/CadastroPaciente";
import axiosInstance from "../services/apiToken";
import { useDispatch, useSelector } from "react-redux";
import { setPsic } from "./../store/Psicologo/actions";
import Pacientes from "../pages/ListaPacientes/Pacientes";

export default function useFormDelPaciente() {

    // const {psic} = useSelector( (state) =>state)
    // const dispatch = useDispatch();
    // const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
    // useEffect(() => {
    //   axiosInstance
    //   .get(`api/psicologos/${psic.user.username}/`)
    //   .then((response) => {
    //     console.log(response)
    //     changePsic(response.data);
    //   });
    // }, []);

    var user = "psic.user.username"

  // const handleSubmit = async (e) => {
  //   //const {paciente} = this.props
  //   e.preventDefault();
  //   console.log("pica");

  //   // Essa parte de deletar o paciente ainda não está completa
  //   // Por enquanto, só deleta o paciente se colocar o cpf dele manualmente
  //   // no lugar de ${pac.nCPF} 
 
  // //   await axiosInstance
  // //     .delete(`api/psicologos/${psic.user.username}/pacientes/${paciente.cpf}/`)
  // //     .then((data) => {
  // //       alert("Paciente deletado com sucesso! AOOO");
  // //       console.log(psic);
  // //     })
  // //     .catch((err) => alert("Impossível realizar essa operação!"));
  //  };

  // Ainda falta completar toda essa parte aqui ksksksks

  return { user };
}