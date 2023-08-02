import React from "react";
import classes from "./bj-input.module.css";

const BjInput = (props) => {
  return <input className={classes.input} {...props} />;
};

export default BjInput;
