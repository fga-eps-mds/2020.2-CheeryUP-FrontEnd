import axios from "axios";


const api = axios.create({
  baseURL: "http://0.0.0.0:https://cheeryup-api.herokuapp.com/",

});

export default api;
