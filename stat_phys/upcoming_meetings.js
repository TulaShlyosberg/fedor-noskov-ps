var events = Array(
    {
        'date': 'Week 4 of August',
        'threshold': new Date('2024-08-25'),
        'topic': 'Discussion of the paper "Large Cliques Elude the Metropolis Process" by Jerrum'
    },
    {
        'date': 'Week 3 of August',
        'threshold': new Date('2024-08-18'),
        'topic': 'Discussion of the paper <a href="https://www.drorweitz.com/ac/pubs/ind_from_tree.pdf">"Counting independent sets up to the tree threshold"</a> by Weitz',
    },
    {
        'date': 'Week 1 of August',
        'threshold':  new Date('2024-08-04'),
        'topic': 'Discussion of the paper <a href="https://people.maths.ox.ac.uk/scott/Papers/lllshort.pdf">"On Dependency Graphs and the Lattice Gas"</a> by Scott and Sokal',
        'speaker': 'Aiya Kuchukova',
        'abstract': String.raw`We elucidate the close connection between the repulsive lattice gas in equilibrium statistical mechanics and the Lovasz local lemma in probabilistic combinatorics. We show that the conclusion of the Lovasz local lemma holds for
        dependency graph G and probabilities $\{p_x\}$ if and only if the independent-set
        polynomial for G is nonvanishing in the polydisc of radii $\{p_x\}$. Furthermore,
        we show that the usual proof of the Lovasz local lemma — which provides a
        sufficient condition for this to occur — corresponds to a simple inductive argument for the nonvanishing of the independent-set polynomial in a polydisc,
        which was discovered implicitly by Shearer and explicitly by Dobrushin. We also present a generalization of the Lovasz local lemma that allows
        for “soft” dependencies. The paper aims to provide an accessible discussion
        of these results, which are drawn from a longer paper that has appeared
        elsewhere.`
    },
    {
        'date': 'Week 4 of July',
        'threshold': new Date('2024-07-28'),
        'topic':  'Discussion of Exercises 23-27 from "Five lectures..."',
        'record': 'https://disk.yandex.ru/i/uL9KnLtEkNTtIw'
    },
    {
        'date': 'Week 5 of June',
        'threshold': new Date('2024-06-30'),
        'topic': 'Chapter 5 of "Five lectures...": counting and sampling',
        'record': 'https://disk.yandex.ru/i/ie1RJ5yqwlpwlg'
    },
    {
        'date': 'Week 4 of June',
        'threshold': new Date('2024-06-23'),
        'topic':  'Discussion of Exercises 20-22 from "Five lectures..."',
        'record': 'https://disk.yandex.ru/i/0QhKcwIiXMNtJA'
    },
    {
        'date': 'Week 3 of June',
        'threshold': new Date('2024-06-16'),
        'topic': 'Discussion of Exercises 16-19 from "Five lectures..."',
        'record': 'https://disk.yandex.ru/i/41_GZXvX8MsPRg'
    },
    {
        'date': 'Week 2 of June',
        'threshold': new Date('2024-06-09'),
        'topic': 'Chapter 4 of "Five lectures...": applying cluster expansion to counting inpedendent sets in the hypercube',
        'record': 'https://disk.yandex.ru/i/sReokS6jHmyvjw',
    },
    {
        'date': 'Week 5 of May',
        'threshold': new Date('2024-06-02'),
        'topic': 'Discussion of Exercises 9-14 from "Five lectures..."',
        'record': 'https://disk.yandex.ru/i/HwEPWBmJN7Ma-g',
    },
    {
        'date': 'Week 4 of May',
        'threshold': new Date('2024-05-26'),
        'topic': 'Chapter 3 of "Five lectures...": Cluster expnasions',
        'record': 'https://disk.yandex.ru/i/XbsYwGg7dwCcfQ'
    },
    {
        'date': 'Week 3 of April',
        'threshold': new Date('2024-04-21'),
        'topic': 'Chapter 2 of "Five lectures...": Counting independent sets in regular graphs',
        'record': 'https://disk.yandex.ru/i/8TMIQPcMOhleMA',
    },
    {
        'date': 'Week 2 of April',
        'threshold': new Date('2024-04-8'),
        'topic': 'Chapter 1 of "Five lectures...": Fundamentals of Statistical Physics',
    },
    {
        'date': 'Week 1 of April',
        'threshold': new Date('2024-03-31'),
        'topic': 'Introduction of the reading group',
        'record': 'https://disk.yandex.ru/i/OElompwfmZhjfQ'
    }
)


function printUpcomingEvents() {
    let today = new Date()
    let upcomingEventsList = document.createElement('div');
    upcomingEventsList.className = "event-list";

    for (let i = events.length - 1; i >=0; i--) {
        if (today.getTime() <= events[i].threshold.getTime()) {
            let event = document.createElement('div');
            event.className = 'event';

            let date = document.createElement('div');
            date.className = 'event-date';
            date.innerHTML = events[i].date;

            event.appendChild(date);

            let topic = document.createElement('div');
            topic.className = 'event-topic';
            topic.innerHTML = '<b><u>Topic:</u></b><br>'+ events[i].topic;
            event.appendChild(topic)

            if (events[i].speaker != undefined) {
                let speaker = document.createElement('div');
                speaker.className = 'event-speaker';
                speaker.innerHTML = '<b>Speaker:</b> ' + events[i].speaker;
                event.appendChild(speaker);
            }

            if (events[i].abstract !== undefined) {
                let abstract = document.createElement('div');
                abstract.className = 'event-abstarct';
                abstract.innerHTML = '<b><u>Abstract:</u></b><br>'+ events[i].abstract;
                event.appendChild(abstract);
            }

            upcomingEventsList.appendChild(event)
        }
    }

    document.getElementById('main').appendChild(upcomingEventsList);
}


function upcomingMeetings() {
    document.getElementById('main').innerHTML = '';
    printUpcomingEvents();
    setState('upcoming');
}