import React, {useCallback, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import { useDispatch } from "react-redux";
import { setMobile } from "./store/Mobile/actions";
import { setPsic } from "./store/Psicologo/actions";
import { setAuth } from "./store/Auth/actions";

function App() {
  const dispatch = useDispatch();
  const changePsic = useCallback((psic) => dispatch(setPsic(psic)), [dispatch]);
  const changeAuth = useCallback((auth) => dispatch(setAuth(auth)), [dispatch]);

  const changeMobile = useCallback((mobile) => dispatch(setMobile(mobile)), [
    dispatch,
  ]);

   useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 960) {
        changeMobile(true);
      } else {
        changeMobile(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  }); 
  
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

  return (
      <Routes />
  );
}

export default App;
