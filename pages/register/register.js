// index/register/register.js
var Bmob = require('../../utils/Bmob-1.7.0.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    password_2: ""
  },

  register() {
    if (this.data.username.length == 0 || this.data.password.length == 0) {
        wx.showToast({

          title: '用户名和密码不能为空',

          icon: 'loading',

          duration: 2000

        })
    } 
    else if (this.data.password != this.data.password_2) {
      wx.showToast({

        title: '两次密码不同',

        icon: 'loading',

        duration: 2000

      })
    }
    else  {

      let params = {
        username: this.data.username + "",
        password: this.data.password + "",
      }
      Bmob.User.register(params).then(res => {
        wx.showToast({

          title: '注册成功',

          icon: 'success',

          duration: 2000

        })
      }).catch(err => {
        wx.showToast({

          title: '用户名已存在',

          icon: 'loading',

          duration: 2000

        })
      });
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },

  usr_ipt: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  psw_ipt: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  psw2_ipt: function (e) {
    this.setData({
      password_2: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})