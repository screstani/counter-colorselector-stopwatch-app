const countDownDate = new Date("Jan 01, 2023 00:00:00").getTime();
const myfunc = setInterval(function() {
  const now = new Date().getTime();
  const timeleft = countDownDate-now;

  let days = Math.floor(timeleft/ (1000 * 60 * 60 * 24));
  let hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(timeleft % (1000 * 60) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

if
 (timeleft < 0) {

  // adicionar as classes para deixar fundo verde e texto branco
 }
