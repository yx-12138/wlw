// pages/changePsw/changePsw.js

var Bmob = require('../../utils/Bmob-1.7.0.min.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id : '',
    psw_old : '1',
    psw_new : '3',
    psw_check : '2'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user_id: app.globalData.user_id
    })
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

  },
  changePsw(){

    //少一个确认旧密码为正确的步骤

    if (this.data.psw_old != null && this.data.psw_new != null && this.data.psw_check != null && (this.data.psw_new == this.data.psw_check)){
      
      const query = Bmob.Query('_User');
      query.get(this.data.user_id).then(res => {
        console.log(res)
        res.set('password', this.data.psw_new)              //确认输入无误再修改
        res.save()
        console.log("success")
        wx.showModal({
          title: '提示',
          content: '修改成功',
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack({    //确认修改成功返回上一界面
              })
            } else {

            }

          }
        })
        
      }).catch(err => {
        console.log(err)
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '输入有误',
        success: function (res) {
          if (res.confirm) {

          } else {

          }

        }
      })
    }
    
  },
  psWd_old: function (e) {
    this.setData({
      psw_old: e.detail.value  //获取输入框旧密码
    })
  },
  psWd_new: function (e) {
    this.setData({
      psw_new: e.detail.value //获取输入框新密码
    })
  },
  psWd_check: function (e) {
    this.setData({
      psw_check: e.detail.value//获取输入框确认密码
    })
  }
})