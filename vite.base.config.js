import {defineConfig} from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: [],    // 将指定数组中的依赖不进行依赖预构建
    },
});