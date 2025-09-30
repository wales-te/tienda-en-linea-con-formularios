import React, { useState } from 'react';
import { agregarProducto } from '../api/productosApi';
import { useNavigate } from 'react-router-dom';

export default function CrearProducto() {
  const [form, setForm] = useState({ nombre: '', precio: '', categoria: '', descripcion: '', imagen: '' });
  const navigate = useNavigate();

  function cambia(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function guardar(e) {
    e.preventDefault();
    await agregarProducto(form);
    navigate('/');
  }

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={guardar}>
        <input
          name="nombre"
          value={form.nombre}
          onChange={cambia}
          className="form-control mb-2"
          placeholder="Nombre"
          required
        />
        <input
          name="precio"
          value={form.precio}
          onChange={cambia}
          type="number"
          className="form-control mb-2"
          placeholder="Precio en Lempiras"
          required
        />
        <input
          name="categoria"
          value={form.categoria}
          onChange={cambia}
          className="form-control mb-2"
          placeholder="Categoría"
          required
        />
        <input
          name="descripcion"
          value={form.descripcion}
          onChange={cambia}
          className="form-control mb-2"
          placeholder="Descripción"
        />
        <input
          name="imagen"
          value={form.imagen}
          onChange={cambia}
          className="form-control mb-2"
          placeholder="URL de la imagen"
        />
        <button type="submit" className="btn btn-success">
          Guardar
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate('/')}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
