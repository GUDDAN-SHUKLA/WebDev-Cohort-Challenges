/**
 * Write your challenge solution here
 */
let addTaskButton = document.getElementById("addButton");
let inputTasks = document.getElementById("taskInput");
let taskList = document.getElementById('taskList')
let allTask = document.getElementById('totalTasks');
let completedtask = document.getElementById('completedTasks');
let totalTaskCounts = 0;
let completedtaskCounts = 0;
let emptyListMessage = document.querySelector('.empty-list');
let deleteAllButton = document.getElementById("deleteAllButton");

let taskArr = [];
function taskCounts() {   
    allTask.innerHTML = ` Total Tasks: ${totalTaskCounts}`;
    completedtask.innerHTML = `Completed Tasks: ${completedtaskCounts }`;
    // console.log("totalTaskCounts", totalTaskCounts);
    // console.log("  completedtaskCounts ", completedtaskCounts);
}   


function createElements(taskValue){
    let taskLi = document.createElement("li");
    taskLi.classList.add("task-item")
    
     // Checkbox button
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("complete-checkbox")

    let span = document.createElement("span");
    taskLi.classList.add("task-text")
    span.textContent  = taskValue;
    
     // Delete button
     let deleteButton = document.createElement("button");
     deleteButton.classList.add("delete-button")
     deleteButton.innerHTML = "Delete";
     //    console.log("value", taskLi);
     taskLi.appendChild(checkBox);
     taskLi.appendChild(span);
     taskLi.appendChild(deleteButton);

     
    checkBox.addEventListener("change", () => {
        if(checkBox.checked){
            taskLi.style.textDecoration = "line-through";
            completedtaskCounts++;
        }else{
            taskLi.style.textDecoration = "none";
            completedtaskCounts--;

        }
        taskCounts();
    })

    deleteButton.addEventListener("click",() => {
        taskLi.remove();
        totalTaskCounts--;
        if(completedtaskCounts === 0){
            completedtaskCounts;
        }else{
            completedtaskCounts--;
        }
        taskCounts();
    }) 

    taskArr.push(taskValue);
    return taskLi;
}

deleteAllButton.addEventListener("click",() => {
    taskList.remove();
    totalTaskCounts = 0;
    completedtaskCounts = 0;
    taskCounts();

}) 
            
function addTasks() {
    const taskValue = inputTasks.value; 

    if(taskValue === ""){
        // alert("Please enter a task");
        return;
    }
    
   
    let createTaskElement =  createElements(taskValue);
    taskList.appendChild(createTaskElement);
        
    if (totalTaskCounts === 0){
        alert("Please enter a task");
        emptyListMessage.classList.add("empty-list");
        
    }else{
        emptyListMessage.remove("empty-list");
    }

    totalTaskCounts++;
    taskCounts();
    inputTasks.value = "";
    
}

addTaskButton.addEventListener("click", addTasks)

inputTasks.addEventListener("keypress", () => {
   if (event.key === "Enter") {
        addTasks();
   }
})
