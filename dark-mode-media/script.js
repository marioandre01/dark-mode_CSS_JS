const html = document.querySelector('html');

const checkbox = document.querySelector('#switch');

checkbox.addEventListener('change', () => {
    // html.classList.toggle('dark-mode');
    console.log('dark-mode');
    switchTheme();
})

console.log('color-light: ' + window.matchMedia("(prefers-color-scheme: light)").matches);
// console.log(window.matchMedia("(prefers-color-scheme: light)"));

console.log('color-dark: ' + window.matchMedia("(prefers-color-scheme: dark)").matches);
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));

let COLOR_THEME = window.matchMedia("(prefers-color-scheme: light)").matches ? 'light' : 'dark';
console.log('COLOR_THEME: ' + COLOR_THEME);
console.log(' ');


function switchTheme() {
    // console.log('meu tema')
    let currentTheme = COLOR_THEME;

    COLOR_THEME = currentTheme === 'light' ? 'dark' : 'light'
    console.log('COLOR_THEME: ' + COLOR_THEME);

    const rules = window.document.styleSheets[0].cssRules;
    console.log(rules);
    // console.log(rules[0]);
    // console.log(rules[1]);

    for (i = 0; i < rules.length; i++) {
        media = rules[i].media

        if (media == undefined) {
            continue
        }

        // console.log('r: ' +rules[i]);
        console.log('media: ' + media);
        console.log('mediaText: ' + media.mediaText);

        let item = media
            .mediaText
            .replace(
                "(prefers-color-scheme: " + currentTheme + ")",
                "(prefers-color-scheme: " + COLOR_THEME + ")"
            )
        media.mediaText = item
        console.log('media-N: ' + media);
        console.log('mediaText-N: ' + media.mediaText);
        console.log('');
    }
    console.log('color-light: ' + window.matchMedia("(prefers-color-scheme: light)").matches);
    console.log('color-dark: ' + window.matchMedia("(prefers-color-scheme: dark)").matches);
    console.log('');
}
