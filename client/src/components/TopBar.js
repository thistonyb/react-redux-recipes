import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <span
        className="pirateFlag flag1"
        role="img"
        aria-label="spinning jolly roger flag"
      >
        🏴‍☠️
      </span>
      <span
        className="pirateFlag flag2"
        role="img"
        aria-label="spinning jolly roger flag"
      >
        🏴‍☠️
      </span>
      <h1 className="title">Recipe Pirate</h1>
    </div>
  );
};
export default TopBar;
