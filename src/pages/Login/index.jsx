import React, { useState } from "react";
import Input from "../../shared/Input";
import useAuth from "../../hooks/useAuth";
import {
  Card,
  CardLeft,
  CardRight,
  Container,
  FormLogin,
  LoginButton,
  UserImg,
} from "./style";

const Login = () => {
  const [user, setUser] = useState({
    rut: "",
    password: "",
  });

  const { logIn } = useAuth();

  const handleValues = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    logIn(user);
  };

  return (
    <Container>
      <Card>
        <CardLeft>
          <FormLogin onSubmit={onSubmit}>
            <UserImg src="/user.png" alt="login" />
            <Input
              placeholder="RUT"
              name="rut"
              onChange={handleValues}
              value={user.rut}
              required
            />
            <Input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleValues}
              value={user.password}
              required
            />
            <LoginButton type="submit">Iniciar sesión</LoginButton>
          </FormLogin>
        </CardLeft>
        <CardRight />
      </Card>
    </Container>
  );
};

export default Login;
