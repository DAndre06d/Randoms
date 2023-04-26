import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div class="navbar-brand">
          <a href="#">Randoms</a>
        </div>
        <label for="menu-toggle" class="menu-icon">
          &#9776;
        </label>
        <ul class="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
