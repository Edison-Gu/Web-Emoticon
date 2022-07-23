/*
 * @Descripttion: 表情包相关接口
 * @Author: EdisonGu
 * @Date: 2022-04-27 15:16:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:47:11
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
    pageNo: 6,
    pageSize: 12
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

export {
  fetchEmoticonList,
  fetchNewestList,
  fetchEmoticonDetail
}