// src/pages/RegisterPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    navigate("/login");
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      backgroundImage: 'url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#2c83c3',
      marginBottom: '20px',
      fontFamily: '"Pacifico", cursive'
    },
    title: {
      color: '#333',
      marginBottom: '25px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    input: {
      padding: '12px 15px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '16px',
      outline: 'none',
      transition: 'border 0.3s'
    },
    button: {
      backgroundColor: '#2c83c3',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '10px'
    },
    loginText: {
      marginTop: '20px',
      color: '#666'
    },
    link: {
      color: '#2c83c3',
      textDecoration: 'none',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>MakeMyRoute</div>
        <h2 style={styles.title}>Create Account</h2>
        
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
          
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        
        <p style={styles.loginText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;