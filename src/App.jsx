import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const ConsultarProductos = lazy(() => import("./pages/ConsultarProductos"));
const CrearProducto      = lazy(() => import("./pages/CrearProducto"));
const EditarProducto     = lazy(() => import("./pages/EditarProducto"));
const EliminarProducto   = lazy(() => import("./pages/EliminarProducto"));

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">MAXCA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/consultar">Consultar</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/crear">Agregar</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/editar">Editar</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/eliminar">Eliminar</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <Suspense fallback={<p>Cargando…</p>}>
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h1 className="mb-3">Tienda MAXCA</h1>
                <p>CRUD completo: consulta, agrega, edita y elimina productos.</p>
              </div>
            } />
            <Route path="/consultar" element={<ConsultarProductos />} />
            <Route path="/crear" element={<CrearProducto />} />
            <Route path="/editar" element={<EditarProducto />} />
            <Route path="/editar/:id" element={<EditarProducto />} />
            <Route path="/eliminar" element={<EliminarProducto />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
