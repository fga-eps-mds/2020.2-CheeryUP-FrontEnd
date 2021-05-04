import { useState, useEffect } from "react";
import "../pages/Registrar/CadastroPaciente";
import "../pages/ListaPacientes/ListaPacientes";

import axiosInstance from '../services/api';

export default function useFormPaciente(callback, validate) {
  const [values, setValues] = useState({
    nome: "",
    nascimento: "",
    nCPF: "",
    regiao: "",
    genero: "",
    descricao: "",
    situacao: "Controlada",
    // genero: "M"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  // Ainda falta completar toda essa parte aqui ksksksks

  useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);
      
      await axiosInstance
        .get("api/psicologos/88888888854/pacientes/")
        .then(function (res) {
          console.log(res.data);
        })
        .catch((err) => alert("Nenhum paciente valido"));
    }
  }, [errors]);

  return { handleSubmit };
}
