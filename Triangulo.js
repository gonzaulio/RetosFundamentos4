"use strict";
exports.__esModule = true;
exports.triangulo = void 0;
var triangulo = /** @class */ (function () {
    function triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    triangulo.prototype.calcularLongitudLados = function () {
        var arraylados = [];
        arraylados.push(this.vertice1.calcularDistancia(this.vertice2));
        arraylados.push(this.vertice2.calcularDistancia(this.vertice3));
        arraylados.push(this.vertice3.calcularDistancia(this.vertice1));
        return arraylados;
    };
    return triangulo;
}());
exports.triangulo = triangulo;
