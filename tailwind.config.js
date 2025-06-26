/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        vv: {
          bgDark: '#1b1f24',       // background
          borderDark: '#0e2b3a',   // border
          innerBg: '#0f3d4a',      // inner
          cyanLight: '#1fd2eb',    // spiral ligh
          cyanMid: '#17b6cf',      // spiral dark
          cyanGlow: '#36e3ff',     // glow
        }
      }
    },
  },
  plugins: [],
}
