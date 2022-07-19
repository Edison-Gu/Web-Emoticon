/*
 * @Author: EdisonGu
 * @Date: 2022-07-03 21:40:02
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:56:07
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { PAGE_KEY } from '@/constants'
import { HOT_KEYWORD } from '@/constants'
import { getPageUrl } from '@/utils/jumpLink'
import { Card, Button } from 'antd'

interface Iprops {
  
}
interface Istate {
  keywordList: Array<string>
}

class HotSearch extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      keywordList: HOT_KEYWORD
    }
  }
  render(): React.ReactNode {
    const { keywordList } = this.state
    return (
      <>
        <Card className={Styles.container} title='热搜榜'>
          <div className={Styles['keyword-container']}>
            {
              keywordList.map((item: string, index: number) => (
                <Button
                  className={Styles['keyword']}
                  key={index}
                  href={getPageUrl({key: PAGE_KEY.SEARCH_INDEX, query: {keyword: item}})}>
                    {item}
                </Button>
              ))
            }
          </div>
        </Card>
      </>
    )
 }
}

export default HotSearch