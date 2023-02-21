var homeElement = document.createElement('div');

homeElement.classList.add('home_page');
homeElement.innerHTML = '<div class="id_photo"><img src="img/me.jpg" width="100%"/></div>\
    <div class="bio">\
        <div class="bio_title">Bio</div>\
        <div class="description">\
            I was born!\
        </div>\
    </div>';

function home() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(homeElement);
};