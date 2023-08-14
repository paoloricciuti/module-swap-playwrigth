import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import { resolve } from 'node:path';

export default defineConfig(({ mode }) => {
	// we load the env to check if we are in mock mode
	const env = loadEnv(mode, process.cwd(), '');
	// based on the fact that we are in mock mode or not
	// we point the alias $db to a different folder
	const db_path = env.MOCKING === 'false' ? './src/db' : './src/db/__mocks__';
	return {
		// we add the resolve.alias to point to the wanted folder
		resolve: {
			alias: {
				$db: resolve(process.cwd(), db_path)
			}
		},
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
