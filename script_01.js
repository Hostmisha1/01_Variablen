/***** Variablen 01 *******/

// Zeilen-Kommentar

/**
 *  Block -Kommentar
 *  
 */

// Ausgabe
// console.log("Hallo Welt!");
// //console.log(firstName); // nicht deklarierte Var. --> Fehler

// 02 Deklaration + Wertzuweisung

// let firstName;      // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration und Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); //Ausgabe

//   // 03 Deklaration + Wertzuweisung II

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");
// console.log(firstName); // Ausgabe
// console.log(familyName); //Ausgabe
// console.log("Hallo " + firstName + " " + familyName +"!"); //Ausgabe

//JS ist eine untypisierte Sprache! Untyped


let test; // Deklaration (Definition)
test = "Hi"; // string
test = 2;  // number
test = true; // boolean

console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);