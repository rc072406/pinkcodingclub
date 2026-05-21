import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; 

export default defineConfig({
  site: 'https://pinkcodingclub.pages.dev',
  base: '/', 
  output: 'static', 
  adapter: cloudflare(), 
});
