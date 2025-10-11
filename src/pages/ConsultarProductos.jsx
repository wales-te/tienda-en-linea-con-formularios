import React, { useEffect, useState } from "react";
import { listarProductos } from "../api/productosApi";
import { useNavigate } from "react-router-dom";

export default function ConsultarProductos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await listarProductos();
      setProductos(data);
    })();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Inventario</h2>
        <button className="btn btn-primary" onClick={() => navigate("/crear")}>
          + Agregar producto
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Precio (L)</th>
              <th>Descripción</th>
              <th style={{ width: 220 }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
  {productos.length === 0 && (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No hay productos aún. Crea el primero con “Agregar producto”.
      </td>
    </tr>
  )}

  {productos.map((p) => (
    <tr key={p.id}>
      <td className="fw-semibold">{p.nombre}</td>
      <td>L {p.precio}</td>
      <td>{p.descripcion}</td>
      <td>
        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-outline-info btn-sm"
            onClick={() => navigate(`/ver/${p.id}`)}
          >
            Ver
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => navigate(`/editar/${p.id}`)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => navigate(`/eliminar?id=${p.id}`)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}
