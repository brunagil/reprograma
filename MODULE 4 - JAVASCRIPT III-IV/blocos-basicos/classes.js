const ale = {
    altura: 1.68,
    signo: "Leão", 
    cor_do_cabelo: "Ruivo",
    id_genero: "F",
    etnia: "Negra",
    profissão: ["Desenvolvedora", "Influenciadora", "Proxima Nataly Nery"], 
    pintar_o_cabelo: function (cor) {
        this.cor_do_cabelo = cor
    }, 
    contratar: function (profissao) {
        this.profissao.push(profissao)
    },
    crescer: function() {
        let nova_altura = this.altura + 0.01 
        this.altura = parseInt(nova_altura.toFixed(2)) //toFixed => transforma um número em uma string 
    }
}

//---- FUNÇÃO MULHER - OBJETO 
function Mulher (nome, signo, cor_do_cabelo, etnia) {
    this.nome = nome
    this.altura = 0.4 //altura pré-determinada 
    this.signo = signo
    this.cor_do_cabelo = cor_do_cabelo
    this.id_genero = "F"
    this.etnia = etnia
    this.profissao = [] //string vazia, que será preenchida com a função 'contratar'
    this.pintar_o_cabelo = function (cor) 
    { 
        this.cor_do_cabelo = cor 

    }
    this.contratar = function() {
        this.profissao.push(...arguments)
    }
    this.crescer = function() {
        let nova_altura = this.altura + 0.01
        this.altura = parseFloat(nova_altura.toFixed(2))
    }
}

//----- CLASS --- sintax sugar 

class Mulher {
    constructor (nome, signo, cor_do_cabelo, etnia) {
        this.nome = nome 
        this.altura = 0.4
        this.signo = signo
        this.cor_do_cabelo = cor_do_cabelo
        this.id_genero = "F"
        this.etnia = etnia
        this.profissao = []
    }
    pintar_o_cabelo (cor) {
        this.cor_do_cabelo = cor
    }
    contratar () {
        this.profissao.push(...arguments)
    }
    crescer() {
        let nova_altura = this.altura + 0.01
        this.altura = parseFloat(nova_altura.toFixed(2))
    }
}


//--- function x class //-- HOISTING 

const teste = new Teste () //pode ser definida onde quiser 
function Teste() {
    this.uq = "uq"
}

class Teste { //primeiro se define a classe, e depois usa ela 
    constructor() {
        this.uq = "uq"
    }
}
const teste = new Teste ()  //não pode usar uma constante antes de definir ela na classe 

//--criando objeto através da classe

const mariana = new Mulher ("Mariana", "Gemeos", "Rosa", "Branca")
mariana.pintar_o_cabelo("Roxo")
mariana.cor_do_cabelo ->>> "Roxo"

looping para objetos 
for (const prop in mariana) { //funciona para loopar um array e um OBJETO!
    console.log(prop)
    console.log(prop, mariana[prop])
}
//resposta

nome 
altura 
signo
cor_do_cabelo 
etc... 



// const ale = {
//     altura: 1.68,
//     signo: "Leão", 
//     cor_do_cabelo: "Ruivo",
//     id_genero: "F",
//     etnia: "Negra",
//     profissão: ["Desenvolvedora", "Influenciadora", "Proxima Nataly Nery"], 
//     pintar_o_cabelo: cor => this.cor_do_cabelo = cor,     ///THIS não funciona com arrow functions
//     contratar: profissao => this.profissao.push(profissao),
//     crescer: () => this.altura +=0.01
//     }


/* ... 

let arr = [1,2,3,4]
let arr2 = [5,6,7]

arr.push(arr2)  => push muda a array original 
[1,2,3,4, arr2]

para explodir a Array, tira cada um dos elementos e coloca os elementos em sequencia, com vírgulas
spread (...) cria uma nova array 

const arr = [1,2,3,4]
const arr2 = [5,6,7]
const arr3 = [... arr, ...arr2]
arr3 = [1,2,3,4,5,6,7]  

//--- dá pra usar o PUSH também com o spread
arr.push(...arr2)

ale.profissao ou ale["profissao"]

//---para crescer em looping
for (let i = 0 , i < 50, i++) {

}

Função construtora sempre retorna um objeto

O objeto é o resultado da função construtora. A função é o construtor

Função construtora é um molde de massa 
A massa são os argumentos que são comuns a todos 

*/

