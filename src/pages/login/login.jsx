import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './login.scss'

export default class Login extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='login'>
        <Text className='h1'>Hello!</Text>
        <Text className='p'>请选择您的星座~</Text>
        <View className='xz_box'>
          
        </View>


      </View>
    )
  }
}
