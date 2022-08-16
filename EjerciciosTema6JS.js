// Variable de lista de la compra
const listaCompra = ["leche","huevos","pescado","fruta","queso","pan","desatascador"]

// Añadir aceite de girasol a la lista (como no se especifica nada, lo añado al final)
listaCompra.push("Aceite de girasol")
console.log(listaCompra)

// Eliminar aceite de girasol de la lista
listaCompra.pop()
console.log(listaCompra)

// Array de películas con propiedades
const pelis = [
    {titulo:"El señor de los anillos", director:"Peter Jackson", fecha:"2005"},
    {titulo:"Interestellar", director:"Christopher Nolan", fecha:"2014"},
    {titulo:"El marciano", director:"Ridley Scott", fecha:"2015"}
]

// Lista que contenga las películas posteriores al 1 de enero de 2010
const pelis2010 = pelis.filter(valor => valor.fecha > 2010)

// Lista que contenga los directores solamente de la lista original
const direcPelis = pelis.map(valor => valor.director)

// Lista que contenga solamente los títulos de la lista original
const tituloPelis = pelis.map(valor => valor.titulo)

// Lista que concatene la lista de directores y la lista de títulos
const titulosDirectores = direcPelis.concat(tituloPelis)

// Lista que concatene la lista de directores y la lista de títulos PERO con factor de propagación
const titulosDirectoresProp = [...direcPelis,...tituloPelis]
