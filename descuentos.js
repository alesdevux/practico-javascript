function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (porcentajePrecioConDescuento * precio) / 100;
  return precioConDescuento;
}