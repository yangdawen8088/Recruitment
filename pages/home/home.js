// pages/home/home.js
import address from '../../api/address'
Page({
  data: {
    images: [
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
    ],
    isFold: true,
    productImg: [
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
      { url: '../../images/1.jpg' },
    ],
    name: ['零售'],
    current: 1,
    place:[],

  },
  onLoad: function (options) {
    let place=address;
    this.setData({
      place:place
    })
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  changeDec: function (e) {
    let current = e.detail.current;
    switch (current) {
      case 0:
        this.setData({
          name: '零售'
        })
        break;
      case 1:
        this.setData({
          name: '云服务'
        })
        break;
      case 2:
        this.setData({
          name: '商城'
        })
        break;
    }
    this.setData({
      current: current,
    })
  },
  showMore:function () {
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },
  openMap:function (e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/map/map?id=${index}`,
    }) 
  },
  open: function () {
    wx.showActionSheet({
      itemList: ['生成朋友圈分享图', '转发给好友或群聊', '生成长图'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  }
})