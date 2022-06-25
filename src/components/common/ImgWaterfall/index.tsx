import React, { Component, ReactNode } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { getPageUrl } from '@/utils/jumpLink'
import { DEFAULT_IMG } from '@/constants'
import { Card, Row, Col, Image } from 'antd'

import Waterfall from '@/components/Waterfall'


interface Iprops {
  imgList: any,
  id?: any
}

interface Istate {
  isReload: boolean
}

class ImgWaterfall extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      isReload: true
    }
  }
  componentDidUpdate(prevProps: any) {
    // 典型用法（不要忘记比较 props）：
    if (this.props.id !== prevProps.id) {
      this.setState({ isReload: false })
      setTimeout(() => {
        this.setState({ isReload: true })
      })
    }
  }
  imgContent() {
    const { imgList } = this.props
    const htmlContent = (
      imgList.map((item:any, index:number) => (
        <li className={Styles['waterfall-li']} key={index}>
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
  render(): React.ReactNode {
    const { isReload } = this.state
    const { id } = this.props
    return (
      <div className={Styles['waterfall-container']}>
        {
          isReload ?
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
        }
      </div>
    )
  }
}

export default ImgWaterfall