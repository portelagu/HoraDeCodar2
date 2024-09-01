//9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var anoNascimento = prompt("Por favor, digite o seu ano de nascimento: ")
var anoAtual = 2024

var idade = 2024 - anoNascimento

if (idade >= 16){
    alert("Você está apto a votar este ano! :)")
} else {
    alert("Você não está apto a votar este ano... ")
}