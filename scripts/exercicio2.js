//2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

var valor = prompt("Informe um valor: ")

if (valor == 0){
    alert("O valor que você digitou é zero")
} else if (valor > 0){
    alert("O valor que você digitou é positivo")
} else if (valor < 0){
    alert("O valor que você digitou é negativo")
} else {
    alert("Opção inválida :(")
}