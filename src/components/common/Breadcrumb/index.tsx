/*
 * @Descripttion: 公用面包屑
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 17:43:54
 */

import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Breadcrumb } from 'antd'
import { goRouter } from '@/utils/jumpLink'

interface Props {
  router: any,
  htmlTitle?: string
}
interface State {
  breadList: Array<any>
}
class PageBreadcrumb extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      breadList: []
    }
  }
  componentDidMount() {
    this.handleBread()
  }
  handleBread() {
    const { pathname = '/', htmlTitle } = this.props.router
    // const { breadList = [] } = this.state
    let breadList:Array<any> = []
    switch (pathname) {
      case '/':
        breadList = []
        break;
      case '/emoticon/index.html':
        breadList = [
          {
            label: '主页',
            key: 'home'
          },
          {
            label: '表情包',
            key: 'emoticonPage'
          }
        ]
      default:
        break;
    }
    console.log('----breadList', breadList)
    this.setState({breadList})
  }
  render() {
    const { breadList = [] } = this.state
    return (
      <div className={Styles['breadcrumb-container']}>
        <Breadcrumb className={Styles.breadcrumb}>
          {
            breadList.map((item, index) => (
              <Breadcrumb.Item
                className={Styles['breadcrumb-item']}
                key={index}
                onClick={() => goRouter({type: item.key})}>{item.label}</Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default PageBreadcrumb