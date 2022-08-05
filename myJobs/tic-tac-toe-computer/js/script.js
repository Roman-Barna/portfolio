let boxes = document.querySelectorAll(".box")
let winText = document.querySelector(".win__text")
let container = document.querySelector(".container")
let winX = document.querySelector('.win__x')
let winO = document.querySelector('.win__y')
let brew = document.querySelector('.brew')
let blockResult = document.querySelector('.block__result')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function recurse() { 
    array.forEach(el => {
        if (random == el) {
            while (el == random) {
                random = getRandomInt(0, 8)
            }
            recurse()
        }
    })
}

function reset() {
    for (const element of boxes) {
        element.innerText = ' '
    }
}
let move = false
function checkWinner(sym) {
     if (boxes[0].innerText == sym && boxes[1].innerText == sym && boxes[2].innerText == sym) {
         return true
     } else if (boxes[3].innerText == sym && boxes[4].innerText == sym && boxes[5].innerText == sym) {
         return true
     } else if (boxes[6].innerText == sym && boxes[7].innerText == sym && boxes[8].innerText == sym) {
         return true
     } else if (boxes[0].innerText == sym && boxes[3].innerText == sym && boxes[6].innerText == sym) {
         return true
     } else if (boxes[1].innerText == sym && boxes[4].innerText == sym && boxes[7].innerText == sym) {
         return true
     } else if (boxes[2].innerText == sym && boxes[5].innerText == sym && boxes[8].innerText == sym) {
         return true
     } else if (boxes[0].innerText == sym && boxes[4].innerText == sym && boxes[8].innerText == sym) {
         return true
     } else if (boxes[2].innerText == sym && boxes[4].innerText == sym && boxes[6].innerText == sym) {
        return true
     }

}
function win(word) {
    document.body.style.backgroundColor = '#000'
    winText.innerHTML = `${word}`
    winText.classList.add('win__text__block')
    container.style.display = 'none'
    blockResult.style.display = 'none'
    setTimeout(() => {
        document.body.style.backgroundColor = '#fff'
        winText.classList.remove('win__text__block')
        container.style.display = 'block'
        blockResult.style.display = 'block'
    }, 1500);
}
let i = 0
let wX = 0
let wO = 0
let bW = 0
let computer = 0
let array = []
let random
winX.innerText = `Win X: ${wX}` 
winO.innerText = `Win O: ${wO}`
brew.innerText = `Brew: ${bW}`
boxes.forEach((el, t) => {
    el.addEventListener("click", function () {
        if (this.innerText == "") {
            if (!move) {
                array.push(t)
                i++
                computer += 2
                this.innerText = "X"
                this.style.color = 'purple'
                if (checkWinner("X")) {
                    winX.innerText = `Win X: ${++wX}`
                    i = 0
                    setTimeout(() => {
                        win('win X')
                        reset()
                    }, 500)
                }
            }
        }
            if (computer == 2) {
                i++
                computer = 0
                random = getRandomInt(0, 8)  
                recurse()
                array.push(random)
                setTimeout(() => {
                    boxes[random].innerText = "O"
                    boxes[random].style.color = 'green'
                }, 500);
                if (checkWinner("O")) {
                    winX.innerText = `Win O: ${++wO}`
                    i = 0
                    setTimeout(() => {
                        win('win O')
                        reset()
                    }, 500)
                }
            }
            if (i == 9) {
                setTimeout(() => {
                    brew.innerText = `Brew: ${++bW}`
                    i = 0
                    win('draw')
                    reset()
                }, 500)
            }
    })
} ) 


//
//
//

// let game = document.getElementById('game')
// let result = document.getElementById('result')
// let resetBtn = document.getElementById('reset')
// let aiPlayer = "X", huPlayer = "O"

// class Game {
//     constructor(size = 3) {
//         this.size = size
//         this.turn = Math.floor(Math.random() * 2)
//         this.turnCount = 0

//         resetBtn.addEventListener('click', () => {
//             this.resetGame()
//         })

//         this.cellList = []
//         this.resetGame()
//     }

