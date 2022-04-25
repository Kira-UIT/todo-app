import React from 'react';
import "./Todo.scss";
import buttonClose from "../../assets/images/close.svg";

const Todo = (props) => {
  const {item, toggleHandler, removeTodoHandler} = props;
  return (
    <div className={`todo-list__todo ${item.isCompleted ? "completed" : ""}`} onClick={toggleHandler}>
      <div className="todo-list__todo__name">
        {`${item.todo} ${item.isCompleted ? "(completed)" : ""}`}
      </div>
      <div className="todo-list__todo__remove-btn">
        <img src={buttonClose} alt="" onClick={removeTodoHandler}/>
      </div>
    </div>
  )
}

export default Todo