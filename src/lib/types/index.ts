import type { ThemeValue } from './constants';

export type ThemeConfig = { detectedTheme: ThemeValueType; selectedTheme: ThemeValueType };

export type ThemeValueType = (typeof ThemeValue)[keyof typeof ThemeValue];
