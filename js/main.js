// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");

countdown();
setInterval(() => {
  //   Trovo data di partenza
  const now = new Date();
  //   Trovo data di arrivo
  const endCountdown = new Date("2023-08-25 9:30");

  //   Conto i ms della data corrente
  const msNow = now.getTime();
  //   Conto i ms della data di arrivo
  const msEndCountdown = endCountdown.getTime();

  //   Rendo interi i millisecondi che mi separano dalla data di arrivo
  const sToEndCountdown = Math.floor((msEndCountdown - msNow) / 1000);

  // Converto i dati raccolti e li rendo interi e in sessantesimi(secondi e minuti)
  const seconds = sToEndCountdown % 60;
  const minutes = Math.floor((sToEndCountdown / 60) % 60);
  const hours = Math.floor((sToEndCountdown / 60 / 60) % 24);
  const days = Math.floor(sToEndCountdown / 60 / 60 / 24);
  console.log(days, hours, minutes, seconds);

  // Stampo i dati raccolti
  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerText = hours < 10 ? "0" + hours : hours;
  daysEl.innerText = days < 10 ? "0" + days : days;
}, 1000);

function countdown() {
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

  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerText = hours < 10 ? "0" + hours : hours;
  daysEl.innerText = days < 10 ? "0" + days : days;
}
