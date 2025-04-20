import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header
        onDarkModeClick={handleDarkModeClick}
        isDarkMode={isDarkMode}
      />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
