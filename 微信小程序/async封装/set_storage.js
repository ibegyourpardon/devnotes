async set_storage(key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorageSync(key, value)
    resolve(value)
    reject(err)
  })
},