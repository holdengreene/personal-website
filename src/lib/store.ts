import { browser } from '$app/env';
import { writable } from 'svelte/store';

let isDarkMode = true;

if (browser) {
	if (matchMedia('(prefers-color-scheme: light)').matches) {
		isDarkMode = false;
	}

	if (localStorage.getItem('darkMode')) {
		isDarkMode = localStorage.getItem('darkMode') === 'true';
	}
}

export const darkMode = writable(isDarkMode);

if (browser) {
	darkMode.subscribe((value) => localStorage.setItem('darkMode', `${value}`));
}
