function generateRGBValue() {
    let rgbValue = "rgb("
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.random();
        const value = Math.floor(randomNumber * 256)

        if (i != 2) {
            rgbValue = rgbValue.concat(value + ", ")
        }
        else {
            rgbValue = rgbValue.concat(value + ")")
        }
    }
    return rgbValue
}

function createDivs(numberOfRows) {
    const divContainer = document.querySelector("#div-container")
    divContainer.style.gridTemplateColumns = "repeat(" + numberOfRows + ", 1fr)"
    divContainer.style.gridTemplateRows = "repeat(" + numberOfRows + ", 1fr)"

    const numberOfDivs = numberOfRows * numberOfRows

    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.className = "divFromGrid"

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = generateRGBValue()
        });

        divContainer.appendChild(div)
    }
}

function deleteDivs() {
    const divContainer = document.querySelector("#div-container")
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild)
    }
}

const squareNumberForm = document.querySelector("#square-number")
const changeSquareNumberButton = document.querySelector("#changeSquareNumber")
const warningTextDiv = document.querySelector("#warningText")

changeSquareNumberButton.addEventListener("click", () => {
    if (squareNumberForm.value < 100 && squareNumberForm.value > 0) {
        warningTextDiv.textContent = ""
        deleteDivs()
        createDivs(squareNumberForm.value)
    }
    else {
        warningTextDiv.textContent = "Please, input a number between 1 and 99"
    }
})

const initialnumberOfRows = 16
createDivs(initialnumberOfRows)