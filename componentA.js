import componentACss from "./componentA.module.css";

console.log('componentACss', componentACss);
const div = document.createElement('div');
document.body.append(div);
div.className = componentACss.footer;