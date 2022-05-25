/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:55:22
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import Link from 'next/link'
import { Image, Card, Tooltip, message } from 'antd'
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
  render() {
    const { actionsComponent } = this.state
    const { imgItem: { imgList = [], title, count, id } } = this.props
    // const homeIndex = Math.floor(Math.random() * imgList.length)
    const homeImg = imgList[0] || {}
    const { visible } = this.state
    const { Meta } = Card
    const actions = this.props.actions?.map(item => actionsComponent[item] )
    return (
      <div className={Styles['img-card-container']}>
        <Card
          className={Styles['card-container']}
          bodyStyle={{ padding: 0 }}
          actions={actions}
        >
          <Link href={getPageUrl({id})}>
            <a>
              <ImageNext
                className={Styles['img-item']}
                src={homeImg?.imgDataOriginal || 'https://tva1.sinaimg.cn/large/006mowZngy1fuzzqrmtv1g306o05kx2y.gif'}
                alt={title}
                title={title}
                width={300}
                height={300}
              />
            </a>
          </Link>
          <Meta className={Styles['card-meta']} description={`${title}${count}张表情`}/>
        </Card>
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => this.setVisible(vis) }}>
            {
              imgList.map((item: any, index: number) => (
                <Image
                  key={index}
                  src={item.imgDataOriginal}
                  alt={item.imgAlt}
                  title={item.imgTitle}
                />
              ))
            }
          </Image.PreviewGroup>
        </div>
      </div>
    )
  }
}

export default EmotionCard
