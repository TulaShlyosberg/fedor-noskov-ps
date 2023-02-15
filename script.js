window.onload = home;


var homeElement = document.createElement('div');
homeElement.classList.add('home_page');
homeElement.innerHTML = '<div class="id_photo"><img src="img/me.jpg" width="100%"/></div>\
    <div class="bio">\
        <div class="bio_title">Bio</div>\
        <div class="description">\
            I was born!\
        </div>\
    </div>';


// paper section

var paperElement = document.createElement('div');
paperElement.classList.add('papers_page');
paperElement.innerHTML = '<div id="paper_summary"></div>\
<div class="papers_list"></div>';


var paperListMain = new Array(
    {
        'name': 'Octopuses in the Boolean cube: families with pairwise small intersections, part I',
        'authors': 'Andrei Kupavskii and Fedor Noskov',
        'journal': 'accepted to Journal of Combinatorial Theory, Series B',
        'arxiv_link': 'https://arxiv.org/abs/2209.04756',
        'abstract': String.raw`Let $\mathcal{F}_1, \ldots, \mathcal{F}_\ell$ be families of subsets of $\{1, \ldots, n\}$. Suppose that for distinct $k, k'$ and arbitrary $F_1 \in \mathcal{F}_{k}, F_2 \in \mathcal{F}_{k'}$ we have $|F_1 \cap F_2|\le m.$  What is the maximal value of $|\mathcal{F}_1|\ldots |\mathcal{F}_\ell|$?
        In this work we find the asymptotic of this product as $n$ tends to infinity for constant $\ell$ and~$m$.
        
        This question is related to a conjecture of Bohn et al. that  arose in the 2-level polytope theory and asked for the largest product of the number of facets and vertices in a two-level polytope. This conjecture was recently resolved by Weltge and the first author.
        
        The main result can be rephrased in terms of colorings. We give an asymptotic answer to the following question. Given an edge coloring of a complete $m$-uniform hypergraph into $\ell$ colors, what is the maximum of $\prod M_i$, where $M_i$ is the number of monochromatic cliques in $i$-th color?`
    },
    {
        'name': 'Nonparametric Uncertainty Quantification for Deterministic Neural Networks',
        'authors': 'Nikita Kotelevskii, Aleksandr Artemenkov, Kirill Fedyanin, Fedor Noskov, Alexander Fishkov, Aleksandr Petiushko, Maxim Panov',
        'journal': 'accepted to NeurIPS 2022',
        'arxiv_link': 'https://arxiv.org/abs/2202.03101',
        'abstract': "This paper proposes a fast and scalable method for uncertainty quantification of machine learning models' predictions. First, we show the principled way to measure the uncertainty of predictions for a classifier based on Nadaraya-Watson's nonparametric estimate of the conditional label distribution. Importantly, the proposed approach allows to disentangle explicitly aleatoric and epistemic uncertainties. The resulting method works directly in the feature space. However, one can apply it to any neural network by considering an embedding of the data induced by the network. We demonstrate the strong performance of the method in uncertainty estimation tasks on text classification problems and a variety of real-world image datasets, such as MNIST, SVHN, CIFAR-100 and several versions of ImageNet."
    }, 
    {
        'name': 'About the Power Law of the PageRank Vector Component Distribution. Part 2. The Buckley–Osthus Model, Verification of the Power Law for This Model, and Setup of Real Search Engines',
        'authors': 'Alexander Gasnikov, Maxim Zhukovskii, Sergey Kim, Stepan Plaunov, Daniil Smirnov, Fedor Noskov',
        'journal': 'Numerical Analysis and Applications, volume 11, 2018, pages 16–32',
        'arxiv_link': 'https://arxiv.org/abs/1701.02595',
        'abstract': 'In the paper we investigate power law for PageRank components for the Buckley-Osthus model for web graph. We compare different numerical methods for PageRank calculation. With the best method we do a lot of numerical experiments. These experiments confirm the hypothesis about power law. At the end we discuss real model of web-ranking based on the classical PageRank approach.'
    }
);

