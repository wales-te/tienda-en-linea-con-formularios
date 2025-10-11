import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { listarProductos, obtenerProducto, actualizarProducto } from "../api/productosApi";

export default function EditarProducto() {
  const { id: idParam } = useParams();
  const [search] = useSearchParams();
  const idQuery = search.get("id");
  const id = idParam || idQuery;

  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
  });
  const [todos, setTodos] = useState([]);
  const [cargando, setCargando] = useState(Boolean(id));

  useEffect(() => {
    (async () => {
      if (!id) {
        // Sin id: listar para escoger
        const data = await listarProductos();
        setTodos(data);
      } else {
        setCargando(true);
        const data = await obtenerProducto(id);
        setForm(data);
        setCargando(false);
      }
    })();
  }, [id]);

  async function cargarParaEditar(e) {
    const seleccionado = e.target.value;
    if (!seleccionado) return;
    navigate(`/editar/${seleccionado}`);
  }

  function cambia(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function guardar(e) {
    e.preventDefault();
    await actualizarProducto(id, form);
    navigate("/consultar");
  }

  if (!id) {
    return (
      <div className="container" style={{ maxWidth: 720 }}>
        <h2 className="mb-3">Editar producto</h2>
        <div className="card p-3 shadow-sm">
          <label className="form-label">Selecciona un producto</label>
          <select className="form-select" onChange={cargarParaEditar} defaultValue="">
            <option value="" disabled>— Elegir —</option>
            {todos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre} — L {p.precio}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (cargando) return <div className="container py-3">Cargando…</div>;

  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h2 className="mb-3">Editar producto</h2>
      <form onSubmit={guardar} className="card p-3 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={cambia}
            className="form-control"
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
            min="0"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={cambia}
            className="form-control"
            rows={3}
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success">Guardar cambios</button>
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
