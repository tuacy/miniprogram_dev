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