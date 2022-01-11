'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    // const segundos = document.getElementById('segundos');
    // const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    var tempo = {}
    tempo.segundos = formatarDigito(qtdSegundos);
    tempo.minutos = formatarDigito(qtdMinutos);
    tempo.horas = formatarDigito(qtdHoras);
    tempo.dias = formatarDigito(qtdDias);

    dias.textContent = tempo.dias
    horas.textContent = tempo.horas
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    // 1 de janeiro de 1970
    const dataEvento = new Date ('2022-01-15 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());