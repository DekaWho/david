/* Fuente única de los logros/resultados representativos. Los consume el
   componente Logros.astro, montado idéntico en /servicios y /sobre-mi.
   Editar un logro aquí lo cambia en ambas páginas. El orden del
   array es el orden de render; `clase` aplica el doodle de margen del logro
   (icono email / banderín) cuando lo lleva. */
export const LOGROS = [
    {
        texto: "560 pedidos en 14 minutos. Ese fue el resultado de un email único enviado al segmento de no compradores de un ecommerce. Sin hype previo ni secuencia de calentamiento.",
    },
    {
        texto: "Aunque publicitarse en TV es cosa del pasado, escribí el copy para un anuncio que se emitió en A3Media. Durante diversos programas como Pasapalabra o El intermedio.",
    },
    {
        clase: "logro--email",
        texto: "Tasa de apertura entorno al 35% (si miramos solo segmento de clientes tasa de apertura hasta el 60%) en campañas de email marketing (Klaviyo) para una lista de un ecommerce con más de 340.000 emails.",
    },
    {
        texto: "Escribí una landing para tráfico frío sin poder usar prueba social u otro tipo de autoridad de marca. Un MVP para testear si un nuevo ecommerce tenía tracción en ese mercado. Tuvo un 33.9% de añadido al carrito.",
    },
    {
        texto: "El primer mes que entré en una fintech (para implementar la estrategia de email diario) batió su propio récord de facturación mensual.",
    },
    {
        texto: "Junto a Chuso Montero levantamos su canal de YouTube desde 0 hasta 109K seguidores. En el nicho videojuegos, durante la época más saturada del sector (2020 - 2022). Generando no solo visitas sino una audiencia fiel y recurrente.",
    },
    {
        texto: "Facturación de 6 cifras con un par de emails que se enviaron durante 48h vendiendo un producto low ticket.",
    },
    {
        texto: "Más de 100 Millones de reproducciones en total (en vídeos horizontales orgánicos) trabajando con varios youtubers de entretenimiento.",
    },
    {
        texto: "Hice una campaña que redujo el coste de adquisición de clientes un 39.8% respecto a los meses anteriores. Mejoré la conversión de leads en clientes (incluso despertando leads que llevaban semanas dormidos sin haber comprado nunca)",
    },
    {
        clase: "logro--flag",
        texto: "He ayudado a mis clientes a facturar más de 2.4 millones de €",
    },
];
