import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Tu API Key de OMDb
    const API_KEY = 'b03c445f'; 
    const API_URL_BUSQUEDA = `http://www.omdbapi.com/?s=movie&apikey=${API_KEY}`;

    const fetchPeliculas = async () => {
      try {
        const responseBusqueda = await fetch(API_URL_BUSQUEDA);
        const dataBusqueda = await responseBusqueda.json();

        if (dataBusqueda.Response === 'True') {
          const detallePeticiones = dataBusqueda.Search.map(async (pelicula) => {
            const detalleResponse = await fetch(`http://www.omdbapi.com/?i=${pelicula.imdbID}&apikey=${API_KEY}`);
            return detalleResponse.json();
          });
          const peliculasConDetalles = await Promise.all(detallePeticiones);
          setPeliculas(peliculasConDetalles);
        } else {
          throw new Error(dataBusqueda.Error || 'No se encontraron películas.');
        }
      } catch (err) {
        setError(err.message);
        console.error("Error al cargar datos:", err);
      } finally {
        setCargando(false);
      }
    };
    fetchPeliculas();
  }, []);

  if (cargando) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <div
    className="bg-light" 
    style={{ width: "100%", maxWidth: "100vw", margin: 0, padding: 0, }}>
      <Header />
      <Hero />
      <Servicios />
      
      <section id="peliculas" className="w-100 my-5 px-5">
        <h2 className="text-center mb-4">Películas Populares</h2>
        <div className="row g-4 justify-content-center">
          {peliculas.map(pelicula => (
            <div key={pelicula.imdbID} className="col-12 col-md-4">
              <div className="card shadow h-100 d-flex flex-column">
                <Card.Img 
                  variant="top" 
                  src={pelicula.Poster !== 'N/A' ? pelicula.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                  alt={pelicula.Title} 
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold">{pelicula.Title}</h5>
                    <p className="card-text">Año: {pelicula.Year}</p>
                    <p className="card-text">{pelicula.Plot}</p>
                  </div>
                  <a 
                    href={`https://www.imdb.com/title/${pelicula.imdbID}`} 
                    className="btn btn-outline-success border-4 rounded-pill mt-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver película
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

      <Contacto />
      <Footer />
    </div>
  );
}

export default App;