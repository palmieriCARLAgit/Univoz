import Normativas from "./Normativas";
import SideBar from "./sidebar";
import SideBar2 from "./sidebar2";

const Columnas = () => {
    return (

        <div className="row">
            <div className="col-2 col-md-3 col-xl-2 col-xxl-2 sidebar-display">
                <SideBar/>
            </div>

            <div className="col-12 col-md-5 col-xl-7 col-xxl-8">
                <Normativas />
                </div>

            <div className="col-12 col-md-4 col-xl-3 col-xxl-2">
                <SideBar2/>
            </div>
        </div>
    );
}
export default Columnas