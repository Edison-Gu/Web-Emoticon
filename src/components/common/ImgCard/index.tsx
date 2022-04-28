/*
 * @Descripttion: 卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-28 20:01:46
 */
import React, { Component, useState } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import { Image, Card, Tooltip, Avatar } from 'antd'
import { LikeOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons'

interface State {
  visible: boolean
}
interface Props {
  limit: number,
  // imgItem: object,
  imgItem: any
}
export default class ImgCard extends Component<Props, State> {
  static defaultProps = {
    limit: 4
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  setVisible(visible: boolean){
    this.setState({ visible })
  }
  render() {
    const { imgItem: { imgList, title, count } } = this.props
    const homeImg = imgList[0]
    const { visible } = this.state
    const { Meta } = Card
    return (
      <div className={`${Styles['img-card-container']}`}>
        <Card
          className={Styles['card-container']}
          bodyStyle={{ padding: 0 }}
          actions={[
            <Tooltip placement="top" key="like" title="点赞">
              <LikeOutlined key="like" />
            </Tooltip>,
            <Tooltip placement="top" key="eyes" title="预览">
              <EyeOutlined onClick={() => this.setVisible(true)} />
            </Tooltip>,
            <Tooltip placement="top" key="Download" title="下载表情包">
              <DownloadOutlined />
            </Tooltip>,
          ]}>
          <ImageNext
            className={Styles['img-item']}
            src={homeImg.imgDataOriginal}
            alt={title}
            title={title}
            width={260}
            height={260}
          />
          <Meta className={Styles['card-meta']} description={`${title}${count}张`}/>
          {/* <p className={Styles.description}>{title}{count}张</p> */}
        </Card>
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => this.setVisible(vis) }}>
            {
              imgList.map((item, index) => (
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
