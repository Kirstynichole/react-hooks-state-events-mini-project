import { React, useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({categories, selectedCategory, handleSelectedCategory}) {
  // const [selectedClass, setSelectedClass] = useState("");
  // const handleClass = (category) => {
  //   setSelectedClass( category === selectedClass ? "" : category);
  //   // onCategoryChange(category);
  //   setSelectedCategory(category)
  // }

  const categoryButtons = categories.map(category => (
    <button key={category} onClick={(e) => handleSelectedCategory(category)} className={category === selectedCategory ? "selected" : null}>{category}</button>
  
  ))
  return (
      <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
