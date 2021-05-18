
import React, {useCallback, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import { useDispatch } from "react-redux";
import { setMobile } from "./store/Mobile/actions";

function App() {
  const dispatch = useDispatch();

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

  return (
      <Routes />
  );
}

export default App;