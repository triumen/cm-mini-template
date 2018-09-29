const add =  Symbol('add');
const sub =  Symbol('sub');
const mul =  Symbol('mul');
const div =  Symbol('div');
class Util {
    constructor() {
        this.calc = {
            add: this[add],
            sub: this[sub],
            mul: this[mul],
            div: this[div]
        }
    }
    /**
     * 微信 api 转 Promise
     * @param {微信api名称} func 
     * @param {api参数} params 
     */
    turnPromise(func, params={}) {
        return new Promise((resolve, reject) => {
            let op = Object.assign({
                success: (res)=>{
                    resolve(res);
                },
                fail: (res)=> {
                    reject(res)
                }
            }, params);
            console.log(op)
            func(op)
        })
    }
    /** 分页函数,
        oldlist => 原数组
        data => 请求的数据
        page => 单前分页
        limit => 每页数量 
        
        @return 
            list: 合并后的数组
            page: 返回的分页数 
    */
    paging(oldLsit, data, page, limit) {
        let dataLen = data.length;
        let listLen = oldLsit.length;
        let lastLen = (page - 1) * limit < 0 ? 0 : (page - 1) * limit;

        if (dataLen >= limit) {
            if (listLen < lastLen + dataLen) {
                let index = lastLen - 1 < 0 ? 0 : lastLen - 1;
                oldLsit.splice(index, listLen - lastLen);
                oldLsit = oldLsit.concat(data);
            } else {
                oldLsit = oldLsit.concat(data);
            }
            page++;
        } else {
            if (listLen < lastLen + dataLen) {
                let index = lastLen - 1 < 0 ? 0 : lastLen - 1;
                oldLsit.splice(index, listLen - lastLen);
                oldLsit = oldLsit.concat(data);
            }
        }
        return { list: oldLsit, page: page }
    }
    /* 浮点数计算--私有类*/
    [add](num1, num2) {
        //加
        var r1, r2, m, n;
        try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((num1 * m + num2 * m) / m).toFixed(n);
    }
    //减
    [sub](num1, num2) {
        var r1, r2, m, n;
        try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        n = (r1 >= r2) ? r1 : r2;
        m = Math.pow(10, Math.max(r1, r2));
        return ((num1 * m - num2 * m) / m).toFixed(n);
    }
    //乘
    [mul](num1, num2) {
        var m = 0;
        try { m += num1.toString().split(".")[1].length } catch (e) { }
        try { m += num2.toString().split(".")[1].length } catch (e) { }
        return (Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", ""))) / Math.pow(10, m)
    }
    //除
    [div]() {
        var t1 = 0, t2 = 0, r1, r2;
        try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
        try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }
}

export default new Util();