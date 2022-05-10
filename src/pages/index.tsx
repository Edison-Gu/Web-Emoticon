import type { NextPage, GetServerSideProps } from 'next'
import Styles from '../styles/Home.module.scss'
import { fetchNewestList } from '@/api'
import MainContainer from '@/components/common/MainContainer'
import EmotionCard from '@/components/common/EmotionCard'
import { Card, Row, Col } from 'antd'
interface Props {
  newestList: Array<Object>
}

const Home: NextPage<Props> = (props) => {
  const { newestList } = props
  return (
    <div className={Styles.container}>
      <MainContainer>
        <div className="left-content">
          <Card className="card-container" title="热门表情包" extra={<a href="#">更多</a>}>
            <Row gutter={[16, 16]}>
              {
                newestList.map((item, index) => (
                  <Col className="aaa" key={index} span={6}>
                    <EmotionCard imgItem={item}/>
                  </Col>
                ))
              }
            </Row>
          </Card>
        </div>
        {/* <div className="right-content">
          右边内容
        </div> */}
      </MainContainer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let newestList = []
  const { code, data } = await fetchNewestList({})
  if (code === 1) {
    newestList = data
  }
  return { props: { newestList } }
}

export default Home
