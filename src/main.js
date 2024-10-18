import _ from "lodash";

// Vite 支持模块化导入 CSS 文件
import "./assets/styles/index.css";

import "./componentA.js";
import "./componentB.js";

import "./assets/styles/index.module.less";

import svgIcon from "@assets/vue.svg";

console.log("svgIcon", svgIcon);
console.log('hello vite', _);

const img = document.createElement("img");
img.src = svgIcon;
document.body.appendChild(img);