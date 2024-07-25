import {defineConfig, loadEnv} from "vite";
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
    // 是 build 还是 serve 主要取决于我们敲的命令是开启开发环境还是生产环境
    console.log('env', env);
    const envConfig = loadEnv(env.mode, process.cwd());
    console.log('envConfig', envConfig);
    return envResolver[env.command]();
});