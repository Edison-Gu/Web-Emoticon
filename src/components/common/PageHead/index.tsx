import React, { Component } from 'react'
import Styles from  './index.module.scss'
import { goHeader } from '@/utils/jumpLink'
import { Layout, Menu } from 'antd'

interface Props {
  activeKey?: string
}
interface State {
  tabList: Array<any>
}


export default class PageHead extends Component<Props, State> {
  static defaultProps = {
    activeKey: 'home'
  }
  constructor(props: any) {
    super(props)
    this.state = {
      tabList: [
        {
          label: '主页',
          key: 'home'
        },
        // {
        //   label: '表情包',
        //   key: 'emoticon'
        // },
      ]
    }
  }
  tabClick(item: any) {
    const { key } = item
    console.log('----key', key)
    goHeader(key)
  }

  render() {
    const { Header } = Layout
    const { tabList } = this.state
    const { activeKey } = this.props
    return (
      <Header className={Styles['page-head']}>
        <div className={Styles['tab-ul']}>
          <div className={Styles.logo} />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[`${activeKey}`]}
            items={tabList}
            onClick={item => this.tabClick(item)}
          />
        </div>
      </Header>
    )
  }
}