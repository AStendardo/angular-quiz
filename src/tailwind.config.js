/** @type {import('tailwindcss').Config} */
module.exports = {
  // La proprietà 'content' è fondamentale: dice a Tailwind dove trovare le classi che usi
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // Qui puoi estendere il tema di default di Tailwind (es. colori, font, spaziature)
    extend: {
      // Esempio: aggiungere un nuovo colore personalizzato
      // colors: {
      //   'custom-blue': '#1da1f2',
      // },
    },
  },
  plugins: [],
}