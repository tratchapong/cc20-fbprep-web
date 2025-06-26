import axios from "axios";

export const authApi = axios.create({
  baseURL : "http://localhost:8899/api/auth"
})

// export const apiRegister = async (value) => {
//   return await authApi.post("/register", value);
// };
// export const apiLogin = async (value) => {
//   return await axios.post("/login", value);
// };