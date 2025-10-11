import React, { useEffect, useState } from "react";
import { listarProductos, borrarProducto } from "../api/productosApi";
import { useNavigate } from "react-router-dom";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const datos = await listarProductos();
    console.log("Datos recibidos:", datos);
    setProductos(datos);
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Deseas eliminar este producto?")) {
      await borrarProducto(id);
      cargarProductos();
    }
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      {/* Botón global para crear un nuevo producto */}
      <button
        onClick={() => navigate("/crear")}
        className="btn btn-primary mb-3"
      >
        Crear Nuevo Producto
      </button>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Precio (L)</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td> {/* MockAPI usa "name" */}
              <td>{producto.price}</td> {/* Solo si existe en la API */}
              <td>{producto.descripcion}</td> {/* Solo si existe */}
              <td>
                <img
                  src={getImg(producto.imagen)}
  alt={producto.nombre}
  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => navigate(`/ver/${producto.id}`)}
                >
                  Ver
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => navigate(`/editar/${producto.id}`)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminar(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

