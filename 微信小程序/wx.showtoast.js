//显示提醒弹窗
var pageObject = {
    onLoad: function () {
        wx.showToast({
            title: '成功',  //标题
            icon: 'loading',  //图标，支持"success"、"loading"
            image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon
            duration: 2000000, //提示的延迟时间，单位毫秒，默认：1500
            mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
            success: function () { }, //接口调用成功的回调函数
            fail: function () { },  //接口调用失败的回调函数
            complete: function () { } //接口调用结束的回调函数
        })
    }
}

Page(pageObject)