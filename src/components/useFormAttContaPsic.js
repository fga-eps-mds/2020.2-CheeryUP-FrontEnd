import { useState, useEffect } from "react";
import "../pages/Registrar/CadastroPaciente";
import axiosInstance from "../services/apiToken";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function useFormAttContaPsic() {
  const [values, setValues] = useState({
    nome: "",
    email: "",
    nCRP: "",
    avaliacao: "",
  });
  const { infopsic } = useParams();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(null);
  const dataPac = new FormData();
  const { psic } = useSelector((state) => state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSelect = (e, value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    console.log("pica");
    /*    setIsSubmitting(false);
    /* setErrors(validatePac(values)); */
    setIsSubmitting(true);

    console.log(values);
    dataPac.append("nome", values.nome);
    dataPac.append("e-mail", values.email);
    dataPac.append("crp", values.nCRP);
    dataPac.append("avaliacao", values.avaliacao);

    await axiosInstance
      .put(
        `api/psicologos/${psic.user.username}/${infopsic}/`,
        dataPac
      )
      .then((data) => {
        alert("Dados atualizados com sucesso !");
        console.log(psic);
      })
      .catch((err) => alert("Dados inválidos!"));
  };

  // Ainda falta completar toda essa parte aqui ksksksks

  return { handleSubmit, handleChange, values, handleSelect };
}
