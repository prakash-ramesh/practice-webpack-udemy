import _ from "lodash";

document.getElementById("btn1")
.addEventListener('click', clicked);

function clicked() {
    const el = document.getElementById("header");
    el.innerHTML = "Updated";

    const items = ["Apples", "Oranges", "Banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(items, (item) => {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
}