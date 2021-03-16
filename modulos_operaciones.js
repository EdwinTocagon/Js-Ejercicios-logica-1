
import { operaciones } from "./operaciones.js";

let opcion = window.prompt("Ingrese numero de ejercicio (1-4)");
switch (opcion) {
	case '1':
		try {
			let cadena = window.prompt("Ingrese cadena de texto");
			let regExp = /[^a-zA-Z\s]/;
			if (regExp.test(cadena) == true) {
				throw new SyntaxError("Ingrese solo cadenas de texto")
			}
			window.alert(`la cadena ${cadena} tienes :${operaciones.cadenaTamaño(cadena)}`);
		} catch (error) {
			window.alert(`se produjo el siguiente: ${error}`);
		}
		break;

	case '2':
		try {
			let cadena = window.prompt("Ingrese cadena de texto");
			let regExp = /[^a-zA-Z\s]/;
			if (regExp.test(cadena) == true) {
				throw new SyntaxError("Ingrese solo cadenas de texto")
			}
			let numeroCaracteres = window.prompt("Ingrese numeros de caracteres a imprimir");
			if (isNaN(numeroCaracteres)) {
				throw new TypeError("Ingrese solo numeros");
			}
			window.alert(`la cadena ${cadena} solo con ${numeroCaracteres} caracteres tiene:${operaciones.cadenaCaracteres(cadena, numeroCaracteres)}`);
		} catch (error) {
			window.alert(`se produjo el siguiente: ${error}`);
		}
		break;

	case '3':
		try {
			let cadena = window.prompt("Ingrese cadena de texto");
			let regExp = /[^a-zA-Z\s]/;
			if (regExp.test(cadena) == true) {
				throw new SyntaxError("Ingrese solo cadenas de texto")
			}
			console.log(operaciones.cadenaArregloNuevo(cadena.trim()));
			window.alert(`la cadena ${cadena} tienes :${operaciones.cadenaArregloNuevo(cadena.trim())}`);
			const aux = operaciones.cadenaArregloNuevo(cadena.trim());
			for (let i = 0; i < aux.length; i++) {
				window.alert(aux[i]);
			}

		} catch (error) {
			window.alert(`se produjo el siguiente: ${error}`);
		}
		break;

	case '4':
		try {
			let cadena = window.prompt("Ingrese cadena de texto");
			let regExp = /[^a-zA-Z\s]/;
			if (regExp.test(cadena) == true) {
				throw new SyntaxError("Ingrese solo cadenas de texto")
			}
			let numeroVeces = window.prompt("Ingrese numero de veces a repetir");
			if (isNaN(numeroVeces)) {
				throw new TypeError("Ingrese solo numeros");

			} if (numeroVeces > 27) {
				throw new RangeError("Ingrese numero de repeticion menor a 27")
			}


			window.alert(`Resultado: ${operaciones.cadenaRepeticion(cadena, numeroVeces)}`);

		} catch (error) {
			window.alert(`se produjo el siguiente: ${error}`);
		}
		break;

	default:
		window.alert("La opcion no existe");
		break;
}


