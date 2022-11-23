let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// const botaoIniciar =  document.querySelector('#startTimer');
// const botaoPausar =  document.querySelector('#pauseTimer');
// const botaoParar =  document.querySelector('#resetTimer');

// botaoIniciar.addEventListener('click', () => alteraEstado('INICIAR'));
// botaoPausar.addEventListener('click',  () => alteraEstado('PAUSAR'));
// botaoParar.addEventListener('click',   () => alteraEstado('PARAR'));

// // Capturar referência para o <output>:
// const output = document.querySelector('output');

// let contagem = 0;
// let estado = 'PARADO';

// /**
//  * Computa o novo estado da aplicação baseado na ação especificada.
//  *
//  * @param acao INICIAR ou PAUSAR ou PARAR.
//  */
// function alteraEstado(acao) {
//   switch (estado) {

//     case 'PARADO':
//       switch (acao) {
//         case 'INICIAR':
//           estado = 'RODANDO';
//           break;
//         case 'PARAR':
//           estado = 'PARADO'; // opcional, pois estado inicial = estado final
//           contagem = 0;
//           break;
//       }
//       break;

//     case 'RODANDO':
//       switch (acao) {
//         case 'PAUSAR':
//           estado = 'PARADO';
//           break;
//         case 'PARAR':
//           estado = 'PARADO';
//           contagem = 0;
//           break;
//       }
//       break;

//   }
// }

// /**
//  * Atualiza a tela a cada 100 ms com base nas variáveis da memória.
//  */
// setInterval(
//   function() {
//     if (estado === 'RODANDO') {
//       contagem += 100;
//     }
//     output.innerHTML = `${(contagem / 1000).toFixed(1)} s`;
//   },
//   100,
// );
