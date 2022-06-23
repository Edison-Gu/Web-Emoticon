/*
 * @Descripttion: 表情包详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-06-23 21:11:45
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import Styles from './index.module.scss'
import { fetchEmoticonDetail } from '@/api'
import { DEFAULT_IMG } from '@/constants'
import { getPageUrl } from '@/utils/jumpLink'
import { Card, Row, Col, Image } from 'antd'
import MainContainer from '@/components/common/MainContainer'
import EmojiCard from '@/components/common/EmojiCard'
import EmojiFooter from '@/components/common/EmojiFooter'
import Waterfall from '@/components/Waterfall'
interface Props {
  emoticonInfo: any,
  nextInfo: any,
  preInfo: any,
  htmlTitle: string
}

interface State {
  isClient: boolean
}

class Emoticon extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isClient: false
    }
  }
  componentDidMount() {
    console.log('----isClient', this.state.isClient)
    this.setState({ isClient: true })
  }

  imgContent() {
    const { emoticonInfo: { title, imgList = [], id } } = this.props
    const htmlContent = (
      imgList.map((item:any, index:number) => (
        <li key={index}>
          <Link href={getPageUrl({id: item.id, type: 'emoji'})}>
            <a title={item.imgTitle} >
              <div className={Styles['img-item']}>
                <Image
                  key={index}
                  width={240}
                  preview={false}
                  title={item.imgTitle}
                  src={item.imgDataOriginal}
                  alt={item.imgDes}
                  fallback={DEFAULT_IMG}
                />
              </div>
            </a>
          </Link>
        </li>
      ))
    )
    return htmlContent
  }

  render() {
    const { isClient } = this.state
    const { emoticonInfo: { title, imgList = [], id }, nextInfo, preInfo } = this.props
    console.log('----isClient', isClient)
    return (
      <div className="emoticon-container">
        <MainContainer>
          <div className="left-content">
            <Card className="card-container" title={title}>
              {
                <Waterfall
                  el={`#waterfall${id}`}
                  columnWidth={240}
                  columnCount={4}
                  columnGap={24}
                  rowGap={24}
                >
                  {
                    this.imgContent()
                  }
                </Waterfall>
              }
              {/* {
                isClient ?
                  <Waterfall
                  el={`#waterfall${id}`}
                  columnWidth={240}
                  columnCount={4}
                  columnGap={24}
                  rowGap={24}
                >
                  {
                    this.imgContent()
                  }
                </Waterfall>
                : this.imgContent()
              } */}
              <EmojiFooter nextInfo={nextInfo} preInfo={preInfo} type="emoticon" />
            </Card>
          </div>
          <div className="right-content">右边内容</div>
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