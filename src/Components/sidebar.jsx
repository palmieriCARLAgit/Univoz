const SideBar = () => {

    return (
        <>
            <div className="row">
                <div className="col-2 col-md-3 col-xl-2 col-xxl-2 sidebar-display">
                    <nav className="sidebar"  >
                        <div className="menu">
                            <ul>
                                <li className="list-group-item"><a href="#"><i class="fas fa-house"></i> Inicio</a></li>
                                <li className="list-group-item active"><a href="#"><i class="fas fa-circle-info"></i> Información</a>
                                </li>
                                <li className="list-group-item"><a href="#"><i class="fas fa-person"></i> Quiénes Somos</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar