// Escreva uma função que recebe
// um número e retorna `true` se ele
// é um numero de cartao de credito
// valido ou `false` se não.
//
// Dica: Algoritmo de Luhn.

// Primeira coisa: limpar as strings e tirar de lá os elementos diferentes de números
//1º - validar se todos os elementos são números. Tirar letras, espaços em branco e simbolos
//2º - loopar a sequencia desses dígitos de trás pra frente 
    //1º - entrar na validação do algoritmo de Luhn: pegar um dígito sim e um não, e multiplicar por dois
    //2º - se for o produto for maior que nove, somar os algarismos formados (ex: 14 = 1+4 = 5)
    //3º - depois do passo 2, somar todos os números 
//3º - pegar a soma total, e verificar se o módulo de 10 é igual a 0
    //se verdadeiro = retorna true
    //se falso = retorna false 


// typeof = se preocupa com o TIPO e não com o conteúdo do que está sendo definido
// no JS, se você multiplica uma string por 1, você transforma ele em um número

// lopping for =/ posso fazer de trás pra frente, começando i no ultimo elemento da array e diminuindo a iteração (i--)


function isValidCreditCard(card) { 
    let clean_card = "" //variável/string vazia. Vou colocar só os números dentro dela 
    for (const char of card) { //loop
        if ("0123456789".indexOf(char !== -1) { // se o char multiplicado por 1 não for igual a um número
            clean_card += char //clean_card = clean_card + char //=> a lista vazia ganha um caracter número 
        }

    }
}   //ou ...
        //for (let i = 0; i < card.length; i++) {
            // const char = card.charAt(i)
        //}






    function isValidCreditCard(card) { 
        let clean_card = card.replace(/\D/g, "") //para criação de um padrão de uma string 
        let aux = false // primeiro eu crio uma variável auxiliar e estabeleço que ele começa com o valor 'falso'
        for (let i = card.length - 1; i >= 0; i-- ) {
            if (aux) {
                let product = card[i] * 2 
                if (product > 9) {
                    product = product - 9 //product -=9 // é a mesma coisa que somar cada um dos dígitos
                    
                }
            }
            sum+= parseInt(card[i])  //sum = sum + parsetInt(card[i])
            aux = !aux
        }
        if (sum % 10 === 0) {
        return true
    } else {
        return false 
    }
              
    
    
    //ou...
//let product = (card[i] * 2 ).toString()
// if (product.length === 2) {
//     product = parseInt(product[0]) + parset (product[1])
// aux = !aux


const valid_credit_cards = [ //todos esses números devem retornar TRUE
    "799 273 987 13",
    "378734493671000",
    "3714-4963-5398-431",
    "5610XXX..5910--810!18250",
    "30569309025904",
    "385 2000   0023 237",
    "6011111111111117",
    "6011000990139424",
    "353 0111 3333 00000",
    "356600 woop woop 2020360505",
    "5555555555554444",
    "5105105105105100"
]

for (const valid of valid_credit_cards) {
    console.log(isValidCreditCard(valid))
}

const invalid_credit_cards = [ //todos esses números devem retornar FALSE 
    "799 223 987 13",
    "3787786493671000",
    "3724-4963-5398-431",
    "5610XX3..5910--810!18250",
    "0305699025904",
    "385 2000   0011123 237",
    "6011111111117",
    "60190139424",
    "353 0111 3333 00100",
    "3566043 woop woop 2020360505",
    "55553555555554444",
    "5105205105105100"
]

for (const invalid of invalid_credit_cards) {
    console.log(isValidCreditCard(invalid))
}