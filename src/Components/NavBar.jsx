import React from 'react';
import './MenuBurguer.css';
import { useEffect,useState } from 'react';

//     {
//     const nav= document.querySelector("#nav");
//     const abrir= document.querySelector("#abrir")
//     const cerrar= document.querySelector("#cerrar");
//     abrir.addEventListener("click", ()=>{
//       nav.classList.add("visible")
      
//     })
//    cerrar.addEventListener("click", ()=>{
//       nav.classList.remove("visible")
//   };  

function Navbar() {

    
    const [isVisible, setIsVisible] = useState(false);
  
    const ClickOpen = () => {
      setIsVisible(true);
    };
    
  
    const ClickClose = () => {
      setIsVisible(false);
    };
    

       
    return (
        <>
       
        <header id="headerIdNavbar" >
            <div className=" col navbar position">
            <button  id="abrir-menu" onClick={ClickOpen}><i className="bi bi-list"></i></button> {/*  abrir menu---------->este es el estado inicial*/}
            <a href="#" className=" col-2 logo">UNIVOZ</a>
            {/* <i  id='bi' class="bi bi-plus-lg"></i> */}
            <input id='searchBurguer' type="text" className="search-bar" placeholder=""/>
            <i id="lupaIcon" class="fa-solid fa-magnifying-glass"></i>
           
           
                <nav id="navbarBurguer" className={`col-10 nav  ${isVisible ? 'visible '  :'' }`}>   
                 {/* <input type="text" className="search-bar" placeholder="Buscar en Univoz..."/>  */}
                    <button id="cerrar-menu" onClick={ClickClose}><i className="bi bi-x"></i></button>     {/*  cerrar menu*/}
                   
                   
                    
                    <ul id="BurguerLinks" className="nav-list ">
                <li   className="list-group-item hoverActiveCursor BurguerLinks"><a href="#create-post"><i className="fas fa-house"></i> Inicio</a></li>
                        <li   className="list-group-item hoverActiveCursor BurguerLinks "><a href="/normativas"><i className="fas fa-circle-info"></i> Información</a>
                        </li>
                        <li  className="list-group-item hoverActiveCursor BurguerLinks"><a href="/quienes-somos"><i className="fas fa-person"></i> Quiénes Somos</a></li>
                        <li   className="list-group-item hoverActiveCursor BurguerLinks"><a href="/"><i className="bi bi-box-arrow-in-right"></i>Iniciar sesión</a></li>
                    </ul>
                </nav> 
            </div>
        </header>
</>

        // <div className="row">
        //     <div className="col-12">
        //         <nav className="navbar">
        //             <a href="#" className="logo">UNIVOZ</a> {/*Logo*/}
        //             <input type="text" className="search-bar" placeholder="Buscar en Univoz..." /> {/* Search bar */}
        //             <ul className="nav"> { /*Navigation items list*/}
        //                 <li className="nav-item" style={{ paddingTop: '5px', paddingRight: '15px' }}>
        //                     <a href="/Login" className="create-post btn">Iniciar sesión</a> {/* Navigation item (Login) */}
        //                 </li>
        //             </ul>
        //         </nav>

        //     </div >
        // </div >
    );

}
export default Navbar

