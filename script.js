const url = "https://api.adviceslip.com/advice"
const button = document.getElementById("advice-card-btn")

button.addEventListener("click", (event) => {
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json()
    })
    .then((adviceSwitch) => {
        console.log(adviceSwitch.slip.id)
        console.log(adviceSwitch.slip.advice)

        const adviceTitle = document.getElementById("advice-card-title")
        adviceTitle.textContent = "Advice # " + adviceSwitch.slip.id

        const adviceText = document.getElementById("advice-card-text")
        adviceText.textContent = "\u{201C}" + adviceSwitch.slip.advice + "\u{201D}"
    })
})