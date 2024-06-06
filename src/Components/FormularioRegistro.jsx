import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'boxicons/css/boxicons.min.css';
import './Formulario.css'

const FormularioRegistro = ({ RegisterForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [flagRegistro, setFlagRegistro] = useState(0);

  useEffect(() => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setShowPassword(false);
    setShowPassword2(false);
    setFlagRegistro(0);
  }, [flagRegistro]);

  const handleRegistrar = () => {
    if (!username || !email || !password || !password2) {
      Swal.fire({
        title: 'Error!',
        text: 'Debe ingresar datos para registrarse',
        icon: 'error',
        showConfirmButton: false,
        timer: 2500
      })
      return;
    }

    if (password !== password2) {
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        showConfirmButton: false,
        timer: 4500
      })
      return;
    }

    if (!isValidEmail(email.trim())) {
      Swal.fire({
        title: 'Error!',
        text: 'Ingresar correo electrónico válido',
        icon: 'error',
        showConfirmButton: false,
        timer: 3500
      })
      return;
    }

    if (!isValidUsuario(username)) {
      Swal.fire({
        title: 'Error!',
        text: 'Ingresa un nombre de usuario válido. Debe tener al menos 3 caracteres y no contener caracteres especiales.',
        icon: 'error',
        showConfirmButton: false,
        timer: 3500
      });
      return;
    }

    if (!isValidPassword(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.',
        icon: 'error',
        showConfirmButton: false,
        timer: 5500
      });
      return;
    }

    Swal.fire({
      title: 'Usuario registrado correctamente!',
      icon: 'success',
      html: `
              <h2>Datos enviados desde el formulario</h2>
              <h4 style="text-align='left'">Nombre de usuario: ${username}</h4>
              <h4 style="text-align='left'">Nombre de correo: ${email}</h4>
              <h4 style="text-align='left'">Nombre de contraseña: ${password}</h4>
          `,
      showConfirmButton: false,
      timer: 5500
    })
    setFlagRegistro(1)
  }

  const isValidUsuario = (username) => {
    const regex = /^[a-zA-Z0-9_]{3,}$/;
    return regex.test(username);
  }

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const inputUserName = (usuario) => {
    setUsername(usuario)
  }

  const inputEmail = (correoE) => {
    setEmail(correoE)
  }

  const inputpassword = (clave) => {
    setPassword(clave)
  }

  const inputpassword2 = (clave2) => {
    setPassword2(clave2)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    console.log('aaa')
    setShowPassword2(!showPassword2);
  };

  return (
    <>
      <div className="register-form" ref={RegisterForm}>
        <div className="form-title" id='tituloFormulario'>
          <span>Regístrate</span>
        </div>
        <div className="form-inputs" id='cajaNombre'>
          <div className="input-box" id='iconsblancos'>
            <input type="text" className="cajatext" id="username" placeholder="Nombre del usuario" onChange={(e) => inputUserName(e.target.value)} value={username} />
            <i className='bx bx-user icon'></i>
          </div>
          <div className="input-box" id='iconsblancos'>
            <input type="email" className="cajatext" id="email" placeholder="Correo electronico" onChange={(e) => inputEmail(e.target.value)} value={email} />
            <i className="bx bx-envelope icon"></i>
          </div>
        <div className="input-box" id='iconsblancos'>
          <input
            type={showPassword? 'text' : 'password'}
            className="cajatext"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => inputpassword(e.target.value)}
            value={password}
          />
          <i className={showPassword? 'bx bx-hide' : 'bx bx-show-alt'} onClick={toggleShowPassword}></i>
        </div>

        <div className="input-box" id='iconsblancos'>
          <input
            type={showPassword2? 'text' : 'password'}
            className="cajatext"
            id="password2"
            placeholder="Repita Contraseña"
            onChange={(e) => inputpassword2(e.target.value)}
            value={password2}
            
          />
          <i className={showPassword2? 'bx bx-hide' : 'bx bx-show-alt'} onClick={toggleShowPassword2}></i>
        </div>
          <div className="input-box" id='iconsblancos'>
            <button className="input-submit btn-reg" id= "iniciaLogin"  onClick={handleRegistrar}>
              <span>Registrarse</span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioRegistro;