//  Objetivo general
// • Comprender cómo manipular arreglos de objetos y aplicar operaciones básicas sobre
// ellos.
// • Implementar el concepto de pila (stack) como estructura de almacenamiento de datos
// en memoria.
// • Resolver problemas básicos usando push, pop, peek, isEmpty en colecciones de
// objetos.



//  Introducción
// En programación, un arreglo de objetos permite almacenar varios elementos relacionados con atributos.
// Por otro lado, una pila (stack) es una estructura de datos con el principio LIFO (Last In, First Out), donde el último elemento insertado es el primero en salir.
// En esta práctica se combinarán ambos conceptos para crear un caso de estudio aplicado:
// • Manejo de listas de objetos (arreglos).
// • Simulación de pilas con operaciones básicas.

// Caso de Estudio: Sistema simple de libros en una biblioteca
// Un sistema requiere administrar libros. Cada libro tiene atributos básicos:
// • Título
// • Autor
// • Año
// Se trabajará en dos partes: arreglos de objetos y pila de objetos.

//  Bloque 1: Ejercicios con Arreglos de Objetos
// 1. Registrar libros en un arreglo
// Crear un arreglo con 5 libros, cada uno con título, autor y año.

let biblioteca = [
    { "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "año": 1953 },
    { "titulo": "Carrie", "autor": "Stephen King", "año": 1974 },
    { "titulo": "El instituto", "autor": "Stephen King", "año": 2019 },
    { "titulo": "Normal People", "autor": "Sally Rooney", "año": 2018 },
    { "titulo": "Klara y el sol", "autor": "Kazuo Ishiguro", "año": 2021 }
];

// o Salida esperada: mostrar la lista completa de libros.
function MostrarPila(arreglo) {
    let contador = 0
    console.log("------------------ BIBLIOTECA ------------------")
    if (!VerificarPilaVacia(biblioteca)) {
        for (let libro of arreglo) {
            contador++
            console.log(`${contador}. ${libro["titulo"]} - ${libro["autor"]} - ${libro["año"]}`)
        }
    } else {
        console.log("No hay registros")
    }
    console.log("------------------------------------------------")
}

function ejercicio_1() {
    MostrarPila(biblioteca)
}

// 2. Buscar un libro por título
// Pedir al usuario un título y verificar si existe en el arreglo de libros.

function BuscarLibroTitulo(titulo, arreglo) {
    for (let libro of arreglo) {
        libro_titulo = libro["titulo"]
        if (titulo === libro_titulo) {
            return true
        }
    }
    return false
}

function ejercicio_2() {
    const libroTitulo = "El instituto"
    const existeLibro = BuscarLibroTitulo(libroTitulo, biblioteca)
    if (existeLibro === true) {
        console.log(`El libro "${libroTitulo}" si existe en la biblioteca.`)
    } else {
        console.log(`No se encontro el libro "${libroTitulo}" en la biblioteca.`)
    }
}

// 3. Contar libros publicados después del año 2000
// Recorrer el arreglo y mostrar cuántos cumplen esa condición.

function CantidadLibrosFecha(año, arreglo) {
    let contador = 0
    for (let libro of arreglo) {
        libro_año = libro["año"]
        if (año <= libro_año) {
            contador++
        }
    }
    return contador
}

function ejercicio_3() {
    const añoBuscar = 2000
    console.log(`Hay ${CantidadLibrosFecha(añoBuscar, biblioteca)} libros publicados despues del ${añoBuscar}`)
}

// 4. Concatenar todos los títulos en una sola cadena
// Mostrar en un texto: “Cien años de soledad – Don Quijote – El Principito …”

function ConcatenarTitulos(arreglo) {
    let titulos = "", libro_titulo
    for (let libro of arreglo) {
        libro_titulo = libro["titulo"]
        if (titulos === "") {
            titulos += libro_titulo 
        } else {
            titulos += ` - ${libro_titulo}`
        }
    }
    return titulos
}

function ejercicio_4() {
    console.log(ConcatenarTitulos(biblioteca))
}

// 5. Actualizar el año de publicación de un libro
// Pedir el título y un nuevo año, recorrer el arreglo y modificar ese objeto.

function ActualizarAñoLibro(titulo, año, arreglo) {
    let pos
    const libro = BuscarLibroTitulo(titulo, arreglo)
    if (libro === true) {
        for (pos in arreglo) {
            if (arreglo[pos]["titulo"] === titulo) {
                arreglo[pos]["año"] = año
            }
        }
        return arreglo[pos]
    } else {
        return false
    }
}

function ejercicio_5() {
    const libroTitulo = "El instituto"
    const añoActualizado = 2020
    const funcionAño = ActualizarAñoLibro(libroTitulo, añoActualizado, biblioteca)

    if (funcionAño !== false) {
        console.log(`El año del libro "${libroTitulo}" fue cambiado exitosamente`)
        MostrarPila(biblioteca)
    } else {
        console.log(`El año del libro "${libroTitulo}" no se pudo actualizar (titulo ingresado incorrecto o no existe)`)
    }
}

//  Bloque 2: Ejercicios con Pila de Objetos
// 6. Implementar una pila de libros (push)
// Crear una pila vacía e ir agregando libros con push().
// o Entrada: Insertar 3 libros.
// o Salida: pila con los 3 libros almacenados.

function ejercicio_6() {
    biblioteca = []

    function AñadirLibro(pila, arreglo) {
        const pos = arreglo.length
        arreglo[pos] = {"titulo": pila[0], "autor": pila[1], "año": pila[2]}
    }

    const libroTitulo = "El instituto"
    const libroAutor = "Stephen King"
    const libroAño = 2019
    const cantidadLibros = 3

    nuevoLibro = [libroTitulo, libroAutor, libroAño]

    for (let i = 1; i <= cantidadLibros; i++) {
        AñadirLibro(nuevoLibro, biblioteca)
    }

    MostrarPila(biblioteca)
}

// 7. Eliminar el último libro ingresado (pop)
// Aplicar pop() a la pila y mostrar el libro eliminado.

function EliminarUltimoLibro(arreglo) {
    const pos = arreglo.length - 1
    console.log(`Se elimino de la biblioteca: ${arreglo[pos]["titulo"]}.`)
    arreglo.length = pos
}

function ejercicio_7() {
    biblioteca = [
        { "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "año": 1953 },
        { "titulo": "Carrie", "autor": "Stephen King", "año": 1974 },
        { "titulo": "El instituto", "autor": "Stephen King", "año": 2019 }
    ]

    EliminarUltimoLibro(biblioteca)
    MostrarPila(biblioteca)
}


// 8. Ver el libro en la cima de la pila (peek)
// Mostrar el último libro ingresado sin eliminarlo.

function MostrarUltimoLibro(arreglo) {
    const pos = arreglo.length - 1
    console.log(`El ultimo libro de la biblioteca es: ${arreglo[pos]["titulo"]}.`)
}

function ejercicio_8() {
    MostrarPila(biblioteca)
    MostrarUltimoLibro(biblioteca)
}

// 9. Verificar si la pila está vacía (isEmpty)
// Mostrar un mensaje según corresponda: “La pila está vacía” o “La pila tiene X libros”.

function VerificarPilaVacia(arreglo) {
    if (arreglo.length === 0) {
        return true
    } 
    return false
}

function ejercicio_9() {
    // biblioteca = []
    
    MostrarPila(biblioteca)
    if (VerificarPilaVacia(biblioteca)) {
        console.log("La pila está vacía!")
    } else {
        console.log(`La pila tiene ${biblioteca.length} libros.`)
    }
}

// 10. Vaciar completamente la pila
// Aplicar pop() en un ciclo hasta que la pila quede vacía. Mostrar mensaje: “La pila se ha vaciado completamente”

function VaciarPila(arreglo) {
    console.log("Vaciando Pila...")
    const lon = arreglo.length - 1
    if (!VerificarPilaVacia(arreglo)) {
        for (let i = lon; i >= 0; i--) {
            EliminarUltimoLibro(arreglo)
        }
        if (VerificarPilaVacia(biblioteca)) {
            console.log("La pila se ha vaciado completamente!")
            return
        }
    } else {
        console.log("La pila ya se encuentra vacia!")
    }
}

function ejercicio_10() {
    VaciarPila(biblioteca)
    MostrarPila(biblioteca)
}