document.getElementById('button-Modal').onclick = function(){
	let nombreModal = document.getElementById('nombre-modal').value;
	let apellidoModal = document.getElementById('apellido-modal').value;
	let correoModal = document.getElementById('email-modal').value;
	let contraModal = document.getElementById('contrasena-modal').value;
	let confirmContraModal = document.getElementById('contra-confirm-modal').value;
	var errorVerificacion = document.getElementById('mensajeVerificacion');

	let textos  = [nombreModal, apellidoModal, correoModal, contraModal, confirmContraModal];

	for (var valor of textos) {
		if  (valor.length == 0) {
			errorVerificacion.innerHTML = '<h5 class = "mensajeCSS"> Faltan campos por completar</h5>';
			tiempoEspera(errorVerificacion);
			}
		}
	}

var error;

function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},4000);
}



