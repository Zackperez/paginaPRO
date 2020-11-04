// VALIDAR INICIO DE SESIÓN

document.getElementById('botton').onclick = function(){
	var correo = document.getElementById('email2').value;
	var contra = document.getElementById('contrasena2').value;
	var errorCorreo = document.getElementById('errorEmail');
	var errorContra = document.getElementById('errorPass');

	if  (correo.length == 0 ) {
		errorCorreo.innerHTML = '<h5 class = "CorreoCSS"> Campo vacio idiota</h5>';
	}
	if (contra.length < 6 || contra.length == 0){
		errorContra.innerHTML = '<h5 class = "ContraCSS"> Y la contraseña? care mondá </h5>';
	}
}
