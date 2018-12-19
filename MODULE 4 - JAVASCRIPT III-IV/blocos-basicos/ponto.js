class Ponto { //classe
    constructor(nome, eixo_x, eixo_y) { //dois parâmetros, eixo x e eixo y
        this.nome = nome
        this.x = eixo_x
        this.y = eixo_y
    }

    mover_horizontalmente(distancia) { //método 
        this.x = this.eixo_x + distancia
        return this.x //retorna nova posição 
    }
    mover_verticalmente(distancia) { //metodo
        this.y = this.eixo_y + distancia
        return this.y //retorna nova posição
    }
    
    //--console.log
    // const ponto1 = new Ponto (1, 1)
    // undefined
    // ponto1
    // Ponto {eixo_x: 1, eixo_y: 1}eixo_x: 1eixo_y: 1__proto__: Object
    // ponto1.mover_horizontalmente(3)
    // undefined
    // ponto1
    // Ponto {eixo_x: 4, eixo_y: 1}

    mover(distanciaX, distanciaY) {
        this.x = this.x + distanciaX
        this.y = this.y + distanciaY
        return [this.x, this.y]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x 
        const y1 = this.y 
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y 
        return Math.sqrt((Math.abs(x1 - x2)) **2 + (Math.abs (y1 - y2))** 2)
    }
}


class Div extends Ponto {
    constructor(nome, cor, altura, largura) {
        super (nome, 0,0)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }   
    desenhar() {
        const body
    }
}