import React from "react";
import "./TopBar.css";
/**
 * TopBar renders a smaller version of the Home component's graphics
 * that are displayed at the top of the "page" with the gingham stripe
 * and spinning pirate flag animation.
 */
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
