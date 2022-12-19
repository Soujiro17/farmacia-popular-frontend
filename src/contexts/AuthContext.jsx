import { createContext, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { axiosPublic } from "../services/axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const logIn = async (values) => {
    const { data } = await axiosPublic
      .post("/encargado/authenticate", {
        values,
      })
      .catch((err) => toast.error(err.message));

    localStorage.setItem("token", data.token);
    setAuth(data.token);
    toast.success("Sesión iniciada con éxito");
  };

  const values = useMemo(
    () => ({
      auth,
      logIn,
    }),
    [auth],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
