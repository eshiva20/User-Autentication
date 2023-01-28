import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("contact");
    localStorage.removeItem("password");
    setTimeout(function () {
      navigate("/login");
    }, 2000);
  };

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>DashBoard page</h1>
        <button onClick={logout}>LogOut</button>
      </Suspense>
    </div>
  );
};

export default DashBoard;
