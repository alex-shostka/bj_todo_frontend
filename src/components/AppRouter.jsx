import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Todos from "../pages/Todos";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Todos />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate replace to="/todos" />} />
    </Routes>
  );
};

export default AppRouter;
