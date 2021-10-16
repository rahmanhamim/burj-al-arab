import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
 const { user, logOut } = useAuth();
 return (
  <div
   style={{
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
   }}
   className="header"
  >
   <nav className="nav">
    <ul>
     <li>
      <img className="logo" src={logo} alt="" />
     </li>
     <li>
      <Link to="/home">Home</Link>
     </li>

     <li>
      <Link className="btn-book" to="/book">
       Book
      </Link>
     </li>
     {user.email ? (
      <button onClick={logOut} className="login-out-btn">
       Logout
      </button>
     ) : (
      <li>
       <Link to="/login">Login</Link>
      </li>
     )}
    </ul>
    {user.email ? (
     <div className="user-info-header">
      <img
       style={{ width: "40px", borderRadius: "50px" }}
       src={user.photoURL}
       alt=""
      />
      <span>{user.email}</span>{" "}
     </div>
    ) : (
     ""
    )}
   </nav>
   <div className="title-container">
    <h1>Burj Al Arab</h1>
    <h2>A global icon of Arabian luxury</h2>
   </div>
  </div>
 );
};

export default Header;
