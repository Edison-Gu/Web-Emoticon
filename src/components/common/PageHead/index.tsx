/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 17:44:58
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from  './index.module.scss'
import { Layout, Menu } from 'antd'
import Search from './Search'
import { goRouter } from '@/utils/jumpLink'
interface Props {
  router: any
}
interface State {
  keyword: string,
  tabList: Array<any>
}

export default class PageHead extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      keyword: '',
      tabList: [
        {
          label: '主页',
          key: 'home'
        },
        {
          label: '表情包',
          key: 'emoticonPage'
        },
      ]
    }
  }
  tabClick(item: any) {
    const { key } = item
    goRouter({type: key})
  }

  handleActiveKey() {
    const { pathname = '/' } = this.props.router
    let activeKey = 'home'
    switch (pathname) {
      case '/emoticon/index.html':
        activeKey = 'emoticonPage'
        break
      case '/emoticon/[_id]':
        activeKey = 'emoticonPage'
        break
      default:
        break
    }
    return activeKey
  }

  render() {
    const { Header } = Layout
    const { tabList } = this.state
    return (
      <Header className={Styles['page-head']}>
        <div className={Styles['page-container']}>
          <div className={Styles['tab-ul']}>
            {/* <div className={Styles.logo} /> */}
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[`${this.handleActiveKey()}`]}
              items={tabList}
              onClick={item => this.tabClick(item)}
            />
          </div>
          <Search />
        </div>
      </Header>
    )
  }
}