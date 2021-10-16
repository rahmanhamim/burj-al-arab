import React from "react";
import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
 const { signInUsingGoogle } = useAuth();
 // const location = useLocation();
 // console.log(location.state?.from);

 return (
  <div className="login-container">
   <div>
    <h2>Login</h2>
    <form>
     <input type="email" name="" placeholder="enter email" required />
     <br />
     <input type="password" name="" required /> <br />
     <input className="btn-regular" type="submit" value="Submit" />
    </form>
    <button onClick={signInUsingGoogle} className="btn-regular">
     Google Sign In
    </button>
   </div>
  </div>
 );
};

export default Login;
