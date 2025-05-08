document.addEventListener('DOMContentLoaded', function() {
  const ghost = document.querySelector('.loader');
  const particles = ghost.querySelectorAll('.particle');

  function hideGhost() {
    console.log("Fantasma clicado!");

    // Aplica dispersão nas partículas
    particles.forEach(p => {
      const dx = (Math.random() - 0.5) * 200;
      const dy = (Math.random() - 0.5) * 200;
      p.style.setProperty('--dx', `${dx}px`)
      p.style.setProperty('--dy', `${dy}px`)
      p.style.animation = 'disperse 1s forwards';
    });

    // Esconde o fantasma
    ghost.classList.add('hidden');

    // Limpa as partículas após 1 segundo (quando a animação termina)
    setTimeout(() => {
      particles.forEach(p => {
        p.style.animation = '';
      });
    }, 1000);

    // Mostra o fantasma de novo após 10 segundos
    setTimeout(() => {
      ghost.classList.remove('hidden');
      console.log("Fantasma reapareceu!");
    }, 10000);
  }

  if (ghost) {
    ghost.addEventListener('click', hideGhost);
  } else {
    console.log("Fantasma não encontrado!");
  }
});