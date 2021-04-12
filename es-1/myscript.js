var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");
var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;

console.log("La prima parola: " + primaParola + " è composta da: " + lunghezzaPrimaParola + " caratteri");
console.log("La seconda parola: " + secondaParola + " è composta da: " + lunghezzaSecondaParola + " caratteri");

if(primaParola === "" || secondaParola === "" || typeof primaParola !== "undefined" || typeof secondaParola !== "undefined"){
    console.log("Non hai inserito una delle due parole o tutte e due le parole o hai inserito parole con numeri");
}else if(lunghezzaPrimaParola > lunghezzaSecondaParola){
    console.log(secondaParola);
    console.log(primaParola);
    document.getElementById("stampa").innerHTML= secondaParola + " " + primaParola;
} else if(lunghezzaSecondaParola > lunghezzaPrimaParola){
    console.log(primaParola);
    console.log(secondaParola);
    document.getElementById("stampa").innerHTML= primaParola + " " + secondaParola;
} else{
    console.log("Le due parole hanno la stessa lunghezza");
    document.getElementById("stampa").innerHTML= "Le due parole hanno la stessa lunghezza";
}