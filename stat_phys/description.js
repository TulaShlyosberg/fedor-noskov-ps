
let booksArray = Array(

    {
        'title': 'Information, physics, and computation',
        'authors': 'Marc Mezard and Andrea Montanari',
        'abstract': 'This book presents a unified approach to a rich and rapidly evolving research domain at the interface between statistical physics, theoretical computer science/discrete mathematics, and coding/information theory. It is accessible to graduate students and researchers without a specific training in any of these fields. The selected topics include spin glasses, error correcting codes, satisfiability, and are central to each field. The approach focuses on large random instances, adopting a common probabilistic formulation in terms of graphical models. It presents message passing algorithms like belief propagation and survey propagation, and their use in decoding and constraint satisfaction solving. It also explains analysis techniques like density evolution and the cavity method, and uses them to study phase transitions.',
        'dates': 'Fall 2024 - Spring 2025'
    },
    {
        'title': 'Five lectures on statistical physics methods in combinatorics',
        'authors': 'Will Perkins',
        'abstract': 'How can one use ideas, tools, and intuition from statistical physics to solve problems in extremal, probabilistic, and enumerative combinatorics? These lecture notes give an introduction to this topic, beginning with some basics of statistical physics, showing the connections between statistical physics and combinatorics, and then developing some statistical physics based probabilistic methods in combinatorics.',
        'dates': 'Spring 2024 - Summer 2024'
    },
)

var descriptionPage = document.createElement('div');
descriptionPage.className = 'desciption-reading-group';

var descriptionText = document.createElement('div');
descriptionText.className = 'description-text';
descriptionText.innerHTML = String.raw`
    <p>The aim of the reading group is to explore applications of Statistical Physics techniques in Computer Science. Each week, we meet to discuss a research paper, a textbook chapter, or to listen to a talk on a research topic. Before a meeting, participants study the material and work on exercises. Check <span id="textbook-link">textbooks</span> we are reading.</p>
    <p>All meetings are held in Zoom. A weekday and time are determined by voting.</p>
    <p>Contact person: <a href="https://tulashlyosberg.github.io/fedor-noskov-ps">Fedor Noskov</a>, fnoskov@hse.ru.</p>
`;

var books = document.createElement('div');
books.className = 'reading-group-books';

var readingGroupBooks = document.createElement('div');
readingGroupBooks.id = 'textbook-title';
readingGroupBooks.className = 'description-title';
readingGroupBooks.innerHTML = 'Textbooks we study'

books.appendChild(readingGroupBooks);

for (let i = 0; i < booksArray.length; ++i) {
    let book = document.createElement('div');
    book.className = 'book';
    
    let bookEntity = booksArray[i];

    let date = document.createElement('div');
    date.className = 'book-date';
    date.innerText = bookEntity.dates;
    book.appendChild(date)

    let title = document.createElement('div');
    title.className = 'book-title';
    title.innerText = bookEntity.title;

    book.appendChild(title);

    let authors = document.createElement('div');
    authors.className = 'book-authors';
    authors.innerText = bookEntity.authors;
    
    book.appendChild(authors);

    let abstract = document.createElement('div');
    abstract.className = 'book-abstract';
    abstract.innerText = bookEntity.abstract;

    book.appendChild(abstract);

    books.appendChild(book);
}

descriptionPage.appendChild(descriptionText);
descriptionPage.appendChild(books);


function description() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(descriptionPage);
    document.getElementById('textbook-link').onclick = () => {
        let textbook_title = document.getElementById('textbook-title');
        let top = textbook_title.offsetTop;
        window.scrollTo({
            'top': top,
            'behavior': 'smooth'
        });
    };
    setState('description');
}