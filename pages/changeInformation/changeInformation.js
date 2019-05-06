// pages/changeInformation/changeInformation.js

var Bmob = require('../../utils/Bmob-1.7.0.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: '',
    imgList: [],
    date: '2000-01-01',
    region: ['广东省', '广州市', '海珠区'],
    username :'',
    tel : '',
    email : '',
    birthday :''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var user_id = options.user_id;     //获取传过来的user_id
    console.log(user_id)
    this.setData({
      user_id: user_id
    })

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
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList, //查看已选择的图片——大图
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示', //删除已选择的图片
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
  ChooseImage() { //选择图片上传
    wx.chooseImage({
      count: 1, //默认9
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
  DateChange(e) {
    this.setData({
      date: e.detail.value  //选择日期显示
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value //选择区域显示
    })
  },
  get_username: function (e) {
    this.setData({
      username: e.detail.value  //获取输入框新用户名
    })
  }, get_tel: function (e) {
    this.setData({
      tel: e.detail.value  //获取输入框电话号码
    })
  }, 
  get_email: function (e) {
    this.setData({
      email: e.detail.value  //获取输入框的电子邮件地址
    })
  },
  change_info(){
    const query = Bmob.Query('_User');
    query.get(this.data.user_id).then(res => {
      console.log(res)
      res.set('username', this.data.username)
      res.set('email', this.data.email)
      res.set('mobilePhoneNumber', this.data.tel)            //缺少完整性检测
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
  }
})