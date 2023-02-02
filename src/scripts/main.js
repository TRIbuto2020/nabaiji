AOS.init();

const dataDoEvento = new Date("Nov 07, 2023 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;
    const diasAteEvento = Math.floor(distanciaAteEvento/(1000*60*60*24));
    const horasAteEvento = Math.floor((distanciaAteEvento%(1000*60*60*24))/(1000*60*60));
    const minutosAteEvento = Math.floor((distanciaAteEvento%(1000*60*60))/(1000*60));
    const segundosAteEvento = Math.floor((distanciaAteEvento%(1000*60))/(1000));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(diasAteEvento<0){
        clearInterval(contaAsHoras);
        document.querySelector('.hero__text').innerHTML = 'O evento já ocorreu!'
    }
}, 1000);