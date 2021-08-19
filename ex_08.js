


const categories = document.querySelectorAll("div.category-text-margin")

categories.forEach((i) => {
    let catName = i.getElementsByTagName("a").item(0).innerHTML.split("\n")[0].split(" ")[0]
    

    let subCats = i.getElementsByTagName("li")
    let k = 0
    while(k < subCats.length) {
        subCats[k].getElementsByTagName("a")[0].innerHTML = catName + " - " + subCats[k].getElementsByTagName("a")[0].innerHTML
        k++
    }
    
})