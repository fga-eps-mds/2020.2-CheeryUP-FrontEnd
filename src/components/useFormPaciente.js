import { useState, useEffect } from "react";
import "../pages/Registrar/CadastroPaciente";
import axiosInstance from "../services/apiToken";

export default function useFormPaciente(callback, validatePac) {
  const [values, setValues] = useState({
    nome: "",
    nascimento: "",
    nCPF: "",
    regiao: "PW",
    descricao: "",
    situacao: "M",
    genero: "M",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(null);
  const dataPac = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("pica");
    /*    setIsSubmitting(false);
    /* setErrors(validatePac(values)); */
    /*  setIsSubmitting(true); */

    console.log(values);
    dataPac.append("nome", values.nome);
    dataPac.append("data_nascimento", values.nascimento);
    dataPac.append("regiao", values.regiao);
    dataPac.append("situacao", values.situacao);
    dataPac.append("descricao", values.descricao);
    dataPac.append("cpf", values.nCPF);
    dataPac.append("genero", values.genero);

    await axiosInstance
      .post("api/psicologos/junin/pacientes/", dataPac)
      .then((data) => {
        alert("Cadastro efetuado passado!");
        console.log(dataPac);
      })
      .catch((err) => alert("Cadastro de Paciente inválido!"));
  };

  // Ainda falta completar toda essa parte aqui ksksksks

  return { handleSubmit, handleChange, values };
}
