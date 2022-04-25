const initialState = [
  {
    id: 1,
    todo: "Learn Reactjs",
    isCompleted: true,
  },
  {
    id: 2,
    todo: "Learn Typescript",
    isCompleted: false,
  },
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default rootReducer;
