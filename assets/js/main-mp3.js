// Selectors

const player = document.getElementById('player');
const playBtn = document.getElementById('playBtn');
const info_title = document.getElementById('info_title');
const title = document.getElementById('title');
const songImg = document.getElementById('songImg');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');

let index = 0;
const songs = [
    /* vol 1 */
    {
        info_title: 'Album vol 1',
        title: 'Tsara loatra',
        file: 'songs/v1/TL.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Ano',
        file: 'songs/v1/ANO.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Ho tia Anao',
        file: 'songs/v1/HTA.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Ifonako',
        file: 'songs/v1/IFK.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Talily fanjaka',
        file: 'songs/v1/TFJ.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Tompo ô inty aho',
        file: 'songs/v1/TPI.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Vavaka manova zavatra',
        file: 'songs/v1/VM.mp3'
    },
    {
        info_title: 'Album vol 1',
        title: 'Vonjeo',
        file: 'songs/v1/VNJ.mp3'
    },
    /* vol 2 */
    {
        info_title: 'Album vol 2',
        title: 'EMIT fandresena',
        file: 'songs/v2/EFA.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Jesosy tsy mandao',
        file: 'songs/v2/JTM.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Katsaho',
        file: 'songs/v2/KTS.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Lehibe izy',
        file: 'songs/v2/LBI.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Lilin-dRagnahary',
        file: 'songs/v2/LLD.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Lala-miakatra',
        file: 'songs/v2/LLM.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Mitsangana mandehana',
        file: 'songs/v2/MMD.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Mahatsiaro sambatsa',
        file: 'songs/v2/MTS.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Raha tsy teo Ianao',
        file: 'songs/v2/RTI.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Tompon-dRagnahary',
        file: 'songs/v2/TDR.mp3'
    },
    {
        info_title: 'Album vol 2',
        title: 'Zagnahary',
        file: 'songs/v2/ZGN.mp3'
    },
    /* vol3 */
    {
        info_title: 'Album vol 3',
        title: 'Ampelatananao',
        file: 'songs/v3/AMP.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Asa fanopoa',
        file: 'songs/v3/ASP.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Hidera',
        file: 'songs/v3/HH.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Hihira aho',
        file: 'songs/v3/HHA.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Ilay tany masina',
        file: 'songs/v3/ITM.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Jesosy hazomanga',
        file: 'songs/v3/JHZ.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Jesô raika avao',
        file: 'songs/v3/JRA.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Misaotra Ray',
        file: 'songs/v3/MRA.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Tiany avao',
        file: 'songs/v3/TAV.mp3'
    },
    {
        info_title: 'Album vol 3',
        title: 'Zaza-mpandany',
        file: 'songs/v3/ZZP.mp3'
    },
]
const NUMBER_OF_SONGS = songs.length;

// Functions
const togglePlay = () => {
    playBtn.classList.contains('pause') ?
        player.pause() :
        player.play();

    playBtn.classList.toggle('pause');
}

const forcePlay = () => {
    if (!playBtn.classList.contains('pause'))
        playBtn.classList.add('pause')
    player.play();
}

const setSong = (newIndex) => {
    index = newIndex;
    if (newIndex >= NUMBER_OF_SONGS)
        index = 0;
    if (newIndex < 0)
        index = NUMBER_OF_SONGS - 1;

    player.src = songs[index].file;
    info_title.innerHTML = songs[index].info_title;
    title.innerHTML = songs[index].title;
    forcePlay()
}

const setProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    // console.log('duration', duration)
    // console.log('currentTime', currentTime)
    if (!duration || !currentTime) return;

    const progressPercentage = (currentTime / duration) * 100;
    progress.style.width = `${progressPercentage}%`;
}

const setCurrentTime = (e) => {
    debugger
    // console.log(e.offsetX);
    const cursorX = e.offsetX;
    const containerWidth = progressContainer.offsetWidth;
    // console.log('containerWidth', containerWidth);
    player.currentTime = (cursorX / containerWidth) * player.duration
}



// Events handlers
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => setSong(index - 1));
nextBtn.addEventListener('click', () => setSong(index + 1));
// update audio progress
player.addEventListener('timeupdate', setProgress);
// set player song currentTime through click
progressContainer.addEventListener('click', setCurrentTime);
