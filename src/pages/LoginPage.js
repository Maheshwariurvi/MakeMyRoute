// src/pages/LoginPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      alert("✅ Login Successful");
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      if (err.response) {
        alert(err.response.data.msg || "Login failed");
      } else if (err.request) {
        alert("No response from server. Please check backend.");
      } else {
        alert("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // 🎨 Styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f8ff",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      padding: "30px",
      width: "100%",
      maxWidth: "380px",
      textAlign: "center",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#2c83c3",
      marginBottom: "20px",
      fontFamily: '"Pacifico", cursive',
    },
    title: {
      color: "#333",
      marginBottom: "25px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px 15px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "16px",
      outline: "none",
      transition: "border 0.3s",
    },
    button: {
      backgroundColor: "#2c83c3",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
      marginTop: "10px",
    },
    buttonDisabled: {
      backgroundColor: "#a0c4de",
      cursor: "not-allowed",
    },
    registerText: {
      marginTop: "20px",
      color: "#666",
    },
    link: {
      color: "#2c83c3",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>MakeMyRoute</div>
        <h2 style={styles.title}>Login to Your Account</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
