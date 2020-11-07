
// VALIDAR INICIO DE SESIÓN
document.getElementById('botton').onclick = function(){
	var correo = document.getElementById('email2').value;
	var contra = document.getElementById('contrasena2').value;
	var errorCorreo = document.getElementById('errorEmail');
	var errorContra = document.getElementById('errorPass');

	if  (contra == null || correo.length == 0 ) {
		errorCorreo.innerHTML = '<h5 class = "CorreoCSS"> Campo vacio idiota</h5>';
		tiempoEspera(errorCorreo);
	}
	if (contra == null || contra.length == 0){
		errorContra.innerHTML = '<h5 class = "ContraCSS"> Y la contraseña? care mondá </h5>';
		tiempoEspera(errorContra);
	}
}

var error;

// Elimina contenido de error generado (h5-HTML) después de 4 segundos
function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},4000);
}

