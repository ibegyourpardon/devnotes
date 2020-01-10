	git remote -v
git remote add upstream git@github.com:xxx/xxx.git # 后面的地址是fork的源地址，提示没有权限用https
git fetch upstream # 更新后本地会多一个upstream/master分支
git merge upstream/master # 合并upstream/master到本地master分支
git push