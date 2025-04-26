import { useContext } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { AppContext } from "./components/context/AppContext";

function App() {
  const { input, showSidebar, activeTodoItem, handleKeyDown, filteredTodos } =
    useContext(AppContext);

  return (
    <div className="container">
      <FilterPanel></FilterPanel>
      <div className="main-content">
        <input
          ref={input}
          className="input-new-task"
          type="text"
          name="add-new-task"
          placeholder="Thêm công việc"
          onKeyDown={handleKeyDown}
        ></input>
        <div>
          {filteredTodos.map((item) => (
            <TodoItem
              todoId={item.id}
              name={item.name}
              isImportant={item.isImportant}
              isCompleted={item.isCompleted}
              key={item.id}
            ></TodoItem>
          ))}
        </div>

        {showSidebar && <Sidebar key={activeTodoItem.id}></Sidebar>}
      </div>
    </div>
  );
}

export default App;
