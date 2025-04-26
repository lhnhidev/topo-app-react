import { useMemo, useRef, useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [categoryId, setCategoryId] = useState("");

  const [todoList, setTodoList] = useState([
    {
      id: "1",
      name: "Đi học",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: "personal",
    },
    {
      id: "2",
      name: "Chơi game",
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
      category: "company",
    },
    {
      id: "3",
      name: "Mua sắm",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: "personal",
    },
  ]);

  const [showSidebar, setShowSidebar] = useState(false);

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [selectedFilterItemId, setSelectedFilterItemId] = useState("all");

  const [searchText, setSearchText] = useState("");

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
          category: "personal",
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

  const filteredTodos = useMemo(() => {
    return todoList.filter((item) => {
      if (!item.name.toLocaleLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }

      if (categoryId && item.category != categoryId) {
        return false;
      }

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
    });
  }, [todoList, selectedFilterItemId, searchText, categoryId]);

  const countByTodoList = useMemo(() => {
    return todoList.reduce(
      (acc, item) => {
        let newAcc = { ...acc };
        if (item.isCompleted) {
          newAcc = { ...newAcc, completed: newAcc.completed + 1 };
        }
        if (item.isDeleted) {
          newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
        }
        if (item.isImportant) {
          newAcc = { ...newAcc, important: newAcc.important + 1 };
        }
        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  return (
    <AppContext.Provider
      value={{
        categoryId,
        setCategoryId,
        todoList,
        setTodoList,
        showSidebar,
        activeTodoItemId,
        selectedFilterItemId,
        searchText,
        setShowSidebar,
        setActiveTodoItemId,
        setSelectedFilterItemId,
        setSearchText,
        input,
        activeTodoItem,
        handleKeyDown,
        handleShowSidebar,
        handleChangeTodoItem,
        handleCompleteCheckboxChange,
        filteredTodos,
        countByTodoList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
