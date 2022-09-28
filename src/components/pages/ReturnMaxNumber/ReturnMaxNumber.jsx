import "./ReturnMaxNumber.css";
import React from "react";

function ReturnMaxNumber(num,num1) {
  return (
    <div className="return-max-number">
      <h1>ReturnMaxNumber</h1>
      <h2>
        {Math.max(num,num1)}
        </h2>
    </div>
  );
}

export default ReturnMaxNumber;
