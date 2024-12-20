import {defineConfig} from "vite";
import path from "path";

const postcssPresetEnv = require('postcss-preset-env');
export default defineConfig({
    resolve: {
        alias: [
            {find: "@", replacement: path.resolve(__dirname, "./src")},
            {find: "@assets", replacement: path.resolve(__dirname, "./src/assets")},
            {find: "@styles", replacement: path.resolve(__dirname, "./src/assets/styles")},
        ],
    },
    optimizeDeps: {
        exclude: [],    // 将指定数组中的依赖不进行依赖预构建
    },
    css: {  // 对 css 的行为进行配置
        modules: {  // 是对 css 模块化的默认行为进行覆盖
            // 修改生成的配置对象的 key 的展示形式(驼峰还是中划线形式)
            localsConvention: "camelCaseOnly",
            // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
            scopeBehaviour: "local",
            // generateScopedName: "[name]__[local]--[hash:base64:5]", // 修改生成的类名规则
            hashPrefix: "hello",
            // 代表你不想参与到css模块化的路径
            globalModulePaths: ["src/assets/styles/componentB.module.css"],
        },
        preprocessorOptions: { // key + config, key 代表预处理器的名称, config 代表对应的配置
            less: {
                math: "always", // 是否开启数学运算
                globalVars: {
                    mainColor: "red",
                },
            },
        },
        postcss: {
            plugins: [
                postcssPresetEnv,
            ],
        }
    },
});