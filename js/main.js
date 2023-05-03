const mainBox = document.querySelector(".main-container")
const thanksBox = document.querySelector(".after")


const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("again")


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