const num = parseInt(process.argv[2]); // to entier number

function multiples(num) {
    if (num > 1000) {
        return "Hors programme, entrez un nombre inférieur à 1000";
    }

    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("Voici la somme des multiples a votre chiffre :" + '' + multiples(num));





