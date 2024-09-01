//3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

var valor1 = prompt("Digite o primeiro valor")
var valor2 = prompt("Digite o segundo valor")
var valor3 = prompt("Digite o terceiro valor")

if(valor1 > valor2 && valor3){
    alert(`O maior número que você digitou foi o primeiro. O valor dele é: ${valor1}`)
}else if (valor3 > valor2 && valor1){
    alert(`O maior número que você digitou foi o terceiro. O valor dele é: ${valor3}`)
} else if (valor2 > valor3 && valor1){
    alert(`O maior número que você digitou foi o segundo. O valor dele é: ${valor2}`)
} else {
    alert("===Inválido===")
}