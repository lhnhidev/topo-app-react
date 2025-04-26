import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: '1',
      name: "Đi học",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: '2',
      name: "Chơi game",
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: '3',
      name: "Mua sắm",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
    },
  ]);

  const [showSidebar, setShowSidebar] = useState(false);

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [selectedFilterItemId, setSelectedFilterItemId] = useState("all");

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

  const filteredTodos = todoList
    .filter((item) => {
      switch (selectedFilterItemId) {
        case "all":
          return true;
        case "important":
          return item.isImportant;
        case "completed":
          return item.isCompleted;
        case "deleted":
          return item.isDeleted;
        default:
          return true;
      }
    })
    .map((item) => (
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
      <FilterPanel
        selectedFilterItemId={selectedFilterItemId}
        setSelectedFilterItemId={setSelectedFilterItemId}
        todoList={todoList}
      ></FilterPanel>
      <div className="main-content">
        <input
          ref={input}
          className="input-new-task"
          type="text"
          name="add-new-task"
          placeholder="Thêm công việc"
          onKeyDown={handleKeyDown}
        ></input>
        <div>{filteredTodos}</div>

        {showSidebar && (
          <Sidebar
            key={activeTodoItem.id}
            todo={activeTodoItem}
            setShowSidebar={setShowSidebar}
            handleChangeTodoItem={handleChangeTodoItem}
          ></Sidebar>
        )}
      </div>
    </div>
  );
}

export default App;
