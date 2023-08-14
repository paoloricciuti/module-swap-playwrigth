import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv, mergeConfig } from 'vite';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

const plugin: Plugin = {
	name: 'add-alias',
	// this and the fact that we are putting the plugin after sveltekit guarantees that
	// the resolve will be overridden
	enforce: 'post',
	config(config, { mode }) {
		// we load the env to check if we are in mock mode
		const env = loadEnv(mode, process.cwd(), '');
		// based on the fact that we are in mock mode or not
		// we point the alias $db to a different folder
		const db_path = env.MOCKING === 'false' ? './src/db' : './src/db/__mocks__';
		return mergeConfig(config, {
			resolve: {
				// we add the resolve.alias to point to the wanted folder
				alias: {
					$db: resolve(process.cwd(), db_path)
				}
			}
		});
	}
};
export default defineConfig({
	plugins: [sveltekit(), plugin],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
