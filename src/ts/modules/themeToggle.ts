/**
 * Save the theme names as an enum
 * Mostly because I keep changing them and
 * I just want to change one place
 */
enum Theme {
    Dark = 'dark',
    Light = 'light'
}

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
    const root = document.querySelector(':root') as HTMLElement | null;
    const toggleDiv = document.querySelector(
        '.theme-toggle'
    ) as HTMLElement | null;
    const toggleCheckbox = document.querySelector(
        '.theme-toggle__checkbox'
    ) as HTMLInputElement | null;

    if (!root || !toggleCheckbox || !toggleDiv) {
        return;
    }

    // This browser supports css custom properties, so the switcher should be shown
    toggleDiv.style.display = 'block';

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            changeTheme(root, Theme.Dark);
        } else {
            changeTheme(root, Theme.Light);
        }
    });

    // See if theme is stored in localStorage. This takes precedence.
    if (theme) {
        root.dataset.theme = theme;

        if (theme === Theme.Dark) {
            toggleCheckbox.checked = true;
        }

        return;
    }

    // See if the browser supports prefers color scheme
    if (window.matchMedia('(prefers-color-scheme: dark').media === 'not all') {
        return;
    }

    // If browser supports it set the toggle and store in localStorage
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleCheckbox.checked = true;
        return localStorage.setItem('theme', 'dark-theme');
    }
}

/**
 * Take in a theme and toggle the theme on root
 *
 * Add the theme to localStorage
 */
function changeTheme(root: HTMLElement, theme: string) {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}
