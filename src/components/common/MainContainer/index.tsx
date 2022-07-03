/*
 * @Descripttion: 主容器组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-03 21:41:47
 */
import React, { Component } from 'react'
import HotSearch from '@/components/HotSearch' // 热搜组件

interface Props {
  children?: React.ReactNode
}
interface State {

}

class MainContainer extends Component<State, Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return (
      <main className="main-container">
        <div className="main-content">
          {children}
          <div className="right-content">
            <HotSearch />
          </div>
        </div>
      </main>
    )
  }
}

export default MainContainer
