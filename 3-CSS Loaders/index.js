import style from './index.css';
import _ from "lodash";
import './clearBtn';

const btn1 = document.getElementById("btn1")

btn1.addEventListener('click', clicked);
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

btn1.classList.add([style.button]);