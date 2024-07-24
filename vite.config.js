import {defineConfig} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

const envResolver = {
    build: () => {
        console.log('生产环境');
        return ({...viteBaseConfig, ...viteProdConfig});
    },
    serve: () => {
        console.log('开发环境');
        return Object.assign({}, viteBaseConfig, viteDevConfig);
    },
};

export default defineConfig((env) => {
    // 是 build 还是 server 主要取决于我们敲的命令是开启开发环境还是生产环境
    console.log('command', env.command);
    return envResolver[env.command]();
});