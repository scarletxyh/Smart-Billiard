// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:100,
    aa: [
      {id:101,
      title:100,
      num:1},
      {id:102,
        title:200,
        num:2},
      {id:103,
        title:300,
        num:3
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    console.log(options.idabc);
    this.setData({
      id: options.idabc
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
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
  aaa: function(event) {
    console.log("123");
    this.setData({
      id : 11111
    })   
  }

})