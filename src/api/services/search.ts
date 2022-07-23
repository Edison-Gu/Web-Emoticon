/*
 * @Author: EdisonGu
 * @Date: 2022-07-03 21:54:02
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:55:39
 * @Descripttion: 搜索相关接口
 */

import AxiosService from '../instance'
interface Res {
  code: number,
  data?: any,
  total?: number,
  randomPageNo?: number
}

/**
 * 表情包+表情模糊搜索
 */
 const fetchSearchKeyword = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/searchKeyword`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 热搜关键词
 */
 const fetchKeyword = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/searchKeyword`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchSearchKeyword,
  fetchKeyword
}