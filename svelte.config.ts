import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  // Используйте объединение preprocessors
  preprocess: [
    preprocess(),
    vitePreprocess(),
  ],
}