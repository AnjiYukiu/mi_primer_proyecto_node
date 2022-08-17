// Declarar un set con los nombres de mi familia
const familia = ["Gerardo","Aurora","Guillermo"]
const familiaSet = new Set(familia)

// Modifico el set añadiendo mi nombre duplicado
const familiaMod = familiaSet.add("Gerardo")
console.log(familiaMod)

// Modifico el set original añadiendo 'JavaScript'
const familiaJS = familiaSet.add("JavaScript")
console.log(familiaJS)