import { Component } from 'react'
import { View, Text, Image, Picker } from '@tarojs/components'
import { AtProgress, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import { Current } from '@tarojs/taro'
import getBaseUrl from '../../api/baseUrl'
import { getConst, fortune } from '../../api/servers'
import "taro-ui/dist/style/components/button.scss" // 按需引入

import './luckey.scss'
const IMG_URL = getBaseUrl() + 'images/starLuckey/'
let date = new Date();
//年
let year = date.getFullYear();
//月
let month = date.getMonth() + 1;
//日
let day = date.getDate();
//时
let hh = date.getHours();
//分
let mm = date.getMinutes();
//秒
let ss = date.getSeconds();
let rq = year + "年" + month + "月" + day + "日";
export default class Luckey extends Component {
  state = {
    constellation_sign: {
      '双子座': ' 追求新鲜感，有点儿小聪明，却耐心不足',
    },//星座分析
    cons_name: decodeURIComponent(Current.router.params.cons_name),//星座名字
    constellation_time: { '双子座': "5.22-6.21" },
    selector_constellation_man: ['白羊男', '金牛男', '双子男', '巨蟹男', '狮子男', '处女男', '天秤男', '天蝎男', '射手男', '摩羯男', '水瓶男', '双鱼男'],
    selector_constellation_woman: ['白羊女', '金牛女', '双子女', '巨蟹女', '狮子女', '处女女', '天秤女', '天蝎女', '射手女', '摩羯女', '水瓶女', '双鱼女'],
    luckey_data: {},//星座运势
    type: 'today',//today/tomorrow/week/month/year
    // selector: ['白羊座', '中国', '巴西', '日本'],
    selectorCheckedMan: '狮子男',
    selectorCheckedWoman: '白羊女',
  }
  componentWillMount() {
    console.log()
  }

  componentDidMount() {
    let _this = this
    const { cons_name } = this.state
    getConst().then(res => {
      console.log(res.data.data)
      this.setState({
        constellation_sign: res.data.data.constellation_sign,
        constellation_time: res.data.data.constellation_time,
        // selector_constellation_man:res.data.data.constellation,
        // selector_constellation_woman: res.data.data.constellation,
      })
    })
    this.fortune('today')
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  fortune = (type) => {
    let _this = this
    const { cons_name, selectorCheckedMan, selectorCheckedWoman } = this.state
    this.setState({
      type
    }, () => {
      fortune(
        {
          cons_name: cons_name,
          type: type
        }
      ).then(res => {
        console.log(res.data.data)
        _this.setState({
          luckey_data: res.data.data,
          selectorCheckedMan: res.data.data.name && res.data.data.name.replace('座', '男') || selectorCheckedMan,
          selectorCheckedWoman: res.data.data.QFriend && res.data.data.QFriend.replace('座', '女') || selectorCheckedWoman,
        })
      })
    })

  }
  onChangeWoman = e => {
    this.setState({
      // selectorCheckedMan: this.state.selector_constellation_man[e.detail.value],
      selectorCheckedWoman: this.state.selector_constellation_woman[e.detail.value],
    })
  }
  onChangeMan = e => {
    console.log(e)
    this.setState({
      selectorCheckedMan: this.state.selector_constellation_man[e.detail.value],
    })
  }
  render() {
    const { selectorCheckedWoman, selectorCheckedMan, constellation_sign, cons_name, luckey_data, type, constellation_time, selector_constellation_man, selector_constellation_woman } = this.state
    return (
      <View
        style={{ backgroundImage: `url(${IMG_URL}star-bg.png)` }}
        className='luckey'>
        {/* 页面头部返回按钮 */}
        <View className='head_icon'>
          <Image
            style={{ opacity: '0' }}
            onClick={() => {
              Taro.navigateBack({
                delta: 1
              })
            }}
            className='icon_img'
            src={IMG_URL + 'back.png'}
          />
          <Image
            onClick={() => {
              Taro.navigateBack({
                delta: 1
              })
            }}
            className='icon_img'
            src={IMG_URL + 'pair-right-icon.png'}
          />
        </View>
        {/* 上部透明盒子 */}
        <View className='xz_title'>
          <View className='xz_h1'>PISCES</View>
          <View className='xz_p'>
            <Text>{constellation_time[cons_name]}</Text>
            <Text className='xc_tag'>{cons_name}</Text>
          </View>
        </View>
        {/* 底部白色盒子 */}
        <View className='bot_box'>
          <Text className='date_tag'>{luckey_data.datetime || luckey_data.date || rq}</Text>
          {/* 星座信息 */}
          <View className='xz_info_box'>
            <Image
              className='tx_img'
              src={IMG_URL + `${cons_name}-2.png`}
            />
            <View className='box_right'>
              <View className='xz_h2'>
                <Text>{cons_name}</Text>
              </View>
              <View className='xz_p'>
                {constellation_sign[cons_name] || '暂无内容'}
              </View>
            </View>
          </View>
          {/* 选项标签 */}
          <View className='choose_tag_box'>
            <View
              onClick={() => {
                this.fortune('today')
              }}
              className={type === 'today' && 'canshu active' || 'canshu'}>今日</View>
            <View
              onClick={() => {
                this.fortune('tomorrow')
              }}
              className={type === 'tomorrow' && 'canshu active' || 'canshu'}>明日</View>
            <View
              onClick={() => {
                this.fortune('week')
              }}
              className={type === 'week' && 'canshu active' || 'canshu'}>本周</View>
            <View
              onClick={() => {
                this.fortune('month')
              }}
              className={type === 'month' && 'canshu active' || 'canshu'}>本月</View>
            <View
              onClick={() => {
                this.fortune('year')
              }}
              className={type === 'year' && 'canshu active' || 'canshu'}>本年</View>
          </View>
          <View className='line'></View>
          {/* 星座运势 日 周 月 年*/}
          {(type === 'today' || type === 'tomorrow') &&
            <View className='out_out'>
              <View className='xz_fx_box'>
                <View className='zhishu_box'>
                  {/* 分数 */}
                  <View className='fenshu_box'>
                    <Text className='num'>{luckey_data.all || 0}</Text>
                    <Text className='zs_text'>综合运势指数</Text>
                  </View>

                </View>
                {/* 进度条 */}
                <View className='jindu_box'>
                  <View className='fenshu'>
                    <Text className='fs_text'>爱情</Text>
                    <View className='box_out'>
                      <View
                        style={{ width: `${luckey_data.love || 0}%` }}
                        className='box_in'></View>
                    </View>
                    <Text className={'fs_text'}>{luckey_data.love}</Text>
                  </View>
                  <View className='fenshu'>
                    <Text className='fs_text'>工作</Text>
                    <View className='box_out'>
                      <View
                        style={{ width: `${luckey_data.work || 0}%` }}

                        className='box_in'></View>
                    </View>
                    <Text className={'fs_text'}>{luckey_data.work}</Text>
                  </View>

                  <View className='fenshu'>
                    <Text className='fs_text'>财运</Text>
                    <View className='box_out'>
                      <View
                        style={{ width: `${luckey_data.money || 0}%` }}
                        className='box_in'></View>
                    </View>
                    <Text className={'fs_text'}>{luckey_data.money}</Text>
                  </View>
                  <View className='fenshu'>
                    <Text className='fs_text'>健康</Text>
                    <View className='box_out'>
                      <View
                        style={{ width: `${luckey_data.health || 0}%` }}
                        className='box_in'></View>
                    </View>
                    <Text className={'fs_text'}>{luckey_data.health}</Text>
                  </View>
                </View>

              </View>
              <View className='line'></View>
              {/* 具体分析 */}
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'yunshi.png'}
                  />
                  <Text className='dl_h2'>运势概述:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.summary}
                </View>
              </View>
              <View className='line'></View>
              {/* 幸运-- */}
              <View className='luckey_box'>
                <View className='luckey_someing'>
                  幸运颜色：<Text className='xy_i'>{luckey_data.color}</Text>
                </View>
                <View className='luckey_someing'>
                  幸运数字：<Text className='xy_i'>{luckey_data.number}</Text>
                </View>
                <View className='luckey_someing'>
                  速配星座：<Text className='xy_i'>{luckey_data.QFriend}</Text>
                </View>
              </View>
              <View className='line'></View>

            </View>

          }
          {type === 'week' &&
            <View className='out_out'>

              {/* 具体分析 */}
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'love-icon.png'}
                  />
                  <Text className='dl_h2'>爱情运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.love}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'work-icon.png'}
                  />
                  <Text className='dl_h2'>工作运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.work}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'wealth-icon.png'}
                  />
                  <Text className='dl_h2'>财富运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.money}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'healthy-icon.png'}
                  />
                  <Text className='dl_h2'>健康运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.health}
                </View>
              </View>
              <View className='line'></View>

            </View>
          }

          {type === 'month' &&
            <View className='out_out'>

              {/* 具体分析 */}
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'yunshi.png'}
                  />
                  <Text className='dl_h2'>综合运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.all}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'love-icon.png'}
                  />
                  <Text className='dl_h2'>爱情运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.love}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'work-icon.png'}
                  />
                  <Text className='dl_h2'>工作运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.work}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'wealth-icon.png'}
                  />
                  <Text className='dl_h2'>财富运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.money}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'healthy-icon.png'}
                  />
                  <Text className='dl_h2'>健康运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.health}
                </View>
              </View>
              <View className='line'></View>

            </View>
          }

          {type === 'year' &&
            <View className='out_out'>

              {/* 具体分析 */}
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'yunshi.png'}
                  />
                  <Text className='dl_h2'>{luckey_data.mima&&luckey_data.mima.info&&luckey_data.mima.info||''}</Text>
                </View>
                <View className='dl_p'>
                {luckey_data.mima&&luckey_data.mima.text&&luckey_data.mima.text[0]||''}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'love-icon.png'}
                  />
                  <Text className='dl_h2'>爱情运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.love && luckey_data.love[0] || ''}
                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'work-icon.png'}
                  />
                  <Text className='dl_h2'>工作运势:</Text>
                </View>
                <View className='dl_p'>
                  {/* {luckey_data.work} */}
                  {luckey_data.career && luckey_data.career[0] || ''}

                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'wealth-icon.png'}
                  />
                  <Text className='dl_h2'>财富运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.finance && luckey_data.finance[0] || ''}

                </View>
              </View>
              <View className='line'></View>
              <View className='duanluo'>
                <View className='dl_title'>
                  <Image
                    className='ys_img'
                    src={IMG_URL + 'healthy-icon.png'}
                  />
                  <Text className='dl_h2'>健康运势:</Text>
                </View>
                <View className='dl_p'>
                  {luckey_data.health && luckey_data.health[0] || ''}

                </View>
              </View>
              <View className='line'></View>

            </View>
          }
          {/* 速配星座 */}
          <View className='love_box'>
            <View className='love_left love_one'>
              <Image
                className='pd_img'
                src={IMG_URL + `${selectorCheckedMan.replace('男', '座')}-1.png`}
              />
              <Picker mode='selector'
                // value={}
                range={selector_constellation_man}
                onChange={this.onChangeMan}>
                <Text className='xz_name picker'>
                  {selectorCheckedMan}
                  <Image
                    className='qh_img'
                    src={IMG_URL + 'pair-right-icon.png'}
                  />
                </Text>
              </Picker>


            </View>
            <View className='love_left love_one'>
              <Image
                className='pd_img'
                src={IMG_URL + `${selectorCheckedWoman.replace(/(.*)女/, '$1座')}-1.png`}
              />
              <Picker mode='selector'
                // value={}
                range={selector_constellation_woman}
                onChange={this.onChangeWoman}>
                <Text className='picker xz_name'>
                  {selectorCheckedWoman}
                  <Image
                    className='qh_img'
                    src={IMG_URL + 'pair-right-icon.png'}
                  />
                </Text>
              </Picker>

            </View>

            {/* 中间小心心 */}
            <View
              onClick={() => {
                Taro.navigateTo({
                  url: '/pages/love/love?cons_name=' + encodeURI('狮子座') +
                    '&&men=' + encodeURI(selectorCheckedMan.replace('男', '座')) +
                    '&&women=' + encodeURI(selectorCheckedWoman.replace(/(.*)女/, '$1座'))
                })
              }}
              className='love_mid'>
              <Image
                className='ax_img'
                src={IMG_URL + `aixin.png`}
              />
            </View>
          </View>

        </View>

      </View>
    )
  }
}
