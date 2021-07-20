// Código del cuadrado
function perimetroCuadrado(lado) {
  return 4 * lado;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del Círculo
const PI = Math.PI; 

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return PI * (radio * radio);
}