// resources/js/cursor.ts
export {};

(() => {
    if (typeof window === 'undefined') return;

    // ensure a single dot, appended to <body>
    let dot = document.getElementById('cursor-dot') as HTMLDivElement | null;
    if (!dot) {
        dot = document.createElement('div');
        dot.id = 'cursor-dot';
        document.body.appendChild(dot);
    }

    // inline safety styles in case CSS hasn't loaded yet
    Object.assign(dot.style, {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '16px',
        height: '16px',
        borderRadius: '9999px',
        pointerEvents: 'none',
        zIndex: '2147483647',         // always on top
        willChange: 'transform, opacity',
        transform: 'translate3d(-50%, -50%, 0) scale(1)',
        transition: 'transform 160ms ease, opacity 160ms ease',
        opacity: '0',
    } as CSSStyleDeclaration);

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let vx = x, vy = y, raf = 0;
    let hovering = false;

    const interactiveSelector =
        'a, button, [role="button"], input, textarea, select, .cursor-hover';

    function onMove(e: MouseEvent) {
        x = e.clientX; y = e.clientY;
        if (dot) {
            dot.style.opacity = '1';
            if (!raf) raf = requestAnimationFrame(tick);
        }
    }

    function tick() {
        vx += (x - vx) * 0.18;
        vy += (y - vy) * 0.18;
        if (dot) {
            dot.style.transform = `translate3d(${vx - 8}px, ${vy - 8}px, 0) scale(${hovering ? 1.8 : 1})`;
        }
        raf = requestAnimationFrame(tick);
    }

    document.addEventListener('mouseover', (e) => {
        const t = (e.target as Element | null)?.closest?.(interactiveSelector);
        if (t && dot) { hovering = true; dot.classList.add('is-hover'); }
    });

    document.addEventListener('mouseout', (e) => {
        const to = (e as MouseEvent).relatedTarget as Element | null;
        if (!to || !to.closest?.(interactiveSelector)) {
            hovering = false; dot?.classList.remove('is-hover');
        }
    });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', () => { if (dot) dot.style.opacity = '0'; });
    window.addEventListener('mouseenter', () => { if (dot) dot.style.opacity = '1'; });
})();
