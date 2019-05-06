//index.js
//获取应用实例
var Bmob = require('../../utils/Bmob-1.7.0.min.js');

const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    user: [],
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  onLoad() {
    const query = Bmob.Query("_User");
    query.equalTo("username", "==", "123456"); //
    query.find().then(res => {
      this.setData({
        user: res
      })

    });
  },
  addTools() {
    wx.navigateTo({ //跳转到添加设备
      url: '../addTools/addTools',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  changePsw() {
    var objectId = this.data.user[0].objectId;
    wx.navigateTo({
      url: '../changePsw/changePsw', //跳转到修改密码
    })
  },
  changeInformation() {
    var objectId = this.data.user[0].objectId;
    wx.navigateTo({
      url: '../changeInformation/changeInformation?user_id=' + objectId, //跳转到修改资料
    })
  },
  bindingEmail() {
    wx.navigateTo({
      url: '../bindingEmail/bindingEmail', //跳转到绑定邮箱
    })
  },
  bindingPhone() {
    wx.navigateTo({
      url: '../bindingPhone/bindingPhone', //跳转到绑定手机号码
    })
  },
  aboutus:function(){
  wx.navigateTo({
  url: '/pages/aboutus/aboutus',
})
  },
  usehelp: function () {
    wx.navigateTo({
      url: '/pages/usehelp/usehelp',
    })
  },
})