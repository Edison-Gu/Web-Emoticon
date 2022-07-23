/*
 * @Author: EdisonGu
 * @Date: 2022-06-26 00:06:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 17:56:25
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Link from 'next/link'
import Styles from './index.module.scss'
import { PAGE_KEY } from '@/constants'
import { getPageUrl } from '@/utils/jumpLink'
import { DEFAULT_IMG } from '@/constants'
import { Image } from 'antd'
import Waterfall from '@/components/Waterfall'

interface Iprops {
  id: any // 用于每次重绘dom，必须传，否则组件渲染会有问题，待优化
  imgList: any,
  columnWidth?: number | any,
  columnCount?: number | any,
  columnGap?: number | any,
  rowGap?: number | any,
  minHeight?: string
}

interface Istate {
  isReload: boolean,
  columnWidth: number
}

class ImgWaterfall extends Component<Iprops, Istate> {
  static defaultProps = {
    id: 'waterfall-default',
    columnWidth: 240,
    columnCount: 4,
    columnGap: 12,
    rowGap: 12,
    minHeight: '240px'
  }
  private containerRef: React.RefObject<HTMLDivElement>;
  constructor(props: Iprops) {
    super(props)
    this.state = {
      isReload: true,
      columnWidth: 0
    }
    this.containerRef = React.createRef()
  }
  componentDidMount() {
    this.handleConfig()
  }
  // 每次props改变重新绘制dom
  componentDidUpdate(prevProps: any) {
    // 典型用法（不要忘记比较 props）：
    if (this.props.id !== prevProps.id) {
      this.handleConfig()
      this.setState({ isReload: false })
      setTimeout(() => {
        this.setState({ isReload: true })
      })
    }
  }
  imgContent() {
    const { imgList } = this.props
    const { columnWidth } = this.state
    const htmlContent = (
      imgList.map((item:any, index:number) => (
        <li className={Styles['waterfall-li']} key={index}>
          <Link href={getPageUrl({id: item.id, key: PAGE_KEY.EMOJI_DETAIL})}>
            <a title={item.imgTitle} >
              <div className={Styles['waterfall-img-item']}>
                <Image
                  key={index}
                  width={columnWidth}
                  preview={false}
                  title={item.imgTitle}
                  src={item.imgDataOriginal}
                  alt={item.imgDes}
                  fallback={DEFAULT_IMG}
                  loading="lazy"
                />
              </div>
            </a>
          </Link>
        </li>
      ))
    )
    return htmlContent
  }
  handleConfig() {
    const clientWidth = this.containerRef.current?.clientWidth || 1002 // 左边内容 - padding - 左右border
    const { columnCount, columnGap  } = this.props
    const cWidth = (clientWidth - (columnGap * (columnCount - 1))) / columnCount
    this.setState({columnWidth: cWidth})
  }
  render(): React.ReactNode {
    const { isReload, columnWidth } = this.state
    const { id, columnCount, columnGap, rowGap, minHeight } = this.props
    return (
      <div className={Styles['waterfall-container']} ref={this.containerRef} style={{minHeight}}>
        {
          isReload && columnWidth ?
            <Waterfall
              el={`#waterfall${id}`}
              columnWidth={columnWidth}
              columnCount={columnCount}
              columnGap={columnGap}
              rowGap={rowGap}
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