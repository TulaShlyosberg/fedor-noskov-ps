var seminarsElement = document.createElement('div');

seminarsElement.classList.add('seminars_list');

seminarsElement.innerHTML = String.raw`
    <a href='https://tulashlyosberg.github.io/fedor-noskov-ps/stat_phys'>Statistical Physics Method</a>
    <p>Research Seminar on methods of Statistical Physics in Statistics, Combinatorics, Machine Learning, Sampling, etc.</p>
`;

function seminars() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(seminarsElement);
    setState('seminars');
}