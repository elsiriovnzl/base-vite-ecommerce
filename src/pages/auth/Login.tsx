import { Alert, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { loginUser, user } from "../../redux/Products/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const dispatch = useAppDispatch();
  const userInSession = useAppSelector(user);
  const router = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usernameError = !data.username.trim();
    const passwordError = !data.password.trim();

    setErrors({
      username: usernameError,
      password: passwordError,
    });

    if (data.username && data.password) {
      dispatch(loginUser({ username: data.username, password: data.password }));
    }
    userInSession && router("/");
  };
  return (
    <div className="flex  w-full h-full items-center justify-center">
      <div className=" flex items-center justify-center h-full p-3 flex-col">
        <div className="flex flex-col  flex-1 h-full items-center justify-center gap-7">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  flex-1 h-full items-center justify-center gap-7"
          >
            <div className="w-[400px]">
              <h2 className="text-xl w-[150px] ">Inicio de Sesion</h2>
            </div>
            <div className="w-[400px]">
              <TextField
                id="username-input"
                label="Username"
                name="username"
                variant="filled"
                error={errors.username}
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="w-[400px]">
              <TextField
                id="password-input"
                label="password"
                name="password"
                variant="filled"
                type="password"
                className="w-full"
                error={errors.password}
                onChange={handleChange}
              />
            </div>
            {errors.username ||
              (errors.password && (
                <Alert severity="error">
                  Todos los campos son obligatorios
                </Alert>
              ))}
            <p>¿Has olvidado tu contraseña?</p>
            <Button type="submit" variant="contained" className="w-52">
              Iniciar sesion
            </Button>
          </form>
        </div>
        <hr className="w-full bg-black h-[1.9px]" />
        <div className=" flex flex-col items-center justify-center w-full h-[250px]">
          <FaGoogle size={40} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
