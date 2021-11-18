import { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import Taro from '@tarojs/taro'

class App extends Component {

  componentDidMount () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
