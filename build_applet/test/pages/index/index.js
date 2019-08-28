const { initDates, isiPhoneX, } = require('../../utils/util.js');
const network = require('../../utils/network.js');
const { $Message,$TabBar } = require('../../components/base/index');
import { $wuxToast } from '../../dist/index';
const { ASSEST_URL } = require('../../utils/applet.config.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: true,

  },
  showLoading() {
    this.setData({ status: false })
    wx.showLoading({
      title: '加载中',
    })
  },
  hideLoading() {
    const this_ = this;
    wx.hideLoading({
      complete() {
        setTimeout(() => this_.setData({ status: true }),1000)
      }
    })
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

  }
})