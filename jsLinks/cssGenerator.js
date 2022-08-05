reset()
function reset() {
    let box = document.querySelector('.box')
let rangeWidht = document.getElementById('rangeWidht')
let numberWidth = document.getElementById('numberWidth')
let rangeHeight = document.getElementById('rangeHeight')
let numberHeight = document.getElementById('numberHeight')
let codeOutput = document.getElementById('code-output')
let btnCopy = document.getElementById('btnCopy')
let copys = document.querySelector('.copy')
let textInpus = document.querySelectorAll('.text__inpus')

//

let i = 0
let int
let tmt
btnCopy.addEventListener('click', () => {
    clearInterval(int)
    clearTimeout(tmt)
    navigator.clipboard.writeText(codeOutput.value)
    copys.style.display = 'block'
        int = setInterval(() => {
            if (i < 300) {
            i += 5
            copys.style.top = i + 'px'
            } 
        }, 1);
    if (i >= 300) {
        i = 0
        copys.style.top = 0 + 'px'
        }
    tmt = setTimeout(() => { 
        copys.style.display = 'none'
    }, 1000);
        
})
let flexCheckDefault1 = document.getElementById('flexCheckDefault1')
flexCheckDefault1.addEventListener('input', () => {
    if (flexCheckDefault1.checked) {
        textInpus.forEach(e => e.innerHTML = '%')
        rangeWidht.value = 10
        rangeWidht.max = 100
        rangeWidht.min = 0
        rangeHeight.value = 10
        rangeHeight.max = 100
        rangeHeight.min = 0
    } else {
        textInpus.forEach(e => e.innerHTML = 'px')
        rangeWidht.value = 100
        rangeWidht.max = 200
        rangeWidht.min = 0
        rangeHeight.value = 100
        rangeHeight.max = 200
        rangeHeight.min = 0
    }
})

rangeWidht.addEventListener('input', () => {
    if (flexCheckDefault1.checked) {
        box.style.width = rangeWidht.value + '%'
        box.style.width = numberWidth.value + '%'
        numberWidth.value = rangeWidht.value
        codeOutput.value = `height: ${rangeHeight.value}%; wigth: ${numberWidth.value}%;`
    } else {
        box.style.width = rangeWidht.value + 'px'
        box.style.width = numberWidth.value + 'px'
        numberWidth.value = rangeWidht.value
        codeOutput.value = `height: ${rangeHeight.value}px; wigth: ${numberWidth.value}px;`
    }
    
})
numberWidth.addEventListener('input', () => {
    if (flexCheckDefault1.checked) {
    box.style.width = numberWidth.value + '%'
    rangeWidht.value = numberWidth.value
    codeOutput.value = `height: ${rangeHeight.value}%; wigth: ${numberWidth.value}%;`
    } else {
        box.style.width = numberWidth.value + 'px'
        rangeWidht.value = numberWidth.value
        codeOutput.value = `height: ${rangeHeight.value}px; wigth: ${numberWidth.value}px;`
    }
})


rangeHeight.addEventListener('input', () => {
    if (flexCheckDefault1.checked) {
    box.style.height = rangeHeight.value + '%'
    box.style.height = numberHeight.value + '%'
    numberHeight.value = rangeHeight.value
    codeOutput.value = `height: ${rangeHeight.value}%; wigth: ${numberWidth.value}%;`
    } else {
        box.style.height = rangeHeight.value + 'px'
        box.style.height = numberHeight.value + 'px'
        numberHeight.value = rangeHeight.value
        codeOutput.value = `height: ${rangeHeight.value}px; wigth: ${numberWidth.value}px;`
    }
})
numberHeight.addEventListener('input', () => {
    if (flexCheckDefault1.checked) {
    box.style.height = numberHeight.value + '%'
    rangeHeight.value = numberHeight.value
    codeOutput.value = `height: ${numberHeight.value}%; wigth: ${numberWidth.value}%;`
    } else {
        box.style.height = numberHeight.value + 'px'
        rangeHeight.value = numberHeight.value
        codeOutput.value = `height: ${numberHeight.value}px; wigth: ${numberWidth.value}px;`
    }
})


let BottomRight = document.getElementById('BottomRight')
let numberBottomRight = document.getElementById('numberBottomRight')
let BottomLeft = document.getElementById('BottomLeft')
let numberBottomLeft = document.getElementById('numberBottomLeft')
let TopRight = document.getElementById('TopRight')
let numberTopRight = document.getElementById('numberTopRight')
let TopLeft = document.getElementById('TopLeft')
let numberTopLeft = document.getElementById('numberTopLeft')

BottomRight.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    
    numberBottomRight.value = BottomRight.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

numberBottomRight.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    BottomRight.value = numberBottomRight.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})


