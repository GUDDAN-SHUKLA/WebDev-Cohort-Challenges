/**
 * Write your challenge solution here
 */

const nameInput = document.getElementById('nameInput')
const jobInput = document.getElementById('jobInput')
const ageInput = document.getElementById('ageInput')
const bioInput = document.getElementById('bioInput')

// Display Output
const displayName = document.getElementById('nameDisplay')
const jobTitle = document.getElementById('jobDisplay')
const displayAge = document.getElementById('ageDisplay')
const displayBio = document.getElementById('bioDisplay')
    
     nameInput.addEventListener("input", (e) => {
            displayName.textContent = e.target.value || "Not provided"
            // console.log("name", nameInput.value);
        });
            
    jobInput.addEventListener("input", (e) => {
            jobTitle.textContent = e.target.value || "Not provided"
        })

    ageInput.addEventListener("input", (e) => {
            displayAge.textContent = e.target.value || "Not provided"
        })

    bioInput.addEventListener("input", (e) => {
            displayBio.textContent = e.target.value || "Not provided"
        })
        


