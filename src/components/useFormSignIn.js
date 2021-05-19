import { useState, useEffect, useCallback } from "react";
import "../pages/Registrar/SignUP.js";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/Auth/actions";
import axiosInstance from "../services/apiToken";
import { useHistory } from "react-router-dom";
import { setPsic } from "../store/Psicologo/actions";


export default function useFormSignIn(callback, validate) {
  const [values, setValues] = useState({
    username: "",
    senha: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = new FormData();
  const history = useHistory();
  const dispatch = useDispatch();
  const changeAuth = useCallback((auth) => dispatch(setAuth(auth)), [dispatch]);
  const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
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
    changeAuth(true);
    setIsSubmitting(true);
  };

  useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      data.append("username", values.username);
      data.append("password", values.senha);
      console.log(FormData);

      await axiosInstance
        .post("login/api/login/", data)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          changePsic( { user: {username: res.data.user}})
          console.log(res.data.access);
          history.push("/ListaPacientes");
        })
        .catch((err) => alert("Login Inválido"));
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
}
