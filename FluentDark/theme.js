function loadScript(url) {
    let script = document.createElement('script');
    script.setAttribute('type', 'module');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
}

(() => {
    loadScript("/appearance/themes/FluentDark/script/module/typewriter.js");
    loadScript("/appearance/themes/FluentDark/script/module/maximized.js");
})();
