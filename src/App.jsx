import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Barra from './components/Navbar'
import Pie from './components/Footer'
import Productos from './pages/Productos'
import CrearProducto from './pages/CrearProducto'
import EditarProducto from './pages/EditarProducto'
import VerProducto from './pages/VerProducto'

export default function App() {
  return (
    <>
      <Barra />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/crear" element={<CrearProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
          <Route path="/ver/:id" element={<VerProducto />} />
        </Routes>
      </div>
      <Pie />
    </>
  )
}
