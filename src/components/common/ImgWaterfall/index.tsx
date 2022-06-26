import React, { Component } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { getPageUrl } from '@/utils/jumpLink'
import { DEFAULT_IMG } from '@/constants'
import {  Image } from 'antd'
import Waterfall from '@/components/Waterfall'

interface Iprops {
  imgList: any,
  waterfallConfig: {
    columnWidth: number,
    columnCount: number,
    columnGap: number,
    rowGap: number,
    minHeight?: string
  },
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
  // 每次props改变重新绘制dom
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
    const { imgList, waterfallConfig } = this.props
    const htmlContent = (
      imgList.map((item:any, index:number) => (
        <li className={Styles['waterfall-li']} key={index}>
          <Link href={getPageUrl({id: item.id, type: 'emoji'})}>
            <a title={item.imgTitle} >
              <div className={Styles['waterfall-img-item']}>
                <Image
                  key={index}
                  width={waterfallConfig.columnWidth}
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
    const { id, waterfallConfig } = this.props
    return (
      <div className={Styles['waterfall-container']} style={{minHeight: waterfallConfig.minHeight}}>
        {
          isReload ?
            <Waterfall
              el={`#waterfall${id}`}
              columnWidth={waterfallConfig.columnWidth}
              columnCount={waterfallConfig.columnCount}
              columnGap={waterfallConfig.columnGap}
              rowGap={waterfallConfig.rowGap}
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