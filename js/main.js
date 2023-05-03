//boxes
const mainBox = document.querySelector(".main-container")
const thanksBox = document.querySelector(".after")
//buttons
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("again")
const rates = document.querySelectorAll(".btn")

//rating message
const rating = document.getElementById("rating")


//Clickevent
submitButton.addEventListener("click", () => {
    thanksBox.classList.remove("hidden") //remove the class hidden when click on submit button
    mainBox.style.display = "none" // this makes the mainBox dissapear
})

rateAgain.addEventListener("click", () => {
    thanksBox.classList.add("hidden") //add the class hidden when click on rate again button
    mainBox.style.display = "block" // this makes the mainBox re- appear
}
)

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        console.log(rate.innerHTML)
    })

})