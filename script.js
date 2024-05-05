const codeDisplay = document.getElementById("code-display")

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function randomHexGenerator(){
    randomIndex = Math.floor(Math.random()*16)
    hexCode = arr[randomIndex]
    return hexCode;
}


function randomColourGenerator(){
    fullHexCode = ''
    for(let i = 0; i<6; i++){
        fullHexCode += randomHexGenerator()
    }
    return fullHexCode;
}

function colourChange(){
    let code = randomColourGenerator()
    document.body.style.backgroundColor = '#' + code
    codeDisplay.innerHTML = "#"+ code
}
