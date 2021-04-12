var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");
var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;

console.log("La prima parola: " + primaParola + " è composta da: " + lunghezzaPrimaParola + " caratteri");
console.log("La seconda parola: " + secondaParola + " è composta da: " + lunghezzaSecondaParola + " caratteri");

if(primaParola === "" || secondaParola === ""){
    console.log("Non hai inserito una delle due parole o tutte e due le parole");
}else if(lunghezzaPrimaParola > lunghezzaSecondaParola){
    console.log(secondaParola);
    console.log(primaParola);
} else if(lunghezzaSecondaParola > lunghezzaPrimaParola){
    console.log(primaParola);
    console.log(secondaParola);
} else{
    console.log("Le due parole hanno la stessa lunghezza");
}