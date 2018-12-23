//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    scrollX: 1,
    delay: null,
    touchState: false,
    moveState: false,
    siteStet: false,
    site: 0,
    scrollSite: 0,
    tabActive: 1,
    tabSite: 0,
    tabs: ['套餐', '肉类', '蔬菜', '水果', '厨具', '肉类1', '蔬菜1', '水果1', '厨具1'],
    list: [
      [
        {name: '套餐一'},
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
        {name: '套餐17'},
      ],
      [
        {name: '肉类一'}
      ],
      [
        {name: '蔬菜一'}
      ],
      [
        {name: '水果一'}
      ],
      [
        {name: '厨具一'}
      ],
      [
        {name: '肉类一'}
      ],
      [
        {name: '蔬菜一'}
      ],
      [
        {name: '水果一'}
      ],
      [
        {name: '厨具一'}
      ],
    ],
    scrollTop: 0,
    moveL: 0,
    width: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var query = wx.createSelectorQuery();
    query.select('.content-y').boundingClientRect((rect) => {
      console.log(rect.width)
      this.setData({width: rect.width});
    }).exec();

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPageScroll(event) {
    console.log(event.scrollTop);
    this.setData({
      scrollTop: event.scrollTop,
    });
  },
  onChange(event) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    this.setData({
      scrollTop: 0
    });
  },
  ontab(event) {
    console.log(event);
    this.setData({
      scrollX: event.target.dataset.id,
      tabActive: event.target.dataset.id
    })
  },
  move(event) {
    console.log(this.data.delay);
    this.setData({
      moveState: true,
      // site: event.detail.scrollLeft
    });
    if (this.data.delay) {
      clearTimeout(this.data.delay);
    }
    this.setData({
      delay: setTimeout(() => {
        this.setData({
          moveState: false,
          site: event.detail.scrollLeft
        });
        this.setScroll();
      }, 50) 
    })
  },
  touchEnd() {
    this.setData({
      touchState: false
    });
    this.setScroll();
  },
  touchStart() {
    this.setData({
      touchState: true,
      siteStet: true
    });
    console.log(this.data.touchState);
  },
  setScroll() {
    const width = this.data.width;
    if (!this.data.moveState && !this.data.touchState && this.data.siteStet) {
      const moveL = this.data.site;
      const scrollX = parseInt(moveL / width);
      const nest = parseInt((moveL % width) / (width / 2));
      this.setData({
        scrollSite: width * (scrollX + nest),
        siteStet: false,
        tabActive: (scrollX + nest) + 1,
        tabSite: parseInt(((scrollX + nest) - 2) * (width / 4))
      });
      this.setTabSite();
      console.log(this.data.scrollX, (scrollX + nest));
    }
  },
  setTabSite() {
    var query = wx.createSelectorQuery();
      query.select(`#tab${this.data.tabActive}`).boundingClientRect((rect) => {
        console.log(this.data.tabSite, this.data.tabActive);
      }).exec();
  }
})
