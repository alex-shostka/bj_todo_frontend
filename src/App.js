import React, { useState, useEffect } from "react";
import "./styles/App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./commonUI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
