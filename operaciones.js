function cadenaTamaño(cadena) {
	return cadena.length;
}
function cadenaCaracteres(cadena, numeroCaracteres) {
	return cadena.substr(cadena, numeroCaracteres);
}
function cadenaArregloNuevo(cadena) {
	const cadenaArreglo = cadena.split(" ");
	return cadenaArreglo;
}
function cadenaRepeticion(cadena, numeroVeces) {
	for (let i = 0; i < numeroVeces; i++) {
		cadena += ` ${cadena}`;
	}
	return cadena;
}

export const operaciones = {
	cadenaTamaño,
	cadenaCaracteres,
	cadenaArregloNuevo,
	cadenaRepeticion
};

