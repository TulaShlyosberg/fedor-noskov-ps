var cvEelement = document.createElement('div');
cvEelement.className = 'cv';
cvEelement.innerHTML = '<div class="content" />';
cvEelement.innerHTML += '<div class="navigation" />';


var education_button = document.createElement('div');
var skills_button = document.createElement('div');
var papers_button = document.createElement('div');
var experience_button = document.createElement('div');
var honors_button = document.createElement('div');
var projects_button = document.createElement('div');


var downloadCV = document.createElement('a');
downloadCV.className = 'cv_download';
downloadCV.href = 'Noskov_CV.pdf';
downloadCV.download = 'Noskov_CV.pdf';
downloadCV.textContent = 'Download CV.pdf';
cvEelement.children[0].appendChild(downloadCV);
cvEelement.children[0].appendChild(document.createElement('br'));

//education

var education = document.createElement('div');

var eductationTitle = document.createElement('div');
eductationTitle.id = 'education';
eductationTitle.className = 'cv_education_title';
eductationTitle.textContent = 'Education';
education.appendChild(eductationTitle);



var educationUniversityMS = document.createElement('div');
educationUniversityMS.className = 'cv_university';
educationUniversityMS.textContent = 'Skolkovo Institute of Science and Technologies (joint program with Higher School of Economics)';
education.appendChild(educationUniversityMS);

var educationUniversityDetails = document.createElement('div');
educationUniversityDetails.className = 'cv_edu_details';
educationUniversityDetails.textContent = 'MSc, Math of Machine Learning, Sep. 2021 - June 2023'
education.appendChild(educationUniversityDetails);

var gpa = document.createElement('div');
gpa.textContent = '- GPA: A (5/5)';
gpa.className = 'cv_edu_gpa';
education.appendChild(gpa);


var courses = document.createElement('div');
courses.className = 'cv_edu_courses';
courses.innerHTML = '- ';

var button_courses = document.createElement('div');
button_courses.id = 'ms';
button_courses.className = 'button-flex';
button_courses.textContent = 'important courses';
courses.appendChild(button_courses);

education.appendChild(courses);


var educationUniversityBS = document.createElement('div');
educationUniversityBS.className = 'cv_university';
educationUniversityBS.textContent = 'MIPT (Moscow Institute of Physics and Technologies)';
education.appendChild(educationUniversityBS);

var educationUniversityDetailsBS = document.createElement('div');
educationUniversityDetailsBS.className = 'cv_edu_details';
educationUniversityDetailsBS.textContent = 'BSc, Applied Mathematics and Physics, Department of Innovations and High Technologies, Sep.2017 - Jul.2021';
education.appendChild(educationUniversityDetailsBS);

var gpaBS = document.createElement('div');
gpaBS.className = 'cv_edu_gpa';
gpaBS.textContent = '- GPA: 8.63/10 (4.8/5)';
education.appendChild(gpaBS);

var distinction = document.createElement('div');
distinction.className = 'cv_edu_gpa';
distinction.textContent = '- Graduated with distinction';
education.appendChild(distinction);

var courses_bs = document.createElement('div');
courses_bs.className = 'cv_edu_courses';
courses_bs.innerHTML = '- ';

var button_courses_bs = document.createElement('div');
button_courses_bs.id = 'bs';
button_courses_bs.className = 'button-flex';
button_courses_bs.textContent = 'important courses';
courses_bs.appendChild(button_courses_bs);

education.appendChild(courses_bs);

cvEelement.children[0].appendChild(education);

//skills

var skills = document.createElement('div');

var skills_title = document.createElement('div');
skills_title.id = 'skills';
skills_title.className = 'cv_title';
skills_title.textContent = 'Skills';

skills.appendChild(skills_title);

var skills_body = document.createElement('div');

skills_body.innerHTML = String.raw`
    <div class="cv_skills_elemnt">
    <div class="cv_skills_title">Programming languages:</div><div class="cv_skills_list">Python, R, SQL, C/C++</div></div>
    <div class="cv_skills_elemnt">
    <div class="cv_skills_title">Machine learning and data analysis:</div><div class="cv_skills_list">scikit‑learn, PyTorch, jax, numpy, scipy, cupy, statsmodels, pandas, matplotlib, seaborn, CatBoost</div></div>
    <div class="cv_skills_elemnt">
    <div class="cv_skills_title">Bayesian methods:</div><div class="cv_skills_list">pyro, PyMC, bayesian‑optimization</div></div>
    <div class="cv_skills_elemnt">
    <div class="cv_skills_title">NLP:</div><div class="cv_skills_list">nltk, transformers</div></div>
    <div class="cv_skills_elemnt">
    <div class="cv_skills_title">Others:</div><div class="cv_skills_list">pyro, PyMC, bayesian‑optimization</div></div>
`

skills.appendChild(skills_body);

cvEelement.children[0].appendChild(skills);


//papers

var cv_papers = document.createElement('div');

cv_papers_title = document.createElement('div');
cv_papers_title.id = 'papers';
cv_papers_title.className = 'cv_title';
cv_papers_title.textContent = 'Papers';

cv_papers.appendChild(cv_papers_title);

var cv_papers_button = document.createElement('div');
cv_papers_button.className = 'button-block';
cv_papers_button.textContent = 'see section Papers';
cv_papers_button.onclick = papers;

cv_papers.appendChild(cv_papers_button);

cvEelement.children[0].appendChild(cv_papers);

//work experience

var work_experience = document.createElement('div');

work_experience_title = document.createElement('div');
work_experience_title.id = 'experience';
work_experience_title.className = 'cv_title';
work_experience_title.textContent = 'Work Experience';
work_experience.appendChild(work_experience_title);

