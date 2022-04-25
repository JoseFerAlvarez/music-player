class Song {
  constructor(name, author, song) {
    this.name = name;
    this.author = author;
    this.song = song;
  }
}

const song1 = new Song("Porompompero", "Manolo Escobar", new Audio("./assets/poropopom.mp3"));
const song2 = new Song("La Minifalda", "Manolo Escobar", new Audio("./assets/laminifalda.mp3"));

const songs = [song1, song2];

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");

const title = document.querySelector(".title");
const author = document.querySelector(".author");
let i = 0;

title.textContent = songs[i].name;
author.textContent = songs[i].author;

playButton.addEventListener("click", () => {
  songs[i].song.play();
});

pauseButton.addEventListener("click", () => {
  songs[i].song.pause();
});

backButton.addEventListener("click", () => {
  songs[i].song.pause();

  if (i <= 0) {
    i = songs.length - 1;
  } else {
    i--;
  }
  title.textContent = songs[i].name;
  author.textContent = songs[i].author;
  songs[i].song.play();
});

nextButton.addEventListener("click", () => {
  songs[i].song.pause();

  if (i >= songs.length - 1) {
    i = 0;
  } else {
    i++;
  }
  title.textContent = songs[i].name;
  author.textContent = songs[i].author;
  songs[i].song.play();
});
