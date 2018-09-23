/**
 * @author 陈威霖
 * @description 封装网络请求
 * @version 1.0.0
 * 用法:
 * 若不需要显示 loading , 在调用方法前,调用hideLoading()
 */
import config from './config';

class Http {
    constructor() {
        this.baseUrl = config.REQUEST_URL
        this.isShowLoading = true
    }
    hideLoading() {
        this.isShowLoading = false
        return this;
    }
    post(url, params = {}) {
        // let tokenInfo = wx.getStorageSync('tokenInfo');
        // params = Object.assign(params, { sid: tokenInfo.sid || '', token: tokenInfo.token || '' });

        if (this.isShowLoading) {
            wx.showLoading({
                title: '加载中',
            })
        }

        return new Promise((resolve, reject) => {
            wx.request({
                method: 'POST',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                url: `${this.baseUrl}${url}`,
                data: params,
                success(data) {
                    if (this.isShowLoading) {
                        wx.hideLoading();
                    }

                    if (!this.isShowLoading) {//重置状态
                        this.isShowLoading = true;
                    }

                    if (data.statusCode == 200) {
                        if (data.data.code == 0) {
                            resolve(data.data.data)
                        } else {
                            wx.showToast({
                                title: data.data.msg,
                                icon: 'none'
                            })
                            reject({ message: data.data.msg })
                        }

                    } else if (/^50[0-9]/.test(data.statusCode)) {
                        wx.showToast({
                            title: '服务器错误',
                            icon: 'none'
                        })
                        reject({ message: '服务器错误' })
                    } else if (/^4[0-1][0-9]/.test(data.statusCode)) {
                        wx.showToast({
                            title: '请求出错',
                            icon: 'none'
                        })
                        reject({ message: '请求出错' })
                    }
                },
                fail(err) {
                    wx.showToast({
                        title: '请求超时, 请重试',
                        icon: 'none'
                    })
                    reject({ message: err })
                }
            })
        })
    }
    get(url, params = {}) {
        // let tokenInfo = wx.getStorageSync('tokenInfo');
        // params = Object.assign(params, { sid: tokenInfo.sid || '', token: tokenInfo.token || '' });

        if (this.isShowLoading) {
            wx.showLoading({
                title: '加载中',
            })
        }

        return new Promise((resolve, reject) => {
            wx.request({
                method: 'GET',
                url: `${this.baseUrl}${url}`,
                data: params,
                success(data) {
                    if (this.isShowLoading) {
                        wx.hideLoading();
                    }

                    if (!this.isShowLoading) {//重置状态
                        this.isShowLoading = true;
                    }

                    if (data.statusCode == 200) {
                        if (data.data.code == 0) {
                            resolve(data.data.data)
                        } else {
                            wx.showToast({
                                title: data.data.msg,
                                icon: 'none'
                            })
                            reject({ message: data.data.msg })
                        }

                    } else if (/^50[0-9]/.test(data.statusCode)) {
                        wx.showToast({
                            title: '服务器错误',
                            icon: 'none'
                        })
                        reject({ message: '服务器错误' })
                    } else if (/^4[0-1][0-9]/.test(data.statusCode)) {
                        wx.showToast({
                            title: '请求出错',
                            icon: 'none'
                        })
                        reject({ message: '请求出错' })
                    }
                },
                fail(err) {
                    wx.showToast({
                        title: '请求超时, 请重试',
                        icon: 'none'
                    })
                    reject({ message: err })
                }
            })
        })
    }
}

export default new Http();