 //7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

 var numeros = [];
 var soma = 0;

 for (i = 0; i < 6; i++) {
     var numero = parseInt(prompt("Informe o seu número: "))
     numeros.push(numero)

     if (numero < 72) {
         soma += numero
     }
 }

 alert(`Os números que você digitou são: ${numeros}. A soma dos números inferiores a 72 é: ${soma}`)