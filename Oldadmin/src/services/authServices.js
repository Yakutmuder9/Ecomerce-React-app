import axios from "axios";
import { baseUrl } from "./baseUrl";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}api/auth/login`, userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const refreshTokens = async () => {
  const response = await axios.post(`${baseUrl}api/auth/refresh-token`);
  const { accessToken } = response.data;

  return accessToken;
};

export const logout = async () => {
  const response = await axios.post("/logout");
  console.log(response);
  return response.data;
};

const authService = {
  login,
  logout,
};

export default authService;
