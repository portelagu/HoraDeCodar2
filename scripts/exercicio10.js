//10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.
var opcao = parseInt(prompt("Olá, digite 1 caso seu gênero biológico seja masculino e 2 caso seja feminino"));
var pesoIdeal;

switch(opcao){
    
    case 1:
    var altura = prompt("Agora informe a sua altura:");
    pesoIdeal = (72.7 * altura) - 58;
    alert(`O seu peso ideal é ${pesoIdeal}kg.`)
    break;

    case 2: 
    var altura = prompt("Agora informe a sua altura:");
    pesoIdeal = (62.1 * altura) - 44.7;
    alert(`O seu peso ideal é ${pesoIdeal}kg.`)
    break;

    default: 
    alert("Opção inválida.")
    break;
}