import {defineConfig} from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: [],    // 将指定数组中的依赖不进行依赖预构建
    },
    css: {  // 对 css 的行为进行配置
        modules: {  // 是对 css 模块化的默认行为进行覆盖
            localsConvention: "camelCaseOnly", // 修改生成的配置对象的 key 的展示形式(驼峰还是中划线形式)
            scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
            // generateScopedName: "[name]__[local]--[hash:base64:5]", // 修改生成的类名规则
            hashPrefix: "hello",
            globalModulePaths: ["./componentB.module.css"],  // 代表你不想参与到css模块化的路径
        },
        preprocessorOptions: { // key + config, key 代表预处理器的名称, config 代表对应的配置
            less: {
                math: "always", // 是否开启数学运算
                globalVars: {
                    mainColor: "red",
                },
            },
        },
    },
});