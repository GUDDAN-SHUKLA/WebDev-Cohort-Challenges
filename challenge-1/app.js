/**
 * Write your challenge solution here
 */
const toggleButton = document.getElementById('toggleButton')
const bulbElement = document.getElementById("bulb") 
const statusOfBulb = document.getElementById("status") 
const darkMode = document.getElementById('body')

toggleButton.addEventListener("click", () => {
    bulbElement.classList.toggle('off')
    darkMode.classList.toggle('dark-mode')
    toggleButton.innerText = toggleButton.innerText === "Turn On" ? "Turn Off": "Trun On"
    statusOfBulb.innerText = statusOfBulb.innerText === "Status: On" ? "Status: Off": 'Status: On'
    // document.title =  statusOfBulb.innerText 
})

