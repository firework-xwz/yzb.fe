// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ["mobility", "implant", "FI", "GI", "BI_B", "BI_L", "PI_B", "PI_L", "PD_B", "PD_L", "CEJ_B","CEJ_L"],
    datalist: [{ name: "mobility", num: 16, type: 0, pos: 0 }, { name: "implant", num: 16, type: 0, pos: 1 }, { name: "FI", num: 16, type: 0, pos: 2 }, { name: "GI", num: 16, type: 0, pos: 3 }, { name: "BI_B", num: 16, type: 0, pos: 4 }, { name: "BI_L", num: 16, type: 0, pos: 5 }, { name: "PI_B", num: 16, type: 0, pos: 6 }, { name: "PI_L", num: 16, type: 0, pos: 7 }, { name: "PD_B", num: 16, type: 1, pos: 8 }, { name: "PD_L", num: 16, type: 1, pos: 9 }, { name: "CEJ_B", num: 16, type: 1, pos: 10 }, { name: "CEJ_L", num: 16, type: 1, pos: 11}],
    mydata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    for (var i = 0; i < 12; i++) {
      this.data.mydata[i]=[];
      for (var j = 0; j < 32; j++) {
        this.data.mydata[i][j] = 0;
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onChange:function(event){
    console.log(this.data.mydata);
    var name=event.currentTarget.dataset.name;
    var tag=parseInt(name.split(",")[0]);
    var type = name.split(",")[1];
    var position = parseInt(name.split(",")[2]);
    console.log(tag,this.data.type.indexOf(type),position);
    this.data.mydata[this.data.type.indexOf(type)][position+tag*16]=event.detail;
    console.log(this.data.mydata);
  },
  output:function(){
    console.log(this.data.datalist)
  }
})