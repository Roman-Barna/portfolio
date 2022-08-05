////

links()
function links() {
    
let container = document.querySelector('.contained')
let lableFrom = document.createElement('label')
lableFrom.innerText = 'From'
let lableTo = document.createElement('label')
lableTo.innerText = 'To'
let blockFrom = document.createElement('div')
let blockTo = document.createElement('div')
let select = document.createElement('select')
let selectTo = document.createElement('select')
//
let date = document.createElement('input')
let blockDate = document.createElement('div')
date.type = 'date'
//
blockFrom.classList.add('block')
blockTo.classList.add('block')
blockFrom.classList.add('block')
//

let btn = document.createElement('button')
btn.innerHTML = 'OK'
btn.classList.add('btn-primary')
//
let hr = document.createElement('hr')
//
let output = document.createElement('div')
//
let loadingOutput = document.createElement('img')
loadingOutput.id = 'loadingOutput'
loadingOutput.src = "./img/ajax-loader.gif"
//
let loadingContainer = document.createElement('img')
loadingContainer.id = 'loadingContainer'
loadingContainer.src = "./img/ajax-loader.gif"
//
output.classList.add('output')
output.appendChild(loadingOutput)
container.appendChild(blockFrom)
container.appendChild(blockTo)
container.appendChild(blockDate)
container.appendChild(btn)
container.appendChild(hr)
container.appendChild(output)
container.appendChild(loadingContainer)
blockFrom.appendChild(lableFrom)
blockFrom.appendChild(select)
blockTo.appendChild(lableTo)
blockTo.appendChild(selectTo)
blockDate.appendChild(date)
output.appendChild(loadingOutput)
//

let url = `https://api.exchangerate.host/2010-04-04`
axios.get(url)
    .then((response) => {
       
        for (const element in response.data.rates) {
            let optionFrom = document.createElement('option')
            select.appendChild(optionFrom)
            optionFrom.value = element
            optionFrom.innerText = element
            //
            let optionTo = document.createElement('option')
            selectTo.appendChild(optionTo)
            optionTo.value = element
            optionTo.innerText = element
        }
        loadingContainer.style.display = "none"
    })
    .catch((error) => {
        loadingContainer.style.display = "block"
    })

btn.addEventListener('click', () => {
    url = `https://api.exchangerate.host/${date.value}`
    axios.get(url, {
        params: {
            base: select.value,
            symbols: selectTo.value
        }
    })
        .then((response) => {
            
            for (const element in response.data.rates) {
                if (element == selectTo.value) {
                    output.innerText = response.data.rates[element]
                }
            }
            loadingOutput.style.display = "none"
        })
        .catch((error) => {
            loadingOutput.style.display = "block"
        })
})
/// pagination

document.querySelector('.title__paginathing').innerHTML = `Latest ${new Date().toDateString()} year`
url1 = `https://api.exchangerate.host/latest`
axios.get(url1)
    .then((response) => {
      
            jQuery(document).ready(function ($) {
                for (const element in response.data.rates) {
                    $('.list-group').append(`<div class="list-group-item"> <div>${element}</div><div>${response.data.rates[element]}</div></div>`);
                }
                
                $('.list-group').paginathing({
                    perPage: 8,
                    limitPagination: 3,
                    activeClass: 'active',
                    disabledClass: 'disable' // disabled link class
                })
            });

    })
    .catch((error) => {
       
    })

// chard
const monthInput = document.querySelector('.month__input')
const currentMonth = document.getElementById('currentMonth')
let btnCanvas = document.querySelector('.btn__canvas')
let days 
let result
let reverse
let urlMount 
let arrayOfDays =[]
let Base = document.getElementById('Base')
let currency = document.getElementById('currency')
let canvasParrent = document.getElementById('canvas__parrent')

let dates = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())

let tmp
if (dates.getMonth() < 10) {
    tmp = '0'+ dates.getMonth()
} else {
    tmp =  dates.getMonth()
}
console.log(`${dates.getFullYear()}-${tmp}`);
monthInput.value = `${dates.getFullYear()}-${tmp}`


