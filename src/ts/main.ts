import { themeToggle } from './modules/themeToggle';

// Parcel hot module reload. Removed during build.
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept();
}

// Only call this if the browser supports custom properties
if (window.CSS && CSS.supports('color', 'var(--font-color')) {
    themeToggle();
}
