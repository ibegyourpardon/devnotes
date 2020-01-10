async get_sharecontent_from_api() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "xxx",
      method: "GET",
      header: {
        Authorization: 'Bearer' + ' ' + wx.getStorageSync('token')
      },
      data: {
        project_id: this.data.project_id,
act_id: this.data.activityId
      },
      success(res) {
        .console.log(res.data);
        resolve(res.data)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    });
  });
},

success: (res) => {
  resolve(res.data[0])
},
fail(err) {
  console.log(err)
  reject(err)
}





async dayin(param) {
  console.log(param);
},





  sigin() {
  var that = this
  let value = wx.getStorageSync("auth_status");
  if (value) {
    wx.getStorage({
      key: "modle",
      success: function (res) {
        that.setData({
          isbtn: false,
          islogin: true,
          name: res.data.nickName,
          touxiang: res.data.avatarUrl,
          isbtn: false,
          islogin: true
        })
      }
    })
  }
},
