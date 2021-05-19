import React, { useEffect, useCallback } from "react";
import "./App.css";
import Routes from "./routes";
import { useDispatch } from "react-redux";
import { setPsic } from "./store/Psicologo/actions";
import { setAuth } from "./store/Auth/actions";

function App() {
  const dispatch = useDispatch();
  const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
  const changeAuth = useCallback((auth) => dispatch(setAuth(auth)), [dispatch]);

  useEffect(() => {
    var storagePsic = localStorage.getItem("psic");
    if (storagePsic) {
      var psic = JSON.parse(storagePsic);
      changePsic(psic);
    }
    var storageAuth = localStorage.getItem("auth");
    if (storageAuth) {
      var auth = storageAuth;
      if (auth === "true") {
        changeAuth(true);
      }
    }
  }, []);

  return <Routes />;
}

export default App;
