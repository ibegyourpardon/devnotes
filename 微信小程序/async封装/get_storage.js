async get_storage(key) {
  return new Promise((resolve, reject) => {
    let value = wx.getStorageSync(key)
    console.log(value)
    resolve(value)
    reject(err)
  })
},