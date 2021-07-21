function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (porcentajePrecioConDescuento * precio) / 100;
  return precioConDescuento;
}

function recibirPrecioConDescuento() {
  const precio = document.getElementById('precio').value;
  const descuento = document.getElementById('descuento').value;

  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  const mensaje = `El precio con descuento es ${precioConDescuento}`;
  document.getElementById('precioConDescuento').innerText = mensaje;
}