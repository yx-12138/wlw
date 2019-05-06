var Bmob = require('../../utils/Bmob-1.7.0.min.js');
var util = require('../../utils/util.js');
const app = getApp();
Page({
  data: {
    device : [],
    user_id :[],
  },
  onLoad(){
    this.setData({
     user_id : app.globalData.user_id
    })
    const query = Bmob.Query("device");
    query.equalTo("User_id", "==", this.data.user_id);
    query.find().then(res => {
      this.setData({
        device : res
      })
    });
  },
  showDetails: function (e) {
    var dev_id = e.currentTarget.dataset.id;          //获取点击的设备的id
    wx.navigateTo({
      url: '../showDetails/showDetails?dev_id='+dev_id, //带着设备id传入设备细节页面
    })
  }
});
