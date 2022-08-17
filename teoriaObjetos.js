// Declaración de objeto
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    librosFavoritos: ["El médico", "El marciano"]
}

console.log(obj.librosFavoritos)

// Llamar propiedades a través de variables
const ape = "apellido"
console.log(obj[ape])

// Replicación de objetos
const obj2 = obj;
console.log(obj2)

// Reasignación de valor en obj2 -- AFGECTA TAMBIÉN AL OBJETO PADRE
obj2.nombre = "Fernando"
console.log(obj2.nombre)
console.log(obj.nombre)

// Reasignar valores a objeto SIN alterar objeto padre
const obj3 =  {...obj} 
console.log(obj3.nombre)
obj3.nombre = "mariano"
console.log(obj3.nombre)
console.log(obj.nombre)

// Como ordenar listas de objetos en funcion de una variable/parámetro/propiedad
const pelis = [
    {titulo: "Lo que el viento se llevó", estreno: 1939},
    {titulo: "Titanic", estreno: 1997},
    {titulo: "Moana", estreno: 2016},
    {titulo: "El efecto mariposa", estreno: 2004},
    {titulo: "TED", estreno: 2012}
]

pelis.sort((a, b) => a.titulo - b.titulo)
console.log(pelis)