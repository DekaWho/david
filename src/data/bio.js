// Bio canónica del autor. Replicada literal en LinkedIn (versión larga) y
// YouTube. Instagram usa una variante recortada porque no caben más letras;
// esa variante NO se replica en la web — los metadatos del sitio
// (ogDescription, JSON-LD description del Person) usan siempre la larga.
//
// Si la bio cambia, se cambia aquí: todos los metadatos lo recogen
// automáticamente. Los textos visibles con HTML rich (PitchRobame.astro
// — que cubre a la vez el H1 de /robame y el pitch de los bloques optin —,
// el subline de /blog y un párrafo del cuerpo de /sobre-mi) duplican el
// texto a mano para poder envolverlo en marcado distinto por página.
// Cuando cambie la cifra, grep "19.970€" para actualizar los duplicados
// manualmente Y renombrar esta variable (el nombre lleva la cifra) en
// todos los archivos que la importan.

export const DESCRIPCION_19K = "Me he gastado 19.970€ en cursos y mentorías de marketing, viralidad, IA y emprendimiento (aparte de mi experiencia dando servicios) para que tú no tengas que hacerlo";
