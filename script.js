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

    renderMathInElement(document.body)
}