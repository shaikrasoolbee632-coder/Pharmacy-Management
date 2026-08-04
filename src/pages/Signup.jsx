import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/users", user);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  }

  return (
  <div className="signup-container">

    <div className="welcome-section">
      <div className="welcome-badge">
        💊 Smart Healthcare Platform
      </div>

      <h1>
        Create Your <span>PharmaTrack</span> Account
      </h1>

      <p>
        Join PharmaTrack today and securely manage medicines,
        monitor inventory and simplify your pharmacy operations.
      </p>
    </div>

    <div className="form-container">
      <h2>Pharmacy Signup</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Signup
        </button>

      </form>

    </div>

  </div>
);
}

export default Signup;