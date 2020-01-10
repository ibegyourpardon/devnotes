async set_data(key,value) {
    return new Promise((resolve, reject)=>{
      let data = [];
      data[key] = value;
      this.setData(data,()=>{
        resolve(value),
        reject(err)
      })
    })
  },
