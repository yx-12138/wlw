// useHelp.js

var Bmob = require('../../utils/Bmob-1.7.0.min.js');

const app = getApp()


Page({


  data: {

    copyBtn: "Silence651971130" //这里填队长微信即要复制的微信号

  },


  onLoad: function (options) {

  },

  onShow: function () {

  },


  copy: function (e) {

    wx.setClipboardData({
      data: 'data',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })

  },
  copyBtn: function (e) {
    var that = this;
    wx.setClipboardData({
      //去找上面的数据
      data: that.data.copyBtn,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },










})