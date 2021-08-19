export class punto
{
    private x:number
    private y:number

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    toString():string
    {
       return `(${String(this.x)},${String(this.y)})`
    }

    getX():number
    {return this.x}
    setX(x:number)
    {this.x = x}

    getY():number
    {return this.y}
    setY(y:number)
    {this.y = y}

    distanciaAlOrigen():number
    {
        let distancia:number = 0
        return distancia = Math.round(Math.sqrt((this.x**2) + (this.y**2)))
    }

    calcularDistancia(otropunto:punto):number
    {
        let distanciapuntos:number = 0
        // √(x2 - x1)2 + (y2-y1)2
       return distanciapuntos = Math.round(Math.sqrt(((otropunto.x - this.x)**2) + ((otropunto.y - this.y)**2)))
    }

    calcularCuadrante(): number
    {
        if (this.x == 0 || this.y == 0)
        {return 0}
        else if (this.x > 0 && this.y > 0) 
        {return 1} 
        else if (this.x < 0 && this.y > 0)
        {return 2}
        else if (this.x < 0 && this.y < 0)
        {return 3}
        else if (this.x > 0 && this.y < 0) 
        {return 4}
    }

    calcularMasCercano(puntos:punto[]):punto
    {
        let puntomascercano:punto 
        let contenedor1:number = 0
        let contenedor2:number = this.calcularDistancia(puntos[0])

        for (let index = 0; index < puntos.length; index++) {
            contenedor1 = this.calcularDistancia(puntos[index])
            if (contenedor1 <= contenedor2) {
                contenedor2 = contenedor1
                puntomascercano = puntos[index]
            }
        }
        return puntomascercano
    }
}



