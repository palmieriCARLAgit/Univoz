import React, { useState , useEffect} from 'react';
import Swal from 'sweetalert2';
import 'boxicons/css/boxicons.min.css';
import './Formulario.css'

const FormularioLogin = ({ LoginForm }) => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [flagLogin, setFlaglogin] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log("estoy usando useEffect");
    setUserName('');
    setPass('');
    setFlaglogin(0);
  }, [flagLogin]);

  const handleLogin = () => {
    if (userName && pass) {
      if (userName === 'admin' && pass === 'admin') {
        let timerInterval;
        Swal.fire({
          title: "Iniciando sesión!",
          html: "Espere unos segundos!.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            if (timer) {
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            }
          },
          willClose: () => {
            clearInterval(timerInterval);
            Swal.fire({
              title: 'Inicio de sesión correctamente!',
              icon: 'success',
              html: `
                <h2>Datos enviados desde el formulario</h2>
                <h4 style="text-align='left'">Nombre de usuario: ${userName}</h4>
                <h4 style="text-align='left'">Contraseña: ${pass}</h4>
              `,
              showConfirmButton: false,
              timer: 5500
            });
          }
        }).then((result) => {
          if (result && result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        }).catch((error) => {
          console.error("Error:", error);
        });
        setFlaglogin(1);
      } else {
        Swal.fire({
          title: 'Usuario o contraseña incorrecta!',
          icon: 'error',
          showConfirmButton: false,
          timer: 3500
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Debe ingresar datos para iniciar sesión',
        icon: 'error',
        showConfirmButton: false,
        timer: 2500
      });
    }
  };

  const inputUsername = (usuario) => {
    setUserName(usuario);
  };

  const inputpassword = (clave) => {
    setPass(clave);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-form" ref={LoginForm}>
        <div className="form-title">
          <span>Inicia Sesión</span>
        </div>
        <div className="form-inputs">
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              id="usuario"
              placeholder="Nombre del usuario"
              onChange={(e) => inputUsername(e.target.value)}
              value={userName}
            />
            <i className='bx bx-user icon'></i>
          </div>
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              id="contrasena"
              placeholder="Contraseña"
              onChange={(e) => inputpassword(e.target.value)}
              value={pass}
            />
            <i className='icon' onClick={toggleShowPassword}/>
            <i className={showPassword? 'bx bx-hide' : 'bx bx-show-alt'} onClick={toggleShowPassword}></i>
            
          </div>
          <div className="forget-pass">
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <div className="input-box">
            <button className="input-submit" type="submit" onClick={handleLogin}>
              <span>Iniciar sesión</span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioLogin ;