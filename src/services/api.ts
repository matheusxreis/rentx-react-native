import axios from "axios";


export const api = axios.create({
 baseURL: "http://192.168.0.65:3333"
   //baseURL: "http://192.168.1.190:3333"
});