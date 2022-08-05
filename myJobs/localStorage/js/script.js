// Task classwork 1

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "="); // version=

    // Если cookie с указанным именем найден, извлечь его значения.
    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);

        if (end == -1) {
            end = allcookies.length;
        }

        var value = allcookies.substring(start, end);

        return decodeURIComponent(value);
    }
}

let visit = document.getElementById('visit')
visitCounter = ''

if (findCookieValue('lastVisit')) {
    visitCounter = findCookieValue('lastVisit')
}

document.cookie = `lastVisit=${new Date().toLocaleString()}`

if (visitCounter == '') {
    visit.innerHTML = `Ви ще незаходили`
} else {
    visit.innerHTML = `Ви останній раз заходили ${visitCounter}`
}

// Task classwork 2

let linkStylesheet = document.getElementById('linkStylesheet')
let optionThemes = document.getElementById('optionThemes')
let linkBootstrap = document.getElementById('linkBootstrap')

if (localStorage.getItem("theme")) {
    let theme = localStorage.getItem("theme")
    let option = localStorage.getItem("option")
        linkStylesheet.href = theme
        optionThemes.value = option
}

optionThemes.addEventListener('click', () => {
    linkStylesheet.href = `./Themes/${optionThemes.value}.css`
    localStorage.setItem("theme", linkStylesheet.href)
    localStorage.setItem("option", optionThemes.value)
}) 


// Task classwork 3


let blockColors = document.querySelector('.block__colors')
let error = document.querySelector('.error')
let exampleInputText = document.getElementById('exampleInputText')
let btnAdd = document.getElementById('btnAdd')
let typeOptions = document.getElementById('typeOptions')
let exampleInputCode = document.getElementById('exampleInputCode')
let errorCode = document.querySelector('.errorCode')
let arrayColors = []
let arrayColorsText = []
let result = true
let arrValidText = []
if (localStorage.getItem('ColorText')) {
    let array = localStorage.getItem("ColorText")
    array = JSON.parse(array)
    //
    let arrayColorsCookie = localStorage.getItem("Color")
    arrayColorsCookie = JSON.parse(arrayColorsCookie)
    //
    let arrValidTextCookie = localStorage.getItem('text')
    arrValidTextCookie = JSON.parse(arrValidTextCookie)
    //
    let i = -1
    for (const item of arrayColorsCookie) {
        // container
        let container = document.createElement('div')
        container.classList.add('Container_Color')
        blockColors.appendChild(container)
        container.style.backgroundColor = item
        arrayColors.push(item)

        // block center
        let block = document.createElement('div')
        block.classList.add('block_Color')
        container.appendChild(block)

        // text
        let paragraph = document.createElement('p')
        paragraph.classList.add('text__container')
        container.appendChild(paragraph)
        paragraph.innerHTML = array[++i]
        arrayColorsText.push(array[i])
        arrValidText.push(arrValidTextCookie[i])

        // close
        let Close = document.createElement('p')
        Close.classList.add('Close')
        container.appendChild(Close)
        Close.innerHTML = 'x'
        Close.addEventListener('click', (e) => {
            DeleteArrCookie(e.target.parentNode)
        })
    }
}



function DeleteArrCookie(e) {
    let css = window.getComputedStyle(e)
    let closeColor = css.backgroundColor.replace(/\s/g, '')
    arrayColors.forEach((element, id) => {
        if (element == closeColor) {
            arrayColorsText.splice(id, 1)
            arrayColorsText = JSON.stringify(arrayColorsText)
            localStorage.setItem('ColorText', arrayColorsText)
            arrayColorsText = JSON.parse(arrayColorsText)
            //
            arrValidText.splice(id, 1)
            arrValidText = JSON.stringify(arrValidText)
            localStorage.setItem('text', arrValidText)
            arrValidText = JSON.parse(arrValidText)
            //
            arrayColors.splice(id, 1)
            arrayColors = JSON.stringify(arrayColors)
            localStorage.setItem('Color', arrayColors)
            arrayColors = JSON.parse(arrayColors)
        }
    })
    e.remove()
}

function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function colorValid(colorValue, error) {
    let colorPattern = /^[a-zA-Z]{3,16}$/
    let validation = colorPattern.test(colorValue)
    if (!validation) {
        error.style.display = 'block'
        error.innerHTML = 'color can only contain letters!'
        return false
    } else {
        error.style.display = 'none'
        return true
    }
}

