import React from 'react';
import { useLocation } from 'react-router-dom';
import './Estructura.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <nav className="sidebar">
            <div className="menu">
                <ul>
                    <li
                        className={`list-group-item ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        <a href="/"><i className="fas fa-house"></i> Inicio</a>
                    </li>
                    <li
                        className={`list-group-item ${location.pathname === '/normativas' ? 'active' : ''}`}
                    >
                        <a href="/normativas"><i className="fas fa-circle-info"></i> Información</a>
                    </li>
                    <li
                        className={`list-group-item ${location.pathname === '/quienes-somos' ? 'active' : ''}`}
                    >
                        <a href="/quienes-somos"><i className="fas fa-person"></i> Quiénes Somos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
