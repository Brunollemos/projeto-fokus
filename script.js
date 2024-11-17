const html = document.querySelector('html');

const botoes = document.querySelectorAll('.app__card-button');
const botaoIniciar = document.querySelector('.app__card-primary-button');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {  
  alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
});

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,
      <br><strong class="app__title-strong">mergulhe no que importa</strong>`;
      focoBt.classList.add('active');
      curtoBt.classList.remove('active');
      longoBt.classList.remove('active');
    break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada?
      <br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      curtoBt.classList.add('active');
      focoBt.classList.remove('active');
      longoBt.classList.remove('active');
    break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.
      <br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      longoBt.classList.add('active');
      focoBt.classList.remove('active');
      curtoBt.classList.remove('active');
    break;
    default:
    break;
  }

}