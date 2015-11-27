$(document).ready(function(){
	$('button').click(function(){
		
	//PEDIR A USUARIOS AUTORIZACION
		if(navigator.geolocation){// nos devuelve true o false // copiamos el contenido de la función geoLocate 
			navigator.geolocation.getCurrentPosition(mostrarDatos);
		}else{
			alert('No tenemos tus datos, vuelve pronto');
	}

	});

	//OBTENER LATITUD Y LONGITUD
	function mostrarDatos(position){
		var zoom = $('#zoom').val();
		var size = $('#size').val();

		var latLang = position.coords.latitude +','+position.coords.longitude;
		var marker = '&markers=color:red|label:S|'+latLang;

		var imagen = "https://maps.googleapis.com/maps/api/staticmap?size="+size+"&zoom="+zoom+"center=51.477222,0"; 
		var nuevaImagen = imagen+latLang+marker;
		console.log(nuevaImagen);
		$('img').attr('src',nuevaImagen);
	// console.log(position.coords.latitude); //nos devuelve la latitud
	// console.log(position.coords.longitude); //nos devuelve la longuitud
	}


});


