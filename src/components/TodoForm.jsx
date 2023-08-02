import React, { useState } from "react";

import BjButton from "../commonUI/button/bj-button";
import BjInput from "../commonUI/input/bj-input";

const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({
    username: "",
    useremail: "",
    todotext: "",
  });

  const addNewTodo = (event) => {
    event.preventDefault();
    const newTodo = { ...todo };
    create(newTodo);
    setTodo({ username: "", useremail: "", todotext: "" });
  };

  return (
    <form>
      <BjInput
        value={todo.username}
        onChange={(event) => setTodo({ ...todo, username: event.target.value })}
        type="text"
        placeholder="Введите имя для оботражения"
      />
      <BjInput
        value={todo.useremail}
        onChange={(event) =>
          setTodo({ ...todo, useremail: event.target.value })
        }
        type="text"
        placeholder="Введите email"
      />
      <BjInput
        value={todo.todotext}
        onChange={(event) => setTodo({ ...todo, todotext: event.target.value })}
        type="text"
        placeholder="Введите текст"
      />
      <BjButton onClick={addNewTodo}>Создать</BjButton>
    </form>
  );
};

export default TodoForm;
