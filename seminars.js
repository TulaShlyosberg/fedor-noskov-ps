var seminarsElement = document.createElement('div');

seminarsElement.classList.add('seminars_list');

seminarsElement.innerHTML = String.raw`Two seminars`;

function seminars() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(seminarsElement);
    setState('seminars');
}