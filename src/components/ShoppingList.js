import React from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, selectedCategory, onCategoryChange }) {
  const displayedItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <ul>
        {displayedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
