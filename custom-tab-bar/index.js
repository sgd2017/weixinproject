Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#1296db",
    list: [{
      "pagePath": "../pages/index/index",
      "iconPath": "../image/icon_index.png",
      "selectedIconPath": "../image/icon_indexchecked.png",
      "text": "首页"
    }, {
      "pagePath": "../pages/store/index",
      "iconPath": "../image/icon_store.png",
      "selectedIconPath": "../image/icon_storechecked.png",
      "text": "商城"
      }, {
        "pagePath": "../pages/answer/index",
        "iconPath": "../image/icon_anwser.png",
        "selectedIconPath": "../image/icon_anwserchecked.png",
        "text": "答题"
      }, {
        "pagePath": "../pages/mine/index",
        "iconPath": "../image/icon_mine.png",
        "selectedIconPath": "../image/icon_minechecked.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})