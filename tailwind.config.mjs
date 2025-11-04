/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#050814',
          secondary: '#0a0e27',
          tertiary: '#0f1629',
          quaternary: '#1a1f3a',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          green: '#10b981',
        },
      },
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-green-cyan': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
};

