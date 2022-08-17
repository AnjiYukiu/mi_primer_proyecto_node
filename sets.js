const array = [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,"hola","hola",{id:5},{id:5}]

// Transformar el array en un set
const miSet = new Set(array)

// Borrar un valor del set
miSet.delete("hola")

// Añadir un valor al set
miSet.add(9)

// Eliminar todo el contenido del set
// miSet.clear()

// Comprobar si el set contiene un valor
console.log(miSet.has(2))

// Comprobar el tamaño del set
console.log(miSet.size)

// Recorrer el set
miSet.forEach(valor => {
    console.log(valor)
})

// Recorrer el set
const it_miSet = miSet.values()
console.log(array)
console.log(it_miSet)

// Volver a convertir el set en un array mediante factor de propagación
const ar_miSet = [...miSet]
console.log(ar_miSet)