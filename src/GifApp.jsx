import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const [cantidad, setCantidad] = useState("");

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const newCantidad = (cant) => {
    setCantidad(cant);
  };

  const deleteCategory = (categ) => {
    const result = categories.filter((c) => {
      return c != categ;
    });
    setCategories(result);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={onAddCategory} onNewCantidad={newCantidad} />

      {categories.map((c) => (
        <GifGrid
          key={c}
          category={c}
          deleteCategory={deleteCategory}
          cantidad={cantidad}
        />
      ))}
    </>
  );
};
