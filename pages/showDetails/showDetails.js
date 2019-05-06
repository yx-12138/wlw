// pages/showDetails/showDetails.js

var Bmob = require('../../utils/Bmob-1.7.0.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dev_id: '',
    device: [],
    device_event: [],
    device_event_introduce: [""],
    event_intr : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.dev_id; //获取上个页面传过来的dev_id 赋值给dev_id
    this.setData({
      dev_id: id
    })

    const query = Bmob.Query('device');
    query.get(this.data.dev_id).then(res => {
      console.log(res)
      this.setData({
        device: res //通过设备id查询设备 赋值给device
      })
    }).catch(err => {
      console.log(err)
    })

    const query1 = Bmob.Query("event_timeTable");
    query1.equalTo("device_id", "==", this.data.dev_id); //查找设备事件时刻表 将设备事件时刻的值付给device_event
    query1.order("event_data");
    query1.find().then(res => {
      this.setData({
        device_event: res
      })
      console.log(this.data.device_event)
     
    });
    



  
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

  },
  show_chart: function (e) {
    var devtemp_id = e.currentTarget.dataset.id;     
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      // var index = e.currentTarget.dataset.index;//index用来识别用户点击的是第几个信息
      // var objectId = that.data.teacher_list[index].objectId;//从而拿到相对应的教师列表里的第几个教师信息

      // wx.navigateTo({
      //   url: '../teacherDetail/teacherDetail?showTelephone=false&showBottom=true&objectId=' + objectId//跳转并传objectId
      // });
      
      url: './showChart/showChart',
    })
  }
})