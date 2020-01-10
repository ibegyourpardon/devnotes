在App.js的最上方可以设置GlobalData的初始值。

```
App({
  globalData:{
    appid: '1wqas2342dasaqwe232342xxxxxxxxxx',//appid需自己提供，此处的appid我随机编写  
    secret: 'e0dassdadef2424234209bwXXXXXXXXXXXXXX',//secret需自己提供，此处的secret我随机编写
    openid:'你好', //自定义
  },
```

在App.js中修改GlobalData的值

this.globalData.openid = e.detail.openid;

在小程序的所有页面中都可以随时调用和写入存放在GlobalData的数据。无论是调用还是写入，第一步都是要让页面与App.js产生关联。所以在页面的对应的JS中，第一句话就要写上：

var app = getApp();



var getAppInfo = app.globalData.openid;
console.log(getAppInfo)

在页面中设置openid：

getApp().globalData.openid = "12345";

GlobalData可以随时在页面中读取和存储数据，比Storage方便很多。
