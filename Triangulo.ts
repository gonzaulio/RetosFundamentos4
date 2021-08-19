import { punto } from "./Punto";

export class triangulo
{
    private vertice1:punto
    private vertice2:punto
    private vertice3:punto

    constructor(vertice1:punto, vertice2:punto, vertice3:punto)
    {
        this.vertice1 = vertice1
        this.vertice3 = vertice2
        this.vertice3 = vertice3
    }

    calcularLongitudLados(): number[]
    {
        let arraylados:number[] = []
        arraylados.push(this.vertice1.calcularDistancia(this.vertice2));
        arraylados.push(this.vertice2.calcularDistancia(this.vertice3));
        arraylados.push(this.vertice3.calcularDistancia(this.vertice1));
        return arraylados
    }
}
