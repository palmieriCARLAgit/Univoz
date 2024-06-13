import React from 'react';
import './MenuBurguer.css';
import { useEffect,useState } from 'react';

  


function Navbar() {

    const [isVisible, setIsVisible] = useState(false);
//   funciones para abrir y cerrar el menu hambuerguesa
    const ClickOpen = () => {
      setIsVisible(true);
    };
    
    const ClickClose = () => {
      setIsVisible(false);
    };
 
    // intento de funcion para cambiar el bg de los href hamburguesa
    function hoverActive(){
        const select=document.querySelector("li")
        select.style.backgroundColor = '#d6c1e7';
        body.style.borderLeft = '4px solid #6a1b9a';
    }
    

       
    return (
        <>
       {/* navbar adaptado para que incluya el menu hambuerguesa en un mismo codigo */}
        <header id="headerIdNavbar" >
            <div className=" col navbar position">
            <button  id="abrir-menu" onClick={ClickOpen}><i className="bi bi-list"></i></button> {/*  abrir menu---------->este es el estado inicial*/}
            <a href="/" className=" col-2 logo logoext">UNIVOZ</a>
            <input id='searchBurguer' type="text" className="search-bar" placeholder="Buscar.."/>
            <a id='create-post' href="/Login" className="create-post btn">Iniciar sesión</a> {/* Navigation item (Login) */}
               
               {/* menu invisible */}
                <nav id="navbarBurguer" className={`col-10 nav  ${isVisible ? 'visible '  :'' }`}>  
                   <div>
                     <button id="cerrar-menu" onClick={ClickClose}><i className="fa-solid fa-x"></i></button>
                     <ul id="BurguerLinks" className="nav-list ">
                        <a href="/" className=" logo">UNIVOZ</a> 
                        <li   className="list-group-item hoverActiveCursor BurguerLinks"><a href="/"><i className="fas fa-house"></i> Inicio</a></li>
                        <li   className="list-group-item hoverActiveCursor BurguerLinks "><a href="/normativas"><i className="fas fa-circle-info"></i> Información</a> </li>
                        <li className="list-group-item hoverActiveCursor BurguerLinks"><a href="/quienes-somos"><i className="fas fa-person"></i> Quiénes Somos</a></li>
                        <li    className="list-group-item hoverActiveCursor BurguerLinks"><a href="/Login"><i className="fa-solid fa-right-to-bracket"></i>Iniciar sesión</a></li>
                    </ul>
                    </div>
                </nav> 
            </div>
        </header>
</>


    );

}
export default Navbar



