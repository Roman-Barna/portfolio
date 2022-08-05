load()
function load() {
    

function colorsClick(blockRight) {
    for (const item of blockRight.childNodes) {
        if (item.nodeType == 1) {
            item.addEventListener('click', (e) => {
                let css = window.getComputedStyle(e.target)
                context.strokeStyle = css.backgroundColor
                for (const element of blockRight.childNodes) {
                    if (element.nodeType == 1) {
                        element.classList.remove('border')
                    }
                }
                e.target.classList.add('border')
            })
        }
    }
}



    let textCor = document.querySelector('.text__cor')
    let blockRight = document.querySelector('.block__right')
    let container = document.querySelector('.container')
    let paint = document.querySelector('.paint')
    let clear = document.querySelector('.clear')
    let square = document.querySelector('.square')
    let clearAll = document.querySelector('.clearAll')
    let centerNumber = document.querySelector('.center__number')
    let btnCenter = document.querySelectorAll('.center')
let arrayColor = ['black','red','green','orange','yellow','purple','aqua','crimson','gray']
let countBold = 1

setInterval(() => {
    colorsClick(blockRight)
}, 1);


let drawApp = document.getElementById('drawApp')
context = drawApp.getContext('2d')

centerNumber.innerHTML = countBold
arrayColor.forEach(element => {
    let div = document.createElement('div')
    blockRight.appendChild(div)
    div.classList.add('colors')
    div.style.backgroundColor = element
    if (element == 'black') {
        div.classList.add('border')
    }
})

btnCenter.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerHTML == '+' && countBold != 9) {
            ++countBold
        }
        if (e.target.innerHTML == '-' && countBold != 1) {
            --countBold
        }
        centerNumber.innerHTML = countBold
    })
})

let downX, downY
let clearCheck 
clear.addEventListener('click',() => {
    clearCheck = true
    let css = window.getComputedStyle(container)
    context.strokeStyle = css.backgroundColor

})

clearAll.addEventListener('click', () => {
    clearCheck = true
    paint.classList.toggle('check')
    context.clearRect(0, 0, drawApp.width, drawApp.height);
})

square.addEventListener('click', () => {
    
    clearCheck = true
    paint.classList.toggle('check')
    let isPrassedRect
    let isDownPassed = false
    drawApp.addEventListener('mousedown', (e) => {
        if (!isDownPassed) {
                isPrassedRect = true
                context.lineWidth = countBold
        context.closePath()
        let css = window.getComputedStyle(container)
        context.lineWidth = countBold
        colorsClick(blockRight)
            context.fillStyle = css.backgroundColor
            downX = e.offsetX
            downY = e.offsetY
        }
    })

    
    drawApp.addEventListener('mousemove', (e) => {
        if (isPrassedRect) {
                context.fillRect(downX, downY, e.offsetX - downX, e.offsetY- downY)
                context.strokeRect(downX, downY, e.offsetX - downX, e.offsetY - downY)
        }
    })
    document.addEventListener('mouseup', (e) => {
        isPrassedRect = false
        isDownPassed = true
    })
})

paint.addEventListener('click', () => {
    paint.classList.toggle('check')
    if (clearCheck) {
        paint.classList.add('check')
        clearCheck = false
    }
    for (const element of blockRight.childNodes) {
        if (element.nodeType == 1 && element.classList.contains('border')) {
            context.strokeStyle = window.getComputedStyle(element).backgroundColor
        }
    }
    
if (paint.classList.contains('check')) {
    
let isPrassed = false

drawApp.addEventListener('mousedown', (e) => {
    
    context.lineWidth = countBold
    colorsClick(blockRight)
    isPrassed = true
    context.beginPath()
    context.moveTo(e.offsetX, e.offsetY)
    
})
drawApp.addEventListener('mousemove', (e) => {
    if (isPrassed && paint.classList.contains('check')) {
        context.lineTo(e.offsetX, e.offsetY)
        context.stroke()
    }
})
document.addEventListener('mouseup', () => {
    isPrassed = false
    context.closePath()
})
} 
})

drawApp.addEventListener('mousemove', (e) => {
    textCor.innerHTML = `X:${e.offsetX} Y:${e.offsetY}`
})







}