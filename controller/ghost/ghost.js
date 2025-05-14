document.addEventListener('DOMContentLoaded', function() {
    const eye = document.querySelector(".eye");
    const pupil = document.querySelector(".pupil");
  
    if (!eye || !pupil) return;
  
    // Pupila segue o mouse
    document.addEventListener("mousemove", (e) => {
      const eyeRect = eye.getBoundingClientRect();
      const centerX = eyeRect.left + eyeRect.width / 2;
      const centerY = eyeRect.top + eyeRect.height / 2;
  
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
  
      const maxOffset = 10;
      const offsetX = Math.max(-maxOffset, Math.min(deltaX / 10, maxOffset));
      const offsetY = Math.max(-maxOffset, Math.min(deltaY / 10, maxOffset));
  
      pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  
    // Piscar a cada 10 segundos
    function blink() {
      pupil.style.transition = "height 0.15s ease";
      pupil.style.height = "0px";
  
      setTimeout(() => {
        pupil.style.height = "2rem"; // ajuste conforme o tamanho original
      }, 150);
    }
  
    setInterval(blink, 10000);
  });
  