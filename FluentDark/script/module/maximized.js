import { isFullScreen } from '/appearance/themes/FluentDark/script/utils/misc.js';

function autoSetBorders() {
    let body = document.body;
    setTimeout(() => {
        let borderedBody = document.querySelector("body.body--win32");
        if (isFullScreen()) {
            borderedBody.style.border = "0px solid var(--b3-border-color)";
            // console.log("maximized.");
        } else {
            borderedBody.style.border = "1px solid var(--b3-border-color)";
            // console.log("normaled.");
        }
    }, 1);
}

(() => {
    try {
        let body = document.body;
        window.addEventListener('resize', (e) => {
            autoSetBorders();
        });
    } catch (err) {
        console.error(err);
    }
})();

autoSetBorders();
