        /*Ejercicios*/

/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "hola ___ tienes ___ años y el año que viene tendrás ___ años".
    Reliza el ejercicio con prompt(mensaje) y has uso de los template strings.
    */
        /*mi solucion-1*/
let nombre = '';

let edad = 39;

let años = 1;

while(nombre != 'victor'){
    nombre = prompt('Intoduce tu nombre');
}
do{
    eda = prompt('Introduce tu edad')
}while(eda != '39');

console.log(`Hola ${nombre}, tienes ${eda} años y el año que viene tendrás
${edad+años} años.`);

        /*solucion del profe*/

/* let name = prompt('Introduce tu nombre');

let age = parseInt(prompt('Introduce tu edad'));

console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás
${age+1} años.`); */

