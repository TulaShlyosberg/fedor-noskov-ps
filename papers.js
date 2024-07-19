// paper section

var paperElement = document.createElement('div');
var paperElementState = 'full';

var paperListMain = new Array(
    {
        'name': 'Efficient Conformal Prediction under Data Heterogeneity',
        'authors': 'V. Plassier, N. Kotelevskii, A. Rubashevskii, F. Noskov, M. Velikanov, A. Fishkov, S. Horvath, M. Takac, E. Moulines, M. Panov',
        'arxiv_link': 'https://proceedings.mlr.press/v238/plassier24a/plassier24a.pdf',
        'visual_abstract': 'img/abstracts/plot_conf_predictions.png',
        'abstract': String.raw`Conformal prediction (CP) stands out as a robust framework for uncertainty quantification, which is crucial for ensuring the reliability of predictions. However, common CP methods heavily rely on the data exchangeability, a condition often violated in practice. Existing approaches for tackling non-exchangeability lead to methods that are not computable beyond the simplest examples. In this work, we introduce a new efficient approach to CP that produces provably valid confidence sets for fairly general non-exchangeable data distributions. We illustrate the general theory with applications to the challenging setting of federated learning under data heterogeneity between agents. Our method allows constructing provably valid personalized prediction sets for agents in a fully federated way. The effectiveness of the proposed method is demonstrated in a series of experiments on real-world datasets.`,
        'journal': 'AISTATS 2024'
    },
    {
        'name': 'Octopuses in the Boolean cube: families with pairwise small intersections, part I',
        'authors': 'Andrei Kupavskii and Fedor Noskov',
        'journal': 'accepted to Journal of Combinatorial Theory, Series B',
        'arxiv_link': 'https://arxiv.org/abs/2209.04756',
        'visual_abstract': 'img/abstracts/octopuses.png',
        'abstract': String.raw`Let $\mathcal{F}_1, \ldots, \mathcal{F}_\ell$ be families of subsets of $\{1, \ldots, n\}$. Suppose that for distinct $k, k'$ and arbitrary $F_1 \in \mathcal{F}_{k}, F_2 \in \mathcal{F}_{k'}$ we have $|F_1 \cap F_2|\le m.$  What is the maximal value of $|\mathcal{F}_1|\ldots |\mathcal{F}_\ell|$?
        In this work we find the asymptotic of this product as $n$ tends to infinity for constant $\ell$ and~$m$.
        
        This question is related to a conjecture of Bohn et al. that  arose in the 2-level polytope theory and asked for the largest product of the number of facets and vertices in a two-level polytope. This conjecture was recently resolved by Weltge and the first author.
        
        The main result can be rephrased in terms of colorings. We give an asymptotic answer to the following question. Given an edge coloring of a complete $m$-uniform hypergraph into $\ell$ colors, what is the maximum of $\prod M_i$, where $M_i$ is the number of monochromatic cliques in $i$-th color?`
    },
    {
        'name': 'Nonparametric Uncertainty Quantification for Deterministic Neural Networks',
        'authors': 'Nikita Kotelevskii, Aleksandr Artemenkov, Kirill Fedyanin, Fedor Noskov, Alexander Fishkov, Aleksandr Petiushko, Maxim Panov',
        'journal': 'NeurIPS 2022',
        'arxiv_link': 'https://arxiv.org/abs/2202.03101',
        'visual_abstract': 'img/abstracts/nuq.png',
        'abstract': "This paper proposes a fast and scalable method for uncertainty quantification of machine learning models' predictions. First, we show the principled way to measure the uncertainty of predictions for a classifier based on Nadaraya-Watson's nonparametric estimate of the conditional label distribution. Importantly, the proposed approach allows to disentangle explicitly aleatoric and epistemic uncertainties. The resulting method works directly in the feature space. However, one can apply it to any neural network by considering an embedding of the data induced by the network. We demonstrate the strong performance of the method in uncertainty estimation tasks on text classification problems and a variety of real-world image datasets, such as MNIST, SVHN, CIFAR-100 and several versions of ImageNet."
    }, 
    {
        'name': 'About the Power Law of the PageRank Vector Component Distribution. Part 2. The Buckley–Osthus Model, Verification of the Power Law for This Model, and Setup of Real Search Engines',
        'authors': 'Alexander Gasnikov, Maxim Zhukovskii, Sergey Kim, Stepan Plaunov, Daniil Smirnov, Fedor Noskov',
        'journal': 'Numerical Analysis and Applications, volume 11, 2018, pages 16–32',
        'arxiv_link': 'https://arxiv.org/abs/1701.02595',
        'visual_abstract': 'img/abstracts/gasnikov.png',
        'abstract': 'In the paper we investigate power law for PageRank components for the Buckley-Osthus model for web graph. We compare different numerical methods for PageRank calculation. With the best method we do a lot of numerical experiments. These experiments confirm the hypothesis about power law. At the end we discuss real model of web-ranking based on the classical PageRank approach.'
    }
);

