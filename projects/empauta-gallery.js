document.querySelectorAll('.screenshot-fullscreen').forEach(button => {
  button.addEventListener('click', async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (button.requestFullscreen) {
      try {
        await button.requestFullscreen();
      } catch {
        // Tela cheia pode ser bloqueada pelo navegador ou pelo contexto da página.
      }
    }
  });

  button.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.fullscreenElement === button) {
      document.exitFullscreen();
    }
  });
});