let urlStart = `https://api.exchangerate.host/2010-04-04`
axios.get(url)
    .then((response) => {
        for (const element in response.data.rates) {
            
            let option = document.createElement('option')
            Base.appendChild(option)
            option.value = element
            option.innerText = element
            if (element == 'EUR') {
                option.selected = 'selected'
            }
            //
            let optionCurrency = document.createElement('option')
            currency.appendChild(optionCurrency)
            optionCurrency.value = element
            optionCurrency.innerText = element
            if (element == 'USD') {
                optionCurrency.selected = 'selected'
            }
        }
        //loadingContainer.style.display = "none"
        loadingCanvas()
        addCanvas()
    })
    .catch((error) => {
        //loadingContainer.style.display = "block"
    })
    let canvas
    function addCanvas() {
        // canvas
        if (arrayOfDays == '') {
            loadingCanvas()
        }
        if (canvas != undefined) {
            canvas.remove()
        }
        
        canvas = document.createElement(`canvas`)
        canvas.height = 400
        canvas.width = 400
        canvasParrent.appendChild(canvas)
        canvas.id = `myChart`
        canvas.height = 200
        //
        Chart.defaults.font.family = "Lato";
        Chart.defaults.font.size = 18;
        Chart.defaults.color = "#000";
        let arrayCurrencyValue = []
        //
        
console.log(urlMount);
        axios.get(urlMount, {
            params: {
                    base: Base.value,
                    symbols: currency.value
                }
            })
            .then((response) => {
                console.log(response.data.rates);
                for (const item in response.data.rates) {
                    for (const key in response.data.rates[item]) {
                        arrayCurrencyValue.push(response.data.rates[item][key])
                    }
                }
                currentMonth.innerHTML = `${reverse[0]}.${reverse[1]}`
                const ctxText = document.getElementById(`myChart`).getContext('2d');
                console.log();
               
                let myChart = new Chart(ctxText, {
                    type: 'bar',
                    data: {
                        
                        labels: arrayOfDays,
                        datasets: [{
                            skipNull:true,
                            label: 'Currency',
                            data: arrayCurrencyValue,
                            backgroundColor: [
                               'blue'
                            ],
                            
                        }]
                    },

                    options: {
                        plugins: {
                            // title: {
                            //     display: true,
                            //     position: 'left',
                            //     text: arrayCurrencyValue
                            // },
                            tooltip: {
                                cornerRadius: 0,
                                caretSize: 0,
                                padding: 10,
                                backgroundColor: 'black',
                                borderColor: "gray",
                                borderWidth: 2,
                                titleMarginBottom: 4,
                                titleFont: {
                                    "weight": "bold",
                                    "size": 22
                                }
                            },
                            
                                datalabels: {
                                    color: '#111',
                                    textAlign: 'center',
                                    font: {
                                        lineHeight: 1.6
                                    },
                                    formatter: function(value, ctx) {
                                        return  value 
                                    }
                                }
                            
                        }
                    }
                })
                arrayOfDays = []

            })
            .catch((error) => {
            })
    }
function loadingCanvas() {
    reverse = monthInput.value.split('-').reverse()
    //
    let date1 = new Date(reverse[1], reverse[0] + 1, 1);
    let date2 = new Date(reverse[1], reverse[0] + 2, 1);
    result = (date2 - date1) / (1000 * 60 * 60 * 24)
    //
    urlMount = `https://api.exchangerate.host/timeseries?start_date=${reverse[1]}-${reverse[0]}-01&end_date=${reverse[1]}-${reverse[0]}-${result}`
    //
    
    for (let i = 1; i <= result; i++) {
        if (i < 10) {
            i = `0${i}`
        }
        arrayOfDays.push(`${i}.${reverse[1].slice(2, 4)}`)
    }
   
}
    


monthInput.oninput = () => {
    loadingCanvas()
}

btnCanvas.addEventListener('click', () => {
    addCanvas()
})

}