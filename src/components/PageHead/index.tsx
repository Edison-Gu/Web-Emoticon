/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:37:37
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from  './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { PAGE_KEY } from '@/constants'
import { Layout, Menu } from 'antd'
import Search from './Search'
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
          key: PAGE_KEY.HOME
        },
        {
          label: '表情包',
          key: PAGE_KEY.EMOTICON_INDEX
        },
      ]
    }
  }
  tabClick(item: any) {
    const { key } = item
    goRouter({ key })
  }

  handleActiveKey() {
    const { pathname = '/' } = this.props.router
    let activeKey = PAGE_KEY.HOME
    switch (pathname) {
      case '/emoticon/index.html':
        activeKey = PAGE_KEY.EMOTICON_INDEX
        break
      case '/emoticon/[_id]':
        activeKey = PAGE_KEY.EMOTICON_INDEX
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