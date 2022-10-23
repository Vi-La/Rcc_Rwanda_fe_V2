import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/v1/";
const BASE_URL= "https://rcc-rwanda1.herokuapp.com/api/v1/"

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

export default axios.create({
  baseURL: BASE_URL,
});
