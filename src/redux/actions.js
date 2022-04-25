export const addTodo = (todo) => {
  return {
    type: "addTodo",
    payload: todo,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "toggleTodoStatus",
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "deleteTodo",
    payload: id,
  };
};