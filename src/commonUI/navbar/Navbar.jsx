import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BjButton from "../../commonUI/button/bj-button";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      {isAuth ? (
        <BjButton onClick={logout}>Выйти</BjButton>
      ) : (
        <BjButton onClick={login}>Авторизация</BjButton>
      )}
    </div>
  );
};

export default Navbar;
