import React from "react";

const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>;
    </div>
  );
};

export default Greeting;
