import { useState, useEffect, useCallback } from "react";
import "../pages/Registrar/SignUP.js";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/Auth/actions";
import axiosInstance from "../services/api";
import { useHistory } from "react-router-dom";

export default function useFormSignIn(callback, validate) {
  const [values, setValues] = useState({
    nome: "",
    senha: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = new FormData();
  const history = useHistory();
  const dispatch= useDispatch() 
  const changeAuth = useCallback((auth) => dispatch(setAuth(auth)), [dispatch])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    changeAuth(true)
    setIsSubmitting(true);
  };

  useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      data.append("username", values.nome);
      data.append("password", values.senha);
      console.log(FormData);

      await axiosInstance
        .post("api/token/", data)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + localStorage.getItem("access_token");
          alert("Login efetuado passado!");

          console.log(res.data.access);
          history.push("/ListaPacientes");
        })
        .catch((err) => alert("Login Inválido"));
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
}
