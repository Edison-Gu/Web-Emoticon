/*
 * @Descripttion: 表情包首页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 18:00:04
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { Card, Row, Col, Pagination } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmotionCard from '@/components/common/EmotionCard'
import { fetchEmoticonList } from '@/api'
import { getPageUrl, goRouter } from '@/utils/jumpLink'
interface Props {
  emoticonList: any,
  total: number,
  randomPageNo: number
}

interface State {

}

class Emoji extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  pageChange(pageNo: number, pageSize: number) {
    // const url = getPageUrl({ type: 'emoticonPage', query: { pageNo, pageSize } })
    goRouter({ type: 'emoticonPage', query: { pageNo, pageSize } })
    // window.location.href = url
  }
  render(): React.ReactNode {
    const { emoticonList, total, randomPageNo } = this.props
    return(
      <MainContainer>
        <div className='left-content'>
          <Card className="card-container" title="表情包组图大全" extra={<a href={getPageUrl({type: 'emoticonPage', query: { random: '100' }})}>随机浏览</a>}>
            <Row gutter={[16, 16]}>
              {
                emoticonList.map((item: any, index: number) => (
                  <Col key={index} span={6}>
                    <EmotionCard imgItem={item}/>
                  </Col>
                ))
              }
            </Row>
            <Pagination
              className={Styles.pagination}
              showQuickJumper
              pageSizeOptions = {[12, 24, 36, 48]}
              defaultPageSize= {12}
              defaultCurrent={randomPageNo}
              total={total}
              onChange={(pageNo, pageSize) => this.pageChange(pageNo, pageSize)} />
            {/* <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} /> */}
          </Card>
        </div>
      </MainContainer>
    )
  }
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let emoticonList = []
  const { pageNo = 1, pageSize = 12, random = '' } = ctx.query
  const { code, data, total, randomPageNo } = await fetchEmoticonList({
    pageNo,
    pageSize,
    random
  })
  if (code === 1) {
    emoticonList = data
  }
  return { props: { emoticonList, total, randomPageNo: pageNo > 1 ? pageNo : randomPageNo } }
}


export default Emoji