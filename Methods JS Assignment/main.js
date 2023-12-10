// METHODS Kopier hele oppgaven til vs code
const text = "  Javascript er vanskelig  ";
/*
Bruk string methods på text til å:
Bytte ut ordet 'vanskelig' med ordet 'gøy'.*/
const modifiedText = text.replaceAll("vanskelig", "gøy");
console.log(modifiedText);

//Gjør hele setningen om til store bokstaver.
let capitalText = text.toUpperCase();
console.log(capitalText);

//Fjern mellomrom på begynnelsen og slutten av setningen.
let removeSpace = text.trim();
console.log(removeSpace);

// Alt på en gang
const assignment1 = text.trim().replace("vanskelig", "gøy").toUpperCase();
console.log(assignment1);

// Ny oppgave
const number = 56123.321313;

/*
Vi har ikke snakket om det, men prøv å bruke google for å finne frem til løsningen


Bruk number methods til å:*/

//Begrense antall siffer etter desimalpunktet til 2
const roundedNumber = number.toFixed(2);
console.log(roundedNumber);

//Konvertere tallet til en string

const marvelHeroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
];

//Bruk array methods til å:

//Legge til en ny marvel helt på slutten av arrayet

//Fjerne den første helten i arrayet (Spider-Man)
marvelHeroes.shift();

//Bytt ut 'Doctor Strange' med 'Thanatos'
marvelHeroes[3] = "Thanatos";

//Slå sammen arrayet til en string med et utropstegn (!) mellom hver helt.
const exclamationPointedHeroes = marvelHeroes.map((hero) => hero + "!");
console.log(exclamationPointedHeroes);
