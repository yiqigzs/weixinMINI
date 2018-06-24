//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)

    //加载图片的方法
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  userload: function () {


  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickScore: function () {
    wx.navigateTo({
      url: '../score/score',
    })
  },
  clickLogout:function(){
    wx.setStorageSync('account', "");
    wx.setStorageSync('password',"");
    wx.redirectTo({
      url: '../login/login',
    })
  },
  clickChosed:function(){
    wx.navigateTo({
      url: '../classChosed/classChosed',
    })
  },
  clickSchoolRoll:function(){
    wx.navigateTo({
      url: '../schoolRoll/schoolRoll',
    })
  },
  clickcalendar:function(){
    wx.navigateTo({
      url: '../calendar/calendar',
    })
  }
})
