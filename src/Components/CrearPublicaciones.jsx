import React from "react";
import ModalPublicaciones from "./ModalPublicaciones";

const CrearPublicaciones = () => {
  return (
    <>
      <div className="col-12 col-md-5 col-xl-7 col-xxl-8">
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
      </div>

      <ModalPublicaciones />
    </>
  );
};

export default CrearPublicaciones;
