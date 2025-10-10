import React, { useState } from "react";
import { agregarProducto } from "../api/productosApi";
import { useNavigate } from "react-router-dom";

export default function CrearProducto() {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
  });
  const navigate = useNavigate();

  function cambia(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function guardar(e) {
    e.preventDefault();
    await agregarProducto(form);
    navigate("/consultar");
  }

  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h2 className="mb-3">Agregar producto</h2>
      <form onSubmit={guardar} className="card p-3 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={cambia}
            className="form-control"
            placeholder="Ej. Camiseta MAXCA"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (L)</label>
          <input
            name="precio"
            type="number"
            value={form.precio}
            onChange={cambia}
            className="form-control"
            placeholder="Ej. 450"
            required
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={cambia}
            className="form-control"
            placeholder="Ej. Tela suave, ajuste regular"
            rows={3}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de la imagen</label>
          <input
            name="imagen"
            value={form.imagen}
            onChange={cambia}
            className="form-control"
            placeholder="https://…"
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success">Guardar</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/consultar")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
