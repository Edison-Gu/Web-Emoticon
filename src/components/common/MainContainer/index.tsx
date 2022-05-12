/*
 * @Descripttion: 主容器组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-30 16:42:38
 */
import React, { Component } from 'react'
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
        </div>
      </main>
    )
  }
}

export default MainContainer
