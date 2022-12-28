//Cadena de texto con mi nombre
let nombre = "Andrés";

//Cadena de texto con mi apellido
let apellido = "Del castillo";

//Una cadena de texto que se llame "estudiante" 
//concatenando tu Nombre y tu Apellido con un espacio entre medias
let profesion = "estudiante";
console.log("estudiante:" + " " + nombre + " " + apellido);

//Una cadena de texto que se llame "estudianteMayus" 
//que contenga la cadena estudiante pero todo en mayúsculas

let str = "estudianteMayus";
console.log(str.toUpperCase());

//Una cadena de texto que se llame "estudianteMinus" que contenga
// la cadena estudiante pero todo en minúsculas

let str_minus = "estudianteMinus"
console.log(str_minus.toLowerCase());

//Una variable que contenga el número de letras de la cadena "estudiante"
//contando los espacios
console.log(profesion.length);

//Una variable que contenga la primera letra del Nombre
console.log(nombre.charAt(0));

//Otra variable que contenga la última letra del Apellido
console.log(apellido.charAt(11));

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let str_4 = " Hoy en día, sigue siendo una buena época para seguir estudiando. Lo mejor es ser estudiante. ";
console.log(str_4.trim())

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(nombre.includes("estudiante"));



