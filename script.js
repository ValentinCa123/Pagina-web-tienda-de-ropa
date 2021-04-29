let form = document.getElementById("formularioCompra");
form.addEventListener("onsubmit", noRefrescar);

function noRefrescar() {
    return false
}

function sortearValor1() {
    let valor1 = (Math.random() * 10).toFixed(0);
    document.getElementById("valor1").innerHTML = valor1;
    return valor1;
}

function sortearValor2() {
    let valor2 = (Math.random() * 10).toFixed(0);
    document.getElementById("valor2").innerHTML = valor2;
    return valor2;
}

document.getElementById("valor1").innerHTML = sortearValor1();
document.getElementById("valor2").innerHTML = sortearValor2();
document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
    let inputUsuario = document.getElementById("captcha");
    let valorUsuario = inputUsuario.value;
    let suma = Number(valor1.innerHTML) + Number(valor2.innerHTML);
    if (valorUsuario == suma) {
        enviarFormulario();
    } else {
        sortearValor1();
        sortearValor2();
    }
}

function enviarFormulario() {
    let boton = document.getElementById("enviar").value = "Enviado";
    boton.disabled = true
}