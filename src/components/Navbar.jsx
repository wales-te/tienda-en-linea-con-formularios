import React from 'react'
import { Link } from 'react-router-dom'

export default function Barra() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MAXCA</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/crear">Agregar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
