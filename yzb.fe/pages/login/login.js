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
  }
})