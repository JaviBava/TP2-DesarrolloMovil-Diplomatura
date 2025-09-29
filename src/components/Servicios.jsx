import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Servicios = () => (
    <section id="servicios" className="w-100 my-5 px-3">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card shadow h-100 border-5 border-warning">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Plan ORO</h5>
                <p className="card-text">Todas las películas por un abono anual de $50.</p>
                <a href="#" className="btn btn-outline-success border-3">Contratar</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow h-100 border-5 border-secondary">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Plan PLATA</h5>
                <p className="card-text">Todas las películas durante un mes por $15.</p>
                <a href="#" className="btn btn-outline-success border-3">Contratar</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow h-100 border-5 border-danger">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Plan BRONCE</h5>
                <p className="card-text">Pagá por la película que quieras ver. Solo $2.</p>
                <a href="#" className="btn btn-outline-success border-3">Contratar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
);

export default Servicios;