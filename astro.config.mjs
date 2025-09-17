// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://pablictrad.github.io",
  base: "/astro-landing",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()]
  }
   
});