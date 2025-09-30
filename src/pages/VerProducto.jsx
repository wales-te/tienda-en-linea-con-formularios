import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verProducto } from "../api/productosApi";

export default function VerProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    cargarProducto();
  }, []);

  const cargarProducto = async () => {
    const datos = await verProducto(id);
    setProducto(datos);
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Precio:</strong> L {producto.precio}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p>
        <strong>Imagen:</strong><br />
        <img src={producto.imagen} alt={producto.nombre} style={{ width: "200px" }} />
      </p>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Volver
      </button>
    </div>
  );
}
