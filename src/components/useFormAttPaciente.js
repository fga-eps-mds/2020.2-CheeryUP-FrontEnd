import { useState } from "react";
import "../pages/Registrar/CadastroPaciente";
import axiosInstance from "../services/apiToken";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function useFormPaciente(callback, validatePac) {
  const history = useHistory();
  const [values, setValues] = useState({
    nome: "",
    nascimento: "",
    nCPF: "",
    regiao: "",
    descricao: "",
    situacao: "M",
    genero: "M",
  });
  const { infopaciente } = useParams();
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
    setIsSubmitting(false);
    setErrors(validatePac(values));
    setIsSubmitting(true);

    console.log(values);
    dataPac.append("nome", values.nome);
    dataPac.append("data_nascimento", values.nascimento);
    dataPac.append("regiao", values.regiao);
    dataPac.append("situacao", values.situacao);
    dataPac.append("descricao", values.descricao);
    dataPac.append("cpf", values.nCPF);
    dataPac.append("genero", values.genero);

    await axiosInstance
      .put(
        `api/psicologos/${psic.user.username}/pacientes/${infopaciente}/`,
        dataPac
      )
      .then((data) => {
        alert("Dados atualizados com sucesso !");
        history.push('/ListaPacientes')
      })
      .catch((err) => alert("Dados inválidos!"));
  };

  // Ainda falta completar toda essa parte aqui ksksksks

  return { handleSubmit, handleChange, values, handleSelect, errors };
}
