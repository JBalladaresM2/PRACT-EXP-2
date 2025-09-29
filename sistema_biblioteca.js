//  Objetivo general
// • Comprender cómo manipular arreglos de objetos y aplicar operaciones básicas sobre
// ellos.
// • Implementar el concepto de pila (stack) como estructura de almacenamiento de datos
// en memoria.
// • Resolver problemas básicos usando push, pop, peek, isEmpty en colecciones de
// objetos.



//  Introducción
// En programación, un arreglo de objetos permite almacenar varios elementos relacionados con
// atributos.
// Por otro lado, una pila (stack) es una estructura de datos con el principio LIFO (Last In, First
// Out), donde el último elemento insertado es el primero en salir.
// En esta práctica se combinarán ambos conceptos para crear un caso de estudio aplicado:
// • Manejo de listas de objetos (arreglos).
// • Simulación de pilas con operaciones básicas.
//  Caso de Estudio: Sistema simple de libros en una biblioteca
// Un sistema requiere administrar libros. Cada libro tiene atributos básicos:
// • Título
// • Autor
// • Año
// Se trabajará en dos partes: arreglos de objetos y pila de objetos.
//  Bloque 1: Ejercicios con Arreglos de Objetos
// 1. Registrar libros en un arreglo
// Crear un arreglo con 5 libros, cada uno con título, autor y año.
// o Ejemplo entrada:
// o [
// o {titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967},
// o {titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605}
// o ]
// o Salida esperada: mostrar la lista completa de libros.
// 2. Buscar un libro por título
// Pedir al usuario un título y verificar si existe en el arreglo de libros.
// 3. Contar libros publicados después del año 2000
// Recorrer el arreglo y mostrar cuántos cumplen esa condición.
// 4. Concatenar todos los títulos en una sola cadena
// Mostrar en un texto: “Cien años de soledad – Don Quijote – El Principito …”
// 5. Actualizar el año de publicación de un libro
// Pedir el título y un nuevo año, recorrer el arreglo y modificar ese objeto.
//  Bloque 2: Ejercicios con Pila de Objetos
// 6. Implementar una pila de libros (push)
// Crear una pila vacía e ir agregando libros con push().
// o Entrada: Insertar 3 libros.
// o Salida: pila con los 3 libros almacenados.
// 7. Eliminar el último libro ingresado (pop)
// Aplicar pop() a la pila y mostrar el libro eliminado.
// 8. Ver el libro en la cima de la pila (peek)
// Mostrar el último libro ingresado sin eliminarlo.
// 9. Verificar si la pila está vacía (isEmpty)
// Mostrar un mensaje según corresponda: “La pila está vacía” o “La pila tiene X libros”.
// 10. Vaciar completamente la pila
// Aplicar pop() en un ciclo hasta que la pila quede vacía. Mostrar mensaje: “La pila se ha
// vaciado completamente”