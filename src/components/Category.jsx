import { useContext, useMemo } from "react";
import "./Category.css";
import { CATEGORY_ITEMS } from "./constants";
import { AppContext } from "./context/AppContext";

export default function Category() {
  const { categoryId, setCategoryId, todoList } = useContext(AppContext);

  const countByCategories = useMemo(() => {
    return todoList.reduce(
      (acc, item) => {
        let newAcc = { ...acc };
        switch (item.category) {
          case "personal":
            newAcc = { ...newAcc, personal: newAcc.personal + 1 };
            break;
          case "company":
            newAcc = { ...newAcc, company: newAcc.company + 1 };
            break;
          case "travel":
            newAcc = { ...newAcc, travel: newAcc.travel + 1 };
            break;
          case "idea":
            newAcc = { ...newAcc, idea: newAcc.idea + 1 };
            break;
          default:
            newAcc = { ...newAcc };
        }
        return newAcc;
      },
      { personal: 0, company: 0, travel: 0, idea: 0 }
    );
  }, [todoList]);

  return (
    <>
      <p>Categories</p>
      {CATEGORY_ITEMS.map((item) => {
        return (
          <div
            className={`category ${categoryId === item.id ? "selected" : ""}`}
            onClick={() => setCategoryId(item.id)}
            key={item.id}
          >
            <div className="category-item">
              <p className="category-name">{item.label}</p>
              <p>{countByCategories[item.id]}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
