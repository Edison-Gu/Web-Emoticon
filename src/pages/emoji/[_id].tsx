/*
 * @Descripttion: 表情详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-03 22:14:26
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { fetchEmojiDetail } from '@/api'
import { Card, Row, Col } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import ImgFixed from '@/components/common/ImgFixed'
import EmojiFooter from '@/components/common/EmojiFooter'
import EmojiCard from '@/components/common/EmojiCard'

interface Props {
  emojiInfo: any,
  nextInfo: any,
  preInfo: any,
  hotList: Array<any>
}

interface State {

}

class Emoji extends Component<Props, State> {
  render(): React.ReactNode {
    const { emojiInfo: { imgTitle, imgAlt, imgDes, imgDataOriginal }, nextInfo, preInfo, hotList } = this.props
    const imgConfig = { src: imgDataOriginal, alt: imgAlt, title: imgTitle }
    return(
      <MainContainer>
        <div className="left-content">
          <Card className="card-container">
            <div className={Styles['emoji-container']}>
              <div className={Styles['img-container']}>
                <ImgFixed imgConfig={imgConfig} />
              </div>
              <p className={Styles.des}>{imgDes}</p>
            </div>
            <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} type="emoji" />
          </Card>
          <Card className="card-container" title="热门表情">
              <Row gutter={[16, 16]}>
                {
                  hotList.map((item: any, index: number) => (
                    <Col key={index} span={6}>
                      <EmojiCard imgItem={item} />
                    </Col>
                  ))
                }
              </Row>
            </Card>
        </div>
      </MainContainer>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id = context.params._id.replace('.html','')
  let emojiInfo = {
    title: '',
    imgTitle: ''
  }
  let nextInfo = {
    title: '',
    imgTitle: ''
  }
  let preInfo ={
    title: '',
    imgTitle: ''
  }
  let hotList = []
  const { code, data } = await fetchEmojiDetail({id})
  if (code === 1) {
    const { selfNode, nextNode, preNode, hot } = data
    emojiInfo = selfNode
    nextInfo = nextNode ? nextNode : nextInfo
    preInfo = preNode ? preNode : preInfo
    hotList = hot
    emojiInfo.title = emojiInfo.imgTitle
    nextInfo.title = nextInfo.imgTitle
    preInfo.title = preInfo.imgTitle
  }
  return { props: { emojiInfo, nextInfo, preInfo, htmlTitle: emojiInfo.title, hotList } }
}

export default Emoji