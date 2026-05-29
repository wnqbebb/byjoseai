/* 
========================================================================
   APP.JS — byjose.ai Lead Magnet
   Lógica: Scroll Reveal Interactivo, Copiado de Prompts, Confeti
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. ANIMACIONES DE DESPLAZAMIENTO (SCROLL REVEAL)
       ========================================== */
    // Configuramos el observador de intersección
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => scrollObserver.observe(el));

    // Fallback global: activa TODO después de 800ms sin importar scroll
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('active');
        });
    }, 800);


    /* ==========================================
       2. SISTEMA DE COPIADO DE PROMPTS
       ========================================== */
    const copyButtons = document.querySelectorAll('.copy-prompt-trigger');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-copy-target');
            const codeBlock = document.getElementById(targetId);
            if (!codeBlock) return;

            // Extraer texto plano sin HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = codeBlock.innerHTML;
            const plainText = (tempDiv.textContent || tempDiv.innerText || '').trim();

            navigator.clipboard.writeText(plainText).then(() => {
                // Feedback visual
                btn.classList.add('copied');
                const copyText = btn.querySelector('.copy-text');
                const originalText = copyText ? copyText.textContent : 'Copiar';
                
                if (copyText) {
                    copyText.textContent = '¡COPIADO! 🍌';
                }
                
                // Confeti en posición del cursor
                triggerCursorConfetti(e.clientX, e.clientY);
                
                // Restaurar después de 1.5s
                setTimeout(() => {
                    btn.classList.remove('copied');
                    if (copyText) copyText.textContent = originalText;
                }, 1500);

            }).catch(err => {
                console.error('Error al copiar:', err);
            });
        });
    });


    /* ==========================================
       3. CONFETI BRUTALISTA EN CURSOR
       ========================================== */
    function triggerCursorConfetti(x, y) {
        const colors = ['#ffd100', '#ffffff', '#016959', '#ff0055'];
        
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                background-color: ${colors[Math.floor(Math.random() * colors.length)]};
                border: 1.5px solid #000;
                z-index: 9999;
                pointer-events: none;
            `;
            
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 120 + 40;
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance + 20;
            
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0.3) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 600 + 700,
                easing: 'cubic-bezier(0.1, 0.8, 0.25, 1)',
                fill: 'forwards'
            });
            
            setTimeout(() => particle.remove(), 1300);
        }
    }


    /* ==========================================
       4. NAVBAR SCROLL EFFECT
       ========================================== */
    const navbar = document.querySelector('.owner-fixed-header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
                navbar.style.background = 'rgba(0, 0, 0, 0.85)';
            } else {
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
                navbar.style.background = 'rgba(0, 0, 0, 0.65)';
            }
        }, { passive: true });
    }

});
