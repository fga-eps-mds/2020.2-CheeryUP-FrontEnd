import React from 'react'
import axiosInstance from '../../services/apiToken'
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPsic } from '../../store/Psicologo/actions';
import useFormDelPaciente from '../../components/useFormDelPaciente';


export default function DeletarPaciente(cpf) {
    
    // const {psic} = useSelector( (state) =>state)
    // const dispatch = useDispatch();
    // const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
    // useEffect(() => {
    //   axiosInstance.get(`api/psicologos/${psic.user.username}/`).then((response) => {
    //     console.log(response)
    //     changePsic(response.data);
    //   });
    // }, []);
    // // useEffect( () => {
    //     console.log(psic)
    // },[psic])

    //var user = useFormDelPaciente()
    
    

    const { oi } = ""

    axiosInstance
    .delete(`api/psicologos/leozin/pacientes/${cpf}/`)
    .then((data) => {
        alert("Paciente deletado com sucesso!");
        //console.log(cpf);
        //console.log(user);
        console.log("oi")
    })
    .catch((err) => alert("Impossível realizar essa operação!"));
  
    return {oi}
    
}