import type { ThemeValue } from './constants';

export interface ThemeConfig {
	detectedTheme: ThemeValueType;
	selectedTheme: ThemeValueType;
	derivedTheme: ThemeValueType;
}

export type ThemeValueType = (typeof ThemeValue)[keyof typeof ThemeValue];