function makeExperienceEntry(where, who, when, results) {
    let entry = document.createElement('div');
    
    let title_and_date = document.createElement('div');

    title_and_date.className = 'cv_work_title';

    let company = document.createElement('div');
    company.className = 'cv_university';
    company.textContent = where;
    title_and_date.appendChild(company);

    let date = document.createElement('div');
    date.className = 'cv_job_timeperiod';
    date.textContent = when;

    title_and_date.appendChild(date);

    entry.appendChild(title_and_date);



    let position = document.createElement('div');
    position.className = 'cv_edu_details';
    position.textContent = who
    entry.appendChild(position);

    results.forEach(element => {
        let result = document.createElement('div');
        result.className = 'cv_edu_gpa';
        result.textContent = '- ' + element;
        entry.appendChild(result);
    });

    return entry;
}

work_experience.appendChild(
    makeExperienceEntry(
        'ESSEC Business School, Paris',
        'Visiting Researcher (intern)', 
        'Jan. 2023 - Mar. 2023',
        new Array(
            'Studying graphon estimation in spectral norm with application to intervention design in large networks',
            'Writing draft of a paper',
            'The poject was joint with Olga Klopp and Francesca Parise'
        )
    )
);

work_experience.appendChild(
    makeExperienceEntry(
        'Huawei Russian Research Institute, Moscow',
        'Assistant Engeneer at Network Algorithm Lab',
        'Jun. 2022 - Dec. 2022',
        new Array(
            'Studying non‑blocking MPI Allreduce for the Spine‑Leaf topology with Andrey Kupavskii',
            'The project has been classified as it provides a competitive advantage'
        )
    )
);


work_experience.appendChild(
    makeExperienceEntry(
        'HDI Lab at Higher School of Economics, Moscow',
        'Research Intern',
        'Dec. 2021 - now',
        new Array(
            'Developing an algorithm for regression with the reject option'
        )
    )
);


work_experience.appendChild(
    makeExperienceEntry(
        'Skoltech Statistical Machine Learning Lab., Moscow',
        'Research Intern',
        'Feb. 2021 - now',
        new Array(
            'Proved convergence of the NUQ algorithm; results were published on NeurIPS 2022',
            'Developed an algorithm of optimal estimation in a mixed‑membership stochastic block model and proving its consistency',
            'Developing an algorithm for regression with the reject option and proving its consistency'
        )
    )
);


work_experience.appendChild(
    makeExperienceEntry(
        'Laboratory of Combinatorial and Geometric Structures at MIPT',
        'Research Intern',
        'Jul. 2021 - now',
        new Array(
            'Applying spread approximation technique to improve a number of combinatorial results',
            'Estimating the product of intersecting families with correlation inequalities and probabilistic method'
        )
    )
);

work_experience.appendChild(
    makeExperienceEntry(
        'Developer Express, Tula',
        'Intern',
        'Jul. 2019',
        new Array(
            'Developing an application on Xamarin and Java'
        )
    )
)

cvEelement.children[0].appendChild(work_experience);


//honors
var honors = document.createElement('div');

var honors_title = document.createElement('div');
honors_title.id = 'honors';
honors_title.className = 'cv_title';
honors_title.textContent = 'Honors';
honors.appendChild(honors_title);

function make_award(year, degree, name, src) {
    let honor = document.createElement('div');
    honor.className = 'cv_honor';
    
    let left_block = document.createElement('div');
    left_block.className = 'cv_honor_left_block'

    let yearElement = document.createElement('div');
    yearElement.className = 'cv_honor_year';
    yearElement.textContent = year;
    left_block.appendChild(yearElement);

    let middle_block = document.createElement('div');
    middle_block.className = 'cv_honor_middle_block';

    let degreeElement = document.createElement('span')
    degreeElement.className = 'cv_honor_degree';
    degreeElement.textContent = degree + ', ';

    let nameElement = document.createElement('span');
    nameElement.className = 'cv_honor_name';
    nameElement.textContent = name;

    middle_block.appendChild(degreeElement);
    middle_block.appendChild(nameElement);
    left_block.appendChild(middle_block);

    let right_block = document.createElement('div');
    right_block.innerHTML = '<a href="' + src + '">acknowledgement</a>';

    honor.appendChild(left_block);
    honor.appendChild(right_block);  
    
    return honor;
}

honors.appendChild(
    make_award(
        '2020',
        'winner',
        'All-Russian Olympiad "Ya Professional" in Mathematics',
        'ya.ru'
    )
);

honors.appendChild(
    make_award(
        '2019',
        'winner',
        'All-Russian Olympiad "Ya Professional" in Mathematics',
        'ya.ru'
    )
);

honors.appendChild(
    make_award(
        '2018',
        'winner',
        'MIPT Student Olympiad in Mathematics',
        'ya.ru'
    )
);

honors.appendChild(
    make_award(
        '2017',
        'prize-winner of the 3rd degree',
        'MIPT Student Olympiad in Mathematics'
    )
);

cvEelement.children[0].appendChild(honors);

function navigate(button) {
    let title = document.getElementById(button.textContent);
    let offset = title.offsetTop;
    window.scrollTo({
        'top': offset,
        'behavior': 'smooth'
    })
}

cvEelement.children[1].innerHTML = String.raw`
        <div class='sticker'>
            <div class='button' onclick='navigate(this)'>education</div>
            <div class='button' onclick='navigate(this)'>skills</div>
            <div class='button' onclick='navigate(this)'>papers</div>
            <div class='button' onclick='navigate(this)'>experience</div>
            <div class='button' onclick='navigate(this)'>honors</div>
        </div>
`



function cv() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(cvEelement);
}