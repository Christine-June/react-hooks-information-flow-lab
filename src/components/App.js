import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items"; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;