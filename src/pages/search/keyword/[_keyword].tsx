/*
 * @Author: EdisonGu
 * @Date: 2022-07-22 23:36:00
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:56:00
 * @Descripttion: 模糊搜索详情页
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
    const { tabList } = this.state
    const pageSizeOptions = tabType === PAGE_KEY.EMOJI_DETAIL ? [15, 30, 45, 60] : [12, 24, 36, 48]
    const defaultPageSize = tabType === PAGE_KEY.EMOJI_DETAIL ? 15 : 12
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
              ? <ImgWaterfall imgList={pageList} id={pageNo} columnCount={5}/>
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
              pageSizeOptions = {pageSizeOptions}
              defaultPageSize= {defaultPageSize}
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  let pageList = []
  const _keyword = ctx.params._keyword.replace('.html','') || ''
  const { pageNo = 1, pageSize, tabType = PAGE_KEY.EMOJI_DETAIL } = ctx.query
  const { code, data, total } = await fetchSearchKeyword({
    pageNo,
    pageSize: pageSize ? pageSize : tabType === PAGE_KEY.EMOJI_DETAIL ? 15 : 12,
    keyword: _keyword,
    type: tabType === PAGE_KEY.EMOJI_DETAIL ? 'emoji' : 'emoticon'
  })
  if (code === 1) {
    pageList = data
  }
  return { props: { pageList, total, keyword: _keyword, tabType, pageNo } }
}


export default Emoji