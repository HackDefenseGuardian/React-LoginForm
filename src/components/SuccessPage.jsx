import React from 'react';
import '../styles.css';

const SuccessPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="login-box">
        <h1 className="text-center">¡Inicio de sesión exitoso!</h1>
        <p className="text-center">Usuario y contraseña correctos.</p>
      </div>
    </div>
  );
};

export default SuccessPage;
