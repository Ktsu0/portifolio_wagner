<script>
  document.addEventListener("DOMContentLoaded", () => {
    const profession = document.getElementById('profession');
    const originalText = profession.innerText;

    function swapLetters() {
      let swappedText = '';

      for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i];

        if (char.toLowerCase() === 'o' && Math.random() > 0.5) {
          swappedText += '0';
        } else if (char.toLowerCase() === 'e' && Math.random() > 0.5) {
          swappedText += '3';
        } else {
          swappedText += char;
        }
      }

      profession.innerText = swappedText;

      // Voltar para o texto original depois de 2 segundos
      setTimeout(() => {
        profession.innerText = originalText;
      }, 2000);
    }

    // Chamar a função a cada 5 segundos
    setInterval(swapLetters, 5000);
  });
</script>
