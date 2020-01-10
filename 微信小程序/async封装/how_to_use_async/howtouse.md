在小程序根目录 miniprogram 下建立 util 目录，将async.js 放到 util 目录下

然后就可以全局使用 async 方法来定义函数。无需额外手动引入 async.js

例如，调用云函数


```
  /* 获取openid */
  async cloud_get_openid() {
    //利用云函数获得openid并输出
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'login',
        complete: res => {
          // console.log(res.result)
          console.log('云函数获取到的openid: ', res.result.openid)
        },
        success(res) {
          resolve(res.result.openid);
        },
        fail(res) {
          reject("0");
        }
      })
    });
  },
```