import componentBCss from "./assets/styles/componentB.module.css";

console.log('componentBCss', componentBCss);
const div = document.createElement('div');
document.body.append(div);
div.className = componentBCss.footer;