// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

const now = new Date();
const endCountdown = new Date("2023-08-25 9:30");
console.log(endCountdown);

const msNow = now.getTime();
const msEndCountdown = endCountdown.getTime();
console.log(msNow, msEndCountdown);

const sToEndCountdown = Math.floor((msEndCountdown - msNow) / 1000);
console.log(sToEndCountdown);

const seconds = sToEndCountdown % 60;
const minutes = Math.floor((sToEndCountdown / 60) % 60);
const hours = Math.floor((sToEndCountdown / 60 / 60) % 24);
const days = Math.floor(sToEndCountdown / 60 / 60 / 24);
console.log(days, hours, minutes, seconds);
