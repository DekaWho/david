// Categorías del blog. Compartido entre el hub (src/pages/blog/index.astro)
// y el aside lateral de los posts (src/layouts/PostLayout.astro). El campo
// `slug` se usa como (1) valor del frontmatter `categoria` en los .mdx,
// (2) hash de URL para activar la tab en el hub (`/blog#marketing`).
export const categorias = [
    { slug: "ia", nombre: "IA" },
    { slug: "negocios", nombre: "Emprendimiento y Negocios" },
    { slug: "marketing", nombre: "Marketing y Ventas" },
];
