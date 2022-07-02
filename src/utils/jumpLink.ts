/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 17:59:37
 */
// const domain = process.env.JUMP_DOMAIN
import Router from 'next/router'
import config from '@/api/config'

interface PageUrl {
  id?: any,
  type?: string,
  query?: any,
  complete?: boolean
}

const goRouter = ({type = 'home', id = '', query = {}}:PageUrl) => {
  switch (type) {
    case 'home':
      Router.push(`/`)
      break;
    case 'emoticonPage':
      Router.push({
        pathname: `/emoticon/index.html`,
        query
      })
        break;
    case 'emoticon':
      Router.push(`/emoticon/${id}.html`)
        break;
    case 'emoji':
      Router.push(`/emoji/${id}.html`)
      break
    default:
      Router.push(`/`)
      break;
  }
}

/**
 * 根据传参获取相应的页面地址
 * @param param
 */
const getPageUrl = ({type = 'emoticon', id = '', query, complete = false }:PageUrl) => {
  const { hostDomain } = config
  let url = hostDomain
  const domain = complete ? hostDomain : ''
  let urlParams = ''
  for (const key in query) {
    urlParams += `${key}=${query[key]}&`
  }
  switch (type) {
    case 'emoji':
      url =  `${domain}/emoji/${id}.html`
      break
    case 'emoticon':
      url =  `${domain}/emoticon/${id}.html`
      break
    case 'emoticonPage':
      url = `${domain}/emoticon/index.html`
      break
    case 'searchPage':
      url = `${domain}/search/index.html`
      break
    default:
      url = hostDomain
      break
  }
  return urlParams ? `${url}?${urlParams}` : url
}

export {
  getPageUrl,
  goRouter
}

