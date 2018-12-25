// component/car-goods/car-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    }
  }
})
