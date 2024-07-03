import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

import css from 'rollup-plugin-css-only';

export default [
    {
        input: 'src/main.ts',
        output: { 
            file: 'dist/bundle.js', 
            format: 'iife',
            name: 'app',
        },
        plugins: [
            css({ output: 'dist/global.css' }),
            svelte({
                preprocess: sveltePreprocess({ typescript: { transpileOnly: true } }),
            }), 
            
            nodeResolve({
                browser: true,
                exportConditions: ['svelte'],
                extensions: ['.svelte']
            }),
            typescript(), terser()
        ],
    },
];