BottomLeft.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    numberBottomLeft.value = BottomLeft.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

numberBottomLeft.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    BottomLeft.value = numberBottomLeft.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

TopRight.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${numberBottomRight.value}px`
    numberTopRight.value = TopRight.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

numberTopRight.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    TopRight.value = numberTopRight.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

TopLeft.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${numberBottomRight.value}px`
    numberTopLeft.value = TopLeft.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})

numberTopLeft.addEventListener('input', () => {
    box.style.borderRadius = `${TopLeft.value}px ${TopRight.value}px ${BottomRight.value}px ${BottomLeft.value}px`
    TopLeft.value = numberTopLeft.value
    codeOutput.value = `border-radius: ${TopLeft.value}px ${TopRight.value}px ${BottomLeft.value}px ${BottomRight.value}px;`
})


let offsetX = document.getElementById('offsetX')
let numberoffsetX = document.getElementById('numberoffsetX')
let offsetY = document.getElementById('offsetY')
let numberoffsetY = document.getElementById('numberoffsetY')
let blurRadius = document.getElementById('blurRadius')
let numberblurRadius = document.getElementById('numberblurRadius')
let spreadRadius = document.getElementById('spreadRadius')
let numberspreadRadius = document.getElementById('numberspreadRadius')
let colorSwadow = document.getElementById('colorSwadow')
let flexCheckDefault2 = document.getElementById('flexCheckDefault2')

function returnBoxShadow() {
    return `${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorSwadow.value}`
}
function returnCopyText() {
    return `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorSwadow.value};`
}
function returnBoxShadowInset() {
    return `inset ${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorSwadow.value}`
}
function returnCopyTextInset() {
    return `box-shadow: inset ${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorSwadow.value};`
}


    if (flexCheckDefault2.checked) {
        
    } else {

    }

offsetX.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        numberoffsetX.value = offsetX.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        numberoffsetX.value = offsetX.value
        codeOutput.value = returnCopyText()
    }
})

numberoffsetX.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        offsetX.value = numberoffsetX.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        offsetX.value = numberoffsetX.value
        codeOutput.value = returnCopyText()
    }
})

offsetY.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        numberoffsetY.value = offsetY.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        numberoffsetY.value = offsetY.value
        codeOutput.value = returnCopyText()
    }
})

numberoffsetY.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        offsetY.value = numberoffsetY.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        offsetY.value = numberoffsetY.value
        codeOutput.value = returnCopyText()
    }
})
blurRadius.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        numberblurRadius.value = blurRadius.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        numberblurRadius.value = blurRadius.value
        codeOutput.value = returnCopyText()
    }
})

numberblurRadius.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        blurRadius.value = numberblurRadius.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        blurRadius.value = numberblurRadius.value
        codeOutput.value = returnCopyText()
    }
})
spreadRadius.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        numberspreadRadius.value = spreadRadius.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        numberspreadRadius.value = spreadRadius.value
        codeOutput.value = returnCopyText()
    }
})

numberspreadRadius.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        spreadRadius.value = numberspreadRadius.value
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        spreadRadius.value = numberspreadRadius.value
        codeOutput.value = returnCopyText()
    }
})

colorSwadow.addEventListener('input', () => {
    if (flexCheckDefault2.checked) {
        box.style.boxShadow = returnBoxShadowInset()
        codeOutput.value = returnCopyTextInset()
    } else {
        box.style.boxShadow = returnBoxShadow()
        codeOutput.value = returnCopyText()
    }
})

let optionFonts = document.getElementById('optionFonts')
let rangeSizeText = document.getElementById('rangeSizeText')
let numberSizeText = document.getElementById('numberSizeText')
let boxText = document.querySelector('.boxText')

optionFonts.addEventListener('input', () => {
    boxText.style.fontFamily = optionFonts.value
    codeOutput.value = `font-family: ${optionFonts.value};
    font-size: ${rangeSizeText.value}px;`
})

rangeSizeText.addEventListener('input', () => {
    boxText.style.fontSize = `${rangeSizeText.value}px`
    numberSizeText.value = rangeSizeText.value
    codeOutput.value = `font-family: ${optionFonts.value};
    font-size: ${rangeSizeText.value}px;`
})

numberSizeText.addEventListener('input', () => {
    boxText.style.fontSize = `${numberSizeText.value}px`
    rangeSizeText.value = numberSizeText.value
    codeOutput.value = `font-family: ${optionFonts.value};
    font-size: ${numberSizeText.value}px;`
})

