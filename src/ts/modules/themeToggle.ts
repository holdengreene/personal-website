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

    const button = document.querySelector('.theme-toggle') as HTMLButtonElement;
    const root = document.querySelector(':root') as HTMLElement;

    button.addEventListener('click', () => {
        root.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    });

    const theme = localStorage.getItem('theme');

    root.classList.add(theme);
}