var preprintsList = new Array(
    {
        'name': 'Selective Nonparametric Regression via Testing',
        'authors': 'Fedor Noskov, Alexander Fishkov and Maxim Panov',
        'journal': 'under the review on COLT23',
        'arxiv_link': '',
        'abstract': 'Prediction with the possibility of abstention (or selective prediction) is an important problem for error-critical machine learning applications. While well-studied in the classification setup, selective approaches to regression are much less developed. In this work, we consider the nonparametric heteroskedastic regression problem and develop an abstention procedure via testing the hypothesis on the value of the conditional variance at a given point. Unlike existing methods, the proposed one allows to account not only for the value of the variance itself but also for the uncertainty of the corresponding variance predictor. We prove non-asymptotic bounds on the risk of the resulting estimator and show the existence of several different convergence regimes. Theoretical analysis is illustrated with a series of experiments on simulated and real-world data.'
    }
);

var paperListToAppear = new Array(
    {
        'name': 'Octopuses in the Boolean cube: families with pairwise small intersections, part II',
        'authors': 'Andrey Kupasvskii and Fedor Noskov',
        'abstract': '',
        'visual_abstract': 'img/abstracts/direction of tentacles.png'
    },
    {
        'name': 'Optimal estimation in mixed‑membership stochastic block model',
        'authors': 'Fedor Noskov and Maxim Panov',
        'abstract': ''
    },
    {
        'name': 'Graphon estimation in spectral norm and its application in Game Theory',
        'authors': 'Olga Klopp, Fedor Noskov and Francesca Parise',
        'abstract': ''
    }
);


