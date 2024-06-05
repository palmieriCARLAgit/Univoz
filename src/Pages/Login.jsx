import React from 'react'
import FormularioLogin from '../Components/FormularioLogin'
import FormularioRegistro from '../Components/FormularioRegistro'
import UnivozImage from "../assets/UniVoz-removebg-preview.png";
import WhatsAppImage from "../assets/WhatsApp_Image_2024-05-15_at_23.56.22__3_-removebg-preview.png";
import {useRef} from "react";
import './Login.css'

const Login = () => {
    const LoginForm = useRef(null)
    const RegisterForm = useRef(null)

    const handleCambioLogin = () => {
        LoginForm.current.style.left = "50%";
        LoginForm.current.style.opacity = "1";
        RegisterForm.current.style.left = "-50%";
        RegisterForm.current.style.opacity = "0";

    }

    const handleCambioRegister = () => {
        LoginForm.current.style.left = "150%";
        RegisterForm.current.style.left = "50%";
        LoginForm.current.style.opacity = "0";
        RegisterForm.current.style.opacity = "1";

    }

  return (
      <>
      <div id="BodyLogin">
          <div className="container-fluid">
              <div className="col col-1">
                  <div className="image-layer">
                      <img src={UnivozImage} className="form-image-main fi-2"/>
                      <img src={WhatsAppImage}
                           className="form-image-1 fi-1"/>
                      <img src={WhatsAppImage}
                           className="form-image-2 fi-1"/>
                      <img src={WhatsAppImage}
                           className="form-image-3 fi-1"/>
                  </div>
              </div>
              <div className="col col-2">
                  <div className="btn-box">
                      <button type="button" onClick={handleCambioLogin } className="btn btn-1" id="login">Inicia Sesión</button>
                      <button onClick={handleCambioRegister} className="btn btn-2" id="register">Regístrate</button>
                  </div>
                  <FormularioLogin LoginForm={LoginForm}/>
                  <FormularioRegistro RegisterForm={RegisterForm}/>
              </div>
          </div>
        </div>
      </>
  )
}

export default Login