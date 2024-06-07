import './Estructura.css';
const Sidebar2 = () => {

    return (
        <>

            <div className="card sidebar-der mb-2 mt-4">
                <div className="card-body ">
                    <h5 className="card-title tituloCard"><i className="fa-solid fa-briefcase"></i> Empleabilidad</h5>
                    <ul>
                        <li>
                            <h6 className="card-text">Para encontrar ofertas laborales, usa el tags empleo, el tags te ayudara a filtrar la información que necesites, mostrando un resultado eficaz en nuestro blogs.</h6>
                        </li>

                        <li>
                            <h6 className="card-text"><a href="https://www.google.com/search?q=INCLUSI%C3%93N+ACTIVA&rlz=1C1GCEA_enCL1102CL1103&oq=avisos+de+trabajo+para+personas+discapacitadas&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDczNDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwixk66ZrPCFAxUsAbkGHeV5AJEQudcGKAF6BAgQEBo&sxsrf=ACQVn0-rRfZptEedncQE-nj9Lxz0QgD_0g:1714700247867#fpstate=tldetail&htivrt=jobs&htitab=&htidocid=QBc5ByV4oHlCojaYAAAAAA%3D%3D"
                            style={{ color: "purple" }} > Ofertas Laborales</a></h6>
                        </li>
                        <li>
                            <h6 className="card-text"><a href="https://inclusionactiva.cl/ina/ofertas-laborales/"
                            style={{ color: "purple" }} > Ofertas Inclusivas</a></h6>
                        </li>

                    </ul>
                    <h5 className="card-title tituloCard"><i className="fa-regular fa-star"></i> Neurodiversidad</h5>
                    <ul>
                        <li>
                            <h6 className="card-text">La neurodiversidad considera la diversidad de capacidades
                                cognitivas, emocionales y sensoriales.</h6>
                        </li>
                        <li>
                            <h6 className="card-text">Destaca la importancia de la inclusión, igualdad y el respeto,
                                independiente del neurotipo de cada ser humano.</h6>
                        </li>
                    </ul>
                    <h5 className="card-title tituloCard"><i className="fa-regular fa-star"></i> Neurodivergencia</h5>
                    <ul>
                        <li>
                            <h6 className="card-text">Se refiere directamente a personas con patrones neurológicos
                                que se desvían de la norma socialmente establecida.</h6>
                        </li>
                        <li>
                            <h6 className="card-text">Señala que las características de procesamiento de información
                                pueden ser diferentes a las consideradas “promedio”.</h6>
                        </li>
                        <li>
                            <h6 className="card-text">Destaca la relevancia de cambiar la perspectiva predominante
                                sobre las diferencias neurológicas, fomentando la inclusión.</h6>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Sidebar2