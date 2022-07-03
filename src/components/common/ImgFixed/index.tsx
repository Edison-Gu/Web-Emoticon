/*
 * @Descripttion: next图片组件，自适应宽度，高度根据图片本身比例来取
 * @Author: EdisonGu
 * @Date: 2022-06-26 14:02:02
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-03 23:16:32
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'

interface Iprops {
  imgConfig: any
}

interface Istate {
}

class ImgFixed extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    const { src, alt, title } = this.props.imgConfig
    return (
      <div className={Styles['next-img-container']}>
        <ImageNext
          className={Styles['next-img']}
          src={src}
          alt={alt}
          title={title}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    )
 }
}
export default ImgFixed
