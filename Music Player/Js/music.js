let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");

let songPlaylist = [
{id : 1,
 songName : "Suno Na Sangmarmar",
 src : "../audio/Suno Na Sangemarmar (SlowedReverb)  Arijit Singh  Zamina.mp3",
 artistName : "Unknown(pagalworld.mp3)",
 img : "../Images/image1.jpg",
},
{id : 2,
 songName : "Waalian",
 src : "../audio/Waalian - Harnoor.mp3",
 artistName : "Harnoor(pagalworld.mp3)",
 img : "../Images/Waaliyan.jpg",
},
{id : 3,
 songName : "Naah",
 src : "../audio/Naah(PagalWorld.com.se).mp3",
 artistName : "Jass Manak",
 img : "../Images/naah.jpg",
},
{id : 4,
 songName : "Parshawan",
 src :  "../audio/Parshawan - Harnoor.mp3",
 artistName : "Harnoor(pagalworld.mp3)",
 img : "../Images/parshawan.jpg",
},
];


let fbtnClickCount = 1;
let forwardBtn = document.querySelector("#forward");

forwardBtn.addEventListener("click", ()=>{
    let index = fbtnClickCount;
    source = document.querySelector("source").src = songPlaylist[index].src;
    songName = document.querySelector(".songName").innerText = songPlaylist[index].songName;
    artistName = document.querySelector(".artist-name").innerText = songPlaylist[index].artistName;
    thumbImage = document.querySelector("#image").src = songPlaylist[index].img;
    song.load();
    autoPlaySong();
    fbtnClickCount++;
} );

let bbtnClickCount = 3;

let backwardBtn = document.querySelector("#backward");

backwardBtn.addEventListener("click", ()=>{
    let index = bbtnClickCount;
    source = document.querySelector("source").src = songPlaylist[index].src;
    songName = document.querySelector(".songName").innerText = songPlaylist[index].songName;
    artistName = document.querySelector(".artist-name").innerText = songPlaylist[index].artistName;
    thumbImage = document.querySelector("#image").src = songPlaylist[index].img;
    song.load();
    autoPlaySong();
    bbtnClickCount--;
} );

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
};

function autoPlaySong(){
    if(song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500);
    };
};

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};


