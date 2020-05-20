// data里面加systemInfo:{}, 
data: {
        systemInfo: {},
    },
    // 点击判断

    getSysInfo: function() {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    systemInfo: res,
                })
                if (res.platform == "devtools") {
                    PC
                } else if (res.platform == "ios") {
                    IOS
                } else if (res.platform == "android") {
                    android
                }
            }
        })
    },


    async getSysInfo(url, data) {
        return new Promise((resolve, reject) => {


            try {
                let that = this;
                wx.getSystemInfo({
                    success(res) {
                        that.setData({
                            systemInfo: res,
                        })
                        if (res.platform === "devtools") {
                            console.log("on pc")
                        } else if (res.platform === "ios") {
                            console.log("on ios")
                        } else if (res.platform === "android") {
                            console.log("on android")
                        }
                        resolve(result)

                    }
                })
            } catch (e) {
                // Do something when catch error
                console.log("拿不到系统信息")
                reject("aaaaa")
            }
            wx.getSystemInfo({
                success(res) {

                }
            });
        })
    },
})