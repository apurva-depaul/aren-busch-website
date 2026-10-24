/** Prefix a public-folder path with Vite's base (needed on GitHub Pages). */
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
