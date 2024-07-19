var description = document.createElement('div');

description.innerHTML = 'Hohohoho';

function main_page() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(description);
}