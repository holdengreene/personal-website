// Parcel hot module reload
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept();
}

const button = document.querySelector('.theme-toggle') as HTMLButtonElement;
const root = document.querySelector(':root') as HTMLElement;

button.addEventListener('click', () => {
    root.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
});

const theme = localStorage.getItem('theme');

root.classList.add(theme);
