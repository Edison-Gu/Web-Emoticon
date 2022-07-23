/*
 * @Descripttion: 表情卡片组件
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:56:39
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:42:43
 */
import React, { Component } from "react"
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import { PAGE_KEY } from '@/constants'
import { randomMsgText } from '@/utils'
import { getPageUrl } from '@/utils/jumpLink'
import { Card, Tooltip, message } from 'antd'
import { LikeOutlined, DownloadOutlined } from '@ant-design/icons'
interface Props {
  imgItem: any,
  actions?:  Array<any>
}

interface State {
  actionsComponent: any
}
class EmojiCard extends Component<Props, State> {
  static defaultProps = {
    actions: ['like', 'download']
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      actionsComponent: {
        like: <Tooltip placement="top" key="like" title="点赞">
                <LikeOutlined onClick = { () => this.actionClick('like') }  />
              </Tooltip>,
        download: <Tooltip placement="top" key="download" title="下载表情">
                    <DownloadOutlined onClick = { () => this.actionClick('download') } />
                  </Tooltip>
      }
    }
  }
  actionClick(type: string) {
    const { imgItem: { imgDataOriginal } } = this.props
    switch (type) {
      case 'like':
        message.success(randomMsgText())
        break;
      case 'download':
        window.open(imgDataOriginal)
      default:
        break;
    }
  }
  render(): React.ReactNode {
    const { actionsComponent } = this.state
    const { imgItem: { imgTitle, imgAlt, imgDes, imgDataOriginal, id } } = this.props
    const { Meta } = Card
    const actions = this.props.actions?.map(item => actionsComponent[item] )
    return (
      <div className={Styles['img-card-container']}>
        <Card
          className={Styles['card-container']}
          bodyStyle={{ padding: 0 }}
          actions={actions}
        >
          <a href={ getPageUrl({ id, key: PAGE_KEY.EMOJI_DETAIL })}>
            <ImageNext
              className={Styles['img-item']}
              src={imgDataOriginal}
              alt={imgAlt}
              title={imgTitle}
              width={300}
              height={300}
            />
          </a>
          <Meta className={Styles['card-meta']} description={imgDes}/>
        </Card>
      </div>
    )
  }
}

export default EmojiCard