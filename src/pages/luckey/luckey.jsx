import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
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
    luckey_data: {},//星座运势
    type: 'today'//today/tomorrow/week/month/year
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
        constellation_sign: res.data.data.constellation_sign
      })
    })
    this.fortune('today')
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  fortune = (type) => {
    let _this = this
    const { cons_name } = this.state
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
          luckey_data: res.data.data
        })
      })
    })

  }

  render() {
    const { constellation_sign, cons_name, luckey_data, type } = this.state
    return (
      <View
        style={{ backgroundImage: `url(${IMG_URL}star-bg.png)` }}
        className='luckey'>
        {/* 页面头部返回按钮 */}
        <View className='head_icon'>
          <Image
          style={{opacity:'0'}}
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
            <Text>2.19-3.20</Text>
            <Text className='xc_tag'>{cons_name}</Text>
          </View>
        </View>
        {/* 底部白色盒子 */}
        <View className='bot_box'>
          <Text className='date_tag'>{rq}</Text>
          {/* 星座信息 */}
          <View className='xz_info_box'>
            <Image
              className='tx_img'
              src={IMG_URL + 'baiyang-1.png'}
            />
            <View className='box_right'>
              <View className='xz_h2'>
                <Text>{cons_name}</Text>
              </View>
              <View className='xz_p'>
                {constellation_sign[cons_name]||'暂无内容'}
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
            </View>

          }
        </View>
      </View>
    )
  }
}
