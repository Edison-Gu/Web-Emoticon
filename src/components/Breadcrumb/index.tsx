/*
 * @Descripttion: 公用面包屑
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:02:33
 */

import React, { Component } from 'react'
import Styles from './index.module.scss'
import { PAGE_KEY, PAGE_PATH_NAME } from '@/constants'
import { PageParams } from '@/types/common'
import { goRouter } from '@/utils/jumpLink'
import { Breadcrumb } from 'antd'
interface Props {
  pageParams: PageParams
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
    if (this.props.pageParams !== prevProps.pageParams) {
      console.log('面包屑更新----componentDidMount----props.router', this.props)
      this.handleBread()
    }
  }
  handleBread() {
    const { pathname, htmlTitle, keyword, id, pId } = this.props.pageParams
    let breadList:Array<any> = []
    switch (pathname) {
      case '/':
        breadList = []
        break;
      case PAGE_PATH_NAME({key: 'EMOTICON_INDEX'}):
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
      case PAGE_PATH_NAME({key: 'EMOTICON_DETAIL'}):
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
            id,
            label: htmlTitle,
            key: PAGE_KEY.EMOTICON_DETAIL
          }
        ]
        break;
      case PAGE_PATH_NAME({key: 'EMOJI_DETAIL'}):
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: '表情包',
            key: PAGE_KEY.EMOTICON_INDEX,
          },
          {
            label: '表情包详情',
            key: PAGE_KEY.EMOTICON_DETAIL,
            id: pId,
          },
          {
            label: htmlTitle,
            key: PAGE_KEY.EMOJI_DETAIL,
            id
          }
        ]
        break;
      case PAGE_PATH_NAME({key: 'SEARCH_KEYWORD'}):
        breadList = [
          {
            label: '主页',
            key: PAGE_KEY.HOME
          },
          {
            label: `搜索：${keyword}`,
            key: PAGE_KEY.SEARCH_KEYWORD,
            keyword
          }
        ]
        break;
      default:
        break;
    }
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
                onClick={() => goRouter({key: item.key, id: item.id, query: { keyword: item.keyword }})}>{item.label}</Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default PageBreadcrumb