
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>    
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
