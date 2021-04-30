  let nodo = document.getElementById ("enviar");
  nodo.addEventListener ("click", validarFormulario);

  function validarFormulario () {
     let elementoCaptcha = document.getElementById("inputCaptcha");
    let example = "just example";
    if (example == elementoCaptcha.value) {
        formularioEnviado();
    }
    else {
        let boton = document.getElementById("enviar");
        boton.value = "reintentar";
        boton.disable = false;
    }
}

    function formularioEnviado (){
       let boton = document.getElementById("enviar");
        boton.value = "enviado";
        boton.disable = true;
        
}
  