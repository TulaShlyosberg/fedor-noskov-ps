var cvEelement = document.createElement('div');
cvEelement.className = 'cv';
cvEelement.innerHTML = '<div class="content"><\div><div class="navigation></div>'


var education_button = document.createElement('div');
var skills_button = document.createElement('div');
var papers_button = document.createElement('div');
var experience_button = document.createElement('div');
var honors_button = document.createElement('div');
var projects_button = document.createElement('div');


var downloadCV = document.createElement('div');
downloadCV.className = 'cv_download';
downloadCV.textContent = 'Download CV.pdf';
cvEelement.children[0].appendChild(downloadCV);
cvEelement.children[0].appendChild(document.createElement('br'));

var eductation = document.createElement('div');
eductation.className = 'cv_unit';


var eductationTitle = document.createElement('div');
eductationTitle.className = 'cv_education_title';
eductationTitle.textContent = 'Education';
eductation.appendChild(eductationTitle);


cvEelement.children[0].appendChild(eductation);

function cv() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(cvEelement);
}