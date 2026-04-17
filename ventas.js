const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  let comision = 0;

  if (numeroVentas > VENTAS_BASE) {
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra * precioProducto * 0.1;
  }
  return comision;
}

function validarSueldoBase(){
    let valor = recuperarTexto("txtSueldoBase");
    let error = document.getElementById("errSueldoBase");

    if(valor === ""){
        error.textContent = "Campo obligatorio";
        return false;
    }

    if(!/^\d+([.,]\d+)?$/.test(valor)){
        error.textContent = "Solo números";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarVentas(){
    let valor = recuperarTexto("txtVentas");
    let error = document.getElementById("errVentas");

    if(valor === ""){
        error.textContent = "Campo obligatorio";
        return false;
    }

    if(!/^\d+([.,]\d+)?$/.test(valor)){
        error.textContent = "Solo números";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarPrecio(){
    let valor = recuperarTexto("txtPrecio");
    let error = document.getElementById("errPrecio");

    if(valor === ""){
        error.textContent = "Campo obligatorio";
        return false;
    }

  if(!/^\d+([.,]\d+)?$/.test(valor)){
        error.textContent = "Solo números";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

function calcular(){

    if(!validarSueldoBase() | !validarVentas() | !validarPrecio()){
    return;
}

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
