//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabActive: 0,
    tabSite: 0,
    current: 0,
    width: 0,
    tabs: ['套餐', '肉类', '蔬菜', '水果', '厨具', '肉类1', '蔬菜1', '水果1', '厨具1'],
    list: [
      [
        { name: '套餐一' },
        { name: '套餐2' },
        { name: '套餐3' },
        { name: '套餐4' },
        { name: '套餐5' },
        { name: '套餐6' },
        { name: '套餐7' },
        { name: '套餐8' },
        { name: '套餐9' },
        { name: '套餐10' },
        { name: '套餐11' },
        { name: '套餐12' },
        { name: '套餐13' },
        { name: '套餐14' },
        { name: '套餐15' },
        { name: '套餐16' },
        { name: '套餐17' },
      ],
      [
        { name: '肉类一' }
      ],
      [
        { name: '蔬菜一' }
      ],
      [
        { name: '水果一' }
      ],
      [
        { name: '厨具一' }
      ],
      [
        { name: '肉类一' }
      ],
      [
        { name: '蔬菜一' }
      ],
      [
        { name: '水果一' }
      ],
      [
        { name: '厨具一' }
      ],
    ],

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        that.setData({ width: res.windowWidth });
      }
    })
    wx.hideTabBar({});
    if (app.globalData.userInfo) {
      wx.showTabBar({});
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        console.log('111', res, app.globalData.userInfo);
        wx.showTabBar({});
        this.setData({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log('111');
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          if (app.globalData.userInfo) {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
            wx.showTabBar({});
          }
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
      wx.showTabBar({});
    }
  },

  ontab(event) {
    console.log(event);
    this.setData({
      current: event.target.dataset.id,
      tabActive: event.target.dataset.id
    })
  },

  setCurrent(e) {
    console.log(e);
    const width = this.data.width;
    const i = e.detail.current;
    this.setData({
      tabActive: i,
      tabSite: Math.floor((i - 2) * (width / 4))
    });
  },
  move(e) {
    console.log(e);
  }
})
