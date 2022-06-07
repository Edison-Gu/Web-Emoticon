/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-06-07 19:59:18
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import Link from 'next/link'
import { Tooltip, message } from 'antd'
import { LikeOutlined, EyeOutlined, DownloadOutlined, SwapRightOutlined } from '@ant-design/icons'
import { getPageUrl } from '@/utils/jumpLink'
import { randomMsgText } from '@/utils/index'

interface State {
  visible: boolean,
  actionsComponent: any
}
interface Props {
  imgItem: any,
  type?: string, // emotion - 表情包，emoji - 表情
  actions?: Array<any>
}
class EmotionCard extends Component<Props, State> {
  static defaultProps = {
    type: 'emotion',
    // actions: ['like', 'eyes', 'download']
    actions: ['like', 'eyes']
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      visible: false,
      actionsComponent: {
        like: <Tooltip placement="top" key="like" title="点赞">
                <LikeOutlined  onClick={() => this.actionClick('like')} />
              </Tooltip>,
        eyes: <Tooltip placement="top" key="eyes" title="预览">
                <div onClick={() => this.actionClick('eyes')}>
                  预览
                  <SwapRightOutlined />
                  <EyeOutlined />
                </div>
              </Tooltip>
        // download: <Tooltip placement="top" key="download" title={`下载表情${this.props.type === 'emotion' ? '包' : ''}`}>
        //             <DownloadOutlined />
        //           </Tooltip>
      }
    }
  }
  actionClick(type: string) {
    switch (type) {
      case 'like':
        message.success(randomMsgText())
        break;
      case 'eyes':
        this.setVisible(true)
        break;
    
      default:
        break;
    }
    const { imgItem: { imgDataOriginal } } = this.props
    if (type === 'download') {
      window.open(imgDataOriginal)
    }
  }
  setVisible(visible: boolean){
    this.setState({ visible })
  }
  handleStyle({index, type = 'style'}:{index: number, type?: string}) {
    const { imgItem: { imgList = [] } } = this.props
    let style = {
      width: '',
      height: '',
      'margin-bottom': ''
    }
    let width = 240
    let height = 120
    if (imgList.length > 3) {
      switch (index) {
        case 0:
          style.width = '100%'
          style.height = '160px'
          style['margin-bottom'] = '2px'
          width = 240
          height = 160
          break;
        default:
          style.width = `${236 / 3}px`
          style.height = '78px'
          width = 236 / 3 // 中间留2px间距
          height = 78
          break;
      }
    }
    return type === 'style' 
            ? style
            : type === 'width' ? width : height
  }
  render() {
    const { actionsComponent } = this.state
    const { imgItem: { imgList = [], title, count, id } } = this.props
    // const homeIndex = Math.floor(Math.random() * imgList.length)
    const homeImg = imgList[0] || {}
    const { visible } = this.state
    const actions = this.props.actions?.map(item => actionsComponent[item] )
    return (
      <div className={Styles['img-card-container']}>
        <div className={Styles['img-content']}>
          <Link href={getPageUrl({id})}>
            <a className={Styles['img-content-a']}>
              {
                imgList.map((item:any, index:number) => {
                  return index < 4 
                    ? <div style={this.handleStyle({index})} key={index}>
                        <ImageNext
                          className={Styles['img-item']}
                          src={item.imgDataOriginal}
                          alt={item.imgDes}
                          title={item.imgTitle}
                          width={this.handleStyle({index, type: 'width'})}
                          height={this.handleStyle({index, type: 'height'})}
                          quality={10}
                        />
                      </div>
                      : <></>
                })
              }
            </a>
          </Link>
        </div>
        <div>
          按钮
        </div>
      </div>
    )
  }
}

export default EmotionCard
