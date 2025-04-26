import './Category.css';

const CATEGORY_ITEMS = [
  {
    id: 'personal',
    label: 'Personal'
  },
  {
    id: 'company',
    label: 'Company',
  },
  {
    id: 'travel',
    label: 'Travel'
  },
  {
    id: 'idea',
    label: 'Idea'
  }
]

export default function Category({ todoList }) {
  const countByCategories = todoList.reduce((acc, item) => {
    let newAcc = {...acc}
    if (item.isIdea) {
      newAcc = {...newAcc, idea: newAcc.idea + 1}
    }
    if (item.isTravel) {
      newAcc = {...newAcc, travel: newAcc.travel + 1}
    }
    if (item.isCompany) {
      newAcc = {...newAcc, company: newAcc.company + 1}
    }
    if (item.isPersonal) {
      newAcc = {...newAcc, personal: newAcc.personal + 1}
    }
    return newAcc;
  }, {personal: 0, company: 0, travel: 0, idea: 0});

  return (
    <>
      <p>Categories</p>
      {CATEGORY_ITEMS.map((item) => {
        return (
          <div className="category" key={item.id}>
            <div className="category-item">
              <p className="category-name">{item.label}</p>
              <p>{countByCategories[item.id]}</p>
            </div>
          </div>
        );
      })}
    </>
  )
}