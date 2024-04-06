let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");
let backwardbtn = document.querySelector("#bcwrd");
let forwardbtn = document.querySelector("#frward");


let songPlaylist = [{ 
                     songName : "Suno Na Sangmarmar",
                     src : "../audio/Suno Na Sangemarmar (SlowedReverb)  Arijit Singh  Zamina.mp3",
                     artistName : "Unknown(pagalworld.mp3)",
                     img : "../Images/image1.jpg",
                    },

                    {songName : "Waalian",
                     src : "../audio/Waalian - Harnoor.mp3",
                     artistName : "Harnoor(pagalworld.mp3)",
                     img : "../Images/image1.jpg",
                    },

                    {songName : "Naah",
                     src : "../audio/Naah(PagalWorld.com.se).mp3",
                     artistName : "Jass Manak",
                     img : "../Images/image1.jpg",
                    },

                    {songName : "Parshawan",
                     src :  "../audio/Parshawan - Harnoor.mp3",
                     artistName : "Harnoor(pagalworld.mp3)",
                     img : "../Images/image1.jpg",
                    },
];


let songName = document.querySelector(".songName");
let artistName = document.querySelector(".artist-name");
let img = document.querySelector("img");
let nextSongBtn = document.querySelector(".NextSong");



// function NextSong(){
//     // for (const song of songPlaylist) {
//     //     let currentIdx = 0;
//     //     songPlaylist = songPlaylist[cur];
//     //     source = document.querySelector("#source").src = currentIdx.src;
//     //     song.load();
//     //     autoPlaySong();
//     // } currentIdx++;
//     // console.log(currentIdx);
//     if(currentIndex<songPlaylist.length-1){
//         currentIndex++;
//         displaydata();
//     } else{
//         console.log("No more song");
//     }
// }

function setSongSrc(){
    source = document.querySelector("#source");
    source.src = songPlaylist[currentIndex].src;
}

setSongSrc();

forwardbtn.addEventListener("click", () =>{
    currentIndex = (currentIndex-1+songPlaylist.length)% songPlaylist.length;
    setSongSrc();
    song.play();
} )

function displaydata(){
    const currentData = songPlaylist[currentIndex];
}

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


