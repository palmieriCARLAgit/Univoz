import React from 'react';
import NavBar from "../Components/NavBar.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import Sidebar2 from "../Components/Sidebar2.jsx";

const Plantilla = () => {
    return (
        <>
            <NavBar/>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-2 col-md-3 col-xl-2 col-xxl-2 sidebar-display">
                        <Sidebar/>
                    </div>
                    <div className="col-12 col-md-5 col-xl-7 col-xxl-8">
                        <Outlet/>
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 col-xxl-2">
                        <Sidebar2/>
                    </div>
                </div>
            </div>




        </>
    );
};

export default Plantilla;
