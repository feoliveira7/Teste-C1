const botaoSenai = document.getElementById('botao1');
const botaoSesi = document.getElementById('botao2');
const qrcode = document.getElementById('qrcodeImage');

function sesi(){
    botaoSenai.disabled = false;
    botaoSenai.style.opacity = '100%';
    botaoSenai.style.borderBottom = '0px solid rgb(255, 89, 89,0)'

    botaoSesi.disabled = true;
    botaoSesi.style.opacity = '65%';
    botaoSesi.style.borderBottom = '3.5px solid rgb(27, 27, 27)'

    qrcode.src = 'images/QRcodeSesi.png';
}

function senai(){
    botaoSesi.disabled = false;
    botaoSesi.style.opacity = '100%';
    botaoSesi.style.borderBottom = '0px solid rgb(255, 89, 89,0)'

    botaoSenai.disabled = true;
    botaoSenai.style.opacity = '65%';
    botaoSenai.style.borderBottom = '3.5px solid rgb(27, 27, 27)'

    qrcode.src = 'images/QRcodeSenai.png'



}