//     get limit() {
//         return this.size * this.size
//     }

//     init() {
//         for (let i = 0; i < this.limit; i++) {
//             const cell = document.createElement('div')
//             cell.setAttribute('data-id', i)
//             cell.addEventListener('click', this.humanPlay())
//             game.appendChild(cell)
//             this.cellList.push(cell)
//         }
//         this.turn = Math.floor(Math.random() * 2)
//         if (this.turn === 1) {
//             this.makeAiTurn()
//         }
//     }

//     resetGame() {
//         this.board = [...Array(this.limit).keys()]
//         this.cellList = []
//         result.innerHTML = ""
//         game.innerHTML = ""
//         this.turnCount = 0
//         this.init()
//     }

//     humanPlay() {
//         return (e) => {
//             this.turnCount++
//             const id = e.target.getAttribute('data-id')
//             this.board[+id] = huPlayer
//             this.cellList[+id].innerHTML = `<span>${huPlayer}</span>`
//             if (this.turnCount >= this.limit) {
//                 result.innerHTML = '<h4>Draw!</h4>'
//                 return
//             }
//             if (this.checkWinner(this.board, huPlayer)) {
//                 result.innerHTML = '<h4>You Win!</h4>'
//                 return
//             }
//             this.makeAiTurn()
//         }
//     }

//     checkWinner(board, player) {
//         if (board[0] === player && board[1] === player && board[2] === player ||
//             board[3] === player && board[4] === player && board[5] === player ||
//             board[6] === player && board[7] === player && board[8] === player ||
//             board[0] === player && board[3] === player && board[6] === player ||
//             board[1] === player && board[4] === player && board[7] === player ||
//             board[2] === player && board[5] === player && board[8] === player ||
//             board[0] === player && board[4] === player && board[8] === player ||
//             board[2] === player && board[4] === player && board[6] === player) {
//             return true
//         } else return false
//     }

//     makeAiTurn() {
//         this.turnCount += 1
//         const bestMove = this.minimax(this.board, aiPlayer)
//         this.board[bestMove.ind] = aiPlayer
//         this.cellList[bestMove.ind].innerHTML = `<span>${aiPlayer}</span>`
//         if (this.turnCount >= this.limit) {
//             result.innerHTML = '<h4>Draw!</h4>'
//             return
//         }
//         if (this.checkWinner(this.board, aiPlayer)) {
//             result.innerHTML = '<h4>Ai Wins!</h4>'
//             return
//         }

//     }

//     minimax(board, player) {
//         const emptyCells = this.findemptyCells(board)
//         if (this.checkWinner(board, huPlayer)) {
//             return { score: -1 }
//         } else if (this.checkWinner(board, aiPlayer)) {
//             return { score: 1 }
//         } else if (emptyCells.length === 0) {
//             return { score: 0 }
//         }

//         let moves = []

//         for (let i = 0; i < emptyCells.length; i++) {
//             let move = {}
//             board[emptyCells[i]] = player
//             move.ind = emptyCells[i]
//             if (player === huPlayer) {
//                 const payload = this.minimax(board, aiPlayer)
//                 move.score = payload.score
//             }
//             if (player === aiPlayer) {
//                 const payload = this.minimax(board, huPlayer)
//                 move.score = payload.score
//             }
//             board[emptyCells[i]] = move.ind
//             moves.push(move)
//         }

//         let bestMove = null

//         if (player === aiPlayer) {
//             let bestScore = -Infinity
//             for (let i = 0; i < moves.length; i++) {
//                 if (moves[i].score > bestScore) {
//                     bestScore = moves[i].score
//                     bestMove = i
//                 }
//             }
//         } else {
//             let bestScore = Infinity
//             for (let i = 0; i < moves.length; i++) {
//                 if (moves[i].score < bestScore) {
//                     bestScore = moves[i].score
//                     bestMove = i
//                 }
//             }
//         }
//         return moves[bestMove]
//     }

//     findemptyCells(board) {
//         return board.filter(c => c !== huPlayer && c !== aiPlayer)
//     }
// }
// new Game()