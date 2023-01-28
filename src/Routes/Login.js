import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const useremail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";
  const userpassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin123";

  function handleSubmit(e) {
    e.preventDefault();
    console.log("useremail", useremail);
    console.log("userpassword", userpassword);
    if (pass === userpassword && email === useremail) {
      alert("login sucessful");
      navigate("/dashboard");
    } else {
      alert("Incorrect email or Password");
    }
  }
  const Register = () => {
    navigate("/register");
  };

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>Login page</h1>
        <form>
          <input
            placeholder="Enter Your email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <input
            placeholder="Enter Your Password"
            onChange={(e) => setPass(e.target.value)}
            type="text"
          />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p>
          Create Account <button onClick={Register}>Create Account</button>{" "}
        </p>
      </Suspense>
    </div>
  );
};

export default Login;