var preprintsList = new Array(
    {
        'name': 'Selective Nonparametric Regression via Testing',
        'authors': 'Fedor Noskov, Alexander Fishkov and Maxim Panov',
        'journal': 'submitted to COLT23',
        'arxiv_link': '',
        'abstract': 'Prediction with the possibility of abstention (or selective prediction) is an important problem for error-critical machine learning applications. While well-studied in the classification setup, selective approaches to regression are much less developed. In this work, we consider the nonparametric heteroskedastic regression problem and develop an abstention procedure via testing the hypothesis on the value of the conditional variance at a given point. Unlike existing methods, the proposed one allows to account not only for the value of the variance itself but also for the uncertainty of the corresponding variance predictor. We prove non-asymptotic bounds on the risk of the resulting estimator and show the existence of several different convergence regimes. Theoretical analysis is illustrated with a series of experiments on simulated and real-world data.'
    }
)

var paperListToAppear = new Array();


function processPaper() {

    let num = this.id.substring(8);
    num = Number(num);

    
    let summary = document.getElementById('paper_summary');

    summary.innerHTML = '';

    let abstractTitle = document.createElement('div');
    abstractTitle.textContent = 'abstract';
    abstractTitle.className = 'abstract_title';    
    summary.append(abstractTitle);

    let abstractText = document.createElement('div');
    abstractText.className = 'abstract_text';
    

    if (this.id[0] == 'm') {
        if (paperListMain[num].abstract == '') {
            abstractText.textContent = 'There will be abstract';
            summary.appendChild(abstractText);
            return;
        }
        abstractText.textContent = paperListMain[num].abstract;
        renderMathInElement(abstractText, {
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

    if (this.id[0] == 'p') {
        if (preprintsList[num].abstract == '') {
            abstractText.textContent = 'There will be abstract';
            summary.appendChild(abstractText);
            return;
        }
        abstractText.textContent = preprintsList[num].abstract;
        renderMathInElement(abstractText, {
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

    summary.appendChild(abstractText);
}


//main papers list

var main_list_title = document.createElement('div');
main_list_title.className = 'main_list_title';
main_list_title.textContent = 'Published or Accepted';


paperElement.children[1].appendChild(main_list_title);

for(var i = 0; i < paperListMain.length; ++i) {
    let paper = document.createElement('div');
    paper.className = 'paper';

    if (paperListMain[i].arxiv_link != '') {
        let title = document.createElement('a');
        title.className = 'paper_title';
        title.textContent = paperListMain[i]['name'];
        title.href = paperListMain[i].arxiv_link;
        paper.appendChild(title);
    } else {
        let title = document.createElement('div');
        title.className = 'paper_title';
        title.textContent = paperListMain[i]['name'];
        paper.appendChild(title);
    }
    
    
    let authors = document.createElement('div');
    authors.className = 'paper_authors';
    authors.textContent = paperListMain[i].authors;
    paper.appendChild(authors);

    if (paperListMain[i].journal != '') {
        let journal = document.createElement('div');
        journal.className = 'paper_journal';
        journal.innerHTML = '<i>' + paperListMain[i].journal + '</i>';
        paper.appendChild(journal);
    }

    paper.id = 'm_paper_' + i.toString();

    paper.onclick = processPaper;

    paperElement.children[1].appendChild(paper);
}

var preprints = document.createElement('div');
preprints.className = 'other_types';
preprints.textContent = 'Preprints';
paperElement.children[1].appendChild(preprints);



for(var i = 0; i < preprintsList.length; ++i) {
    let paper = document.createElement('div');
    paper.className = 'paper';

    if (preprintsList[i].arxiv_link != '') {
        let title = document.createElement('a');
        title.className = 'paper_title';
        title.textContent = preprintsList[i]['name'];
        title.href = preprintsList[i].arxiv_link;
        paper.appendChild(title);
    } else {
        let title = document.createElement('div');
        title.className = 'paper_title';
        title.textContent = preprintsList[i]['name'];
        paper.appendChild(title);
    }
    
    
    let authors = document.createElement('div');
    authors.className = 'paper_authors';
    authors.textContent = preprintsList[i].authors;
    paper.appendChild(authors);

    if (preprintsList[i].journal != '') {
        let journal = document.createElement('div');
        journal.className = 'paper_journal';
        journal.innerHTML = '<i>' + preprintsList[i].journal + '</i>';
        paper.appendChild(journal);
    }

    paper.id = 'p_paper_' + i.toString();

    paper.onclick = processPaper;

    paperElement.children[1].appendChild(paper);
}






function home() {
    let lastChild = document.getElementById('main').lastChild;
    document.getElementById('main').removeChild(lastChild);
    document.getElementById('main').appendChild(homeElement);
};

function papers() {
    let lastChild = document.getElementById('main').lastChild;
    document.getElementById('main').removeChild(lastChild);
    document.getElementById('main').appendChild(paperElement);
};