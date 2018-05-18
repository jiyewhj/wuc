import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/index/main', 'pages/pay/main', '^pages/keyboard/main'],
    window: {
      navigationBarTitleText: 'mpvueBase',
      navigationStyle: 'default',
      backgroundColor: '#24C6DC',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#24C6DC',
      backgroundTextStyle: 'light'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '榜单',
          pagePath: 'pages/board/main',
          iconPath: 'static/images/board.png',
          selectedIconPath: 'static/images/board-actived.png'
        },
        {
          text: '搜索',
          pagePath: 'pages/search/main',
          iconPath: 'static/images/search.png',
          selectedIconPath: 'static/images/search-actived.png'
        },
        {
          text: '我的',
          pagePath: 'pages/profile/main',
          iconPath: 'static/images/profile.png',
          selectedIconPath: 'static/images/profile-actived.png'
        }
      ]
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000
    }
  }
};
