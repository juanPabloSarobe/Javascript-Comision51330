/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#FDF2F2","100":"#FDE8E8","200":"#FBD5D5","300":"#F8B4B4","400":"#F98080","500":"#F05252","600":"#E02424","700":"#C81E1E","800":"#9B1C1C","900":"#771D1D"},
        destacado: {"100":"#fffabf","200":"#fff680","300":"#ffec00","400":"#FFD700"}

      
      },
      fontFamily: {
        nunito: ["Nunito"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    
  ],
}
