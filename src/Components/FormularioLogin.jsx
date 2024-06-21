import React, { useState , useEffect} from 'react';
import Swal from 'sweetalert2';
import 'boxicons/css/boxicons.min.css';
import './Formulario.css'
import {useNavigate} from "react-router-dom";
import useLogin from '../api/useLogin';

const FormularioLogin = ({ LoginForm }) => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [flagLogin, setFlaglogin] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {mutate} = useLogin();

  useEffect(() => {
    console.log("estoy usando useEffect");
    setUserName('');
    setPass('');
    setFlaglogin(0);
  }, [flagLogin]);

  const handleLogin = () => {
    if (userName && pass) {

     
      mutate({userName,pass},{
        onSuccess: (data)=>{
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
              showConfirmButton: false,
              timer: 1500
            });
          }
        }).then((result) => {

          if (result && result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
          navigate('/');
        }).catch((error) => {
          console.error("Error:", error);
        });
        setFlaglogin(1);
        },
        onError:(error)=>{
          Swal.fire({
            title: 'Usuario o contraseña incorrecta!',
            icon: 'error',
            showConfirmButton: false,
            timer: 3500
          });
        }

      })
     
        
      
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
        <div className="form-title" id='tituloFormulario'>
          <span>Inicia Sesión</span>
        </div>
        <div className="form-inputs" id='cajaNombre'>
          <div className="input-box" id='iconsblancos'>
            <input
              type="text"
              className="cajatext"
              id="usuario"
              placeholder="Nombre del usuario"
              onChange={(e) => inputUsername(e.target.value)}
              value={userName}
            />
            <i className='bx bx-user icon'></i>
          </div>
          <div className="input-box" id='iconsblancos'>
            <input
              type={showPassword ? "text" : "password"}
              className="cajatext"
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
          <div className="input-box" id='iconsblancos'>
            <button className="input-submit" id= "iniciaLogin" type="submit" onClick={handleLogin}>
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