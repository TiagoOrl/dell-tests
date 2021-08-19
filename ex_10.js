

let sections = document.getElementsByClassName("anavmfe__accordion__item")
let k = 0
let sections_l = []

while (k < sections.length){
    let sectionName = sections[k].getElementsByClassName("anavmfe__accordion__item__name")[0].innerHTML
    let secLink = sections[k].getElementsByTagName("a")[0].href.split("=")
    let subSectionValues = ""


    const subSectionsInput = sections[k].getElementsByTagName("input")
    let t = 0
    while(t < subSectionsInput.length){
        subSectionValues += subSectionsInput[t].name + ","
        t++
    }

    subSectionValues = subSectionValues.slice(0, subSectionValues.length - 1)
    secLink = secLink[0] + "=" +subSectionValues 

    sections_l.push({link: secLink, name: sectionName})

    k++
}



let newDiv = document.createElement("div")

newDiv.style.border = "solid"
newDiv.style.borderWidth = "1px"
newDiv.style.padding = "5px"

sections_l.forEach((i) => {

    let newLink = document.createElement("a")
    newLink.title = i.name
    newLink.href = i.link
    newLink.innerHTML = i.name
    newLink.style.fontSize = "16px"
    newLink.style.margin = "8px"

    newDiv.appendChild(newLink)
});

const parent = document.getElementById("cat-cards")
const nextNode = document.getElementById("cat-tiles-content")
parent.insertBefore(newDiv, nextNode)