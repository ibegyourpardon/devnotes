```
if(!window.indexedDB)
{
  console.log('你的浏览器不支持 IndexedDB ');
}
```

#创建一个请求打开 IndexedDB
```
let request = window.indexedDB.open('mydatabase', 2);
```

##第一个参数是数据库的名称，第二个参数是数据库的版本号。
