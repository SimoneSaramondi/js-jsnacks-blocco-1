var somma = 0;
var numero;

for (var i = 0; i < 10; i++) {
    numero = parseInt(prompt("Inserisci il " + i + " ^ numero"));
    
    if (!Number.isNaN(numero)) {
        somma += numero;
    }else{
        numero = parseInt(prompt("Non hai inserito un numero corretto Reinserisci il " + i + " ^ numero"));
        somma += numero;
    }
}
console.log("La somma dei dieci numeri è: " + somma);
document.getElementById("somma").innerHTML="La somma della serie è: " + somma;