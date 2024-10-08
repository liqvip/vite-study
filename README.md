学习自B站的Vite视频
视频笔记地址：https://github.com/passerecho/vite-
Vite 官网：https://cn.vitejs.dev/


## 1. 使用 npm 安装一些依赖
npm init -y 生成 package.json

npm i lodash 安装 lodash

npm i vite -D 安装 vite

## 2. Vite 对 Css 的处理以及对 Css 模块化的简单处理

### Vite 对 Css 的处理
1. 将 index.css 的内容复制到 style 标签，然后将 style 标签插入到 index.html 的 head
![](./imgs/2-2.png)
2. 将 index.css 中的内容全部替换成 js 脚本(方便热更新或者css模块化)， 同时设置Content-Type为js 从而让浏览器以JS脚本的形式来执行该css后缀的文件
   ![](./imgs/2-1.png)

### Vite 对 Css 模块化的处理
大概说一下原理，全部都是基于 node。
1. module.css (module是一种约定, 表示需要开启css模块化)
2. 他会将你的所有类名进行一定规则的替换（将footer 替换成 _footer_1e0na_9） 
3. 同时创建一个映射对象{ footer: "_footer_1e0na_9" } 
4. 将替换过后的内容塞进style标签里然后放入到head标签中 (能够读到index.html的文件内容)
5. 将 module.css 中的内容全部替换成了 js，并导出映射对象
   ![](./imgs/2-3.png)

## 3. Vite 配置文件中 Css 的配置流程(modules 篇)
在vite.config.js中我们通过css属性去控制整个vite对于css的处理行为

- localConvention: 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
  ![](./imgs/3-1.png)
  ![](./imgs/3-2.png)
- scopeBehaviour: 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
- generateScopedName: 生成的类名的规则(可以配置为函数, 也可以配置成字符串规则: https://github.com/webpack/loader-utils#interpolatename)
- hashPrefix: 生成hash会根据你的类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果你想要你生成hash更加的独特一点, 你可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要你的字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要你的字符串完全一样, 生成的hash就会一样）
- globalModulePaths: 代表你不想参与到css模块化的路径

## 4. Vite 配置文件中 Css 的配置流程(preprocessorOptions 篇)
主要是用来配置css预处理的一些全局参数

假设没有使用构建工具, 我们又想去编译less文件的话

```
yarn add less # lessc的编译器
```
你只要安装了node, 你就可以使用node index.js 你只要安装了less 你就可以使用lessc去编译less文件

less是可以定义变量的

## 5. postcss 的前世今生
1. 安装依赖
```
npm i -D postcss-cli postcss
```

## 5. Vite 配置文件中 Css 的配置流程(postcss 篇)
直接在css.postcss中进行配置, 该属性直接配置的就是postcss的配置

## 6. 静态资源别名配置
