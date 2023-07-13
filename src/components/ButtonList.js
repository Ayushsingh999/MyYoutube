import React from "react";
import Button from "./Button";

const ButtonList = (props) => {
  const list = [
    "All",
    "games",
    "songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "cricket",
  ];

  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
