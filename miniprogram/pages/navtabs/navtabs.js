// pages/navtabs/navtabs.js
Page({

  data: {
    currentTab: 0,
    tabArray: ["tab1", "tab2", "tab3", "tab4"]
  },

  /**
   * 切换tab
   */
  onSwitchNavTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * swiper滑块切换
   */
  onSwiperBindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  }
})