let rangeScale = document.getElementById('rangeScale')
let numberScale = document.getElementById('numberScale')
let rangeRotate = document.getElementById('rangeRotate')
let numberRotate = document.getElementById('numberRotate')
let rangeSkewX = document.getElementById('rangeSkewX')
let rangeSkewY = document.getElementById('rangeSkewY')
let numberSkewX = document.getElementById('numberSkewX')
let numberSkewY = document.getElementById('numberSkewY')
let rangeTranslateX = document.getElementById('rangeTranslateX')
let numberTranslateX = document.getElementById('numberTranslateX')
let rangeTranslateY = document.getElementById('rangeTranslateY')
let numberTranslateY = document.getElementById('numberTranslateY')
let flexCheckDefault = document.getElementById('flexCheckDefault')
let textInpu = document.getElementById('text__inpu')
let textInpu1 = document.getElementById('text__inpu1')
function copy() {
    return `transform: scale(${numberScale.value});
    transform: rotate(${numberRotate.value}deg);
    transform: translate(${numberTranslateX.value}%,${rangeTranslateY.value}%);
    transform: skew(${rangeSkewX.value}deg,${rangeSkewY.value}deg);`
}
function copyPx() {
    return `transform: scale(${numberScale.value});
    transform: rotate(${numberRotate.value}deg);
    transform: translate(${numberTranslateX.value}px, ${rangeTranslateY.value}px);
    transform: skew(${rangeSkewX.value}deg,${rangeSkewY.value}deg);`
}

function copyTransform() {
    return `scale(${rangeScale.value})
    rotate(${rangeRotate.value}deg)
    translate(${rangeTranslateX.value}%,${rangeTranslateY.value}%)
    skew(${rangeSkewX.value}deg,${rangeSkewY.value}deg)`
}
function copyTransformPx() {
    return `scale(${rangeScale.value})
    rotate(${rangeRotate.value}deg)
    translate(${rangeTranslateX.value}px,${rangeTranslateY.value}px)
    skew(${rangeSkewX.value}deg,${rangeSkewY.value}deg)`
}

rangeScale.addEventListener('input', () => {
    box.style.transform = copyTransform()
    numberScale.value = rangeScale.value
    codeOutput.value = copy()
})
numberScale.addEventListener('input', () => {
    box.style.transform = copyTransform()
    rangeScale.value = numberScale.value
    codeOutput.value = copy()
})

rangeRotate.addEventListener('input', () => {
    box.style.transform = copyTransform()
    numberRotate.value = rangeRotate.value
    codeOutput.value = copy()
})
numberRotate.addEventListener('input', () => {
    box.style.transform = copyTransform()
    rangeRotate.value = numberRotate.value
    codeOutput.value = copy()
})

rangeTranslateX.addEventListener('input', () => {
    if (flexCheckDefault.checked) {
        box.style.transform = copyTransformPx()
        numberTranslateX.value = rangeTranslateX.value
        codeOutput.value = copyPx()
    } else {
        box.style.transform = copyTransform()
        numberTranslateX.value = rangeTranslateX.value
        codeOutput.value = copy()
}
    
})
setInterval(() => {
    if (flexCheckDefault.checked) {
        textInpu.innerText = 'px'
        textInpu1.innerText = 'px'

    }else {
        textInpu.innerText = '%'
        textInpu1.innerText = '%'
    }
}, 1);


numberTranslateX.addEventListener('input', () => {
    if (flexCheckDefault.checked) {
        
        box.style.transform = copyTransformPx()
        rangeTranslateX.value = numberTranslateX.value
        codeOutput.value = copyPx()
    } else {
        box.style.transform = copyTransform()
        rangeTranslateX.value = numberTranslateX.value
        codeOutput.value = copy()
    }
})
rangeTranslateY.addEventListener('input', () => {
    if (flexCheckDefault.checked) {
        box.style.transform = copyTransformPx()
        numberTranslateY.value = rangeTranslateY.value
        codeOutput.value = copyPx()
    } else {
        box.style.transform = copyTransform()
        numberTranslateY.value = rangeTranslateY.value
        codeOutput.value = copy()
    }
})
numberTranslateY.addEventListener('input', () => {
    if (flexCheckDefault.checked) {
        box.style.transform = copyTransformPx()
    rangeTranslateY.value = numberTranslateY.value
        codeOutput.value = copyPx()
    } else {
        box.style.transform = copyTransform()
        rangeTranslateY.value = numberTranslateY.value
        codeOutput.value = copy()
    }
})

