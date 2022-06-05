/*
 * @Descripttion: 图片弹窗组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:55:22
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'

interface Props {
  imgList?: Array<any>
}

class ImgDialog extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { imgList = [] } = this.props
    return (
      <div className={Styles['img-container']}>
        {
          imgList.map((item, index) => ({
             
          }))
        }
      </div>
    )
  }
}

export default ImgDialog