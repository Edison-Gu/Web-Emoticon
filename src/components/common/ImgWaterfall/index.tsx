/*
 * @Author: EdisonGu
 * @Date: 2022-06-26 00:06:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-11 20:49:19
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { getPageUrl } from '@/utils/jumpLink'
import { DEFAULT_IMG } from '@/constants'
import { Image } from 'antd'
import ImgFixed from '@/components/common/ImgFixed'
import Waterfall from '@/components/Waterfall'

interface Iprops {
  imgList: any,
  waterfallConfig?: {
    columnWidth: number,
    columnCount: number,
    columnGap: number,
    rowGap: number,
    minHeight?: string
  } | any,
  id: any // 用于每次重绘dom，必须传，否则组件渲染会有问题，待优化
}

interface Istate {
  isReload: boolean
}

class ImgWaterfall extends Component<Iprops, Istate> {
  static defaultProps = {
    id: 'waterfall-default',
    waterfallConfig: {
      columnWidth: 240,
      columnCount: 4,
      columnGap: 12,
      rowGap: 12,
      minHeight: '240px'
    }
  }
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
                  loading="lazy"
                />
                {/* <ImgFixed imgConfig={{
                  src: item.imgDataOriginal,
                  alt: item.imgAlt,
                  title: item.imgTitle
                }} /> */}
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