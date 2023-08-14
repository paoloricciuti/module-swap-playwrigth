import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// we added mode test to point at .env.test
		command: 'pnpm run build --mode test && pnpm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
