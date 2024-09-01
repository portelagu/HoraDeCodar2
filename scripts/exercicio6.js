//6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

var valores = [];
var valorMaior = 0;

for(i=0; i<4; i++) {
    var valor = parseInt(prompt("Informe o valor: "))
    valores.push(valor);

    if(valores[i] > valorMaior){
        valorMaior = valores[i];
    }
}

alert(`O primeiro número informado é: ${valores[0]}. O último número informado é: ${valores[3]}. O maior número entre todos os informados é: ${valorMaior}`)