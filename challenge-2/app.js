/**
 * Write your challenge solution here
 */
const colorButtons = document.querySelectorAll("button")
const heading = document.getElementById("mainHeading")

function changeHeadingColor (color){
    heading.style.color = color
}

colorButtons.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", () => {
        if (btn.innerText.toLocaleLowerCase() == "red") {
           heading.style.color("e74c3c")
        }else if(btn.innerText.toLocaleLowerCase() == "green"){
            changeHeadingColor("2ecc71")
        }else if(btn.innerText.toLocaleLowerCase() == "Blue"){
            changeHeadingColor("3498db")
        }else if(btn.innerText.toLocaleLowerCase() == "purple"){
            changeHeadingColor("9b59b6")
        }else{
            changeHeadingColor("34495e")
        }
    })
    
})
