document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form")
    const inputField = document.querySelector("#new-task-description")
    const ul = document.querySelector("ul")
    const submit = document.querySelector("#button")

    form.addEventListener("submit", event => {
        event.preventDefault()

        const li = document.createElement("li")
        const inputValue = inputField.value
        li.innerText = inputValue
        const btn = document.createElement("button")
        btn.innerText = "X"
        btn.dataset.description = inputValue

        btn.addEventListener('click', event => {
            event.preventDefault()
            btn.parentNode.remove()
        })


        li.append(btn)

        ul.append(li)


    })

































//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
});
