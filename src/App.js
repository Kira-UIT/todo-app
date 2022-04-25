import "./App.scss";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h2 style={{marginBottom: "1rem"}}>To-do List</h2>
        <div className="text">Enter text into the input field to add items to your list.</div>
        <div className="text">Click the "X" to remove the item from your list.</div>
        <div className="text">Click the item to mark it as complete.</div>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
