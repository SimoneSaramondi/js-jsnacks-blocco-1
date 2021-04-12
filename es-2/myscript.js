var somma = 0;
var numero;

for (var i = 0; i < 10; i++) {    
    if (!Number.isNaN(numero)){
        somma += numero;
    }
}
console.log("La somma dei dieci numeri è: " + somma);