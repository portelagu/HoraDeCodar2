//1. Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles.

var primeiroNumero = prompt("Digite o primeiro número: ")
var segundoNumero = prompt("Digite o segundo número: ")

if(primeiroNumero > segundoNumero){
    alert(`O primeiro número que você informou é o maior. Ele é: ${primeiroNumero}`)
} else if (primeiroNumero < segundoNumero) {
    alert(`O segundo número que você informou é o maior. Ele é: ${segundoNumero}`)
} else {
    alert("Opção Inválida.")
}