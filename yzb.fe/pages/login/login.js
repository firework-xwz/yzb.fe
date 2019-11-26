// pages/login/login.js
Page({
  data: {
    username: null,
    password: null,
  },  

  inputName: function(e) {
    this.data.username = e.detail;
  },
  
  inputPassword: function(e) {
    this.data.password = e.detail;
  },
  
  login: function(e) {
    console.log("login");
    console.log(this.data.username);
    console.log(this.data.password);
    var _this = this;
    wx.navigateTo({
      url: '../exam-view/exam-view'
    })
    // wx.request({
    //   url: "https://47.101.152.190:8090/login",
    //   method: "POST",
    //   header: {
    //     'Content-Type': "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "id": this.data.username,
    //     "password": this.data.password
    //   },
    //   success: function (res) {
    //     console.log("登陆成功");
    //   },
    //   fail: function() {
    //     console.log("登陆失败");
        
    //   }
    // })
  },

  register: function(e) {
    console.log("to register");
    wx.navigateTo({
      url: '../register/register'
    })
  }
})