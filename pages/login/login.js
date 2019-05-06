// pages/login/login.js

var Bmob = require('../../utils/Bmob-1.7.0.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username : "" ,
    password : "",
  },
  login: function(){
    if (this.data.username.length == 0 || this.data.password.length == 0) {

      wx.showToast({

        title: '输入不正确',

        icon: 'none',

        duration: 2000

      })

    } else {
    var a =this.data.username+"";
    var b = this.data.password+"";
      Bmob.User.login(a,b).then(res => {
        console.log(res)
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        })
        wx.switchTab({
          url: '../index/index',
        })
      }).catch(err => {
        console.log(err)
      });

    }
    
  },
  usr_ipt: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  psw_ipt: function(e){
    this.setData({
      password: e.detail.value
    })
  },
  register(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})










