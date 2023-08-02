import React from "react";
import classes from "./bj-button.module.css";

const BjButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default BjButton;
