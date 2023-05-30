import React, { useState } from "react";
import CustomButton from "../components/customButton/CustomButton";
import "./counter.style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const divideHandler = () => {
    setCount(count / 2);
  };

  const substractHandler = () => {
    setCount(count - 10);
  };

  const incrementHandler = () => {
    setCount(count + 10);
  };

  const multiplyHandler = () => {
    setCount(count * 2);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-box">
        <CustomButton onClickHandler={divideHandler} text="/2" />
        <CustomButton onClickHandler={substractHandler} text="-10" />
        <h1>{count}</h1>
        <CustomButton onClickHandler={incrementHandler} text="+10" />
        <CustomButton onClickHandler={multiplyHandler} text="*2" />
      </div>

      <CustomButton onClickHandler={resetHandler} text="reset" />
    </div>
  );
};

export default Counter;
