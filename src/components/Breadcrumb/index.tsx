/*
 * @Descripttion: 公用面包屑
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:35:30
 */

import React, { Component } from 'react'
import { NextRouter } from 'next/router'
import Styles from './index.module.scss'
import { PAGE_KEY } from '@/constants'
import { goRouter } from '@/utils/jumpLink'
import { Breadcrumb } from 'antd'
interface Props {
  router: NextRouter,
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
  componentDidUpdate(prevProps: any) {
    console.log('----面包屑----this.props.router', this.props.router)
    console.log('----面包屑----prevPropsr', prevProps.router)
    if (this.props.router !== prevProps.router) {
      console.log('面包屑更新----componentDidMount----props.router', this.props)
      this.handleBread()
    }
  }
  handleBread() {
    const { router: { pathname = '/' }, htmlTitle } = this.props
    let breadList:Array<any> = []
    switch (pathname) {
      case '/':
        breadList = []
        break;
      case '/emoticon/index.html':
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: '表情包',
            key: PAGE_KEY.EMOTICON_INDEX
          }
        ]
        break;
      case '/emoticon/[_id]':
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: '表情包',
            key: PAGE_KEY.EMOTICON_INDEX
          },
          {
            label: htmlTitle,
            key: PAGE_KEY.EMOTICON_DETAIL
          }
        ]
        break;
      case '/emoji/[_id]':
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: '表情包',
            key: PAGE_KEY.EMOTICON_INDEX
          },
          {
            label: '表情包详情',
            key: PAGE_KEY.EMOTICON_DETAIL
          },
          {
            label: htmlTitle,
            key: PAGE_KEY.EMOJI_DETAIL
          }
        ]
        break;
      case '/search/index.html':
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: '搜索',
            key: PAGE_KEY.SEARCH_INDEX
          }
        ]
        break;
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
        <Breadcrumb className={ breadList.length ? Styles.breadcrumb : ''}>
          {
            breadList.map((item, index) => (
              <Breadcrumb.Item
                className={Styles['breadcrumb-item']}
                key={index}
                onClick={() => goRouter({key: item.key})}>{item.label}</Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default PageBreadcrumb