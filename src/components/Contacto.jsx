import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const Contacto = () => {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos a un backend
        console.log('Datos del formulario:', form);
        alert('Formulario enviado correctamente!');
        setEnviado(true);
        setForm({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <section id="contacto" className="bg-secondary py-5 w-100">
          <div className="mx-auto px-3" style={{ maxWidth: "700px" }}>
            <h2 className="text-center mb-4">Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  placeholder="Tu nombre" 
                  value={form.nombre}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="tu@email.com" 
                  value={form.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  id="mensaje" 
                  rows="3" 
                  placeholder="Escribe tu mensaje" 
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            <div className="d-flex justify-content-center">
              <button 
                type="submit" 
                className="btn btn-success w-50 rounded-pill"
              >
                Enviar
              </button>
            </div>
            </form>
          </div>
        </section>
    );
};

export default Contacto;