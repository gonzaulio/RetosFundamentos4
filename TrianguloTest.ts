import { punto } from "./Punto";
import { triangulo } from "./Triangulo";

let primerpunto:punto = new punto(8,5);
let segundopunto:punto = new punto(1,1);
let tercerpunto:punto = new punto(5,3);
let primertriangulo:triangulo = new triangulo(primerpunto, segundopunto, tercerpunto);
console.log(primertriangulo.calcularLongitudLados());

console.log(primerpunto.calcularDistancia(segundopunto));