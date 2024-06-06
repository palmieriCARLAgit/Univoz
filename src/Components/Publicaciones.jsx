function createData(
    id,
    imagen,
    usuario,
    titulo,
    descripcion,
    hashtags,
  
  ) {
    return { id, imagen, usuario, titulo, descripcion, hashtags};
  }
  
  const publicacionesCard = [
    createData(
      1,
      "https://www.svgrepo.com/show/420323/avatar-avocado-food.svg",
      "Coniconeja",
      "Soy adulta y hace poco me enteré de que tenía TDAH",
      '🔍✨ ¡Hola a todos! Quiero compartir algo personal con ustedes queacabo de descubrir y que ha sido un verdadero punto de inflexión en mi vida. Después de años de luchar con lo que pensaba que eran solo "distracciones normales", finalmente comprendí que podría tener TDAH en la edad adulta. 💡✍️ Ahora estoy en el proceso de aprender más sobre el TDAH en adultos y cómo puedo manejar mejor mis síntomas. Quiero animar a cualquiera que esté pasando por algo similar a que no tenga miedo de buscar ayuda y apoyo. ¡No estás solo en esto!Compartir mi experiencia es un paso hacia adelante en mi viaje de autodescubrimiento y autocuidado. Si alguien más se siente identificado con esto, ¡me encantaría saber de ustedes! Juntos podemos compartir experiencias y apoyarnos mutuamente en este camino.',
      ["TDA", "ADULTO", "INCLUSIÓN"]
    ),
    createData(
      2,
      "https://www.svgrepo.com/show/420329/anime-away-face.svg",
      "Nati0017",
      "¿Cómo se desenvuelve el autismo en el deporte?",
      "El deporte les brinda mayor condiciones físicas además de que los ayuda a mejorar las habilidades motoras, mejoran la comunicación, la atención, la resolución de problemas de comportamiento y las habilidades académicas. La natación es uno de los deportes más completos y de bajo impacto, lo que lo hace ideal para niños con autismo. Ayuda a mejorar problemas sensoriales, proporciona una sensación relajante y desarrolla fuerza física, resistencia y coordinación 🏊🏃",
      ["ESCUELAS", "DEPORTES", "AUTISMO"],
    ),
    createData(
      3,
      "https://www.svgrepo.com/show/420320/avatar-coffee-cup.svg",
      "Mr.Burns",
      "Las máquinas touch de pago con tarjeta no consideran a las personas con discapacidad visual",
      "Es una máquina NO ACCESIBLE para personas con discapacidad visual, al ser touch las personas con esta y otras discapacidades (motoras), al no ver y tampoco tener control de movimientos precisos deben entregar sus claves a terceros, incapacitando, vulnerando/ violando derechos a una vida autónoma e independiente de las personas con discapacidad.😡",
      ["DISCAPACIDAD VISUAL", "ACCESIBILIDAD", "MOTRICIDAD"],
      
  
    ),
    createData(
      4,
      "https://www.svgrepo.com/show/420345/fighter-luchador-man.svg",
      "ReginaGeorge",
      "✨Necesitamos un mundo más inclusivo✨",
      "Al abrazar la diversidad en todas sus formas, construimos sociedades más resilientes, innovadoras y justas, donde cada individuo tiene la oportunidad de prosperar y contribuir plenamente.🌈",
      ["SOCIEDAD INCLUSIVA","DIFERENCIAS"],
    ),
  ];

const Publicaciones = () => {
  return (
    <>
    {publicacionesCard.map((publicacion, index) => (
        <div key={index}>
          <div className="card cardprincipal" id="tarjePrincipal" >
            <div className="card-body" id="tarjeta">
              <img src={publicacion.imagen} alt="" width="40px" height="40px" />
              <span className="usuario ms-2">{publicacion.usuario}</span>
              <h5 className="card-title mt-2">{publicacion.titulo}</h5>
              <p className="card-text mt-3">{publicacion.descripcion}</p>
              <br />
              {publicacion.hashtags.map((hashtag, index) => (
              <span key={index} className="badge rounded-pill">{hashtag}</span>
            ))}
            </div>
          </div>
          <br />
        </div>
      ))}
    
    </>
  );
};

export default Publicaciones;