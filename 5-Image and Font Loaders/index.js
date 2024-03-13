import style from './index.scss';
import _ from "lodash";
import './clearBtn';
import logo from './assets/webpack_logo.png';
import './assets/fonts/Redressed-Regular.ttf'

const btn1 = document.getElementById("btn1");
const imgEl = document.getElementById("logo");

btn1.addEventListener('click', clicked);
function clicked() {
    const el = document.getElementById("header");
    el.innerHTML = "Updated";
    el.classList.add([style.header]);

    const items = ["Apples", "Oranges", "Banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(items, (item) => {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
}

btn1.classList.add([style.button]);

imgEl.src = logo;
imgEl.width = 100;
imgEl.height = 100;