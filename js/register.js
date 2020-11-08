document.getElementById('button-Modal').onclick = function(){
	let nombreModal = document.getElementById('nombre-modal');
	let apellidoModal = document.getElementById('apellido-modal');
	let correoModal = document.getElementById('email-modal');
	let contraModal = document.getElementById('contrasena-modal');
	let confirmContraModal = document.getElementById('contra-confirm-modal');
	var errorVerificacion = document.getElementById('mensajeVerificacion');

	var textos  = [nombreModal.value, apellidoModal.value, correoModal.value, contraModal.value, confirmContraModal.value];
	var textos2 = [nombreModal, apellidoModal, correoModal, contraModal, confirmContraModal];

	for (var valor of textos) {
		if  (valor.length == 0) {
			for (elemento of textos2){
				elemento.className = "form-control is-invalid";
			}
			errorVerificacion.innerHTML = '<h5 class = "mensajeCSS"> Faltan campos por completar</h5>';
			tiempoEspera(errorVerificacion);
			}
		}
	}

var error;

function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},3000);
}



