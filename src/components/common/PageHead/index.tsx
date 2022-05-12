import React, { Component } from 'react'
import Styles from  './index.module.scss'
import { goHeader } from '@/utils/jumpLink'
import { Layout, Menu } from 'antd'

interface Props {
  router: any
}
interface State {
  tabList: Array<any>
}


export default class PageHead extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
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
    console.log('----key', key)
    goHeader(key)
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
    console.log('----pathName', pathname)
    return activeKey
  }


  render() {
    console.log('----router', this.props.router)
    const { Header } = Layout
    const { tabList } = this.state
    return (
      <Header className={Styles['page-head']}>
        <div className={Styles['tab-ul']}>
          {/* <div className={Styles.logo} /> */}
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[`${this.handleActiveKey()}`]}
            items={tabList}
            onClick={item => this.tabClick(item)}
          />
        </div>
      </Header>
    )
  }
}