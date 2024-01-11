export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/photoPreview/index',
    'pages/camera/index',
    'pages/vipCenter/index',
    'pages/mine/index',
    'pages/modeling/index',
    'pages/photoInfo/index',
    'pages/submitOrder/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: '#AAAAAB',
    selectedColor: '#7E6AFF',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home_active.png'
      },
      {
        pagePath: 'pages/modeling/index',
        text: '形象照',
        iconPath: 'assets/icons/modeling.png',
        selectedIconPath: 'assets/icons/modeling_active.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/icons/mine.png',
        selectedIconPath: 'assets/icons/mine_active.png'
      }
    ]
  }
})
