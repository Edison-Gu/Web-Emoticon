/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 16:52:18
 */
// const domain = process.env.JUMP_DOMAIN
import Router from 'next/router'
import config from '@/constants/config'

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
    case 'searchPage':
      Router.push({
        pathname: `/search/index.html`,
        query
      })
      break
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

/**
 * 如果是访问的vip域名就重定向到duck
 * todo 后续实现在nginx配置
 */
const toDuck = () => {
  const { hostDomain } = config
  const { pathname, search } = window.location
  return `${hostDomain}${pathname}${search}`
}

export {
  getPageUrl,
  goRouter,
  toDuck
}

