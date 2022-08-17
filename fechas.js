// Fecha de hoy
const hoy = new Date()
console.log(hoy)

//                                        ó

console.log(new Date())

// Fecha de mi nacimiento
const fechaNac = new Date(1988,4,25)
console.log(fechaNac)

//                                        ó

console.log(new Date(1988,4,25))

// Variable que indique si hoy es más tarde que la fecha de mi nacimiento
const comparacion = (hoy.getTime() === fechaNac.getTime())

if (comparacion === false) {
console.log("Hoy es más tarde que tu fecha de nacimiento")
}else{
console.log("Has nacido hoy. ¡¡ENHORABUENA!!")
}

// Variable que contenga el día de mi nacimiento
const diaNac = fechaNac.getDay()
console.log(diaNac)

// Variable con el mes de mi nacimiento
const mesNac = fechaNac.getMonth()+1
console.log(mesNac)

// Variable que contenga el añó de mi nacimiento
const anyoNac = fechaNac.getFullYear()
console.log(anyoNac)

