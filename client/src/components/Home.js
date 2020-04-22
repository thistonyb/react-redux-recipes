import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="ginghamHeader">
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
    <p className="welcomeTitle">Ahoy Matey!</p>
    <p>
      Avast ye, an' listen up! As part of me crew, an' per articles of our
      agreement...Tis' yer job t' make sure yer Cap'n nay get the doldrums. So,
      off ye search through me plundered recipes keep'n a weather eye open!
      Leave a comment an' let yer Cap'n know which of me booty shines n' which
      tis a black spot n' me hoard.
    </p>
    <NavLink to="/recipes" className="searchLink">
      Search Recipe Booty
    </NavLink>
  </div>
);

export default Home;
