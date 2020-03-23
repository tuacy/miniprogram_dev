//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    navigateArray: [{
        'title': 'vant组件库引入',
        "url": '../vant/vant'
      },
      {
        'title': 'navtabs使用',
        "url": '../navtabs/navtabs'
      },
      {
        'title': '干货集中营',
        "url": '../gank/index/index'
      },
      {
        'title': '画布-时钟',
        "url": '../clock/clock'
      },
      {
        'title': '二维码生成器',
        "url": '../qrcode/qrcode'
      },
      {
        'title': '圆形菜单',
        "url": '../circle/circle'
      },
      {
        'title': '圆形菜单',
        "url": '../circle_menu/circle_menu'
      }
    ]
  },

  /**
   * 事件处理函数 -- 跳转到指定的页面
   */
  onTap: function (event) {
    wx.navigateTo({
      url: event.target.dataset.url
    });
  }
})