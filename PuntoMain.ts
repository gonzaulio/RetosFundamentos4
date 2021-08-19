import { punto } from "./Punto";

let coordenada1:punto = new punto(8,5);
console.log(coordenada1);
console.log(coordenada1.toString());


console.log(coordenada1.distanciaAlOrigen());
console.log(coordenada1.calcularDistancia(new punto(8,7)));
console.log(coordenada1.calcularCuadrante());

console.log(coordenada1.calcularMasCercano([(new punto (10,10)), (new punto (9,6)), (new punto (100,100))]));
