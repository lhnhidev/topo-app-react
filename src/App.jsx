import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đi học", isImportant: false, isCompleted: true },
    { id: 2, name: "Chơi game", isImportant: true, isCompleted: false },
    { id: 3, name: "Mua sắm", isImportant: false, isCompleted: false },
  ]);

  const [showSidebar, setShowSidebar] = useState(false);

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const input = useRef();

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      setTodoList([
        ...todoList,
        {
          id: crypto.randomUUID(),
          name: value,
          isCompleted: false,
          isImportant: false,
        },
      ]);
      input.current.value = "";
    }
  };

  const handleCompleteCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleChangeTodoItem = (todoId, newInfo) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          ...newInfo,
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleShowSidebar = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const todos = todoList.map((item) => (
    <TodoItem
      todoId={item.id}
      name={item.name}
      isImportant={item.isImportant}
      isCompleted={item.isCompleted}
      key={item.id}
      handleCompleteCheckboxChange={handleCompleteCheckboxChange}
      handleShowSidebar={handleShowSidebar}
    ></TodoItem>
  ));

  return (
    <div className="container">
      <input
        ref={input}
        className="input-new-task"
        type="text"
        name="add-new-task"
        placeholder="Thêm công việc"
        onKeyDown={handleKeyDown}
      ></input>
      <div>{todos}</div>

      {showSidebar && (
        <Sidebar
          key={activeTodoItem.id}
          todo={activeTodoItem}
          setShowSidebar={setShowSidebar}
          handleChangeTodoItem={handleChangeTodoItem}
        ></Sidebar>
      )}
    </div>
  );
}

export default App;
