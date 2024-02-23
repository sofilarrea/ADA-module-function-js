// Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos//
function sumar(a, b) {
    return a + b;
}
console.log(sumar(1.2, 3.4)); 

// Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos //
function restar(a, b){
    return a - b;
}
console.log(restar(10, 5.5))

// Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos //
function multiplicar(a, b){
    return a * b;
}
console.log(multiplicar(4, 0.5))

// Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos //
function dividir(a, b){
    return a / b;
}
console.log(dividir(12, 3))

// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es //
function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(esPar(7))
console.log(esPar(2))

// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es //
function esImpar(numero){
    if (numero % 2 !== 0) {
        return true
    }
    else {
        return false
    }
}
console.log(esImpar(7))
console.log(esImpar(2))

// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo //
function calcularAreaTriangulo(base, altura){
    return (base * altura) / 2;
}
let base = 6;
let altura = 4;
let area = calcularAreaTriangulo(base, altura);
console.log("El área del triángulo es: " + area);

// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo//
function gritar(str){
    return "¡" + str + "!"
}
console.log(gritar("estoy cansada"))

// Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores //
function obtenerNombreCompleto(nombre, apellido){
    return nombre + ' ' + apellido
}
console.log(obtenerNombreCompleto('Sofia', 'Larrea'))

// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya. //
function saludar(nombre){
    return  `Hola ${nombre}, un gusto conocerte`
}
console.log(saludar("Benicio"))

// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.//
function saludarGritando(nombre, apellido){
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
    const saludo = saludar(nombreCompleto);
    const grito = gritar(saludo);
    return grito;
}
console.log(saludarGritando("Jacinta", "Cuervo"))

// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS//
function obtenerDatosDeCiudad(nombre, poblacion, pais){
    return `La ciudad de ${nombre} tiene una población de ${poblacion} y está ubicada en ${pais}`;
}
console.log(obtenerDatosDeCiudad("Mendoza", 2.043540, "Argentina" ))

//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas//
function convertirHorasEnSegundos(number){
    return number * 3600;
}
console.log(convertirHorasEnSegundos(1));
console.log(convertirHorasEnSegundos(3))

// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro //
function calcularAreaTriangulo(ancho, alto){
    return 2 * (ancho + alto);
}
console.log(calcularAreaTriangulo(3.2, 5));

// Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número //
function calcularPorcentaje(numero, porcentaje){
    return( numero * porcentaje) / 100; 
}
console.log(calcularPorcentaje(100, 15));

// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar // 
function sumarPorcentaje(numero, porcentaje){
    const calcularPorcentaje = porcentaje
    return (numero + calcularPorcentaje);
}
console.log(sumarPorcentaje(100, 15));

// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar //
function restarPorcentaje(numero, porcentaje){
    const calcularPorcentaje = porcentaje;
    return (numero - calcularPorcentaje);
}
console.log(restarPorcentaje(100, 15));

// FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos //
function calcularFPS(fps, minutos){
    return fps * 60 * minutos;
}
console.log(calcularFPS(1, 1));

// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b //
function obtenerCompetencia(str1, str2){
    return `${str1} vs ${str2}`;
}
console.log(obtenerCompetencia('Coca', 'Pepsi'));

// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com //
function generarEmail(usuario, dominio){
    return `${usuario}@${dominio}.com`;
}
console.log(generarEmail('bobsponga', 'gmail'));

// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario //
function esMayorDeEdad(age){
    if (age >= 18) {
        return true
    }
    else {
        return false
    }
};
console.log(esMayorDeEdad(15));
console.log(esMayorDeEdad(26));

// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario //
function haceCalor(temperatura){
    if (temperatura >= 22) {
        return true
    }
    else {
        return false
    }
};
console.log(haceCalor(12));
console.log(haceCalor(22));

//Crear una función haceFrio que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario//
function haceFrio(temperatura){
    if (temperatura <= 12){
        return true
    }
    else {
        return false
    }
}
console.log(haceFrio(22));
console.log(haceFrio(2));

// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma: //
function calcularPuntaje(facil, normal, dificil){
    const puntajeFacil = facil * 3;
    const puntajeNormal = normal * 5;
    const puntajeDificil = dificil * 10;
    return puntajeFacil + puntajeNormal + puntajeDificil;
}
console.log(calcularPuntaje(0, 2, 1));

// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es //
function aceptaDeposito(monto){
    if (monto % 10 == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(aceptaDeposito(440));
console.log(aceptaDeposito(123));