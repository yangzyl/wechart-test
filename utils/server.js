
//-------------------------------------------------------------------------请求的封装

const host = "http://192.168.1.240/api/v3/";
export { host };
//请求封装
function request(url, method, data, header = {}) {
    wx.showLoading({
        title: "加载中" //数据请求前loading
    });
    return new Promise((resolve, reject) => {
        wx.request({
        url: host + url, //仅为示例，并非真实的接口地址
        method: method,
        data: data,
        header: Object.keys(header).length !== 0 ? header : {
            "content-type": "application/json" // 默认值
        },
        success: function(res) {
            wx.hideLoading();
            resolve(res.data);
        },
        fail: function(error) {
            wx.hideLoading();
            reject(false);
        },
        complete: function() {
            wx.hideLoading();
        }
        });
    });
}
export function get(url, data, header = {}) {
    return request(url, "GET", data, header);
}
export function post(url, data, header = {}) {
    return request(url, "POST", data, header);
}

//-------------------------------------------------------------------------请求的封装

//----------------------------------------------用户是否登录 未登录跳转到登录页面 -------------------------
  