import { getContext, setContext } from 'svelte';
import type { Theme } from './Theme.svelte';

const key = Symbol('key');

export function setThemeContext(theme: Theme) {
	setContext(key, theme);
}

export function getThemeContext(): Theme {
	return getContext(key) as Theme;
}
