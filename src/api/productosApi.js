const API = "https://68d75573c2a1754b426d290d.mockapi.io/api/productos";

export async function listarProductos() {
  const r = await fetch(API);
  return r.json();
}
export async function obtenerProducto(id) {
  const r = await fetch(`${API}/${id}`);
  return r.json();
}
export async function agregarProducto(prod) {
  const r = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  return r.json();
}
export async function actualizarProducto(id, prod) {
  const r = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  return r.json();
}
export async function borrarProducto(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
}
