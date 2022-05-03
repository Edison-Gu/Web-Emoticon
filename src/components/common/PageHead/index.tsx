import React, { Component } from 'react'
import Router from 'next/router'
import Styles from  './index.module.scss'
import { Layout, Menu } from 'antd';

interface State {
  activeIndex: number,
  tabList: Array<any>
}


export default class PageHead extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeIndex: 1,
      tabList: [
        {
          label: '主页',
          path: '/',
          key: 'home'
        },
        {
          label: '表情包',
          path: '/',
          key: 'emoticon'
        },
      ]
    }
  }
  tabClick(index: number) {
    if(this.state.activeIndex !== index ) {
      const { path = '/' } = this.state.tabList[index]
      this.setState({
        activeIndex: index
      })
      Router.push(path)
    }
  }

  render() {
    const { Header } = Layout;
    const { tabList, activeIndex } = this.state
    return (
      <Header className={Styles['page-head']}>
        <div className={Styles['tab-ul']}>
          <div className={Styles.logo} />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={tabList}
          />
        </div>
      </Header>
    )
  }
}