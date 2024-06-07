import React from 'react';
import './Estructura.css';

function Navbar() {
    return (

        <div className="row">
            <div className="col-12">
                <nav className="navbar">
                    <a href="/" className="logo">UNIVOZ</a> {/*Logo*/}
                    <input type="text" className="search-bar" placeholder="Buscar en Univoz..." /> {/* Search bar */}
                    <ul className="nav"> { /*Navigation items list*/}
                        <li className="nav-item" style={{ paddingTop: '5px', paddingRight: '15px' }}>
                            <a href="/Login" className="create-post btn">Iniciar sesión</a> {/* Navigation item (Login) */}
                        </li>
                    </ul>
                </nav>

            </div >
        </div >
    );

}
export default Navbar