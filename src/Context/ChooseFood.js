import React, { useState, createContext } from "react";
import menuItemsData from "../data";
export const ChooseFood = createContext();
const allCategories = [
  "Все",
  ...new Set(menuItemsData.map((item) => item.type)),
];
export const ChooseFoodProvider = ({ children }) => {
  const [menuItem, setMenuItem] = useState(menuItemsData);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Все") {
      setMenuItem(menuItemsData);
      return;
    }
    const menuItems = menuItemsData.filter((item) => item.type === category);
    setMenuItem(menuItems);
  };
  const foodData = { categories, activeCategory, filterItems, menuItem };
  return <ChooseFood.Provider value={foodData}>{children}</ChooseFood.Provider>;
};
