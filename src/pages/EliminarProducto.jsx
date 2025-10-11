import React, { useEffect, useState } from "react";
import { listarProductos, borrarProducto, obtenerProducto } from "../api/productosApi";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EliminarProducto() {
  const [search] = useSearchParams();
  const id = search.get("id");
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [seleccion, setSeleccion] = useState(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const p = await obtenerProducto(id);
        setSeleccion(p);
      } else {
        const data = await listarProductos();
        setProductos(data);
      }
    })();
  }, [id]);

  async function eliminar(idEliminar) {
    const confirmar = window.confirm("¿Deseas eliminar este producto?");
    if (!confirmar) return;
    await borrarProducto(idEliminar);
    navigate("/consultar");
  }

  if (id && seleccion) {
    return (
      <div className="container" style={{ maxWidth: 720 }}>
        <h2 className="mb-3 text-danger">Eliminar producto</h2>
        <div className="card p-3 shadow-sm">
          <p className="mb-2">
            ¿Seguro que deseas eliminar <strong>{seleccion.nombre}</strong>?
          </p>
          {seleccion.imagen && (
            <img
              src={seleccion.imagen}
              alt={seleccion.nombre}
              className="img-fluid rounded mb-3"
              style={{ maxWidth: 220 }}
            />
          )}
          <div className="d-flex gap-2">
            <button className="btn btn-danger" onClick={() => eliminar(seleccion.id)}>
              Sí, eliminar
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/consultar")}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mb-3">Eliminar producto</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Precio (L)</th>
              <th>Descripción</th>
              <th style={{ width: 140 }}>Imagen</th>
              <th style={{ width: 140 }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay productos para eliminar.
                </td>
              </tr>
            )}
            {productos.map((p) => (
              <tr key={p.id}>
                <td className="fw-semibold">{p.nombre}</td>
                <td>L {p.precio}</td>
                <td>{p.descripcion}</td>

                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => eliminar(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
