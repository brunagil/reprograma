/// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) { //inicio da função 
   let cleanRG = unformatted.replace(/\D/g,""); //regex de deletar todos os números
        
    if(cleanRG.length == 9) {
        cleanRG = cleanRG.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4") //divide em grupos da quantidade de dígitos = 2, 3, 3 e 1.
        //No $, ele chama os grupos e acrescenta as pontuações padrão do RG

    }  console.log(cleanRG)
}


//------------------

