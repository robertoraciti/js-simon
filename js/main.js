// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

const now = new Date();
const endCountdown = new Date("2023-08-25 9:30");
console.log(endCountdown);

const msNow = now.getTime();
const msEndCountdown = endCountdown.getTime();
console.log(msNow, msEndCountdown);

const msToEndCountdown = msEndCountdown - msNow;