function processPaper() {

    let num = this.id.substring(8);
    num = Number(num);

    
    let summary = document.getElementById('paper_summary_container');

    summary.innerHTML = '';

    let image = document.createElement('img');
    image.className = 'abstract_image';

    let abstractTitle = document.createElement('div');
    abstractTitle.textContent = 'abstract';
    abstractTitle.className = 'abstract_title';    
    

    let abstractText = document.createElement('div');
    abstractText.className = 'abstract_text';
    

    if (this.id[0] == 'm') {
        if (paperListMain[num].visual_abstract === undefined) {
            image.src = 'img/abstracts/default.png';
        } else {
            image.src = paperListMain[num].visual_abstract;
        }
        summary.appendChild(image);

        if (paperListMain[num].abstract == '') {
            abstractText.textContent = 'There will be abstract';
            summary.append(abstractTitle);
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
        if (preprintsList[num].visual_abstract === undefined) {
            image.src = 'img/abstracts/default.png';
        } else {
            image.src = preprintsList[num].visual_abstract;
        }
        summary.appendChild(image);

        if (preprintsList[num].abstract == '') {
            abstractText.textContent = 'There will be abstract';
            summary.append(abstractTitle);
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

    if (this.id[0] == 'a') {
        if (paperListToAppear[num].visual_abstract === undefined) {
            image.src = 'img/abstracts/default.png';
        } else {
            image.src = paperListToAppear[num].visual_abstract;
        }
        summary.appendChild(image);

        if (paperListToAppear[num].abstract == '') {
            summary.append(abstractTitle);
            abstractText.textContent = 'There will be abstract';
            summary.append(abstractTitle);
            summary.appendChild(abstractText);
            return;
        }

        abstractText.textContent = paperListToAppear[num].abstract;
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

    summary.append(abstractTitle);
    summary.appendChild(abstractText);
}


function createFullViewNavigation() {

    var navigation = document.createElement('div');
    navigation.className = 'paper_navigation';

    let button_main = document.createElement('div');
    button_main.className = 'paper_navigation_button';
    button_main.textContent = 'published/accepted';
    navigation.appendChild(button_main);
    button_main.onclick = () => {
        let main_list_title = document.getElementById('main_list');
        let top = main_list_title.offsetTop;
        window.scrollTo({
            'top': top,
            'behavior': 'smooth'
        });
    };

    let button_preprints = document.createElement('div');
    button_preprints.className = 'paper_navigation_button';
    button_preprints.textContent = 'preprints';
    button_preprints.onclick = () => {
        let preperints_title = document.getElementById('preprints');
        let top = preperints_title.offsetTop;
        window.scrollTo({
            'top': top,
            'behavior': 'smooth'
        });
    };
    navigation.appendChild(button_preprints);

    let button_appear = document.createElement('div');
    button_appear.className = 'paper_navigation_button';
    button_appear.textContent = 'to appear';
    button_appear.onclick = () => {
        let to_appear_title = document.getElementById('to_appear');
        let top = to_appear_title.offsetTop;
        window.scrollTo({
            'top': top,
            'behavior': 'smooth'
        });
    }
    navigation.appendChild(button_appear);

    return navigation;
}

function appendFull() {
    paperElement.className = 'papers_page';
    paperElement.innerHTML = '<div id="paper_summary"><div id="paper_summary_container">To see the abstract, press a paper item.</div></div>\
    <div class="papers_list"></div>';

    paperElement.children[1].appendChild(createFullViewNavigation());


    //main papers list

    let main_list_title = document.createElement('div');
    main_list_title.id = 'main_list';
    main_list_title.className = 'main_list_title';
    main_list_title.textContent = 'Published or Accepted';


    paperElement.children[1].appendChild(main_list_title);

    for(let i = 0; i < paperListMain.length; ++i) {
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


    //preprints list

    let preprints = document.createElement('div');
    preprints.id = 'preprints';
    preprints.className = 'other_types';
    preprints.textContent = 'Preprints';
    paperElement.children[1].appendChild(preprints);


    for(let i = 0; i < preprintsList.length; ++i) {
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

    // to appear list

    let to_appear = document.createElement('div');
    to_appear.id = 'to_appear';
    to_appear.className = 'other_types';
    to_appear.textContent = 'To Appear';
    paperElement.children[1].append(to_appear);

    for(let i = 0; i < paperListToAppear.length; ++i) {
        let paper = document.createElement('div');
        paper.className = 'paper';

        let title = document.createElement('div');
        title.className = 'paper_title';
        title.textContent = paperListToAppear[i]['name'];
        paper.appendChild(title);
        
        let authors = document.createElement('div');
        authors.className = 'paper_authors';
        authors.textContent = paperListToAppear[i].authors;
        paper.appendChild(authors);

        paper.id = 'a_paper_' + i.toString();

        paper.onclick = processPaper;

        paperElement.children[1].appendChild(paper);
    }
}


function appendReduced() {
    paperElement.className = 'papers_page_reduced';
    paperElement.innerHTML = '<div class="papers_list_reduced"></div>';

    paperElement.children[0].appendChild(createFullViewNavigation());


    //main papers list

    let main_list_title = document.createElement('div');
    main_list_title.id = 'main_list';
    main_list_title.className = 'main_list_title_reduced';
    main_list_title.textContent = 'Published or Accepted';


    paperElement.children[0].appendChild(main_list_title);

    for(let i = 0; i < paperListMain.length; ++i) {
        let paper = document.createElement('div');
        paper.className = 'paper_reduced';

        paper.textContent = paperListMain[i].authors + '. ';

    
        if (paperListMain[i].arxiv_link != '') {
            let title = document.createElement('a');
            title.className = 'paper_title_reduced';
            title.textContent = paperListMain[i]['name'];
            title.href = paperListMain[i].arxiv_link;
            paper.appendChild(title);
        } else {
            let title = document.createElement('span');
            title.className = 'paper_title_reduced';
            title.textContent = preprintsList[i]['name'];
            paper.appendChild(title);
        }
        

        if (paperListMain[i].journal != '') {
            let journal = document.createElement('span');
            journal.className = 'paper_journal_reduced';
            journal.innerHTML = ', ' + paperListMain[i].journal;
            paper.appendChild(journal);
        }

        paper.id = 'm_paper_' + i.toString();

        // paper.onclick = processPaper;

        paperElement.children[0].appendChild(paper);
    }


    //preprints list

    var preprints = document.createElement('div');
    preprints.id = 'preprints';
    preprints.className = 'main_list_title_reduced';
    preprints.textContent = 'Preprints';
    paperElement.children[0].appendChild(preprints);


    for(var i = 0; i < preprintsList.length; ++i) {
        let paper = document.createElement('div');
        paper.className = 'paper_reduced';

        let authors = document.createElement('span');
        authors.className = 'paper_authors_reduced';
        authors.textContent = preprintsList[i].authors + '. ';
        paper.appendChild(authors);

        if (preprintsList[i].arxiv_link != '') {
            let title = document.createElement('a');
            title.className = 'paper_title_reduced';
            title.textContent = preprintsList[i]['name'];
            title.href = preprintsList[i].arxiv_link;
            paper.appendChild(title);
        } else {
            let title = document.createElement('span');
            title.className = 'paper_title_reduced-no-link';
            title.textContent = preprintsList[i]['name'];
            paper.appendChild(title);
        }

        if (preprintsList[i].journal != '') {
            let journal = document.createElement('span');
            journal.className = 'paper_journal_reduced';
            journal.innerHTML = ', ' + preprintsList[i].journal;
            paper.appendChild(journal);
        }

        
        
        

        paper.id = 'p_paper_' + i.toString();

        paper.onclick = processPaper;

        paperElement.children[0].appendChild(paper);
    }

    // to appear list

    var to_appear = document.createElement('div');
    to_appear.id = 'to_appear';
    to_appear.className = 'main_list_title_reduced';
    to_appear.textContent = 'To Appear';
    paperElement.children[0].append(to_appear);

    for(var i = 0; i < paperListToAppear.length; ++i) {
        let paper = document.createElement('div');
        paper.className = 'paper_reduced';

        let authors = document.createElement('span');
        authors.className = 'paper_authors_reduced';
        authors.textContent = paperListToAppear[i].authors + '. ';
        paper.appendChild(authors);

        let title = document.createElement('span');
        title.className = 'paper_title_reduced-no-link';
        title.textContent = paperListToAppear[i]['name'];
        paper.appendChild(title);

        paper.id = 'a_paper_' + i.toString();

        paper.onclick = processPaper;

        paperElement.children[0].appendChild(paper);
    }
}

function setPapersState(state) {
    if (paperElementState == state) {
        return;
    }
    
    if (paperElementState == 'full') {
        appendFull();
    }
}


function papers() {
    document.getElementById('main').innerHTML = '';
    appendReduced();
    document.getElementById('main').appendChild(paperElement);
    setState('papers_page');
};