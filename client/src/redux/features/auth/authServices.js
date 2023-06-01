import axios from "axios";
import { baseUrl } from "../../../utiles/baseUrl";

export const login = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}api/auth/login`, userData);
    const { token } = response.data;
    console.log(token);
    return token;
  } catch (error) {
    throw new Error("Login faild");
  }
};

export const refreshTokens = async () => {};
const authService = {
  login,
};

export default authService;
