const cog = document.querySelector('#trigger')
const colorMenu = document.querySelector('#colorMenu')

// showing and hiding the color menu on click
let isShown = 0
cog.addEventListener('click', ()=>{
    if (isShown == 1) {
        colorMenu.style.display = "none"
        isShown = 0
    }else{
        colorMenu.style.display = "block"
        isShown = 1
    }
})
// hiding the colr menu using the x button
const exitButton = document.querySelector('#exitButton')
exitButton.addEventListener('click', ()=>{
    colorMenu.style.display = "none"
    isShown = 0
})


// changing the color of the square 
const color = document.querySelectorAll('.color')
const square = document.querySelector('#square')
color.forEach(c =>{
    c.addEventListener('click', ()=>{
        // storing the class with the needed color
        let col = c.classList[1]
        // resetting the class list of the square
        square.classList = ""
        // assigning the needed class
        square.classList.toggle(col)
    })
})
