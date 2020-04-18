import React from "react";
import { Navlink, NavLink } from "react-router-dom";

const Home = () => (
  <div className="home">
    <p>Welcome to Recipe Pirate *Description Here*</p>
    <NavLink to="/recipes">Search for Recipe Booty</NavLink>
  </div>
);

export default Home;
