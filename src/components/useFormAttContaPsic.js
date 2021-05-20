import { useState } from "react";
import "../pages/Registrar/SignUP";
import axiosInstance from "../services/apiToken";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useFormAttContaPsic() {
  const history = useHistory();
  const { psic } = useSelector((state) => state);
  const [values, setValues] = useState({
    nome: "",
    username: "",
    email: "",
    nCRP: "",
    genero: "",
    password: "",
    bio: "Algo",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(null);
  const dataPsic = new FormData();
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
    setIsSubmitting(true);

    console.log(values);
      dataPsic.append("user.password", values.senha);
      dataPsic.append("user.email", values.email);
      dataPsic.append("nCRP", values.nCRP);
      dataPsic.append("bio", values.bio);
      dataPsic.append("genero", values.genero);
      dataPsic.append("name", values.nome);
      dataPsic.append("bio", values.bio);

    await axiosInstance
      .patch(
        `api/psicologos/${psic.user.username}/`,
        dataPsic
      )
      .then((data) => {
        alert("Dados atualizados com sucesso !");
        console.log(psic);
        history.push('/ListaPacientes')
      })
      .catch((err) => alert("Dados inválidos!"));
  };


  return { handleSubmit, handleChange, values, handleSelect };
}
