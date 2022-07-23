/*
 * @Descripttion: 模糊搜索详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-20 00:04:40
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { PAGE_KEY } from '@/constants'
import { fetchSearchKeyword } from '@/api'
import { Card, Row, Col, Pagination } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmotionCard from '@/components/common/EmotionCard'
import ImgWaterfall from '@/components/common/ImgWaterfall'
interface Props {
  pageList: any,
  total: number,
  keyword: string,
  tabType: string,
  pageNo: number
}

interface State {
  tabType: string,
  tabList: Array<any>
}

class Emoji extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabType: PAGE_KEY.EMOJI_DETAIL,
      tabList: [
        {
          key: PAGE_KEY.EMOJI_DETAIL,
          tab: '表情'
        },
        {
          key: PAGE_KEY.EMOTICON_DETAIL,
          tab: '表情包'
        },
      ]
    }
  }
  pageChange(pageNo: number, pageSize: number) {
    const { tabType, keyword } = this.props
    goRouter({ key: PAGE_KEY.SEARCH_KEYWORD, query: { pageNo, pageSize, keyword, tabType } })
    // window.location.href = url
  }
  onTabChange(key: string) {
    const { keyword } = this.props
    goRouter({ key: PAGE_KEY.SEARCH_KEYWORD, query: { keyword, tabType: key } })
    // window.location.href = url
  }


  
  render(): React.ReactNode {
    const { pageList, total, tabType, pageNo } = this.props
    console.log('----tabType', tabType)
    const { tabList } = this.state
    return(
      <MainContainer>
        <div className='left-content'>
          <Card
            className="card-container"
            activeTabKey={tabType}
            tabList={tabList}
            onTabChange={key => this.onTabChange(key)}>
            {
              tabType === PAGE_KEY.EMOJI_DETAIL
              ? <ImgWaterfall imgList={pageList} id={pageNo}/>
              : <Row gutter={[16, 16]}>
                {
                  pageList.map((item: any, index: number) => (
                    <Col key={index} span={6}>
                      <EmotionCard imgItem={item}/>
                    </Col>
                  ))
                }
              </Row>
            }
            <Pagination
              className={Styles.pagination}
              showQuickJumper
              pageSizeOptions = {[16, 32, 48, 64]}
              defaultPageSize= {16}
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
  let pageList = []
  const { pageNo = 1, pageSize = 16, keyword = '', tabType = PAGE_KEY.EMOJI_DETAIL } = ctx.query
  const { code, data, total } = await fetchSearchKeyword({
    pageNo,
    pageSize,
    keyword,
    type: tabType === PAGE_KEY.EMOJI_DETAIL ? 'emoji' : 'emoticon'
  })
  if (code === 1) {
    pageList = data
  }
  return { props: { pageList, total, keyword, tabType, pageNo } }
}


export default Emoji