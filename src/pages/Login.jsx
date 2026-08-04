import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get("/users");

      const user = response.data.find(
        (u) =>
          u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          u.password.trim() === password.trim()
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Successful");

        navigate("/medicines");

        window.location.reload();
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
  <div className="login-container">

    <div className="welcome-section">
      <div className="tag">💊 Smart Healthcare Platform</div>

      <h1>
        Welcome to <span>PharmaTrack</span>
      </h1>

      <p>
        Securely manage medicines, monitor inventory,
        organize prescriptions and simplify your pharmacy
        operations with one smart platform.
      </p>
    </div>

    <div className="login-card">
      <h2>Pharmacy Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>

  </div>
);
}

export default Login;