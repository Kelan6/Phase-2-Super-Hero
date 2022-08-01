import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = ({ onSearchChange, searchTerm }) => {
  return (
    <div class="topnav">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/categories">Categories</Link>
      <Search onSearchChange={onSearchChange} searchTerm={searchTerm} />
    </div>
  );
};

export default NavBar;

// <div class="topnav">
//   <a class="active" href="#home">
//     Home
//   </a>
//   <a href="#favorites">Favorites</a>
//   <a href="#categories">Categories</a>
{
  /* <input
  type="text"
  id="search"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => onSearchChange(e.target.value)}
/>; */
}
// </div>;
