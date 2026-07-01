# Menú de secciones (nav flotante con burger)

Navegación por anclas para una landing larga: un burger fijo arriba-derecha que despliega la lista de secciones de la página. Abrir/cerrar es solo CSS (checkbox-hack: un `<input type="checkbox">` oculto que un `<label>` hermano conmuta); un bloque de `public/scripts/scripts.js` lo complementa cerrando el panel al pulsar un enlace y, en móvil, ocultando el burger mientras el hero está en pantalla (reaparece al scrollear). Sin JS el nav queda siempre visible: degrada bien. Lo usa `/la-forja`.

Para reutilizarlo en otra página del sitio:
1. Pega el HTML como primer hijo dentro del layout.
2. Cambia los `href`/textos por las secciones reales. Cada `href="#x"` debe apuntar a un `id="x"` que exista en la página.
3. El hero lleva `id="inicio"` (lo observa el JS para el auto-ocultado en móvil).
4. La página carga `scripts.js` (default de los layouts): el bloque JS engancha por selector `.forja-nav`, así que funciona sin tocar nada.

El CSS ya vive en `public/estilos/styles.css` (bloque `.forja-nav`), así que dentro de este sitio no hay que copiarlo. Para llevarlo a otro proyecto, copia además el CSS y el JS de abajo; el CSS usa los tokens `--blanco`, `--azul`, `--amarillo`, `--negro`, `--serif` y `--radius-control` (defínelos o sustitúyelos por valores).

## HTML

```html
<nav class="forja-nav" aria-label="Secciones de la página">
    <input
        type="checkbox"
        id="forja-nav-toggle"
        class="forja-nav-toggle"
        aria-label="Abrir menú de secciones"
    />
    <label for="forja-nav-toggle" class="forja-burger" aria-hidden="true">
        <span></span><span></span><span></span>
    </label>
    <ul class="forja-nav-panel">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#que-incluye">Qué incluye el programa</a></li>
        <li><a href="#no-es-para-ti">Esto NO es para ti si...</a></li>
        <li><a href="#preguntas">Preguntas importantes</a></li>
    </ul>
</nav>
```

## CSS (public/estilos/styles.css)

```css
/* Navegador de secciones — burger fijo arriba-derecha. En escritorio visible
   siempre; en móvil se oculta mientras el hero está en viewport (taparía el
   copy) y reaparece al scrollear. Lo gestiona scripts.js con un
   IntersectionObserver, vía la clase .forja-nav--hidden (scopeada al @media
   móvil; si el JS no corre, el nav queda visible — degrada). Patrón
   checkbox-hack para abrir/cerrar el panel. Pill de papel blanco sin borde: el
   fondo basta para que las líneas azules se lean sobre cualquier contenido. */
.forja-nav {
    position: fixed;
    top: 14px;
    right: 14px;
    z-index: 1000;
}

/* Móvil: el burger tapa el leadin/H1 del hero, así que mientras el hero está en
   viewport scripts.js le pone .forja-nav--hidden y lo retira al scrollear más
   abajo. En escritorio no aplica: el botón cabe en la esquina sin pisar los
   titulares centrados, así que el nav queda visible aunque tenga la clase. */
@media (max-width: 800px) {
    .forja-nav {
        transition:
            opacity 200ms ease,
            transform 200ms ease;
    }
    .forja-nav--hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateY(-8px);
    }
}

/* Checkbox oculto pero accesible: dispara el estado abierto/cerrado vía
   :checked sobre el label hermano. */
.forja-nav-toggle {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.forja-burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 44px;
    height: 44px;
    padding: 12px 10px;
    box-sizing: border-box;

    background: var(--blanco);
    border-radius: var(--radius-control);
    cursor: pointer;
}

.forja-burger span {
    display: block;
    height: 2px;
    background: var(--azul);
    transition:
        transform 160ms ease,
        opacity 160ms ease;
    transform-origin: center;
}

/* Las 3 líneas colapsan en X al abrir. El foco por teclado en el checkbox
   oculto se refleja en el borde del botón para no perder la pista de foco. */
.forja-nav-toggle:focus-visible + .forja-burger {
    outline: 2px solid var(--azul);
    outline-offset: 2px;
}
.forja-nav-toggle:checked + .forja-burger span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}
.forja-nav-toggle:checked + .forja-burger span:nth-child(2) {
    opacity: 0;
}
.forja-nav-toggle:checked + .forja-burger span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

/* Panel desplegable: lista de secciones bajo el botón. width:max-content +
   reset de padding/margin/list-style anulan las reglas globales de ul/li. */
.forja-nav-panel {
    position: absolute;
    top: 52px;
    right: 0;
    width: max-content;
    min-width: 220px;
    margin: 0;
    padding: 6px;
    list-style: none;

    background: var(--blanco);

    opacity: 0;
    transform: translateY(-6px);
    pointer-events: none;
    transition:
        opacity 160ms ease,
        transform 160ms ease;
}

.forja-nav-toggle:checked ~ .forja-nav-panel {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.forja-nav-panel li {
    margin: 0;
}

.forja-nav-panel a {
    display: block;
    padding: 9px 12px;
    font-family: var(--serif);
    font-size: 1rem;
    font-weight: 500;
    color: var(--negro);
    text-decoration: none;
    transition:
        background-color 120ms ease,
        color 120ms ease;
}

@media (hover: hover) {
    .forja-nav-panel a:hover {
        background: var(--amarillo);
        color: var(--negro);
        text-decoration: none;
    }
}
```

## JS (public/scripts/scripts.js)

Engancha por selector `.forja-nav`, así que es no-op en páginas sin el nav. Cierra el panel al pulsar un enlace (el checkbox-hack no se desmarca solo en anclas de la misma página) y, en móvil, oculta el burger mientras `#inicio` está en viewport.

```js
(() => {
    const nav = document.querySelector('.forja-nav');
    if (!nav) return;
    const checkbox = document.getElementById('forja-nav-toggle');
    nav.querySelectorAll('.forja-nav-panel a').forEach((a) => {
        a.addEventListener('click', () => {
            if (checkbox) checkbox.checked = false;
        });
    });
    const hero = document.getElementById('inicio');
    if (hero && 'IntersectionObserver' in window) {
        nav.classList.add('forja-nav--hidden');
        const io = new IntersectionObserver(([entry]) => {
            nav.classList.toggle('forja-nav--hidden', entry.isIntersecting);
            if (entry.isIntersecting && checkbox) checkbox.checked = false;
        });
        io.observe(hero);
    }
})();
```
