/*
 * @Descripttion: 表情包相关接口
 * @Author: EdisonGu
 * @Date: 2022-04-27 15:16:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-30 19:54:35
 */
import AxiosService from '../instance'
interface Res {
  code: number,
  data?: any,
  total?: number,
  randomPageNo?: number
}

/**
 * 表情包列表
 */
const fetchEmoticonList = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonList`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 首页热门推荐
 */
const fetchNewestList = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonList`, { params: {
    pageNo: 5,
    pageSize: 20
  } })
  return res ? res : { code: -1, data: null }
}

/**
 * 表情包详情
 */
const fetchEmoticonDetail = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonDetail`, { params })
  return res ? res : { code: -1, data: null }
}

/**
 * 表情包+表情模糊搜索
 */
 const fetchSearchKeyword = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/searchKeyword`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchEmoticonList,
  fetchNewestList,
  fetchEmoticonDetail,
  fetchSearchKeyword
}