/*
 * @Descripttion: 本地存储
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:55:22
 */

/**
 * 相关key说明
 * pc_ssr_nav_history - 头部搜索历史
 */

import { isJson } from './index'

interface LocalStorage {
  key?: any,
  value?: any,
  type?: string
}

/**
 * 存入本地local
 * @param param0 
 */
const setLocalItem = ({ key, value }:LocalStorage) => {
  window.localStorage.setItem(key, value)
}

/**
 * 获取本地local
 * @returns 
 */
const getLocalItem = ({ key }:LocalStorage) => {
  const item = window.localStorage.getItem(key) || ''
  return isJson(item) ? JSON.parse(item) : item
}

const removeLocalItem = ({ key }:LocalStorage) => {
  window.localStorage.removeItem(key)
}

export {
  setLocalItem,
  getLocalItem,
  removeLocalItem
}