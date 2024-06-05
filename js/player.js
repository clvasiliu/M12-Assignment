class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.getSong()}. The album has been played ${this.played} times.`
    }
    getSong = function() {
        return `${this.artist} : ${this.title}`
    }
}

let artistAlbums = [['Operation Ivy', 'Energy'], ['Blink 182', 'Dude Ranch'], ['New Found Glory', 'Sticks and Stones']];
var jbox = new Jukebox();

function init() {
    let songs = document.getElementById("songMenu");
    for (let artistAlbum in artistAlbums) {
        let album = new Album(artistAlbums[artistAlbum][0], artistAlbums[artistAlbum][1]);
        let option = document.createElement("option");
        option.textContent = album.getSong();
        option.value = album.getSong();
        songs.appendChild(option);
        jbox.addAlbum(album);
    }
}

function playSong(e) {
    e.preventDefault();
    let song = document.getElementById("songMenu");
    for (let album in jbox.albums) {
        if (song.value === jbox.albums[album].getSong()) {
            jbox.albums[album].play();
        }
    }
}

window.onload = function() {
    let playBtn = document.getElementById("playButton");
    let favBtn = document.getElementById("favoriteButton");
    init();
    favBtn.addEventListener("click", function() {
        document.getElementById("favoriteAlbum").innerHTML = jbox.favoriteAlbum();
    });
    playBtn.addEventListener("click", function(e) {
        playSong(e);
    });
 };
