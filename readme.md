# 一、采用手动创建容器和启动
## 1.启动mongodb容器
docker run  -itd -p 27017:27017 --name mdb mongo:4.4.8
容器名mdb
ip地址172.17.0.2

## 2.启动nodejs容器
docker run  -it -v /Users/shawn/study/mongodb-docker/:/src --name nodejs-test node:14.17.3-alpine /bin/sh
容器名nodejs-test
ip地址172.17.0.3
查看ip: ip addr或者执行cat /etc/hosts查找ip地址
同一个电脑上的容器默认连接同一个主机的网桥，主机ip是172.17.0.1

## 3.进入nodejs-test容器内执行数据库访问程序
cd src
npm config set registry https://registry.npm.taobao.org
npm install mongodb
node index.js

## 4. 结束后删除容器
docker stop mdb
docker stop nodejs-test
docker rm mdb
docker rm nodejs-test

# 二、采用docker-compose启动关联容器
## 1. 编辑docker-compose.yaml
## 2. 启动容器
docker-compose up -d
## 3. 通过容器名字执行docker -exec进入nodejs容器 (或者通过vscode docker扩展点击nodejs容器attach shell进入)
docker exec -it mongodb-docker_nodejs-test_1 /bin/sh
## 4. 执行node index.js
## 5. 停止和删除容器
docker-compose down -v

# 三、增加了几个源代码测试
[ 参考 ]
1. https://www.cnblogs.com/soymilk2019/p/11553541.html
2. https://blog.csdn.net/weixin_42368421/article/details/108756157
3. https://stackoverflow.com/questions/30063907/using-docker-compose-how-to-execute-multiple-commands
4. https://blog.csdn.net/asdfgh0077/article/details/106262730/
5. https://blog.csdn.net/petrel2015/article/details/109361771?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link
6. https://docs.docker.com/compose/compose-file/compose-file-v2/#network-configuration-reference
7. https://www.shangmayuan.com/a/f251ad2cd37e49f58bca298a.html
8. https://www.npmjs.com/package/mongodb
9. https://stackoverflow.com/questions/35154441/docker-compose-links-vs-external-links

# 四、测试node-fetch和promise
## 1. fetch是浏览器javascript可以使用的API，nodejs中没有，如果要使用就需要安装node-fetch第三方模块
      npm i node-fetch
      测试时默认安装的是3.0.0最新版本，但属于ES module，不能用require导入，需要使用
      import fetch from 'node-fetch';
      并且还要在package.json中增加"type": "module"
## 2. 如果要使用require导入，需要使用node-fetch@2.6.5版本，但package.json中要用"type": "commonjs"

## 3. 如果json文件中要进行注释，可以考虑使用重复的key的方式，例如：
      "type": "module",
      "type": "commonjs"
      这样后面的覆盖前面，后面键值对起作用。

## 4. npm如果要安装同一个包的不同版本，可以使用别名alias
        npm i <alias>@npm:<packageName>@版本
        # 例子
        npm i antd3@npm:antd@3
        npm i antd4@npm:antd@4
## 5. 此次测试安装node-fetch的2.6.5版和3.0.0版
        npm uninstall node-fetch

        npm install node-fetch@2.6.5
        npm install node-fetch3@npm:node-fetch@3.0.0
## 6. 要在同一个nodejs文件中使用require和import则需要
    package.json中"type": "module"
    然后可以使用import fetch3 from 'node-fetch3'
    在js文件中定义require
    // Define "require"
    import { createRequire } from "module";
    const require = createRequire(import.meta.url);
    之后，就可以使用require导入commonjs的模块了：
    const fetch = require('node-fetch');
## 7. nodejs支持在ES module中导入以前的require导入的模块
    import fetch from 'node-fetch';

## 8. 参考
https://www.cnblogs.com/amiezhang/p/13166240.html
https://www.cnblogs.com/kelelipeng/p/11987144.html
https://kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
https://stackoverflow.com/questions/62488898/node-js-syntaxerror-cannot-use-import-statement-outside-a-module
https://dmitripavlutin.com/ecmascript-modules-nodejs/
https://pakstech.com/blog/node-import-error/