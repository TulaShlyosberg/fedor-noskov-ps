function setState(state) {
    let buttons = document.getElementsByClassName('buttons')[0];
    for (let i = 0; i < buttons.children.length;  ++i) {
        let button = buttons.children[i];
        button.classList.remove('active');
        document.getElementById('main').classList.remove('main-' + button.id);
    }
    let button = document.getElementById(state);
    button.classList.add('active');
    document.getElementById('main').classList.add('main-'+state);

    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError : false
      });
}