import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[contact,setContact]=useState("");
    const[password,setPassword]=useState("");

    const handleRegister=()=>{
       if(!name || !email ||!contact || !password){
        alert("Enter All details")
       }else{
        alert("user Registered Sucessfully")
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("contact",contact)
        localStorage.setItem("password",password)
        setName("")
        setEmail("")
        setEmail("")
        setPassword("")
       }
    }

    const login=()=>{
        navigate("/login")
    }

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Your Name" type="text" />
        <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Your Email" type="email" />
        <input onChange={(e)=>setContact(e.target.value)} value={contact} placeholder="Enter Your Contact Number" type="text" />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Set Password" type="text" />
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
      <p>Already Have an Account <button onClick={login}>Login</button></p>
    </div>
  );
};

export default Register;
