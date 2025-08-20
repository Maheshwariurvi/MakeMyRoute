// src/pages/RegisterPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("✅ Registered Successfully!");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg);
      } else {
        alert("⚠️ Something went wrong. Please check your server.");
        console.error("Register Error:", err);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>MakeMyRoute</div>
        <h2 style={styles.title}>Create Your Account</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    backdropFilter: "blur(6px)",
  },
  logo: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2c83c3",
    marginBottom: "15px",
    fontFamily: '"Pacifico", cursive',
  },
  title: {
    color: "#333",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s",
  },
  button: {
    backgroundColor: "#2c83c3",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    marginTop: "10px",
  },
  footerText: {
    marginTop: "20px",
    color: "#666",
  },
  link: {
    color: "#2c83c3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

// Hover effects
styles.input[":focus"] = {
  borderColor: "#2c83c3",
  boxShadow: "0 0 5px rgba(44,131,195,0.4)",
};
styles.button[":hover"] = {
  backgroundColor: "#236ca6",
  transform: "translateY(-2px)",
};

export default RegisterPage;
