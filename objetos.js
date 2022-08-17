// Crear objeto que contenga mis datos
const datos = {
    nombre: "Gerardo",
    apellido: "Beltran",
    edad: 34,
    altura: 182,
    eresDev: true
}

// Variable que obtenga mi edad a partir del objeto anterior
const edad = datos.edad
console.log(edad)

// Crear un array que contenga los datos personales de dos amigos
const datosAmigos = [
    datos,
    {nombre: "Paulo", apellido: "Kortazar", edad: 35, altura: 180, eresDev: false},
    {nombre: "Adrián", apellido: "Morote", edad: 33, altura: 184, eresDev: false}
]
console.log(datosAmigos)

// Crear un array con los objetos de la lista anterior ordenados de mayor a menor por edad
const datosEdad = datosAmigos.sort((a,b) => b.edad - a.edad)
console.log(datosEdad)