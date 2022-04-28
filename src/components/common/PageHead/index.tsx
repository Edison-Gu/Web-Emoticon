import React, { Component } from 'react'
import Styles from  './index.module.scss'

interface State {
  activeIndex: number,
  tabList: Array<Object>
}


export default class PageHead extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeIndex: 0,
      tabList: [
        {
          label: '主页',
          route: '/',
        },
        {
          label: '表情包',
          route: '/1'
        },
      ]
    }
  }
  tabClick(index: number) {
    if(this.state.activeIndex !== index ) {
      this.setState({
        activeIndex: index
      })
    }
  }

  render() {
    const { tabList, activeIndex } = this.state
    return (
      <div className={`${Styles['page-head']} row middle-xs`}>
        我是logo
        <ul className={`${Styles['tab-ul']} row middle-xs`}>
          {
            tabList.map((item: any, index: number)=> {
              return (
                <li 
                  className={activeIndex === index ? Styles.active : ''}
                  key={item.route}
                  onClick={() => this.tabClick(index)}
                  >{item.label}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}