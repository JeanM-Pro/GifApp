import React, { useState } from "react";

export const AddCategory = ({ onNewCategory, onNewCantidad }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");

  const onInputchange = (e) => {
    setInputValue(e.target.value);
  };
  const onInputNumberchange = (e) => {
    setInputNumberValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    onNewCantidad(inputNumberValue.trim());
    setInputValue("");
    setInputNumberValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputchange}
      />
      <input
        type="number"
        min="5"
        max="50"
        placeholder="Cantidad"
        required
        value={inputNumberValue}
        onChange={onInputNumberchange}
      />
      <button type="Submit">Buscar</button>
    </form>
  );
};
