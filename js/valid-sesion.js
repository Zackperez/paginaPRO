
// VALIDAR INICIO DE SESIÓN
document.getElementById('botton').onclick = function(){
	var correo = document.getElementById('email2');
	var contra = document.getElementById('contrasena2');
	var errorCorreo = document.getElementById('errorEmail');
	var errorContra = document.getElementById('errorPass');

	if  (correo.value == null || correo.value.length == 0 ) {
		errorCorreo.innerHTML = '<h5 class = "CorreoCSS"> Campo vacio idiota</h5>';
		correo.className="form-control is-invalid";
		tiempoEspera(errorCorreo);
	}
	if (contra.value == null || contra.value.length == 0){
		errorContra.innerHTML = '<h5 class = "ContraCSS"> Y la contraseña? care mondá </h5>';
		contra.className= "form-control is-invalid";
		tiempoEspera(errorContra);
	}else{
		// noErrorContra.innerHTML
	}
}

var error;

// Elimina contenido de error generado (h5-HTML) después de 4 segundos
function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},4000);
}

