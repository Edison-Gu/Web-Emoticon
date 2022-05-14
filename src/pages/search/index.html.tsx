/*
 * @Descripttion: 模糊搜索详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 10:46:01
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { Card, Row, Col, Pagination } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmojiCard from '@/components/common/EmojiCard'
import EmotionCard from '@/components/common/EmotionCard'
import { fetchSearchKeyword } from '@/api'
import { getPageUrl } from '@/utils/jumpLink'
interface Props {
  pageList: any,
  total: number,
  keyword: string,
  tabActive: string,
  pageNo: number
}

interface State {
  tabActive: string,
  tabList: Array<any>
}

class Emoji extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabActive: 'emoji',
      tabList: [
        {
          key: 'emoji',
          tab: '表情'
        },
        {
          key: 'emoticon',
          tab: '表情包'
        },
      ]
    }
  }
  pageChange(pageNo: number, pageSize: number) {
    const { tabActive, keyword } = this.props
    const url = getPageUrl({ type: 'searchPage', params: { pageNo, pageSize, keyword, tabActive } })
    window.location.href = url
  }
  onTabChange(key: string) {
    const { keyword } = this.props
    const url = getPageUrl({ type: 'searchPage', params: { keyword, tabActive: key } })
    window.location.href = url
  }
  
  render(): React.ReactNode {
    const { pageList, total, tabActive, pageNo } = this.props
    const { tabList } = this.state
    return(
      <MainContainer>
        <div className='left-content'>
          <Card
            className="card-container"
            activeTabKey={tabActive}
            tabList={tabList}
            onTabChange={key => this.onTabChange(key)}>
            <Row gutter={[16, 16]}>
                {
                  pageList.map((item: any, index: number) => (
                    <Col key={index} span={6}>
                      {
                        tabActive === 'emoji' ? <EmojiCard imgItem={item}/> : <EmotionCard imgItem={item}/>
                      }
                    </Col>
                  ))
                }
              </Row>
            <Pagination
              className={Styles.pagination}
              showQuickJumper
              pageSizeOptions = {[15, 30, 45, 60]}
              defaultPageSize= {15}
              defaultCurrent={pageNo}
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
  console.log('----ctx', ctx.query)
  let pageList = []
  const { pageNo = 1, pageSize = 15, keyword = '', tabActive = 'emoji' } = ctx.query
  const { code, data, total } = await fetchSearchKeyword({
    pageNo,
    pageSize,
    keyword,
    type: tabActive
  })
  if (code === 1) {
    pageList = data
  }
  return { props: { pageList, total, keyword, tabActive, pageNo } }
}


export default Emoji