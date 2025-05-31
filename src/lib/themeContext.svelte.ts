import { getContext, setContext } from 'svelte';
import type { ThemeConfig } from './types';

const key = Symbol('key');

export function setThemeContext(theme: ThemeConfig) {
	setContext(key, theme);
}

export function getThemeContext(): ThemeConfig {
	return getContext(key) as ThemeConfig;
}
