var seminarsElement = document.createElement('div');

seminarsElement.classList.add('seminars_list');

seminarsElement.innerHTML = String.raw`
    <a class='seminar-title' href='https://tulashlyosberg.github.io/fedor-noskov-ps/stat_phys'>Statistical Physics Method</a>
    <p class='seminar-description'>A research seminar on methods of Statistical Physics in Statistics, Combinatorics, Machine Learning, Sampling, etc. The seminar combines two activities: a reading group based on some books and research talks.</p>
    <br>
    <u class='seminar-title'>Analysis of Boolean functions</u>
    <p class='seminar-description'>A reading group based on the book by O'Donnel and papers on the hypercontractivity method by Lifshitz et al.</p>
`;

function seminars() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(seminarsElement);
    setState('seminars');
}