//Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var valor1 = parseInt(prompt("Digite o primeiro valor")) 
var valor2 = parseInt(prompt("Digite o segundo valor"))
var valor3 = parseInt(prompt("Digite o terceiro valor"))

if(valor1 < valor2 && valor1 < valor3){
    let valorSomado = valor2 + valor3
    alert(`O segundo e terceiro número foram os maiores informados. A soma deles são ${valorSomado}`)

} else if(valor2 < valor1 && valor2 < valor3) {
    let valorSomado = valor1 + valor3
    alert(`O primeiro e terceiro número foram os maiores informados. A soma deles são ${valorSomado}`)
} else {
    let valorSomado = valor1 + valor2
    alert(`O primeiro e segundo número foram os maiores informados. A soma deles são ${valorSomado}`)
}