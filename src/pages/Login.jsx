import React, { useContext, useState } from "react";
import BjInput from "../commonUI/input/bj-input";
import BjButton from "../commonUI/button/bj-button";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();

    await axios
      .post("http://172.16.33.128:5001/api/user/login", { name, password })
      .then(({ data }) => {
        if (data.token) {
          setIsAuth(true);
          localStorage.setItem("token", data.token);
          navigate("/todos");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div>
      <h1>Войти как админ</h1>
      <form onSubmit={login}>
        <BjInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Введите логин"
        />
        <BjInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Введите пароль"
        />
        <BjButton>Войти</BjButton>
      </form>
    </div>
  );
};

export default Login;
