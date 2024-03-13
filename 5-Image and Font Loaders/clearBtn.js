// import './clearBtn.css';

import style from './clearBtn.scss';

const el = document.createElement("button");
el.innerHTML = "Clear";
// el.classList.add(['button']);
el.classList.add([style.button]);
el.onclick = () => {
    alert("Clear clicked !!!");
}
document.body.append(el);

const p1 = document.createElement("p");
p1.innerHTML = "I am a paragraph with global style";
p1.classList.add(['para']);
document.body.append(p1);
