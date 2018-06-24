var app = getApp()

Page({
  data: {
    hide: false,
    array: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周', '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', '第17周', '第18周', '第19周', '第20周'],
    array1: ['3.5~3.11', '3.12~3.18', '3.19~3.25', '3.26~4.1', '4.2~4.8', '4.9~4.15', '4.16~4.22', '4.23~4.29', '4.30~5.6', '5.7~5.13', '5.14~5.20', '5.21~5.27', '5.28~6.3', '6.4~6.10', '6.11~6.17', '6.18~6.24', '6.25~7.1', '7.2~7.8', '7.9~7.15', '7.16~7.22'],
    index: 0,
    list: [{ id: 1, name: '高等代数', area: '行知楼404' }, { id: 2, name: '无', area: '无' }, { id: 3, name: '高等代数', area: '行知楼404' }, { id: 4, name: '无', area: '无' }, { id: 5, name: '无', area: '无' }, { id: 6, name: '无', area: '无' }, { id: 7, name: '数学分析', area: '行知楼404' }, { id: 8, name: '无', area: '无' }, { id: 9, name: '高等代数', area: '行知楼404' }, { id: 10, name: '高等代数', area: '行知楼404' }, { id: 11, name: '无', area: '无' }, { id: 12, name: '无', area: '无' }, { id: 13, name: '高等代数', area: '行知楼404' }, { id: 14, name: '高等代数', area: '行知楼404' }, { id: 15, name: '无', area: '无' }, { id: 16, name: '高等代数', area: '行知楼404' }, { id: 17, name: '大学英语', area: '行知楼404' }, { id: 18, name: '高等代数', area: '行知楼404' }, { id: 19, name: '无', area: '无' }, { id: 20, name: '无', area: '404,405' }, { id: 21, name: '无', area: '无' }, { id: 22, name: '无', area: '无' }, { id: 23, name: '高等代数', area: '行知楼404' }, { id: 24, name: '高等代数', area: '行知楼404' }, { id: 25, name: '无', area: '无' }],
    array2: [],
    id: 0,
    index1:0,
  },
  picker: function (e) {
    var that = this
    that.setData({ index: e.detail.value })
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  change: function (event) {
    this.setData({ id: event.target.id })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'liner',
    })
    animation.rotateY(360).step()
    var that=this
    var u=that.data.array2
    u[event.target.id-1] = animation.export();
    that.setData({ array2: u })
    if(that.data.list[event.target.id-1].name=="无"){
      wx.showModal({
        title: '附近空教室',
        showCancel:false,
        content: that.data.list[event.target.id - 1].area,
      })
    }
  },
})
