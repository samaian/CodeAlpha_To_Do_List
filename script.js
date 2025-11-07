function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task == "") return;

    let table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    let doneCell = newRow.insertCell(0);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        taskCell.classList.toggle("done", checkbox.checked);
    };
    doneCell.appendChild(checkbox);

    let taskCell = newRow.insertCell(1);
    taskCell.textContent = task;

    let deleteCell = newRow.insertCell(2);
    let delBtn = document.createElement("span");
    delBtn.innerHTML = "🗑";
    delBtn.classList.add("delete-btn");
    delBtn.onclick = function () {
        if (confirm("Are you Sure to delete this task")) {
            table.deleteRow(newRow.rowIndex - 1);
        }
    };
    deleteCell.appendChild(delBtn);

    input.value = "";
}