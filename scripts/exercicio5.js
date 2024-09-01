//5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.
var valores = []
var soma = 0

for(i=0; i<6; i++){
    var valor = parseInt(prompt("Informe um valor: "))

    valores.push(valor)
    soma+= valor
}

var media = soma / valores.length;
alert(`Os números informados foram: ${valores}. Logo, a média aritmética será: ${media}`);