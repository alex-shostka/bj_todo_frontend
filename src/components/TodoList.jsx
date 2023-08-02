import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  if (!props.todo.length) {
    return <h2 className="title">Задач нет</h2>;
  }
  return (
    <div>
      <h1 className="title">Список TODO</h1>
      {props.todo.map((todo) => {
        return (
          <TodoItem
            changeAndSaveTodo={props.changeAndSaveTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
