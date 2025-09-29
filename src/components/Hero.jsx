import React from 'react';

const Hero = () => {
    return (
        <><div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{
          overflow: 'hidden'
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active h-100">
            <img
              src="/img/simpsons.jpeg"
              alt="Slide 1"
              className="d-block w-100 h-100"
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
                backgroundColor: '#000'
              }} />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '1rem',
                borderRadius: '10px'
              }}
            >
              <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Las mejores películas
              </h1>
              <p className="lead text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              </p>
            </div>
          </div>

          <div className="carousel-item h-100">
            <img
              src="/img/conjuro.jpg"
              alt="Slide 2"
              className="d-block w-100 h-100"
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
                backgroundColor: '#000'
              }} />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '1rem',
                borderRadius: '10px'
              }}
            >
              <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                La mejor calidad
              </h1>
              <p className="lead text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              </p>
            </div>
          </div>

          <div className="carousel-item h-100">
            <img
              src="/img/mente.jpg"
              alt="Slide 3"
              className="d-block w-100 h-100"
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
                backgroundColor: '#000'
              }} />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '1rem',
                borderRadius: '10px'
              }}
            >
              <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                El mejor precio
              </h1>
              <p className="lead text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              </p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div><div class="text-bg-success p-3 fw-bolder text-center fs-4">Todas las películas en un solo sitio</div></> 
    );
};

export default Hero;