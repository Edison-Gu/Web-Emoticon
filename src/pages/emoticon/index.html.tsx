/*
 * @Descripttion: 表情包首页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 10:46:01
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { Card, Row, Col } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmotionCard from '@/components/common/EmotionCard'
import { fetchEmoticonList } from '@/api'

interface Props {
  emoticonList: any
}

interface State {

}

class Emoji extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render(): React.ReactNode {
    const { emoticonList } = this.props
    console.log('----emoticonList', emoticonList)
    return(
      <MainContainer>
        <div className='left-content'>
          <Card className="card-container" title="表情包大全">
            <Row gutter={[16, 16]}>
              {
                emoticonList.map((item: any, index: number) => (
                  <Col key={index} span={6}>
                    <EmotionCard imgItem={item}/>
                  </Col>
                ))
              }
            </Row>
            {/* <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} /> */}
          </Card>
        </div>
      </MainContainer>
    )
  }
}
export const getServerSideProps: GetServerSideProps = async () => {
  let emoticonList = []
  const { code, data } = await fetchEmoticonList({
    pageNo: 10,
    pageSize: 12
  })
  if (code === 1) {
    emoticonList = data
  }
  return { props: { emoticonList } }
}


export default Emoji