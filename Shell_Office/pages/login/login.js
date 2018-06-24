// pages/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isRember: "true",
    requestStatus: ""
  },
  //记住密码
  isRemInfo: function (e) {
    var isSelected
    if (e.detail.value.length == 0) {
      //没被选中
      isSelected = false
    } else {
      //被选中
      isSelected = true
    }

    wx.setStorageSync("isRemPasswd", isSelected)
    this.data.isRember = isSelected
  },

  //检查信息
  checkInfo: function (e) {
    console.log(e)
    if (e.detail.value.account.length < 12) {
      this.setData(
        { popErrorMsg: "请输入正确的学号！" }
      );
      this.ohShitfadeOut();
      return false;
    }
    if (e.detail.value.password.length <= 0) {
      this.setData(
        { popErrorMsg: "请输入密码！" }
      );
      this.ohShitfadeOut();
      return false;
    }
    return true;
  },
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  },

  //表单请求验证及登录
  submit: function (e) {
    if (this.checkInfo(e)) {
      var pageThis = this
      var data = e.detail.value
      wx.showLoading({
        title: '登录中',
      });
      wx.request({
        url: 'https://www.yiqigzs.cn/wx/login?',
        method: 'POST',
        data: {
          "account": data.account,
          "password": data.password,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (response) {
        data = response.data
        console.log(data)

        

        //处理数据
         var uInfo = data["userinfo"]
         var termsInfo = data["terms"]
         var classChosedInfo = data["classChosed"]
         var schoolRollInfo = data["schoolRoll"]

          //隐藏加载框
          wx.hideLoading()
          //判断账户密码正确
          if (data.status == 1) {
            app.globalData.userInfo.name = uInfo.name
            app.globalData.userInfo.snum = uInfo.account
            app.globalData.userInfo.classname = uInfo.classname
            //设置全局变量的每个学期的课程信息
            app.globalData.terms = termsInfo
            //设置全局变量的选课信息
            app.globalData.classChosed = classChosedInfo
            //设置全局变量的学籍信息
            app.globalData.schoolRoll = schoolRollInfo
            console.log(termsInfo)

            if (pageThis.data.isRember) {
              wx.setStorageSync('account', uInfo.account);
              wx.setStorageSync('password', uInfo.password);
            }
            wx.redirectTo({
              url: '../index/index',
            })
          } else {
            //提示账户密码错误
            pageThis.setData(
              { popErrorMsg: "学号不存在或者密码错误！" }
            );
            pageThis.ohShitfadeOut();
          }
        },
        fail: function () {

          console.log("fail")
          wx.hideLoading()
          pageThis.setData(
            { popErrorMsg: "网络错误，请检查连接！" }
          );
          pageThis.ohShitfadeOut();
        }
      })
    } 

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.isRember) {
      var account = wx.getStorageSync('account');
      var password = wx.getStorageSync('password');
      if (account) {
        this.setData({ account: account });
      }
      if (password) {
        this.setData({ password: password });
      }
    }
  }
})