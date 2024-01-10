const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function createListElement() {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        createListElement();
    }
});