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
    <div style={{ marginTop: "50px" }}>
      <p
        style={{
          fontSize: "20px",
          color: "#8d8d8d",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Categories
      </p>
      {CATEGORY_ITEMS.map((item) => {
        return (
          <div
            className={`category ${categoryId === item.id ? "selected" : ""}`}
            onClick={() => setCategoryId(item.id)}
            key={item.id}
          >
            <div className="category-item">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: "16px",
                }}
              >
                <span style={{ marginRight: "5px" }}>📂</span>
                <p style={{ lineHeight: "1.7" }}>{item.label}</p>
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                {countByCategories[item.id]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
