import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = ({ onSearchChange, searchTerm, onHomeClick }) => {
  function handleClick() {
    onHomeClick()
    onSearchChange("")
  }
  return (
    <div className="topnav">
      <Link onClick={handleClick} to="/">Home</Link>
      <Link onClick={handleClick} to="/favorites">Favorites</Link>
      <Link onClick={handleClick} to="/sortby">Sort By</Link>
      <Link to="/MYO">Make Your Own</Link>
      <Search onSearchChange={onSearchChange} searchTerm={searchTerm} />
    </div>
  );
};

export default NavBar;

