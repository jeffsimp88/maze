const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

//  map size 15H x 21W, S at map[9][0], F at map[8][20]

/*RANDY CODE */
const mazeEl = document.getElementById('maze')
const createMaze = function (blueprint){    
    for (let rowNum = 0; rowNum<map.length; rowNum++){
        const rowString = map[rowNum]
        let rowMarkUp = ' '
        for (let colNum=0; colNum<rowString.length; colNum++){
            const blockType = rowString[colNum]
            if(blockType === 'W'){
                rowMarkUp += '<div class="block wall" id="' + (rowNum) + '-' + colNum + '"></div>'
            } else if(blockType === 'S'){
                rowMarkUp += '<div class="block start" id="' + (rowNum) + '-' + colNum + '"></div>'
                x = rowNum
                y = colNum                
            } else if(blockType === 'F'){
                rowMarkUp += '<div class="block finish" id="' + (rowNum) + '-' + colNum + '"></div>'
            } else{
                rowMarkUp += '<div class="block" id="' + (rowNum) + '-' + colNum + '"></div>'
            }
        }        
    mazeEl.innerHTML += '<div class ="row">' + rowMarkUp + '</div>'  
    }
}

createMaze(map)

let triforce = document.getElementById('triforce')
let finish = document.getElementById('8-20').appendChild(triforce)
let win = document.getElementById('winner')
    win.textContent = "Go through the maze. Get the Triforce!"
    win.style.textAlign = 'center'

let img=document.createElement('img')
    img.src = "imgs/OldMan.png"
    img.style.width = "40px"
    img.style.height = "40px"
    document.getElementById('winner').appendChild(img)
      
function winner(){
    if(map[x][y] === 'F'){
        triforce.style.backgroundImage = 'none'
        player.style.backgroundImage = 'none'
        img.src = "imgs/LinkTriforce.gif"
        win.textContent = "You have obtained the Triforce"
        img.style.width = "40px"
        img.style.height = "65px"
        
    document.getElementById('topBox').appendChild(win)
    document.getElementById('winner').appendChild(img)
    mode = "winner"
    }
}

let player = document.getElementById('player')
let current = document.getElementById("9-0").appendChild(player)

x = 9
y = 0
mode = 'playing'
    
function logKey(e) {
    let direction = e.code
    
    if (mode === 'playing' && direction === 'ArrowDown' ) {
        x = x + 1
        player.style.backgroundImage = 'url("imgs/LinkFront.gif")'
        if (map[x][y] === 'W'){
            x = x - 1
        }else{
        document.getElementById(x + '-' + y).appendChild(player)
        }
    }
    if (mode === 'playing' && direction === 'ArrowUp') {
        x = x - 1
        player.style.backgroundImage = 'url("imgs/LinkBack.gif")'
        if (map[x][y] === 'W'){
            x = x + 1
        }else{
        document.getElementById(x + '-' + y).appendChild(player)
        }
    }
    if (mode === 'playing' && direction === 'ArrowRight') {
        y = y + 1
        player.style.backgroundImage = 'url("imgs/LinkRight.gif")'
        if (map[x][y] === 'W'){
            y = y - 1           
        }else{
            document.getElementById(x + '-' + y).appendChild(player)
        } 
    }
    if (mode === 'playing' && direction === 'ArrowLeft') {
        y = y - 1
        player.style.backgroundImage = 'url("imgs/LinkLeft.gif")'
        if (map[x][y] === 'W'){
            y = y + 1
        }else{
            document.getElementById(x + '-' + y).appendChild(player)
        }
    }
    winner()
}

document.addEventListener('keydown', logKey);