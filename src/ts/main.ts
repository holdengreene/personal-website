import { themeToggle } from './modules/themeToggle';

// Only call this if the browser supports custom properties
if (window.CSS && CSS.supports('color', 'var(--font-color')) {
    themeToggle();
}
