const d = document
const $noChoice = d.getElementById("noChoice")
const $modalSi = d.getElementById("modalSi")

$noChoice.addEventListener("mouseover",e=>{
    let numRanX = parseInt(Math.random() * 500)
    let numRanY = parseInt(Math.random() * 500)
    let numRanX2 = parseInt(Math.random() * 550)
    let numRanY2 = parseInt(Math.random() * 550)
    
    $noChoice.style.setProperty("top",`${numRanX}px`)
    $noChoice.style.setProperty("left",`${numRanY}px`)
    $noChoice.style.setProperty("right",`${numRanX2}px`)
    $noChoice.style.setProperty("bototm",`${numRanY2}px`)
})


document.addEventListener("click",e=>{
    if(e.target.className === "switchMo"){
        $modalSi.classList.toggle("active")
    }
})