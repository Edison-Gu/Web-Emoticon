/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:55:22
 */
import React, { Component } from 'react'
import { getPageUrl } from '@/utils/jumpLink'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import { Image, Card, Tooltip, message } from 'antd'
import { LikeOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons'

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
                <EyeOutlined onClick={() => this.actionClick('eyes')} />
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
        message.success('老板点得好呀~')
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
    const { imgItem: { imgList = [], title, count, _id } } = this.props
    const homeIndex = Math.floor(Math.random() * imgList.length)
    const homeImg = imgList[homeIndex] || imgList[0]
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
          <a href={getPageUrl({id: _id})}>
            <ImageNext
              className={Styles['img-item']}
              src={homeImg.imgDataOriginal}
              alt={title}
              title={title}
              width={300}
              height={300}
            />
          </a>
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
