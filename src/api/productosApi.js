const URL_BASE = 'https://68d75573c2a1754b426d290d.mockapi.io/api/productos'

export async function listarProductos() {
  const res = await fetch(URL_BASE)
  return res.json()
}

export async function verProducto(id) {
  const res = await fetch(`${URL_BASE}/${id}`)
  return res.json()
}

export async function agregarProducto(datos) {
  const res = await fetch(URL_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
  return res.json()
}

export async function actualizarProducto(id, datos) {
  const res = await fetch(`${URL_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
  return res.json()
}

export async function borrarProducto(id) {
  await fetch(`${URL_BASE}/${id}`, { method: 'DELETE' })
}
