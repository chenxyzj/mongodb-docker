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
npm install mongodb
node index.js

## 4. 结束后删除容器
docker stop mdb
docker stop nodejs-test
docker rm mdb
docker rm nodejs-test

[ 参考 ]
https://www.cnblogs.com/soymilk2019/p/11553541.html
https://blog.csdn.net/weixin_42368421/article/details/108756157