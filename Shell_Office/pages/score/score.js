const app = getApp()
Page({
  data: {
    terms: [],
    termsCount: [],
    termsInfo: [],
    index: 0,
  },
  picker: function (e) {
    this.setData({ index: e.detail.value })
  },
  onLoad: function (e) {
    this.setData({ terms: app.globalData.terms })

    var tCount = new Array()
    var tInfo = new Array()

    for (var i = 0; i < this.data.terms.length; i++) {
      var j = i + 1
      tCount[i] = "第" + j + "学期"     
    }

    this.data.index = this.data.termsCount.length

    for (var i = 0; i < this.data.terms.length; i++) {
      // console.log(this.data.terms[i]["detail"])
      tInfo[i] = this.data.terms[i]["detail"]
    }

    this.setData({
      termsCount: tCount,
      index: tCount.length - 1,
      termsInfo: tInfo
    })

    console.log(this.data.termsInfo)

  }
})