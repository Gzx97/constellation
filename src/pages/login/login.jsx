import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import Taro from '@tarojs/taro'

import BAIYANG from '../../image/login/baiyang.png'
import JINNIU from '../../image/login/jinniu.png'
import SHUANGZI from '../../image/login/shuangzi.png'
import JUXIE from '../../image/login/juxie.png'
import SHIZI from '../../image/login/shizi.png'
import CHUNU from '../../image/login/chunu.png'
import TIANCENG from '../../image/login/tianceng.png'
import TIANXIE from '../../image/login/tianxie.png'
import SHESHOU from '../../image/login/sheshou.png'
import MOJIE from '../../image/login/mojie.png'
import SHUIPING from '../../image/login/shuiping.png'
import SHUANGYU from '../../image/login/shuangyu.png'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './login.scss'

export default class Login extends Component {
  state = {
    // msg: 'Hello World!',
    toast: '敬请期待！',
    isOpened: false,
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  chooseXingzhuo = (xz) => {
    console.log(xz)
    Taro.showToast({
      title: xz,
      duration: 2000, //	持续时间
      icon: 'none',//	'success'、'loading'、'none'
      mask: false, // 是否显示透明蒙层，防止触摸穿透
      // image:'图片路径/图片对象'//   优先级高于icon,在icon的位置显示
    })
  }
  render() {
    const { toast, isOpened } = this.state
    return (
      <View className='login'>
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
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={BAIYANG}
              />
              <Text className='xz_text'>白羊座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={JINNIU}
              />
              <Text className='xz_text'>金牛座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={SHUANGZI}
              />
              <Text className='xz_text'>双子座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={JUXIE}
              />
              <Text className='xz_text'>巨蟹座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={SHIZI}
              />
              <Text className='xz_text'>狮子座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={CHUNU}
              />
              <Text className='xz_text'>处女座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={TIANCENG}
              />
              <Text className='xz_text'>天秤座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={TIANXIE}
              />
              <Text className='xz_text'>天蝎座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={SHESHOU}
              />
              <Text className='xz_text'>射手座</Text>
            </View>
          </View>
          {/* 每三个一行 */}
          <View className='every_3'>

            <View

              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={MOJIE}
              />
              <Text className='xz_text'>摩羯座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={SHUIPING}
              />
              <Text className='xz_text'>水瓶座</Text>
            </View>
            <View
              onClick={() => { this.chooseXingzhuo('别点没用') }}
              className='every_1'>
              <Image
                // style='width: 300px;height: 100px;background: #fff;'
                className='xz_img'
                src={SHUANGYU}
              />
              <Text className='xz_text'>双鱼座</Text>
            </View>
          </View>
        </View>


      </View>
    )
  }
}
