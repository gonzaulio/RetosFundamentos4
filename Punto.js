"use strict";
exports.__esModule = true;
exports.punto = void 0;
var punto = /** @class */ (function () {
    function punto(x, y) {
        this.x = x;
        this.y = y;
    }
    punto.prototype.toString = function () {
        return "(" + String(this.x) + "," + String(this.y) + ")";
    };
    punto.prototype.getX = function () { return this.x; };
    punto.prototype.setX = function (x) { this.x = x; };
    punto.prototype.getY = function () { return this.y; };
    punto.prototype.setY = function (y) { this.y = y; };
    punto.prototype.distanciaAlOrigen = function () {
        var distancia = 0;
        return distancia = Math.round(Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2))));
    };
    punto.prototype.calcularDistancia = function (otropunto) {
        var distanciapuntos = 0;
        // √(x2 - x1)2 + (y2-y1)2
        return distanciapuntos = Math.round(Math.sqrt((Math.pow((otropunto.x - this.x), 2)) + (Math.pow((otropunto.y - this.y), 2))));
    };
    punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    punto.prototype.calcularMasCercano = function (puntos) {
        var puntomascercano;
        var contenedor1 = 0;
        var contenedor2 = this.calcularDistancia(puntos[0]);
        for (var index = 0; index < puntos.length; index++) {
            contenedor1 = this.calcularDistancia(puntos[index]);
            if (contenedor1 <= contenedor2) {
                contenedor2 = contenedor1;
                puntomascercano = puntos[index];
            }
        }
        return puntomascercano;
    };
    return punto;
}());
exports.punto = punto;
