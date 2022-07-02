/*
 * @Descripttion: 表情包详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 23:11:21
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { fetchEmoticonDetail } from '@/api'
import { Card, Row, Col, Image } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmojiFooter from '@/components/common/EmojiFooter'
import ImgWaterfall from '@/components/common/ImgWaterfall'
import ImageNext from 'next/image'

interface Props {
  emoticonInfo: any,
  nextInfo: any,
  preInfo: any,
  htmlTitle: string
}

interface State {
  // isClient: boolean
}

class Emoticon extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { emoticonInfo: { title, imgList = [], id }, nextInfo, preInfo } = this.props
    const waterfallConfig = {
      columnWidth: 240,
      columnCount: 4,
      columnGap: 24,
      rowGap: 24,
      minHeight: '240px'
    }
    return (
      <div className={Styles['emoticon-container']}>
        <MainContainer>
          <div className="left-content">
            <Card className="card-container" title={title}>
              <div className={Styles['waterfall-container']}>
                {
                  imgList.map((item, index) => (
                    <ImageNext
                      key={index}
                      className={Styles['next-img']}
                      src={item.imgDataOriginal}
                      title={item.imgDataOriginal}
                      width="400"
                      height="300"
                    />
                    // <img key={index} src={item.imgDataOriginal} loading="lazy" alt="" />
                  ))
                }
                {/* <ImgWaterfall imgList={imgList} id={id} waterfallConfig={waterfallConfig} /> */}
              </div>
              <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} type="emoticon" />
            </Card>
          </div>
        </MainContainer>
      </div>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id = context.params._id.replace('.html','')
  let emoticonInfo = {
    title: ''
  }
  let nextInfo = {}
  let preInfo ={}
  const { code, data } = await fetchEmoticonDetail({id})
  if (code === 1) {
    const { selfNode, nextNode, preNode } = data
    emoticonInfo = selfNode
    nextInfo = nextNode
    preInfo = preNode
  }
  return { props: { emoticonInfo, nextInfo, preInfo, htmlTitle: emoticonInfo.title } }
}

export default Emoticon