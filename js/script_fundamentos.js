//Comentário de uma linha

/*
    Comentário de múltiplas linhas
    É possível ter várias
    linhas
*/

console.log("Olá Mundo")

//Declaração de Variável
let num = 10
var num2 = 40
const num3 = 300
const num4 = 100

console.log(num)
console.log(num2)
console.log(num3)
console.log(num4 + num)
console.log(num4 * num)
console.log(num2 + num * num2)

if (true){
    let num5 = 250
    console.log(num5)

    var num6 = 13
    
}

console.log(num6)

num = 1802
console.log(num)

num2 = 1700
console.log(num2)

//não e possivel alterar uma const
//num3 = 900
console.log(num3)

//Concatenação
console.log('Valor da variável num3 é ' + num3)
console.log("Valor da variável num3 é " + num3)
console.log('Valor da variável num3 é ' , num3)
console.log(`Valor da variável num3 é ${num3}`)

//Operadores matemáticos

/*
    + soma
    - subtração
    * multiplicação
    / divisão
    % módulo - Resto da dicisão
*/

console.log('A soma dos números é ', 12 + 8)
console.log('A subtração entre variáveis ', num2 - num3)
console.log('A multiplicação dos números ', num2 * 5)
console.log('A divisão entre os valores ', num3 / num2)
console.log(`O resto da divisão entre 10 e 2 é: ${10 % 2}`)

//Operadores Relacionais ou Comparação
/*
    > Maior
    < Menor
    >= Maior Igual
    <= Menor Igual
    != Diferente
*/
//Operadores Lógicos
/*
    && E
    || OU
*/



//Teste Lógico (Seleção)

let idade = 140
if(idade >= 18){
    console.log("Maior de Idade")
}else{
    console.log("Menor de idade")
}

// if ternário
idade >= 18 ? console.log("Maior de Idade") : console.log("Menor de idade")

/*
    Renovação da CNH
    18 até 49 -> 10 anos
    50 até 69 -> 5 anos
    70 acima -> 3 anos
*/

if(idade < 18){
    console.log(`COM ${idade}, NÃO É PERMITIDO POSSUIR CNH`)
}else if(idade < 50){
    console.log(`COM ${idade}, O TEMPO DE RENOVAÇÃO É DE 5 ANOS`)
}else if(idade >= 70){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS`)
}