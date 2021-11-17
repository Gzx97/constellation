import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import Taro from '@tarojs/taro'
import getBaseUrl from '../../api/baseUrl'
import { getConst, fortune } from '../../api/servers'
import "taro-ui/dist/style/components/button.scss" // 按需引入

import './login.scss'
const IMG_URL = getBaseUrl() + 'images/starLuckey/'

export default class Login extends Component {
  state = {
    // msg: 'Hello World!',
    toast: '敬请期待！',
    isOpened: false,
  }
  componentWillMount() { }

  componentDidMount() {
    // console.log(IMG_URL)
    // getConst().then(res => {
    //   console.log(res.data.data)
    // })
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
  chooseXingzhuo = (xz) => {
    console.log(xz)
    // Taro.showToast({
    //   title: xz,
    //   duration: 2000, //	持续时间
    //   icon: 'none',//	'success'、'loading'、'none'
    //   mask: false, // 是否显示透明蒙层，防止触摸穿透
    //   // image:'图片路径/图片对象'//   优先级高于icon,在icon的位置显示
    // })
    Taro.navigateTo({
      url: '/pages/luckey/luckey?cons_name=' + encodeURI(xz) 
    })
  }
  render() {
    const { toast, isOpened } = this.state
    return (
      <View
        style={{ backgroundImage: `url(${IMG_URL}star-bg.png)` }}
        className='login'>
        <AtToast
          duration={2000}
          isOpened={isOpened}
          text={toast}
        ></AtToast>
        <Text className='h1'>Hello!</Text>
        <Text className='p'>请选择您的星座~</Text>
        <View className='xz_box'>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View
              onClick={() => { this.chooseXingzhuo('白羊座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'baiyang.png'}
              />
              <Text className='xz_text'>白羊座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('金牛座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'jinniu.png'}
              />
              <Text className='xz_text'>金牛座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('双子座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'shuangzi.png'}
              />
              <Text className='xz_text'>双子座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('巨蟹座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'juxie.png'}
              />
              <Text className='xz_text'>巨蟹座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('狮子座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'shizi.png'}
              />
              <Text className='xz_text'>狮子座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('处女座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'chunv.png'}
              />
              <Text className='xz_text'>处女座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('天秤座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'tiancheng.png'}
              />
              <Text className='xz_text'>天秤座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('天蝎座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'tianxie.png'}
              />
              <Text className='xz_text'>天蝎座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('射手座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'sheshou.png'}
              />
              <Text className='xz_text'>射手座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('摩羯座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'mojie.png'}
              />
              <Text className='xz_text'>摩羯座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('水瓶座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'shuiping.png'}
              />
              <Text className='xz_text'>水瓶座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('双鱼座') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={IMG_URL + 'shuangyu.png'}
              />
              <Text className='xz_text'>双鱼座</Text>
            </View>
          </View>
        </View>


      </View>
    )
  }
}
