import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Loginpage.css";
import Navbar from "./Navbar";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Here you would typically make an API call to your backend
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the token in localStorage
        localStorage.setItem("token", data.token);
        navigate("/"); // Redirect to homepage after successful login
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default Loginpage;
