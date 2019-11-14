/**
 * Toggle the theme based on a toggle switch
 *
 * Store the value in localStorage for recall on return visits
 */
export function themeToggle() {
    // This browser doesn't support custom properties
    if (!window.CSS && !CSS.supports('color', 'var(--font-color')) {
        return;
    }

    const theme = localStorage.getItem('theme');
    const root = document.querySelector(':root');
    const toggle = document.querySelector(
        '.theme-toggle__checkbox'
    ) as HTMLInputElement | null;

    if (!root || !toggle) {
        return;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            root.classList.remove('light-theme');
            root.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            root.classList.remove('dark-theme');
            root.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // See if theme is stored in localStorage. This takes precedence.
    if (theme) {
        root.classList.add(theme);

        if (theme === 'dark-theme') {
            toggle.checked = true;
        }

        return;
    }

    // See if the browser supports prefers color scheme
    if (window.matchMedia('(prefers-color-scheme: dark').media === 'not all') {
        return;
    }

    // If browser supports it set the toggle and store in localStorage
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggle.checked = true;
        return localStorage.setItem('theme', 'dark-theme');
    }
}
