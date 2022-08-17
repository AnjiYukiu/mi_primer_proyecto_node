// Ordenar arrays
const array = [6,2,76,32,4,6,1,3,7]

console.log(array.sort())

console.log(array.sort((a,b)=>{
    if (a < b) {
        return -1;
    } else {
        return +1
    }
}))

// Ordenar arrays SOLAMENTE numéricos
const array2 = [6,2,76,32,4,6,1,3,7]

array2.sort((a,b) => a - b)

console.log(array2)

// Ordenar una lista de objetos de un array en base a uno de los valores del objeto que sea numérico
const listaObjetos = [
    {nombre: "Gerardo", edad: 34},
    {nombre: "Noemí", edad: 30},
    {nombre: "Aurora", edad: 63},
]

// listaObjetos.sort((a,b) => {
//     if (a.edad < b.edad) {
//         return -1;
//     }else if (a.edad > b.edad) {
//         return +1;
//     } else {
//         return 0;
//     }
// })

    // FORMA OPTIMIZADA
    listaObjetos.sort((a,b) => b.edad - a.edad)

console.log(listaObjetos)