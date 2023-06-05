/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solícita los datos que necesítes para calcularlos.
    triángulo = b*h/2
    rectángulo = b*h
    círculo = Π _ r2 (pi _ radio al cuadrado).
    */

/*mi solucion-2*/

let figure = prompt(
  "Introduce la figura geómerica de la que quieres calcular el área (debes definir tal cual se te presenta en las opciones sin incluir el arterisco *): \n * Triangulo \n * Rectangulo \n * Circulo \n"
);

/* figure.toLowerCase(); */ //Esto para asegurar que el texto sea validado siempre en minuscula

const pintar = document.querySelector("#resultado")

if (figure.toLowerCase() === "triangulo") {
    /* console.log("Has seleccionado: Triangulo"); */
    let base=prompt('Introduce la base del triángulo')
    let height=prompt('Introduce la altura del triángulo')
    let resultado = base*height/2;
    pintar.innerHTML = `El resultado de seleccion para el ${figure} es: ` + resultado

}else if(figure.toLowerCase() === "rectangulo"){
    /* console.log("Has seleccionado: Rectangulo"); */
    let base=prompt('Introduce la base del rectángulo');
    let height=prompt('Introduce la altura del rectángulo');
    let resultado = base*height;
    pintar.innerHTML = `El resultado de seleccion para el ${figure} es: ` + resultado

}else if(figure.toLowerCase() === "circulo"){
    /* console.log("Has seleccionado: Circulo"); */
    let radius=prompt('Introduce la radio del circulo');
    let resultado = Math.PI * Math.pow(radius,2);
    pintar.innerHTML = `El resultado de seleccion para el ${figure} es: ` + resultado

}else if(figure.length === 0){ // Aqui estoy comprobando de que el prompt no erste vacio y recarga de nuevo la pagina
    location.reload()
}

/* let triangulo = "";

let b = prompt("Introduce la Base");

let h = prompt("Introduce el Altura");

console.log(`El área triángulo mide ${(b * h) / 2}`);

let rectángulo = "";

console.log(`El área rectángulo mide ${b * h}`);

let círculo = "";

console.log(`El área círculo mide ${Math.PI * Math.pow(b, 2)}`); */

/*solucion del profe*/
/* 
let figure = prompt('Introduce la figura geómerica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triángulo')
        height=prompt('Introduce la altura del triángulo')
        console.log(`El área del triángulo es ${(base*height)/2}`);
        break;
    case 'rectangle':
        base=prompt('Introduce la base del rectángulo')
        height=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${(base*height)}`);
        break;
    case 'circle':
        radius=prompt('Introduce la radio del circulo')
        console.log(`El área del circulo es ${Math.PI * Math.pow(radius,2)}`);
        break;
} */
