Page({
  data: {
    formatIndex: 0,
    format: ['6瓶*10g', '12瓶*10g', '6瓶*20g', '12瓶*20g'],
    score: 56 * 2.5
  },

  bindPickerChange: function(event) {
    console.log(event.detail)
    this.setData({
      formatIndex: event.detail.value
    })
  }

})