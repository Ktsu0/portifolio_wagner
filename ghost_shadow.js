// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    const ghost = document.querySelector('.loader');
  
    // Função para esconder o fantasma
    function hideGhost() {
      console.log("Fantasma clicado!");  // Verifique se isso aparece no console
      ghost.classList.add('hidden');  // Adiciona a classe para esconder
      setTimeout(() => {
        ghost.classList.remove('hidden');  // Remove a classe após 10 segundos
        console.log("Fantasma reapareceu!");  // Verifique se isso aparece no console
      }, 10000);  // Tempo de 10 segundos
    }
  
    // Verifique se o fantasma está sendo encontrado corretamente
    if (ghost) {
      ghost.addEventListener('click', hideGhost);  // Adiciona o evento de clique
    } else {
      console.log("Fantasma não encontrado!");  // Verifique se o fantasma foi encontrado
    }
  });
  