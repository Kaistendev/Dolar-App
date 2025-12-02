import axios from "axios";

const API_URL = "https://ve.dolarapi.com/v1/dolares"; 

export const getDolarOficial = ()=> axios.get(`${API_URL}/oficial`);

export const getDolarParalelo = ()=> axios.get(`${API_URL}/paralelo`);
