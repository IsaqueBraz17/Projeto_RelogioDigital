// Variaveis do sistema

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Sitesma para funcionar o Relógio

function newTime(){
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.textContent = sixTime(hours);
    minutesElement.textContent = sixTime(minutes);
    secondsElement.textContent = sixTime(seconds);

}

// Function para colocar '0' na frente (Horas, Minutos e Segundos)

function sixTime(time){
    return time <10 ? '0' + time:time
}


// Sistema para deixar Automático

newTime()
setInterval(newTime, 1000)
