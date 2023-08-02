import React, { useState, useEffect } from "react";
import "../styles/App.css";

import TodoList from "../components/TodoList.jsx";
import TodoForm from "../components/TodoForm";
import BjSelect from "../commonUI/select/bj-select";
import TodoService from "../API/TodoService";
import { getPageCount } from "../utils/pages";
import Pagination from "../commonUI/pagination/Pagination";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(3);
  const [page, setPage] = useState(1);

  const notifyCreatedTodo = (text) => toast(text);

  const create = async (newTodo) => {
    await TodoService.createTodo(newTodo).then((res) => {
      if (res.message) {
        alert(res.message);
      } else {
        setTodos([...todos, res]);
        notifyCreatedTodo("Задача создана успешно");
      }
    });
  };

  const changeAndSaveTodo = async (updateTodo) => {
    await TodoService.createTodo(updateTodo).then((updatedTodo) => {
      const nextTodos = todos.map((shape) => {
        if (updateTodo.id === updatedTodo.id) {
          return {
            ...shape,
            isChanged: (shape.isChanged = updatedTodo.isChanged),
            isComplete: (shape.isComplete = updatedTodo.isComplete),
          };
        }
      });
      setTodos(nextTodos);
      notifyCreatedTodo("Задача обновлена успешно");
    });
  };

  const sortTodo = async (sort) => {
    setSelectedSort(sort);
    const todos = await TodoService.getAll(limit, page, sort);
    setTodos([...todos.data.rows]);
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchTodos();
  }, [page]);

  async function fetchTodos() {
    const todos = await TodoService.getAll(limit, page);
    setTodos(todos.data.rows);
    const totalCount = todos.data.count;
    setTotalPages(getPageCount(totalCount, limit));
  }

  return (
    <div className="app">
      <TodoForm create={create} />

      <div>
        <BjSelect
          value={selectedSort}
          onChange={sortTodo}
          options={[
            { value: "username", name: "по имени пользователя" },
            { value: "useremail", name: "по email" },
            { value: "isComplete", name: "по статусу" },
          ]}
        />
      </div>

      <TodoList changeAndSaveTodo={changeAndSaveTodo} todo={todos} />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <ToastContainer />
    </div>
  );
}

export default Todos;
