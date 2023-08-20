let meses = document.querySelector('#a');
let semana = document.querySelector('#m');
let data= document.querySelector('#d');
let dia = new Date();
let semanaEscrita = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
dDaSemana = semanaEscrita[dia.getDay()];
mesesEscrito = mesesDoAno[dia.getMonth()];
dBr = dia.toLocaleDateString('pt-BR');


meses.innerHTML = `${mesesEscrito}`
semana.innerHTML = `${dDaSemana}`
data.innerHTML = `${dBr}`

let hora = document.querySelector('#horas')
let mim = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

setInterval(() =>{
    let date = new Date()
    let dhora = date.getHours()
    let dminu = date.getMinutes()
    let dsec = date.getSeconds()

    hora.innerHTML = `${formaTime(dhora)}`
    mim.innerHTML = `${formaTime(dminu)}`
    segundos.innerHTML = `${formaTime(dsec)}`

}, 1000)

function formaTime(time){
    return time < 10 ? '0' + time : time
}
