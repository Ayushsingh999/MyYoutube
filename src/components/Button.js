import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-5 m-5 bg-gray-200 rounded-lg ">
        {" "}
        {props.name}
      </button>
    </div>
  );
};

export default Button;
