// pages/addTools/addTools.js
var Bmob = require('../../utils/Bmob-1.7.0.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    picker_dev: ['家电', '温度传感器'], 
    picker_reg: ['区域1', '区域2', '区域3', '区域4',],
    index_dev: null, 
    index_reg: null,
    dev_name :'',
    introduce :''
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

  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,     //查看已选择的图片——大图
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',                      //删除已选择的图片
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  ChooseImage() {          //选择图片上传
    wx.chooseImage({
      count: 1, //图片数量
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  getyzm(){
    //获取验证码
  },
  PickerChange_dev(e) {
    console.log(e);    //选择设备类型
    this.setData({
      index_dev: e.detail.value
    })
  },
  PickerChange_reg(e) {
    console.log(e);    //选择设备区域
    this.setData({
      index_reg: e.detail.value
    })
  },

  add_tool(){
    const query = Bmob.Query('device');
    query.set("name", this.data.dev_name)
    query.set("introduce",this.data.introduce)
    query.set("category", this.data.picker_dev[this.data.index_dev])  //在设备表中添加记录（缺少完整性检验）
    query.save().then(res => {
      wx.showModal({
        title: '提示',
        content: '添加成功',
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
  },
  get_dev_name: function(e){
    this.setData({
      dev_name: e.detail.value //获取输入框设备名
    })
  },
  textareaAInput : function(e){
    this.setData({
      introduce: e.detail.value //获取输入框设备名
    })
  }
})