import React from "react";
import './Publicaciones.css'
import ModalPublicaciones from "./ModalPublicaciones";

const CrearPublicaciones = () => {
  return (
    <>

        <div className="container" id="cajabotoncrear">
          <button
            id="boton-crear"
            type="button"
                className="btn btn-light mt-3 mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever=""
          >
            Crear publicación +
          </button>
        </div>

      <ModalPublicaciones />
    </>
  );
};

export default CrearPublicaciones;
