//11. Uma micro calculadora. Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

var primeiroValor = parseInt(prompt("Informe o primeiro valor: "))
var segundoValor = parseInt(prompt("Informe o segundo valor: "))

var opcao = parseInt(prompt("Qual operação você quer fazer? Digite 1 para adição, 2 para subtração, 3 para divisão e 4 para multiplicação."))

switch (opcao){

    case 1:
    soma = primeiroValor + segundoValor
    alert(`Você escolheu adição. Os números somados resultam em: ${soma}`)
    break;

    case 2:
    subtracao = primeiroValor - segundoValor
    alert(`Você escolheu subtração. Os números subtraidos resultam em: ${subtracao}`)
    break;

    case 3:
    divisao = primeiroValor / segundoValor
    alert(`Você escolheu divisão. Os números divididos resultam em: ${divisao}`)
    break;

    case 4:
    multiplicacao = primeiroValor * segundoValor
    alert(`Você escolheu multiplicação. Os números multiplicados resultam em: ${multiplicacao}`)
    break;

    default: 
    alert("Opção inválida.")
    break;
}