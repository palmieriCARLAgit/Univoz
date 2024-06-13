
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";

import Publicaciones from "./Components/Publicaciones.jsx";
import Plantilla from "./Pages/Plantilla.jsx";
import Normativas from "./Pages/Normativas.jsx";
import About from "./Pages/About.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
          <Route path='/' element={<Plantilla/>}>
              <Route index element={<Publicaciones/>}/>
              <Route path='/normativas' element={<Normativas/>} />
              <Route path='/quienes-somos' element={<About/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
