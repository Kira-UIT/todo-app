import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.scss";
import buttonAdd from "../../assets/images/add.png";
import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodoStatus, deleteTodo } from "../../redux/actions";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const todoList = useSelector(state => state);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setTodoName(e.target.value);
  };

  const addTodoHandler = () => {
    dispatch(addTodo({ id: uuidv4(), todo: todoName, isCompleted: false }))
  };

  const toggleCompleted = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  console.log(todoName);
  return (
    <div className="todo-list">
      <div className="todo-list__add-todo">
        <input
          type="text"
          className="todo-list__input"
          value={todoName}
          onChange={inputChangeHandler}
        />
        <img
          src={buttonAdd}
          alt=""
          className="todo-list__btn"
          onClick={addTodoHandler}
        />
      </div>
      <div className="todo-list__todos">
        {todoList.map((item, index) => (
          <Todo
            item={item}
            key={index}
            toggleHandler={() => toggleCompleted(item.id)}
            removeTodoHandler={() => removeTodoHandler(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
