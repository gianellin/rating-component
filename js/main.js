const mainBox = document.querySelector(".main-container")
const thanksBox = document.querySelector(".after")


const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("again")


//Clickevent
submitButton.addEventListener("click", () => {
    thanksBox.classList.remove("hidden") //remove the class hidden when click on submit button
    mainBox.style.display = "none" // this makes the mainBox dissapear
})

