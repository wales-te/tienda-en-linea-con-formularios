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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🐶 Bienvenido a la tienda MAXCA 🐱</h1>
      <p>Tu tienda en línea de confianza para mascotas.</p>
    </div>
  )
}
