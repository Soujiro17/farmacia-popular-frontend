import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { getLoggedIn, logIn as logInFunc } from "../app/api/auth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const axiosPrivate = useAxiosPrivate();

  const logIn = useMutation((data) => logInFunc({ values: data }), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setAuth({ token: data.token, user: data.user });
      toast.success("Sesión iniciada con éxito");
    },
    onError: () => toast.error("Error al iniciar sesión"),
  });

  const getUser = useQuery(
    ["auth"],
    () => getLoggedIn({ axiosInstance: axiosPrivate }),
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        setAuth({ token: data.token, user: data.user });
      },
    },
  );

  const values = useMemo(
    () => ({ auth, setAuth, getUser, logIn }),
    [auth, getUser, logIn],
  );

  if (getUser.isLoading) return <p>Loading...</p>;

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
