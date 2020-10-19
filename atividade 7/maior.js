var a = parseFloat(prompt("Digite o 1º Numero: "));
var b = parseFloat(prompt("Digite o 2º Numero: "));
var c = parseFloat(prompt("Digite o 3º Numero: "));

function achaMaior(a,b,c) {
    if (a == b && a ==c && b ==c) 
    {
        alert("Os numeros são iguais");
    }
    if (a == b){
        alert("1º e 2º são iguais")
    }
    if (b == c) {
        alert("2º e 3º são iguais")
    }
    if (a == c) {
        alert("1º e 3º são iguais")
    }
    return Math.max(a,b,c);
}

alert(result = achaMaior(a,b,c));

        
     
        