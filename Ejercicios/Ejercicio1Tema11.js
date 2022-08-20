// Crear clase estudiante
class estudiante {
    _nombre;                                               // Creación de variable "nombre"
    constructor (nombre) {
        this._nombre = nombre;
        this.asignaturas = ["Javascript","HTML","CSS"]     // Creación de variable "asignaturas"
    }
    obtenDatos() {
        const datos = {
            nombre: this._nombre,
            asignaturas: this.asignaturas
        }
        return datos;
    }
}

const newEstudiante = new estudiante("Pepito")             // Nueva instancia de "estudiante"
console.log(newEstudiante.obtenDatos())                    // Llamada al método obtenDatos