// Comillas invertidas para insertar variables / plantillas
let nombre = "Gerardo";
let plantilla = `
<html>
    <h1>Webpage de ${nombre}</h1>
    <p>Esto es un párrafo</p>
</html>
`;
console.log(plantilla);

// Introducción de variables en HTML
let array = ["El médico","Maus","Falsos dioses"]
let plantilla2 = `
<html>
    <h1>Webpage de ${nombre}</h1>
    <p>${array}</p>
</html>
`;

console.log(plantilla2);

// Obtener longitud del string
let str = "Hola buenos hola dias hola qué hola tal"
console.log(str.length)
// Obtener un fragmento del string de X carácter a Y carácter
console.log(str.slice(4,20))
// Reremplazar un fragmento de un string
console.log(str.replace('Hola', 'Adios'))
// Reemplazar todas las ocurrencias dadas en un str
console.log(str.replace(/hola/g, 'adios'))

// Convertir todo el string a mayusculas/minusculas
let input = "Géminis";
let db = "géminis"

console.log(input === db);

console.log(str.toUpperCase())
console.log(str.toLowerCase())

// Eliminar espacios al inicio y al final
let espacio = "          Hola qué tal estás.          ";
console.log(espacio.length);
console.log(espacio.trim())
console.log(espacio.trimStart().length)
console.log(espacio.trimEnd().length)

// Obtener la posición de un carácter en el string
let posicion = "Estupefantástico";
console.log(posicion.charAt(6));
console.log(posicion[6])

// Obtener la posicion de una palabra en un string
let posicionPalabra = "Hola soy Gerardo y estoy programando Gerardo";
console.log(posicionPalabra.indexOf("Gerardo"))
console.log(posicionPalabra.lastIndexOf("Gerardo"))

// REGEX --> Saber si un texto contiene palabras
let textolargo = "RegExr was created by gskinner.com, and is proudly hosted by Media Temple. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English."
console.log(textolargo.match(/Text/g))
console.log(textolargo.includes("English"))

// Saber si una cadena empieza o acaba por una palabra en concreto
console.log(textolargo.startsWith("RegExr"))
console.log(textolargo.endsWith("."))
