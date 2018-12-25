// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manage: false,
    list: [
      {name: '套餐1'},
      {name: '套餐2'},
      {name: '套餐3'},
      {name: '套餐4'},
      {name: '套餐5'},
      {name: '套餐6'},
      {name: '套餐7'},
      {name: '套餐8'},
      {name: '套餐9'},
      {name: '套餐10'},
      {name: '套餐11'},
      {name: '套餐12'},
      {name: '套餐13'},
      {name: '套餐14'},
      {name: '套餐15'},
      {name: '套餐16'},
      {name: '套餐17'}
    ],
    allCheck: false,

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
  onAllChange(e) {
    console.log(e);
    this.setData({
      allCheck: e.detail
    })
  },
  onManage() {
    this.setData({ manage: !this.data.manage})
  }
})
