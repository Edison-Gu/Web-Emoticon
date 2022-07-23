/*
 * @Author: EdisonGu
 * @Date: 2022-07-17 15:15:29
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 15:55:42
 * @Descripttion: 
 */

interface PageParams {
  id?: string & number,
  pId?: string & number,
  keyword: string,
  htmlTitle?: string,
  pathname?: string,
  asPath?: string
}

export {
  PageParams
}