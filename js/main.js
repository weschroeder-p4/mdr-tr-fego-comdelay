/* ===========================================
   Manual do Relacionamento Saudável
   =========================================== */

// Ano dinâmico no footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ: fecha um item quando outro é aberto (opcional)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  const animateSelectors = [
    '.pain-card',
    '.testimonial',
    '.modulo',
    '.passo',
    '.bonus-card',
    '.amp-card',
    '.d-node',
    '.stack-item'
  ];

  animateSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });

  // Vídeo Vturb já é injetado no HTML — nada a fazer aqui
});

/* ============================================================
   DELAY DO VÍDEO — Libera o restante da página quando
   o player Vturb atinge o tempo definido em SECONDS_TO_DISPLAY
   ============================================================ */
(function () {
  // ⏱ CONFIGURAR AQUI o tempo em segundos para liberar a página
  // Ex.: 30 (30 segundos) | 720 (12 min) | 1320 (22 min)
  var SECONDS_TO_DISPLAY = 30;

  var displayed = false;

  function revealAll() {
    if (displayed) return;
    displayed = true;
    document.body.classList.add('reveal-content');
    // dispara evento de conversão intermediária (opcional)
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'VideoUnlock', { seconds: SECONDS_TO_DISPLAY });
    }
  }

  window.addEventListener('load', function () {
    var attempts = 0;

    function hookSmartplayer() {
      // Vturb expõe o objeto global "smartplayer" após carregar o player.js
      if (typeof smartplayer !== 'undefined'
          && smartplayer.instances
          && smartplayer.instances.length) {

        var player = smartplayer.instances[0];

        player.on('timeupdate', function () {
          if (displayed) return;
          var currentTime = player.video && player.video.currentTime;
          if (currentTime && currentTime >= SECONDS_TO_DISPLAY) {
            revealAll();
          }
        });

        // Se o vídeo terminar antes do tempo (edge case), libera também
        player.on('ended', revealAll);
        return;
      }

      attempts++;
      if (attempts >= 30) {
        // Fallback de segurança: se o player não carregar em 30s,
        // libera o conteúdo para não travar o usuário
        console.warn('[Delay] Player Vturb não carregou. Liberando conteúdo.');
        revealAll();
        return;
      }
      setTimeout(hookSmartplayer, 1000);
    }

    hookSmartplayer();
  });
})();
