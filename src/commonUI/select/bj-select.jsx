import React from "react";
// import classes from "./bj-input.module.css";

const BjSelect = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        Cортировка по
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default BjSelect;
