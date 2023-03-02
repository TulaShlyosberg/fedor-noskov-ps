var homeElement = document.createElement('div');

homeElement.classList.add('home_page');
homeElement.innerHTML = String.raw`<div class="id_photo"><img src="img/me.jpg" width="100%"/></div>
    <div class="bio">
        <div class="bio_title">Bio</div>
        <div class="description">
            <p>I did my bachelor's study at the Moscow Institute of Physics and Technology (2017-2021). Currently, I'm receiving my master's degree at the Skolkovo Institute of Science and Technology and the Higher School of Economics.</p>

            <p>I'm the research intern in StatML Lab at Skoltech, HDI Lab at HSE, and CombGeoLab at MIPT. In 2022, I had an internship in Huawei at Network Algorithms Lab. In 2023, I was the visiting researcher at ESSEC and CREST (Paris).</p>

            <p>My primary research interests are probabilistic methods in extremal set theory, high dimensional statistics, and algorithms on large networks.</p>
        </div>
    </div>`;

function home() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(homeElement);
};