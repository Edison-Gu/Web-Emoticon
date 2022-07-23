/*
 * @Author: EdisonGu
 * @Date: 2022-06-09 22:38:29
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:08:52
 * @Descripttion: 
 */
import type { NextPage, GetServerSideProps } from 'next'
import Styles from '../styles/Home.module.scss'
import { PAGE_KEY } from '@/constants'
import { getPageUrl } from '@/utils/jumpLink'
import { fetchNewestList } from '@/api'
import { Card, Row, Col } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmotionCard from '@/components/common/EmotionCard'

interface Props {
  newestList: Array<Object>,
  hotList: Array<Object>
}

const Home: NextPage<Props> = (props) => {
  const { newestList } = props
  return (
    <div className={Styles.container}>
      <MainContainer>
        <div className="left-content">
          <Card className="card-container" title="热门表情包" extra={<a href={getPageUrl({key: PAGE_KEY.EMOTICON_INDEX})}>更多</a>}>
            <Row gutter={[12, 24]}>
              {
                newestList.map((item, index) => (
                  <Col key={index} span={6}>
                    <EmotionCard imgItem={item}/>
                  </Col>
                ))
              }
            </Row>
          </Card>
          {/* <Card className="card-container" title="热门表情">
            <Row gutter={[16, 16]}>
              {
                hotList.map((item, index) => (
                  <Col className="aaa" key={index} span={6}>
                    <EmotionCard imgItem={item}/>
                  </Col>
                ))
              }
            </Row>
          </Card> */}
        </div>
      </MainContainer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let newestList = []
  const { code, data } = await fetchNewestList({})
  if (code === 1) {
    // newestList = data todo
    newestList = data.map((item: any) => {
      item.imgList = item.imgList.map((it:any) => ({
        ...it,
        // imgDataOriginal: 'https://upload.chongnengjihua.com/production/2022/6/5/18/dcce2a067c6ca_1654426061876.jpg'
      }))
      return item
    })
  }
  return { props: { newestList } }
}

export default Home
