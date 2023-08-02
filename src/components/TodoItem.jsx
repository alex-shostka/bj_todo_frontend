import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import BjButton from "../commonUI/button/bj-button";

const TodoItem = (props) => {
  const { isAuth } = useContext(AuthContext);
  const [todo, setTodo] = useState(props.todo);

  return (
    <div className="todo">
      <div className="todo_content">
        <div>
          <div>Кто создал:</div>
          <div>email:</div>
          <div>Сообщение:</div>
          <div>Статус:</div>
        </div>
        <div>
          <div>{props.todo.username}</div>
          <div>{props.todo.useremail}</div>
          {isAuth ? (
            <input
              value={todo.todotext}
              onChange={(e) => setTodo({ ...todo, todotext: e.target.value })}
            />
          ) : (
            <div>{props.todo.todotext}</div>
          )}
          {todo.isComplete ? (
            <div
              className={
                todo.isComplete ? "text-decoration" : "text-no-decoration"
              }
            >
              Выполнено
            </div>
          ) : (
            <div>Не выполнено</div>
          )}
          {todo.isChanged ? (
            <div className="text-changed">
              Изменено администратором в{" "}
              {new Date(todo.updatedAt).toLocaleTimeString()}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {isAuth ? (
        <div className="todo__buttons">
          <input
            checked={todo.isComplete}
            onChange={(e) => setTodo({ ...todo, isComplete: e.target.checked })}
            type="checkbox"
          />
          <BjButton onClick={() => props.changeAndSaveTodo(todo)}>
            Сохранить
          </BjButton>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TodoItem;
