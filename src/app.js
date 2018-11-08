import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import dva from './utils/dva'
import models from './models'
import './app.less'
import { Provider } from '@tarojs/redux'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();
class App extends Component {
  config = {
    pages: [ // 主包
      'pages/index/index',
      'pages/cart/index',
      'pages/user/index'
    ],
    "subPackages": [ // 分包
      {
        "root": "pagesA/", 
        "pages": [
          "cart/index",
        ]
      },
      {
        "root": "pagesB/",
        "pages": [
          "user/index" 
        ]
      }
    ],
    "preloadRule": { // 预加载主包
      "pages/index/index": {
        "network": "all", // 不限网络
        "packages": [ // 进入页面后预下载分包的 root 或 name ,__APP__代表主包
          "__APP__"
        ]
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { // 分包现在不支持在tabBar中
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./statics/images/tab/home.png",
        selectedIconPath: "./statics/images/tab/home-active.png"
      },{
        pagePath: "pages/cart/index",
        text: "购物车",
        iconPath: "./statics/images/tab/cart.png",
        selectedIconPath: "./statics/images/tab/cart-active.png"
      },{
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "./statics/images/tab/user.png",
        selectedIconPath: "./statics/images/tab/user-active.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (<Provider store={store}>
      <Index/>
    </Provider>);
  }
}

Taro.render(<App />, document.getElementById('app'))
