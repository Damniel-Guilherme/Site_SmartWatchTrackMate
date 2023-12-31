// MENU HAMBURGER

const btnmobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type =='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnmobile.addEventListener('click' , toggleMenu);
btnmobile.addEventListener('touchstart' , toggleMenu);


// Animações

// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash
// const debounce = function(func, wait, immediate) {
//     let timeout;
//     return function(...args) {
//       const context = this;
//       const later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       const callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       if (callNow) func.apply(context, args);
//     };
//   };
  
  // const target = document.querySelectorAll('[data-anime]');
  // const animationClass = 'animate';
  
  // function animeScroll() {
  //   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3g);
  //   target.forEach(function(element) {
  //     if((windowTop) > element.offsetTop) {
  //       element.classList.add(animationClass);
  //     } else {
  //       element.classList.remove(animationClass);
  //     }
  //   })
  // }
  
  // animeScroll();
  
  // if(target.length) {
  //   window.addEventListener('scroll', debounce(function() {
  //     animeScroll();
  //   }, 200));
  // }