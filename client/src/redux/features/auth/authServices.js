import axios from "axios";
import { baseUrl } from "../../../utiles/baseUrl";

export const login = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}api/auth/login`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Login faild");
  }
};

export const refreshTokens = async () => {
  const response = await axios.post(`${baseUrl}api/auth/refresh-token`);
  const { accessToken } = response.data;

  return accessToken;
};
const authService = {
  login,
};

export default authService;
