//8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var valores = []
soma = 0;

for(i=0; i < 4; i++){
    var valor = parseInt(prompt("Informe um valor: "))
    if (valor > 0 && valor < 10){
        valores.push(valor)
    }

    soma+= valor;
}

var media = soma / 4;

if (media > 5){
    alert("Você passou no teste.")
} else {
    alert("Tente novamente.")
}