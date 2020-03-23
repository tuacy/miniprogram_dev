// pages/calculator/calculator.js

const StringUtil = require('../../util/string_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '0',
    operator: '',
  },

  // 百分百
  tapPercent: function() {

  },

  // 数字
  tapNumber: function(e) {
    // console.log('数字按钮：', e);
    const num = e.currentTarget.dataset['value'];
    if (num) {
      this.data.result += num;

      const fmtNumber = StringUtil.formatNumber(this.data.result);

      // 限制最大长度
      if (fmtNumber.length > 11)
        return;

      this.setData({
        result: fmtNumber
      });
    } else {
      console.warn('对应的 data-value 属性异常！');
    }
  },

  // 加减乘除
  tapOperator: function(e) {
    console.log('tap: ', e);
    const opt = e.currentTarget.dataset['value'];
    if (opt) {
      this.setData({
        operator: opt
      });
    }
  },

  // 等于
  tapCalculate: function() {
    console.log('等于：');
  }

})