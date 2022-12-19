import { useEffect } from "react";
import { axiosPrivate } from "../services/axios";

const useAxiosPrivate = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const newConfig = config;

        if (!config.headers.Authorization) {
          newConfig.headers["x-access-token"] = token;
        }

        return newConfig;
      },
      (err) => Promise.reject(err),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;

        if (err?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          prevRequest.headers["x-access-token"] = token;
          return axiosPrivate(prevRequest);
        }

        return Promise.reject(err);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
