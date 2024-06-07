import './Estructura.css';
const Sidebar = () => {

    return (
        <>

            <nav className="sidebar">
                <div className="menu">
                    <ul>
                        <li className="list-group-item active"><a href="/"><i className="fas fa-house"></i> Inicio</a></li>
                        <li className="list-group-item "><a href="/normativas"><i className="fas fa-circle-info"></i> Información</a>
                        </li>
                        <li className="list-group-item"><a href="/quienes-somos"><i className="fas fa-person"></i> Quiénes Somos</a></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Sidebar