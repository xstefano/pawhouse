import React, { useState } from 'react';
import './Login.css'; // Asegúrate de crear este archivo CSS

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://petheme.azurewebsites.net/api/usuarios/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contrasena: password }),
      });

      if (response.ok) {
        onLogin();
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img className="logo" src="/Logo.jpeg" alt="Logo" />
      </div>
      <div className="form-container">
        <h2>BIENVENIDO A PAW HOUSE</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">INGRESAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;