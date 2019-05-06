var Bmob = require('../../utils/Bmob-1.7.0.min.js');

const app = getApp()
Page({


  data: {
    showHowToUsebyCode: false,
    showHowToUsebyfixed: false,


  },


  onLoad: function (options) {

  },

  onShow: function () {

  },

  showHowToUsebyCode: function () {
    if (this.data.showHowToUsebyCode == false) {
      this.setData({
        showHowToUsebyCode: true,
        showHowToUsebyfixed: false,

      });
    }
    else {
      this.setData({
        showHowToUsebyCode: false,
        showHowToUsebyfixed: false,

      });
    }
  },

  showHowToUsebyfixed: function () {
    if (this.data.showHowToUsebyfixed == false) {
      this.setData({
        showHowToUsebyCode: false,
        showHowToUsebyfixed: true,

      });
    }
    else {
      this.setData({
        showHowToUsebyCode: false,
        showHowToUsebyfixed: false,
        showProtectPrivacy: false,
        showAboutSalary: false,
        showSecurity: false
      });
    }
  },














})