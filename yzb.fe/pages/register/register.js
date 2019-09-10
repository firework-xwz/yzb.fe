// pages/register/register.js
Page({
  data: {
    id: null,
    username: null,
    password1: null,
    password2: null,
    phone: null,
    sex: '0',
    role: '0',
    icon: {
      normal:
        'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
      active:
        'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
    }
  },

  onChangeSex(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
    console.log(this.data.sex);
  },

  onChangeRole(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
    console.log(this.data.role);
  },

  inputId: function(e) {
    this.data.id = e.detail;
  },

  inputName: function(e) {
    this.data.username = e.detail;
  },

  inputPassword1: function(e) {
    this.data.password1 = e.detail;
  },

  inputPassword2: function(e) {
    this.data.password2 = e.detail;
  },

  inputPhone: function(e) {
    this.data.phone = e.detail;
  },

  register: function(e) {
    console.log("------register------");
    console.log(this.data.id);
    console.log(this.data.username);
    console.log(this.data.password1);
    console.log(this.data.password2);
    console.log(this.data.phone);
    console.log(this.data.sex);
    console.log(this.data.role);

    if(this.data.password1 == this.data.password2) {

    } else {
      wx.showToast({
        title: "两次密码不一致",
        icon: "none"
      })
    }
  }
});