安装nginx
到nginx官网下载
http://nginx.org/en/download.html
下载winsw
自行百度下载应用程序，将下载到的可执行程序文件放到nginx安装目录，重命名为nginxservice.exe

http://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/1.18/winsw-1.18-bin.exe

新建配置文件
新建配置文件命名为：nginxservice.xml，写入以下内容：

```$xslt
<service>
    <id>nginx</id>
    <name>nginx</name>
    <description>nginx</description>
    <logpath>D:\Program Files\nginx-1.15.1\logs\</logpath>
    <logmode>roll</logmode>
    <depend></depend>
    <executable>D:\Program Files\nginx-1.15.1\nginx.exe</executable>
    <stopexecutable>D:\Program Files\nginx-1.15.1\nginx.exe -s stop</stopexecutable>
</service>

```

其中

 - name为服务名
 - logpath指定nginx日志文件地址
 - D:\Program Files\nginx-1.15.1\nginx.exe为nginx可执行应用程序文件位置
1
2
3
开始安装
管理员身份打开cmd，进入nginx目录，执行命令：
nginxservice.exe install
1
注：

nginx-service.exe uninstall命令可删除对应的系统服务

nginx-service.exestop命令可停止对应的系统服务

nginx-service.exe start命令可启动对应的系统服务

