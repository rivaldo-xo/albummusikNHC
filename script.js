const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Aku Milikmu",
    name: "florine",
    source:
      "./song3.mp3",
  },
  {
    title: "Die For You",
    name: "The Weekend Edgar",
    source:
      "./song8.mp3",
  },
  {
    title: "Out Of My League",
    name: "chelly",
    source:
      "./song6.mp3",
  },
  {
    title: "AEAO",
    name: "VAL DynamicDuo",
    source:
      "./song1.mp3",
  },
  {
    title: "Sesame Syrup",
    name: "Amm Rockpank",
    source:
      "./song9.mp3",
  },
  {
    title: "Forgot Password",
    name: "Nasya Del Rey",
    source:
      "./song7.mp3",
  },
  {
    title: "Somebody's Pleasure",
    name: "𝑫𝒂𝒏𝒊𝒆𝒍 𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒆𝒓 𝑪𝒂𝒌𝒆𝒑",
    source:
      "./song4.mp3",
  },

  {
    title: "EXILE",
    name: "hee imup",
    source:
      "./song10.mp3",
  },
  {
    title: "Last Night on Earth",
    name: "Liara Rockpank",
    source:
      "./song11.mp3",
  },
  {
    title: "Kangen Dewa 19",
    name: "Cikakuki Punya Dilan",
    source:
      "./song2.mp3",
  },
  {
    title: "BIRDS OF A FEATHER",
    name: "Keyyzz Ackerman",
    source:
      "./song5.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 5,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