function codeValid(codeValue, option, error) {
    let codePattern
    let validation
    let tmp
    switch (option) {
        case "rgb":
            codePattern = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
            validation = codePattern.test(codeValue)
            tmp = codeValue.split(',')
            if (validation && tmp.filter(element => element <= 255).length == tmp.length) {
                error.style.display = 'none'
                return true
            } else {
                error.style.display = 'block'
                error.innerHTML = '•RGB – 3 числа через запятую, каждое число в диапазоне от 0 до 255'
                return false
            }

        case "rgba":
            codePattern = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3},[0-1]{1}.?[0-9]?$/
            validation = codePattern.test(codeValue)
            tmp = codeValue.split(',')
            if (validation && tmp.filter(element => element <= 255).length == tmp.length &&
                +tmp[tmp.length - 1] <= 1) {
                error.style.display = 'none'
                return true
            } else {
                error.style.display = 'block'
                error.innerHTML = '•RGBA – 4 числа через запятую, первые 3 числа в диапазоне от 0 до 255, последнее число от 0 до 1;'
                return false
            }

        case "HEX":
            codePattern = /^#[a-fA-F0-9]{6}$/
            validation = codePattern.test(codeValue)
            if (validation) {
                error.style.display = 'none'
                return true
            } else {
                error.style.display = 'block'
                error.innerHTML = '•	HEX – символ # и 6 цифр или букв от A до F.'
                return false
            }

        default:
            break;
    }
}

typeOptions.addEventListener('input', () => {
    if (typeOptions.value == 'HEX') {
        exampleInputCode.value = '#'
    }
})

btnAdd.addEventListener('click', () => {
        // validation
    let codeValidation = codeValid(exampleInputCode.value, typeOptions.value, errorCode)
    let colorValidation = colorValid(exampleInputText.value, error)
    //
    arrValidText.forEach(element => {
        if(element == exampleInputText.value) {
            result = false
        }
    })

    if (colorValidation && codeValidation && result != false) {
            // container
            let container = document.createElement('div')
            container.classList.add('Container_Color')
            blockColors.appendChild(container)
            if (typeOptions.value == 'rgb') {
                container.style.backgroundColor = `rgb(${exampleInputCode.value})`
                arrayColors.push(`rgb(${exampleInputCode.value})`)
            } else if(typeOptions.value == 'rgba') {
                let tmp = exampleInputCode.value.split(',')
                if (tmp[tmp.length -1] == 1) {
                    arrayColors.push(`rgb(${tmp[0]},${tmp[1]},${tmp[2]})`)
                } else {
                    arrayColors.push(`rgba(${exampleInputCode.value})`)
                }
                container.style.backgroundColor = `rgba(${exampleInputCode.value})`
            } else if (typeOptions.value == 'HEX') {
                container.style.backgroundColor = `${exampleInputCode.value}`
                arrayColors.push(`${hex2rgb(exampleInputCode.value)}`)
            }
                
            // block center
            let block = document.createElement('div')
            block.classList.add('block_Color')
            container.appendChild(block)

            // text
            let paragraph = document.createElement('p')
            paragraph.classList.add('text__container')
            container.appendChild(paragraph)
            paragraph.innerHTML = `${exampleInputText.value.toLowerCase()}<p style="margin:0;">
            ${typeOptions.value}</p><p style="margin:0;">${exampleInputCode.value}</p>`

            // close
            let Close = document.createElement('p')
            Close.classList.add('Close')
            container.appendChild(Close)
            Close.innerHTML = 'x'
            Close.addEventListener('click', (e) => {
                DeleteArrCookie(e.target.parentNode)
            })
        //
        arrValidText.push(`${exampleInputText.value.toLowerCase()}`)
        arrValidText = JSON.stringify(arrValidText)
        localStorage.setItem('text', arrValidText)
        arrValidText = JSON.parse(arrValidText)
        //
        arrayColorsText.push(`${exampleInputText.value.toLowerCase()}<p style="margin:0;">
        ${typeOptions.value}</p><p style="margin:0;">${exampleInputCode.value}</p>`)
        //
        arrayColorsText = JSON.stringify(arrayColorsText)
        localStorage.setItem('ColorText', arrayColorsText)
        arrayColorsText = JSON.parse(arrayColorsText)
        console.log(arrayColorsText);
        //
        arrayColors = JSON.stringify(arrayColors)
        localStorage.setItem('Color', arrayColors)
        arrayColors = JSON.parse(arrayColors)
        exampleInputText.value = ''
        exampleInputCode.value = ''
    } else {
        result = true
}
})