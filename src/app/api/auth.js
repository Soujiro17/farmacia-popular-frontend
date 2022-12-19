import { axiosPublic } from "../../services/axios";

export const logIn = async ({ values }) => {
  const { data } = await axiosPublic.post("/encargado/authenticate", values);

  return data;
};

export const getLoggedIn = async ({ axiosInstance }) => {
  const { data } = await axiosInstance.get("/encargado/get");

  localStorage.setItem("token", data.token);

  return data;
};
