// Bio canónica del autor. Replicada literal en LinkedIn (versión larga) y
// YouTube. Instagram usa una variante recortada porque no caben más letras;
// esa variante NO se replica en la web — los metadatos del sitio
// (ogDescription, JSON-LD description del Person) usan siempre la larga.
//
// Si la bio cambia, se cambia aquí: todos los metadatos lo recogen
// automáticamente. Los H1 visibles con HTML rich (en /robame, el subline
// de /blog, el pitch de OptinCompleto.astro y un párrafo del cuerpo de
// /sobre-mi) duplican el texto a mano para poder envolverlo en marcado
// distinto por página. Cuando cambie BIO_CANONICA, grep "19.970€" y
// actualizar los duplicados manualmente.

export const BIO_CANONICA = "Me he gastado 19.970€ en cursos y mentorías de marketing, viralidad, IA y emprendimiento (aparte de mi experiencia dando servicios) para que tú no tengas que hacerlo";
