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

// Código del triangulo isosceles
function alturaTrianguloIsosceles(lado, base) {
  if (lado != base) {
    const mediaBase = base / 2;
    const mediaBaseCuadrado = mediaBase * mediaBase;
    const ladoCuadrado = lado * lado;
    let operacion;

    if (ladoCuadrado > mediaBaseCuadrado) {
      operacion = (ladoCuadrado - mediaBaseCuadrado);
    } else {
      operacion = (mediaBaseCuadrado - ladoCuadrado);
    }

    const altura = Math.sqrt(operacion).toFixed(2);
    return 'La altura del triángulo isósceles es de ' + altura + 'cm';
  } else {
    return 'No es un triángulo isósceles';
  }
}


// Interactuando con el HTML
function calcularPerimetroCuadrado() {
  const lado = document.getElementById('ladoCuadrado').value;
  const perimetro = perimetroCuadrado(lado);
  const mensaje = 'El perímetro del cuadrado es de ' + perimetro + 'cm';
  document.getElementById('resultadoCuadrado').innerHTML = mensaje;
}
function calcularAreaCuadrado() {
  const lado = document.getElementById('ladoCuadrado').value;
  const area = areaCuadrado(lado);
  const mensaje = 'El área del cuadrado es de ' + area + 'cm²';
  document.getElementById('resultadoCuadrado').innerHTML = mensaje;
}

function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById('ladoTriangulo1').value);
  const lado2 = parseInt(document.getElementById('ladoTriangulo2').value);
  const base = parseInt(document.getElementById('baseTriangulo').value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  const mensaje = 'El perímetro del triángulo es de ' + perimetro + 'cm';
  document.getElementById('resultadoTriangulo').innerHTML = mensaje;
}
function calcularAreaTriangulo() {
  const base = document.getElementById('baseTriangulo').value;
  const altura = document.getElementById('alturaTriangulo').value;
  const area = areaTriangulo(base, altura);
  const mensaje = 'El área del triángulo es de ' + area + 'cm²';
  document.getElementById('resultadoTriangulo').innerHTML = mensaje;
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById('radioCirculo').value;
  const perimetro = perimetroCirculo(radio);
  const perimetroFixed = perimetro.toFixed(2);
  const mensaje = 'El perímetro del círculo es de ' + perimetroFixed + 'cm';
  document.getElementById('resultadoCirculo').innerHTML = mensaje;
}
function calcularAreaCirculo() {
  const radio = document.getElementById('radioCirculo').value;
  const area = areaCirculo(radio);
  const areaFixed = area.toFixed(2);
  const mensaje = 'El área del círculo es de ' + areaFixed + 'cm²';
  document.getElementById('resultadoCirculo').innerHTML = mensaje;
}

function calcularAlturaTrianguloIsosceles() {
  const lado = document.getElementById('ladoTrianguloIsosceles').value;
  const base = document.getElementById('baseTrianguloIsosceles').value;
  const mensaje = alturaTrianguloIsosceles(lado, base);
  document.getElementById('resultadoTrianguloIsosceles').innerHTML = mensaje;
}