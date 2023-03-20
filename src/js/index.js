const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos")

const relogio = setInterval( () => {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mt = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) {
        hr = '0' + hr
    }
    if (mt < 10) {
        mt = '0' + mt
    }
    if (s < 10) {
        s ='0' + s
    }
    
    horas.textContent = hr
    minutos.textContent = mt
    segundos.textContent = s
})