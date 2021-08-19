


const categories = document.querySelectorAll("div.col-xs-4")
let count = 0
categories.forEach((i) => {
    i.getElementsByTagName("a")[0].href = "#"


    if (count > 2) count = 0
    
    if (count === 0) {
        i.addEventListener("click", makePurple)
    }

    if (count === 1) {
        i.addEventListener("click", makeGreen)
    }

    if (count === 2) {
        i.addEventListener("click", makeOrange)
    }

    count++

})


function makePurple() {
    const imgs = document.querySelectorAll("img.img-responsive")
    imgs.forEach((i) => {
        i.style.background = "purple"
    })
}

function makeGreen() {
    const imgs = document.querySelectorAll("img.img-responsive")
    imgs.forEach((i) => {
        i.style.background = "green"
    })
}

function makeOrange() {
    const imgs = document.querySelectorAll("img.img-responsive")
    imgs.forEach((i) => {
        i.style.background = "orange"
    })
}