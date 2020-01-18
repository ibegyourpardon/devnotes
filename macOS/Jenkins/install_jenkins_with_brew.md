```
brew install jenkins-lts
```

不要通过官方的 pkg 包安装。  
通过 brew 安装的 Jenkins 会安装在  /Users/xxxx/.jenkins 下，方便管理，迁移。

如果要修改端口号需要找到 /usr/local/Cellar/jenkins-lts/2.xxxx/homebrew.mxcl.jenkins-lts.plist 进行，具体文件和版本号肯定不同，修改其中的 httpPort 。

重启 jenkins 通过使用 brew services start jenkins-lts 启动。

如果要卸载，使用 brew uninstall jenkins-lts 

通过 pkg 包安装的 jenkins 会位于 /Users/Shared/Jenkins 

