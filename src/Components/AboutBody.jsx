import "./About.css";

function AboutBody() {
  // {
  //   const nav= document.querySelector("#nav");
  //   const abrir= document.querySelector("#abrir")
  //   const cerrar= document.querySelector("#cerrar");
  //   abrir.addEventListener("click", ()=>{
  //     nav.classList.add("visible")
      
  //   })
  //  cerrar.addEventListener("click", ()=>{
  //     nav.classList.remove("visible")
  // };

  

  return (
    
    <>
      <div id="tittleQS1">
        <h1 id="tittleQS">Quiénes Somos</h1>
      </div>

      <div className="cardQS mb-3">
        <div className="row g-0 alinea">
        <div  id="fotoQS"  className="col-md-4 fotoQS">
            <img
              src="https://i.pinimg.com/564x/6e/aa/0e/6eaa0e43e0dc0e1f9bad0b6cdfdf9c17.jpg"
              className="img-fluid "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className=" mv card-body">
              <h5 className="card-title">Misión</h5>
              <p className="card-text pQS">
                Crear una comunidad en la que se respete y valore nuestra forma
                de ser y neurodiversidades generando conciencia y comprensión
                sobre la neurodivergencia mediante historias y anecdotas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardQS mb-3" >
        <div className="row g-0 alinea">
            <div className="col-md-8">
                <div className=" mv card-body">
                    <h5 className="card-title">Visión</h5>
                    <p className="card-text pQS">La visión de la Plataforma de UNIVOZ es ser una foro de referencia para
                        una sociedad inclusiva de
                        forma que encuentren en nuestra pagina motivos que multipliquen los efectos positivos de
                        la
                        acción social gracias nuestra red de visibilización cognitiva.</p>
                </div>
            </div>
            <div id="fotoQS2" className="col-md-4 ">
                <img src="https://i.pinimg.com/564x/58/34/b1/5834b1cf52c1ec79b001bbd55a77f08f.jpg"
                    className="img-fluid imgabout2" alt="..."/>
            </div>

        </div>
    </div>

      <div className="cardQS cont1">
        <h6 className="subtittleQS">
          "Somos creyentes de que la neurodiversidad refleja la riqueza humana."
        </h6>
        <div id="video">
          <iframe
            width="760"
            height="600"
            src="https://www.youtube.com/embed/BlZalyECc34?si=F82z8MxryYV0XVc-&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default AboutBody;
