import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";


const getPublicContent = () => {
  return axios.get(API_URL + "all");
};


 const getUserBoard = () => {
  console.log("Callinging USERS from users.service")
  return axios.get(API_URL + "user", { headers: authHeader() });
};


  const getModeratorBoard = () => {
    console.log("CAlling MOD from users.service")
  return axios.get(API_URL + "mod", { headers: authHeader() });
};


const  getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   getPublicContent,
   getUserBoard,
   getModeratorBoard,
   getAdminBoard,
 }
