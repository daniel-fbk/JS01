/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet  variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

let color = "Blue";
const thousand = 1000;
let whatIsIt = false;
let above = ["Blue", 1000, false];
console.log(color, thousand, whatIsIt, above);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

const firstNum = 5;
const secondNum = 10;

let totalSum = firstNum + secondNum;

console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum / secondNum);
console.log(firstNum * secondNum);

console.log(totalSum);

totalSum++;
console.log(totalSum);

totalSum--;
console.log(totalSum);

totalSum += totalSum;
console.log(totalSum);

totalSum -= totalSum;
console.log(totalSum);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

function oppgave4() {
  if (userName != "") {
    console.log(`Username is: ${userName}`);
  } else {
    userName = "Daniel";
    console.log(`Username set to: ${userName}`);
  }

  if (userAge >= 18) {
    console.log("User age is 18 or above.");
  } else {
    console.log("User age is below 18.");
  }

  if (userIsBlocked === true) {
    console.log("User is blocked.");
  } else if (userIsBlocked === false) {
    console.log("User is not blocked.");
  }

  if (userName != "" && userAge >= 18 && userIsBlocked == false) {
    userIsLoggedIn = true;
    goToPage = "index.html";
    console.log("Everything is true.");
  } else {
    console.log("It is not true.");
  }
}

function reset() {
  if (userIsLoggedIn === true) {
    window.location.href = goToPage;
  }
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

const userTitle = `Title: ${userMale ? "Mr." : "Mrs."}`;

console.log(userTitle);
