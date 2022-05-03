/*
 * @Descripttion: 公用面包屑
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-29 11:43:46
 */

import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Breadcrumb } from 'antd';

class PageBreadcrumb extends Component {
  render() {
    return (
      <div className={Styles['breadcrumb-container']}>
        <Breadcrumb className={Styles.breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default PageBreadcrumb