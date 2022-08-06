load()
function load() {
    

// play()
// pause()
// paused(false, true)
// currentTime(sec)
// duration(sec)
// currentSrc
// muted(true, false)
// volume

// const splitTime = (sec) => {
//     if(sec % 60 >= 0 && sec % 60 < 10) {
//         return `${Math.floor(sec / 60)}:0${Math.floor(sec % 60)}`
//     }
//     else { 
//         return `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
//     }
// }

// let audioElement = document.getElementById('audioElement')
// let btnPlay = document.getElementById('btnPlay')
// let current = document.getElementById('current')
// let duration = document.getElementById('duration')
// let currentPosition = document.getElementById('currentPosition')
// audioElement.volume = 0.1
// current.innerHTML = splitTime(audioElement.currentTime)
// let intervalId
// let is 
//     currentPosition.onmousemove = () => {
//         if (is == false) {
//             audioElement.currentTime = currentPosition.value
//         }
//     }
//     currentPosition.onmousedown = () => {
//         is = false
//     }
//     currentPosition.onmouseup = () => {
//         is = true
//     }
//     intervalId = setInterval(() => {
//         currentPosition.value = audioElement.currentTime
//         current.innerHTML =  splitTime(audioElement.currentTime)
//     }, 1000)
// btnPlay.onclick = () => {
//     if (audioElement.paused) {
//         audioElement.play()
//         btnPlay.value = 'Pause'
        // intervalId = setInterval(() => {
        //     current.innerHTML =  splitTime(audioElement.currentTime)
        //     currentPosition.value = audioElement.currentTime
        // }, 1000)
       
//     } else {
//         audioElement.pause()
//         btnPlay.value = 'Play'
//         clearInterval(intervalId)
//     }
// }

// if (audioElement.duration) {
//     doSomething();
// } else {
//     audioElement.onloadedmetadata = doSomething;
// }


// function doSomething(event) {
//     duration.innerText = splitTime(audioElement.duration)
//     currentPosition.min = 0
//     currentPosition.max = audioElement.duration
// }


const splitTime = (sec) => {
    if(sec % 60 >= 0 && sec % 60 < 10) {
        return `${Math.floor(sec / 60)}:0${Math.floor(sec % 60)}`
    }
    else { 
        return `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
    }
}




let audio = document.getElementById('audio')
let imgAudio = document.getElementById('imgAudio')
let nameAudio = document.getElementById('nameAudio')
let clickPlay = document.querySelector('.clickPlay')
let biPlay = document.querySelector('.bi-play')
let biStopCircle = document.querySelector('.bi-stop-circle')
let startTime = document.querySelector('.startTime')
let endTime = document.querySelector('.endTime')
let rangeVolume = document.getElementById('rangeVolume')
let biVolumeMute = document.querySelector('.bi-volume-mute')
let biVolumeUp = document.querySelector('.bi-volume-up')
let musicRange = document.getElementById('musicRange')
let previousTrack = document.querySelector('.bi-caret-left-square')
let nextTrack = document.querySelector('.bi-caret-right-square')
let containerLibrary = document.querySelector('.container__library')
let libraryBtn = document.getElementById('libraryBtn')
let ParrentConta = document.getElementById('ParrentConta')

let intervalId
let intervalImg
let is, isVolume
let rotateCount = 0
let countMusic = 0

let arrayMusic = ['audio/audio1.mp3',
'audio/audio2.mp3',
'audio/audio3.mp3'
]
let arrayNameMusic = ['2pac Feat. Dr. Dre, California Love',
'Dr. Dre Feat. Snoop Dogg, Still D.R.E.',
'kara-kross, pora-vzroslet'
]
let imgArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.webp']
audio.src = arrayMusic[countMusic]
resetName()
let intLibery
imgAudio.src = imgArray[countMusic]
createLibrary()
let textLibrary = document.querySelectorAll('.text__library')

containerLibrary.style.top = ParrentConta.getBoundingClientRect().top + 5 + 'px'
containerLibrary.style.left = ParrentConta.getBoundingClientRect().right + 5 + 'px'
let isLibraryTrue = false
containerLibrary.style.width = '0px'
libraryBtn.addEventListener('click', () => {
    clearInterval(intLibery)
    textLibrary.forEach(element => {
        element.style.display = 'none'
    })
    let amount = 10
    if (isLibraryTrue == false) {
        containerLibrary.style.display = 'inline-block'
        isLibraryTrue = true
        intLibery = setInterval(() => {
            if (amount < 270) {
                amount += 5
                containerLibrary.style.width = `${amount}px`
            }
            if (amount >= 270) {
                textLibrary.forEach(element => {
                    element.style.display = 'block'
                    
                })
            }
        }, 1);
    } else {
        containerLibrary.style.display = 'none'
        isLibraryTrue = false
        clearInterval(intLibery)
    }
})


function createLibrary() {
    let count = 0
    arrayMusic.forEach((element, id) => {
        let block = document.createElement('div')
        let img = document.createElement('img')
        let text = document.createElement('p')
        block.classList.add('block__library')
        img.classList.add('img__library')
        text.classList.add('text__library')
        containerLibrary.appendChild(block)
        block.appendChild(img)
        block.appendChild(text)
        img.src = imgArray[count]
        let names = arrayNameMusic[count].split(',')
        text.innerHTML = `${names[0]}<p style = "margin:0px;">${names[1]}</p>`
        block.addEventListener('click', () => {
            audio.src = element
            imgAudio.src = imgArray[id]
            nameAudio.innerHTML = `${names[0]}<p style = "text-align: center;">${names[1]}</p>`
            reset()
            play()
        })
        count++
    })
}

function resetName() {
    let names = arrayNameMusic[countMusic].split(',')
nameAudio.innerHTML = `${names[0]}<p style = "text-align: center;">${names[1]}</p>`
}

function play() {
    if (audio.paused) {
        biPlay.style.display = 'none'
        biStopCircle.style.display = 'block'
        audio.play()
        intervalImg = setInterval(() => {
            rotateCount += 1
            imgAudio.style.transform = `rotate(${rotateCount}deg)`
        }, 10);
        intervalId = setInterval(() => {
            nextMusic()
            startTime.innerHTML =  splitTime(audio.currentTime)
            musicRange.value = audio.currentTime
        }, 1000)
    } else {
        clearInterval(intervalId)
        clearInterval(intervalImg)
        audio.pause()
        biPlay.style.display = 'block'
        biStopCircle.style.display = 'none'
    }
}

function nextMusic() {
    if (splitTime(audio.currentTime) == splitTime(audio.duration)) {
        audio.src = arrayMusic[++countMusic % arrayMusic.length]
    if (countMusic % arrayMusic.length == 0) {
        countMusic = 0
    }
    imgAudio.src = imgArray[countMusic] 
    resetName()
    reset()
    play()
    }
}

function reset() {
    clearInterval(intervalId)
    clearInterval(intervalImg)
    rotateCount = 0
    imgAudio.style.transform = `rotate(${rotateCount}deg)`
    biPlay.style.display = 'block'
    biStopCircle.style.display = 'none'
    startTime.innerHTML =  splitTime(audio.currentTime)
    musicRange.value = audio.currentTime
}

previousTrack.addEventListener('click', () => {
    if (countMusic == 0) {
        countMusic = arrayMusic.length
    }
    audio.src = arrayMusic[--countMusic % arrayMusic.length]
    imgAudio.src = imgArray[countMusic]
    resetName()
    reset()
    play()
})

nextTrack.addEventListener('click', () => {
    audio.src = arrayMusic[++countMusic % arrayMusic.length]
    if (countMusic % arrayMusic.length == 0) {
        countMusic = 0
    }
    imgAudio.src = imgArray[countMusic] 
    resetName()
    reset()
    play()
})

musicRange.onmousemove = () => {
            if (is == false) {
                audio.currentTime = musicRange.value
            }
        }
        musicRange.onmousedown = () => {
            audio.currentTime = musicRange.value
            is = false
        }
        musicRange.onmouseup = () => {
            audio.currentTime = musicRange.value
            is = true
        }

        rangeVolume.onmousemove = () => {
            if (isVolume == false) {
                audio.volume = rangeVolume.value
            }
        }
        rangeVolume.onmousedown = () => {
            isVolume = false
        }
        rangeVolume.onmouseup = () => {
            isVolume = true
        }

startTime.innerHTML =  splitTime(audio.currentTime)

intervalId = setInterval(() => {
    musicRange.value = audio.currentTime
}, 1000)

clickPlay.addEventListener('click', () => {
    play()
})

if (audio.duration) {
    doSomething();
} else {
    audio.onloadedmetadata = doSomething;
}

function doSomething() {
    endTime.innerText = splitTime(audio.duration)
    musicRange.min = 0
    musicRange.max = audio.duration
}

}