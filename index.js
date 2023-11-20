document.addEventListener("DOMContentLoaded", ()=>{

    const park = document.getElementById("parks")
    const mountain = document.getElementById("mountains")

    park.addEventListener("click", ()=>{
        location.href = "nationalpark.html"
    })

    mountain.addEventListener("click", ()=>{
        location.href = "mountain.html"
    })

})