let alumno = {
    id: 987654321,
    nombre: "Alan",
    primerApellido: "Arrieta",
    segundoApellido: "FLores",
    edad: 20,
    titulado: false,
    egresado: {
        estado: false,
        semestreCurso: 7,
        materiasDeber: 9,
        turno: "Matutino",
        promedio: 8.7,

    },
    domicilio: {
        calle: "Barca de oro",
        numero: 54,
        colonia: "Benito Juárez",
        cp: 5700,
        mumicipio: "Nezahualcoyotl",
        estado: "México",
        pais: "México",
        continenete: "Latinoamérica"
    },
    kinder: {
        nombre: "Alfred Nobel",
        actividadPrimerdia: function () {
            console.log("llorar");
        },
        actividadRecurrente: function () {
            console.log("pelear");
        },
        datosMiss: {
            nombre: "Gabriela",
            edad: 40,
            estudios: "Licenciatura"
        }
    },
    primaria: {
        nombre: "Isidro Fabela",
        comer(comida) {
            return `ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("Galleta"));
