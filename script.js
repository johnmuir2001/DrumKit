let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

let main = document.getElementById("main");

document.addEventListener('keypress', (keyValue) => {
    if (keyValue.keyCode == 97) {
        main.style.animation = "mainDrum 0.25s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 250)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.keyCode == 115) {
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.keyCode == 100) {
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (keyValue.keyCode == 102) {
        main.style.animation = "mainDrum 0.25s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 250)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.keyCode == 103) {
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (keyValue.keyCode == 104) {
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.keyCode == 106) {
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.keyCode == 107) {
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.keyCode == 108) {
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
  })