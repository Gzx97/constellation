import { Component } from 'react'
import { View, Text, Image, Picker } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Current } from '@tarojs/taro'
import getBaseUrl from '../../api/baseUrl'
import { getConst, pair } from '../../api/servers'
import { AtRate } from 'taro-ui'
import './love.scss'
const IMG_URL = getBaseUrl() + 'images/starLuckey/'

export default class Love extends Component {
  state = {
    selector_constellation_man: ['白羊男', '金牛男', '双子男', '巨蟹男', '狮子男', '处女男', '天秤男', '天蝎男', '射手男', '摩羯男', '水瓶男', '双鱼男'],
    selector_constellation_woman: ['白羊女', '金牛女', '双子女', '巨蟹女', '狮子女', '处女女', '天秤女', '天蝎女', '射手女', '摩羯女', '水瓶女', '双鱼女'],
    selectorCheckedMan: decodeURIComponent(Current.router.params.men).replace('座', '男'),
    selectorCheckedWoman: decodeURIComponent(Current.router.params.women).replace('座', '女'),
    love_data: {},
  }
  componentWillMount() {
    console.log()
  }

  componentDidMount() {
    let _this = this
    const { } = this.state

    this.pair()

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  // 星座配对
  pair = () => {
    const { selectorCheckedMan, selectorCheckedWoman } = this.state
    pair({
      men: selectorCheckedMan,
      women: selectorCheckedWoman
    }).then(res => {
      console.log(res.data.data)
      this.setState({
        love_data: res.data.data
      })
    })
  }
  onChangeWoman = e => {
    let _this = this
    this.setState({
      selectorCheckedWoman: this.state.selector_constellation_woman[e.detail.value],
    }, () => {
      _this.pair()
    })
  }
  onChangeMan = e => {
    let _this = this
    this.setState({
      selectorCheckedMan: this.state.selector_constellation_man[e.detail.value],
    }, () => {
      _this.pair()
    })
  }
  search = (arr, dst) => {
    var i = arr.length;
    while (i -= 1) {
      if (arr[i] == dst) {
        return i;
      }
    }
    return false;
  }
  render() {
    const { love_data, selectorCheckedWoman, selectorCheckedMan, selector_constellation_man, selector_constellation_woman } = this.state
    return (
      <View
        style={{ backgroundImage: `url(${IMG_URL}star-bg.png)` }}
        className='love'>
        {/* 页面头部返回按钮 */}
        <View className='head_icon'>
          <Text>星座配对</Text>
          {/* <Image
            onClick={() => {
              Taro.navigateBack({
                delta: 1
              })
            }}
            className='icon_img'
            src={IMG_URL + 'pair-right-icon.png'}
          /> */}
        </View>
        {/* 上部透明盒子 */}
        <View className='xz_title'>
          {/* 速配星座 */}
          <View className='love_box'>
            <View className='love_left love_one'>

              <Picker mode='selector'
                value={this.search(selector_constellation_man,selectorCheckedMan)}
                range={selector_constellation_man}
                onChange={this.onChangeMan}>
                <Image
                  className='pd_img picker'
                  src={IMG_URL + `${selectorCheckedMan.replace('男', '座')}-1.png`}
                />
                <View className='xz_name picker'>
                  {selectorCheckedMan}
                  <Image
                    className='qh_img'
                    src={IMG_URL + 'pair-right-icon.png'}
                  />
                </View>
              </Picker>


            </View>
            <View className='love_left love_one'>

              <Picker mode='selector'
                value={this.search(selector_constellation_woman,selectorCheckedWoman)}
                range={selector_constellation_woman}
                onChange={this.onChangeWoman}>
                <Image
                  className='pd_img picker'
                  src={IMG_URL + `${selectorCheckedWoman.replace(/(.*)女/, '$1座')}-1.png`}

                />
                <View className='picker xz_name'>
                  {selectorCheckedWoman}
                  <Image
                    className='qh_img'
                    src={IMG_URL + 'pair-right-icon.png'}
                  />
                </View>
              </Picker>

            </View>

            {/* 中间小心心 */}
            <View
              onClick={() => {

              }}
              className='love_mid'>
              <Image
                className='ax_img'
                src={IMG_URL + `aixin.png`}
              />
            </View>
          </View>

        </View>
        {/* 底部白色盒子 */}
        <View className='bot_box'>
          <View className='pd_h1'>{love_data.jieguo}</View>
          <View className='pd_span'>
            {selectorCheckedMan}  VS  {selectorCheckedWoman}
          </View>
          <View className='line'></View>

          <View className='stars_box'>
            <View className='star_box'>
              <Text className='star_name'>配对指数</Text>
              <AtRate size='15' value={love_data.zhishu / 20} />
            </View>
            <View className='star_box'>
              <Text className='star_name'>相悦指数</Text>
              <AtRate size='15' value={love_data.xiangyue / 20} />
            </View>
            <View className='star_box'>
              <Text className='star_name'>长久指数</Text>
              <AtRate size='15' value={love_data.tcdj / 20} />
            </View>
            <View className='star_box'>
              <Text className='star_name'>配对指数</Text>
              <Text style={{ color: '#735AFD' }}>{love_data.bizhong}</Text>
            </View>
          </View>

          <View className='line'></View>

          <View className='out_out'>

            {/* 具体分析 */}
            <View className='duanluo'>
              <View className='dl_title'>
                <Image
                  className='ys_img'
                  src={IMG_URL + 'yunshi.png'}
                />
                <Text className='dl_h2'>恋爱建议:</Text>
              </View>
              <View className='dl_p'>
                {love_data.lianai}
              </View>
            </View>
            <View className='line'></View>
            <View className='duanluo'>
              <View className='dl_title'>
                <Image
                  className='ys_img'
                  src={IMG_URL + 'yunshi.png'}
                />
                <Text className='dl_h2'>配对建议:</Text>
              </View>
              <View className='dl_p'>
                {love_data.zhuyi}
              </View>
            </View>
            {/* <View className='line'></View> */}

          </View>

        </View>
        {/* 星座配对弹框 */}

      </View>
    )
  }
}
