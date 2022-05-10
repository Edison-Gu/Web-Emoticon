/*
 * @Descripttion: 表情包详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 10:46:01
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import { Card, Row, Col } from 'antd'
import { fetchEmoticonDetail } from '@/api'
import MainContainer from '@/components/common/MainContainer'
import EmojiCard from '@/components/common/EmojiCard'
import EmojiFooter from '@/components/common/EmojiFooter'

interface Props {
  emoticonInfo: any,
  nextInfo: any,
  preInfo: any,
  htmlTitle: string
}

interface State {

}

class Emoticon extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { emoticonInfo: { title, imgList = [] }, nextInfo, preInfo } = this.props
    return (
      <div className="emoticon-container">
        <MainContainer>
          <div className="left-content">
            <Card className="card-container" title={title}>
              <Row gutter={[16, 16]}>
                {
                  imgList.map((item: any, index: number) => (
                    <Col key={index} span={6}>
                      <EmojiCard imgItem={item} />
                    </Col>
                  ))
                }
              </Row>
              <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} />
            </Card>
          </div>
          {/* <div className="right-content">右边内容</div> */}
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