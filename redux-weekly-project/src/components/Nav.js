import React from "react";

const Nav = () => {
  const price = 1;
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>About</li>
        <li>Contact</li>
        <li>{price}</li>
      </ul>
    </nav>
  );
};

export default Nav;