rangeSkewX.addEventListener('input', () => {
    box.style.transform = copyTransform()
    numberSkewX.value = rangeSkewX.value
    codeOutput.value = copy()
})
numberSkewX.addEventListener('input', () => {
    box.style.transform = copyTransform()
    rangeSkewX.value = numberSkewX.value
    codeOutput.value = copy()
})
rangeSkewY.addEventListener('input', () => {
    box.style.transform = copyTransform()
    numberSkewY.value = rangeSkewY.value
    codeOutput.value = copy()
})
numberSkewY.addEventListener('input', () => {
    box.style.transform = copyTransform()
    rangeSkewY.value = numberSkewY.value
    codeOutput.value = copy()
})


let rangeweight = document.getElementById('rangeweight')
let numberweight = document.getElementById('numberweight')


rangeweight.addEventListener('input', () => {
    boxText.style.fontWeight = rangeweight.value
    numberweight.value = rangeweight.value
    codeOutput.value = `font-family: ${optionFonts.value};
    font-size: ${rangeSizeText.value}px;
    font-weight: ${rangeweight.value};`
})
numberweight.addEventListener('input', () => {
    boxText.style.fontWeight = numberweight.value
    rangeweight.value = numberweight.value
    codeOutput.value = `font-family: ${optionFonts.value};
    font-size: ${rangeSizeText.value}px;
    font-weight: ${numberweight.value};`
})


let BackgroundColorId = document.getElementById('BackgroundColorId')
let rangeR = document.getElementById('rangeR')
let rangeG = document.getElementById('rangeG')
let rangeB = document.getElementById('rangeB')

function rgbStyle() {
    return `rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value})`
}
function rgbCopy() {
    return `background-color: rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value});`
}

function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb2hex(rgb) {
    var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
};

BackgroundColorId.addEventListener('input', () => {
    let tmpRGB =  hex2rgb(BackgroundColorId.value)
    box.style.backgroundColor = BackgroundColorId.value
    codeOutput.value = `background-color: ${BackgroundColorId.value};`
    rangeR.value = tmpRGB.r
    rangeG.value = tmpRGB.g
    rangeB.value = tmpRGB.b
    
})
rangeR.addEventListener('input', () => {
    box.style.backgroundColor = rgbStyle()
    codeOutput.value = rgbCopy()
    BackgroundColorId.value = `${rgb2hex(`rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value})`)}`
})
rangeG.addEventListener('input', () => {
    box.style.backgroundColor = rgbStyle()
    codeOutput.value = rgbCopy()
    BackgroundColorId.value = `${rgb2hex(`rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value})`)}`
})
rangeB.addEventListener('input', () => {
    box.style.backgroundColor = rgbStyle()
    codeOutput.value = rgbCopy()
    BackgroundColorId.value = `${rgb2hex(`rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value})`)}`
})

let optionAlign = document.getElementById('optionAlign')
let optionJustify = document.getElementById('optionJustify')
let optionWrap = document.getElementById('optionWrap')
let optionDirection = document.getElementById('optionDirection')
let clickFlex = document.getElementById('clickFlex')
let boxContaiter = document.querySelector('.box-contaiter')
let boxFlex = document.querySelectorAll('.box__flex')
let ii = 0

for (const iterator of clickFlex.parentNode.childNodes) {
    if (iterator.nodeType == 1) {
        iterator.addEventListener('click', () => {
            ii++
            box.classList.remove('none')
            boxFlex.forEach(element => {
                element.classList.remove('none__block')
            }) 
        })
    }
}

clickFlex.addEventListener('click', () => {
    ii = 1
    if (ii == 1) {
        ii++
        box.classList.add('none')
        boxFlex.forEach(element => {
            element.classList.add('none__block')
        }) 
    }
})

function copyFlex() {
    return `.box-contaiter {
    display: flex;
    justify-content: ${optionJustify.value};
    align-items:  ${optionAlign.value};
    flex-wrap: ${optionWrap.value} ;
    flex-direction: ${optionDirection.value};
}`
}

optionAlign.addEventListener('input', () => {
    boxContaiter.style.alignItems = optionAlign.value
    codeOutput.value = copyFlex()
})

optionJustify.addEventListener('input', () => {
    boxContaiter.style.justifyContent = optionJustify.value
    codeOutput.value = copyFlex()
})

optionWrap.addEventListener('input', () => {
    boxContaiter.style.flexWrap = optionWrap.value
    codeOutput.value = copyFlex()
})

optionDirection.addEventListener('input', () => {
    boxContaiter.style.flexDirection = optionDirection.value
    codeOutput.value = copyFlex()
})
}
