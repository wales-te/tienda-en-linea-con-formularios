import React, { useState, useEffect } from 'react';
import { verProducto, actualizarProducto } from '../api/productosApi';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditarProducto() {
  const { id } = useParams();
  const [form, setForm] = useState({ nombre: '', precio: '', categoria: '', descripcion: '', imagen: '' });
  const navigate = useNavigate();

  useEffect(() => {
    cargarProducto();
  }, []);

  async function cargarProducto() {
    const datos = await verProducto(id);
    setForm(datos);
  }

  function cambia(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function guardar(e) {
    e.preventDefault();
    await actualizarProducto(id, form);
    navigate('/');
  }

  return (
    <div>
      <h2>Editar Producto</h2>
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
          Guardar Cambios
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
