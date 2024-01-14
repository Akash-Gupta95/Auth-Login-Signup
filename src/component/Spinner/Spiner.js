import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spiner = () => {
  const [count, setCount] = useState(3);
  const Location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: Location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, Location]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <h2 className="Text-center ">redirecting to you in {count} second</h2>
      <div className="spinner-border m-5 " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spiner;
