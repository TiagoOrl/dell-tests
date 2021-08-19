

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

findAndChangeNetworkImgs()

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


function findAndChangeNetworkImgs(){
    const prodImgs = document.querySelectorAll("div.half-inner-module-image")
    let k = 0
    prodImgs.forEach((i) => {
        
        if (i.getElementsByTagName("img")[0].alt.split(" ")[0].toLowerCase() === "tp-link"){
            console.log("tp link at "+ k)
            document.getElementsByClassName("half-inner-module-image")[k].getElementsByTagName("img")[0].src = 
                document.getElementsByClassName("half-inner-module-image")[k + 25].getElementsByTagName("img")[0].src

            document.getElementsByClassName("half-inner-module-image")[k].getElementsByTagName("img")[0].src = 
            document.getElementsByClassName("half-inner-module-image")[k + 26].getElementsByTagName("img")[0].src

            document.getElementsByClassName("half-inner-module-image")[k].getElementsByTagName("img")[0].src = 
            document.getElementsByClassName("half-inner-module-image")[k + 27].getElementsByTagName("img")[0].src

            document.getElementsByClassName("half-inner-module-image")[k].getElementsByTagName("img")[0].src = 
            document.getElementsByClassName("half-inner-module-image")[k + 28].getElementsByTagName("img")[0].src
        }

        k++
    })

}