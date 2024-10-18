import componentACss from "./assets/styles/componentA.module.css";

console.log('componentACss', componentACss);
const div = document.createElement('div');
document.body.append(div);
div.className = componentACss.footer;