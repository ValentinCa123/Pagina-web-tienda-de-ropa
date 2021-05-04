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
document.getElementById("botonEnviar").addEventListener("click", validarFormulario);
let warning = document.getElementById("reintentar");
let enviado = document.getElementById("enviado");

function validarFormulario() {
    let inputUsuario = document.getElementById("inputCaptcha");
    let valorUsuario = inputUsuario.value;
    let suma = Number(valor1.innerHTML) + Number(valor2.innerHTML);
    if (valorUsuario == suma) {
        warning.innerHTML = "";
        enviarFormulario();
        enviado.classList.add = ("confirmacion");
        enviado.innerHTML = "¡Gracias por su compra!";
    } else {
        warning.innerHTML = "Incorrecto. Por favor, reintentar.";
        sortearValor2();
    }
}

function enviarFormulario() {
    let boton = document.getElementById("botonEnviar").value = "Enviado";
    boton.disabled = true
    let inputDeshabilitado = document.getElementById("inputCaptcha");
    inputDeshabilitado.disabled = true;

}