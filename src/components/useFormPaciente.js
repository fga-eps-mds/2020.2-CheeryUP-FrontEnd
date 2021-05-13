import { useState, useEffect } from "react";
import "../pages/Registrar/CadastroPaciente.js";
import axiosInstance from "../services/apiToken";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useFormPaciente(callback, validatePac) {
  const history = useHistory();
  const [values, setValues] = useState({
    nome: "",
    nascimento: "",
    nCPF: "",
    regiao: "PW",
    descricao: "",
    situacao: "M",
    genero: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dataPac = new FormData();
  const { psic } = useSelector((state) => state);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validatePac(values));

    setIsSubmitting(true);
  };
  
  useEffect(async() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);

      dataPac.append("nome", values.nome);
      dataPac.append("data_nascimento", values.nascimento);
      dataPac.append("regiao", values.regiao);
      dataPac.append("situacao", values.situacao);
      dataPac.append("descricao", values.descricao);
      dataPac.append("cpf", values.nCPF);
      dataPac.append("genero", values.genero);

      await axiosInstance
        .post(`api/psicologos/${psic.user.username}/pacientes/`, dataPac)
        .then((data) => {
          alert("Cadastro efetuado passado!");
          history.push("/ListaPacientes")
        })
        .catch((err) => alert("Cadastro de Paciente inválido!"));
    };
  },[errors])
      


  // Ainda falta completar toda essa parte aqui ksksksks

  return { handleSubmit, handleChange, values, errors };
}
