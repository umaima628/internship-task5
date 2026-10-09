// Get the elements from HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Listen for a click on the Add Task button
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {

    // Get the text entered by the user
    const taskText = taskInput.value.trim();

    // Don't add an empty task
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Add a class to the list item
    listItem.classList.add("task-item");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const text = document.createElement("span");
    text.textContent = taskText;
    text.classList.add("task-text");

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // When checkbox is clicked
    checkbox.addEventListener("change", function () {

        // Toggle completed class
        text.classList.toggle("completed");

    });

    // When delete button is clicked
    deleteButton.addEventListener("click", function () {

        // Remove the task
        listItem.remove();

    });

    // Put checkbox, text and delete button inside list item
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input box
    taskInput.value = "";

    // Put cursor back inside input
    taskInput.focus();
}
