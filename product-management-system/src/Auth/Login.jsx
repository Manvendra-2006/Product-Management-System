// Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({loginhandle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "10px",
    marginTop: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple console login (replace with API call)
    console.log("Email:", email);
    console.log("Password:", password);
    loginhandle(email,password)
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <Link to="/signup">New User?</Link>
      </form>
    </div>
  );
};

export default Login;