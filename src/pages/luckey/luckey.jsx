import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import Taro from '@tarojs/taro'
import getBaseUrl from '../../api/baseUrl'
import { getConst, fortune } from '../../api/servers'
import "taro-ui/dist/style/components/button.scss" // 按需引入

import './luckey.scss'
const IMG_URL = getBaseUrl() + 'images/starLuckey/'
export default class Luckey extends Component {
  state = {
    // msg: 'Hello World!',
    toast: '敬请期待！',
    isOpened: false,
  }
  componentWillMount() { }

  componentDidMount() {
    // console.log(IMG_URL)
    fortune(
      {
        cons_name: '白羊座',
        type: 'today'
      }
    ).then(res => {
      console.log(res.data.data)
    })
    // Taro.request({
    //   method:'GET',
    //   url:'http://118.31.109.21:8000/api/star/const',
    //   success(res)
    //   {
    //     res.data
    //   }
    // })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { toast, isOpened } = this.state
    return (
      <View
        style={{ backgroundImage: `url(${IMG_URL}star-bg.png)` }}
        className='luckey'>
        <AtToast
          duration={2000}
          isOpened={isOpened}
          text={toast}
        ></AtToast>
        <Text className='h1'>Hello!</Text>
        <Text className='p'>请选择您的星座~</Text>
  


      </View>
    )
  }
}
