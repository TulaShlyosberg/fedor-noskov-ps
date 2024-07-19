var homeElement = document.createElement('div');

homeElement.classList.add('home_page');
homeElement.innerHTML = String.raw`<div class="id_photo"><img src="img/me.jpg" width="100%"/></div>
    <div class="bio">
        <div class="bio_title">Bio</div>
        <div class="description">
            <p>I'm a junior researcher in HDI Lab at HSE, and CombGeoLab at MIPT. In 2022, I had an internship in Huawei at Network Algorithms Lab. In 2023, I was the visiting researcher at ESSEC and CREST (Paris).</p>

            <p>I did my bachelor's study at the Moscow Institute of Physics and Technology (2017-2021), then received my master's degree at the Skolkovo Institute of Science and Technology and the Higher School of Economics (2021-2023). At the moment, I'm doing my PhD on Extremal Set Theory at the Moscow Institute of Physics and Technology under the supervision of Andrey Kupavskii.</p>

            <p>My primary research interests are probabilistic methods in extremal set theory, Boolean analysis, high dimensional statistics, and algorithms on large networks.</p>
        </div>
    </div>`;

function home() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(homeElement);
    setState('home');
};