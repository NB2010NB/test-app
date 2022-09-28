import "./TestProps.css";
import React from "react";

function TestProps(props) {
  return (
    <div className="test-props">
      <h1 data-testId="firstName">{props.firstName}</h1>
    </div>
  );
};

export default TestProps;
