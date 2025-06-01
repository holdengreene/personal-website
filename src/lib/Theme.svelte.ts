import { browser } from '$app/environment';
import type { ThemeConfig, ThemeValueType } from './types';
import { themeStorageKey, ThemeValue } from './types/constants';

export class Theme implements ThemeConfig {
	#selectedTheme = $state<ThemeValueType>();
	detectedTheme = $state<ThemeValueType>();
	derivedTheme = $derived(this.selectedTheme ?? this.detectedTheme);

	get selectedTheme(): ThemeValueType {
		return this.#selectedTheme;
	}

	set selectedTheme(theme: ThemeValueType) {
		this.#selectedTheme = theme;

		if (theme && localStorage.getItem(themeStorageKey) !== theme) {
			localStorage.setItem(themeStorageKey, theme);
		}
	}

	constructor() {
		if (browser) {
			if (localStorage.getItem(themeStorageKey)) {
				const config = localStorage.getItem(themeStorageKey);

				if (config === ThemeValue.LIGHT || config === ThemeValue.DARK) {
					this.selectedTheme = config;
					return;
				}
			}

			if (matchMedia('(prefers-color-scheme: dark)').matches) {
				this.detectedTheme = ThemeValue.DARK;
			} else {
				this.detectedTheme = ThemeValue.LIGHT;
			}
		}
	}
}
