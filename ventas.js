const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  let comision = 0;

  if (numeroVentas > VENTAS_BASE) {
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra * precioProducto * 0.1;
  }
  return comision;
}

function calcular(){

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let sueldoTotal = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spSueldoTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = "USD " + sueldoBase.toFixed(2);
    spComision.textContent = "USD " + comision.toFixed(2);
    spSueldoTotal.textContent = "USD " + sueldoTotal.toFixed(2);
}
