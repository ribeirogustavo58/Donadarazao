'use strict';
let votoSim = window.document.getElementById('sim');
let votoNao = window.document.getElementById('nao');

let parceiro = prompt('Digite seu nome.');
if (parceiro) {
    document.querySelector('.conteudo__titulo').classList.remove('hidden');
    document.querySelector('.conteudo__titulo').innerHTML += parceiro + ' ?';
}
const alertas = () => {
  alert(`💞 Nunca desconfiei que escolheria qualquer outra opção ${parceiro}, agora clique em OK 🥰`);
  location.href = "https://www.youtube.com/watch?v=r73ANL4ecnE&ab_channel=HenriqueeJuliano";
};

const zoeira = () => {
    const rect = votoNao.getBoundingClientRect(); // Obter as dimensões do botão

    votoNao.style.position = 'absolute';
    votoNao.style.top = Math.random() * (window.innerHeight - rect.height) + 'px'; // Subtrai a altura do botão
    votoNao.style.left = Math.random() * (window.innerWidth - rect.width) + 'px'; // Subtrai a largura do botão
};

votoSim.addEventListener('click', alertas);
votoNao.addEventListener('click', zoeira);
