import React from 'react';

const Home = ({ onLogout }) => {
  return (
    <div>
      <h1>Bienvenido a Paw House</h1>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;