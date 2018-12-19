const rect = { //constante do objeto
    altura: 10, //propriedade do objeto, nome e valor 
                    //objeto
    largura: 30, //propriedade do objeto, nome e valor 
    cor: "red",
    area: function () {
        return this.altura * this.largura //declara que altura e largura são referentes ao objeto
    }
}
              

//--- FUNÇÃO CONSTRUTORA - RETANGULOS 

function Retangulo (altura, largura, cor) { //não coloca return na função construtora 
    this.altura = altura 
    this.largura = largura
    this.cor = cor  
    this.area = function() { 
        return this.altura * this.largura //RETURN!!!!!!!!!!!!! 
    }
} 
  //---- ou 

function Retangulo (altura, largura, cor, unidade) { //não coloca return na função CONSTRUTORA 
    this.altura = altura 
    this.largura = largura
    this.cor = cor  
    this.unidade = unidade 
    this.area = this.altura * this.largura 
} 



///---- FUNÇÃO CLASSE 

class Retangulo {
    constructor (altura, largura, cor, unidade) {
        this.altura = altura 
        this.largura = largura
        this.cor = cor  
        this.unidade = unidade 
        this.area = this.altura * this.largura 
    }
}

//--ou

class Retangulo {
    constructor (altura, largura, cor, unidade) { //não coloca return no CONSTRUCTOR 
        this.altura = altura 
        this.largura = largura
        this.cor = cor  
        this.unidade = unidade 
        this.area = this.altura * this.largura 
    }
    area() {
        return this.altura * this.largura + this.unidade //
    }
    center() {
        return [this.altura / 2, this.largura/ 2] //array 
    }
}

//--- extend!!!!

class Quadrado extends Retangulo { //pegar as características do que foi declarado no Retangulo
    constructor(lado, cor, unidade) {
        super(lado, lado, cor, unidade) //super chama o construtor PAI (superior); chama a função anterior 
        //colocar mais coisas que o quadrado pode ter 
        this.textura = "textura" //característica que SÓ O QUADRADO TEM 

    } //const quadrado = new Quadrado (50, "amarelo", "cm")
}


class QuadradoLado10 extends Quadrado {
    construtor(cor, unidade) {
        super(10, cor, unidade)
        this.prop = "value"
    }
    area() { //area pode ser sobrescrita na função mais extendida 
        return "bruna gil"
    }
}
