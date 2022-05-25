/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 10:48:40
 */
// const domain = process.env.JUMP_DOMAIN
import Router from 'next/router'
import config from '@/api/config'

interface PageUrl {
  id?: any,
  type?: string,
  params?: any,
  complete?: boolean
}

const goRouter = (key: string) => {
  switch (key) {
    case 'home':
      Router.push(`/`)
      break;
    case 'emoticonPage':
      Router.push(`/emoticon/index.html`)
        break;
    default:
      Router.push(`/`)
      break;
  }
}

/**
 * 根据传参获取相应的页面地址
 * @param param
 */
const getPageUrl = ({id = '', type = 'emoticon', params, complete = false }:PageUrl) => {
  const { hostDomain } = config
  let url = hostDomain
  const domain = complete ? hostDomain : ''
  let urlParams = ''
  for (const key in params) {
    urlParams += `${key}=${params[key]}&`
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

