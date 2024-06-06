function Carrusel() {
    return (
      <div className="container cont1">
        <h6>
          {" "}
          "Somos creyentes de que la neurodiversidad refleja la riqueza humana."
        </h6>
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
          <div className="carousel-item active video">
              <iframe
              //   width="760"
                height="290"
          
                src="https://www.youtube.com/embed/BlZalyECc34?si=F82z8MxryYV0XVc-&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="carousel-item ">
              <img
                src="https://i.pinimg.com/564x/d6/8d/2e/d68d2e60729ee7efcb5a70c00328956f.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            
            <div className="carousel-item">
              <img
                src="https://i.pinimg.com/564x/bb/9b/36/bb9b36369f4c2fea7d64d5f1d3e29f27.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.pinimg.com/564x/8a/5a/89/8a5a8995e6b18346cba0e4b421eaddfd.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  export default Carrusel;