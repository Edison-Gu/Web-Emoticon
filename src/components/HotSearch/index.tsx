/*
 * @Author: EdisonGu
 * @Date: 2022-07-03 21:40:02
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-03 21:48:58
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Card } from 'antd'

interface Iprops {
  hotKeyword: Array<string>
}

interface Istate {
}

class index extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      
    }
  }
  render(): React.ReactNode {
    return (
      <>
        <Card>
          1
        </Card>
      </>
    )
 }
}
export default index