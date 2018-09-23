class WxApi {
    getLocation() {
        return new Promise((resolve, reject) => {
            wx.getLocation({
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    }
    login() {
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    }
    scanCode() {
        return new Promise((resolve, reject) => {
            wx.scanCode({
                onlyFromCamera: true,
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                withCredentials: true,
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    }
    getSetting() {
        return new Promise((resolve, reject)=> {
            wx.getSetting({
                success(res){
                    resolve(res)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }
}

export default new WxApi();