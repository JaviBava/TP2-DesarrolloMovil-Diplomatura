import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-auto">
    <Container>
      <Row className="mb-3">
        <Col md={6} className="mx-auto">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar película"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://github.com/JaviBava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-1"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.facebook.com/JavierBava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-1"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/javier.bava/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-1"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/javier-bava/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://wa.me/5491136359368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-1"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="text-center mb-0">
            © 2025 Diplomatura - Todos los derechos reservados
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
