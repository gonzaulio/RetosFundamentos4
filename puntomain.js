"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var coordenada1 = new Punto_1.punto(8, 5);
var coordenada2 = new Punto_1.punto(8, 7);
console.log(coordenada1);
console.log(coordenada1.toString());
console.log(coordenada1.distanciaAlOrigen());
console.log(coordenada1.calcularDistancia(coordenada2));
console.log(coordenada1.calcularCuadrante());
console.log(coordenada1.calcularMasCercano([(new Punto_1.punto(10, 10)), (new Punto_1.punto(9, 6)), (new Punto_1.punto(100, 100))]));
