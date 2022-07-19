/*
 * @Author: EdisonGu
 * @Date: 2022-06-25 22:05:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:29:13
 * @Descripttion: 
 */


const ENV:string = process.env.NEXT_PUBLIC_ENV || 'dev'

// 头部title
const HTML_TITLE:string = '表情鸭 - 搞笑表情包 - 逗比表情包 - 表情包大全 - 微信表情包 - QQ表情包 - 表情DIY - 表情包制作 - 自制表情包  - 表情斗图'

// 头部描述
const HTML_DES:string = '表情鸭 - 全网最有趣/逗比的表情包分享网站，每天准时更新聊天表情、微信表情包、熊猫头表情包，DIY斗图，表情斗图，自制表情包，gif表情包，动图加字，表情恶搞。喜欢斗图，发表情，找表情，想成为斗图达人就来 [表情鸭] 网！'

// 头部关键字
const HTML_KEY:string = '表情包,表情包制作,搞笑表情包,emoji,表情包图片,微信表情包,蘑菇头,斗图,表情包下载,表情包大全,表情鸭,qq表情包,金馆长表情包,有趣表情包,逗比表情包,熊猫头表情包,张学友表情包,真香表情包,表情下载,贴吧表情包,表情包集中营,DIY表情，gif表情'

// 页面路由key
const PAGE_KEY = {
  HOME: 'home', // 主页
  EMOTICON_INDEX: 'emoticonIndex', // 表情包主页
  EMOTICON_DETAIL: 'emoticonDetail', // 表情包详情
  EMOJI_DETAIL: 'emojiDetail',  // 表情详情
  SEARCH_INDEX: 'searchIndex'  // 搜索主页
}

// 提示窗字
const MESSAGE_TEXT:Array<string> = [
  '老板点得好呀~',
  '感谢大佬的点赞~',
  '牛哇，牛哇~',
  '再多点点其它表情呗~'
]
// 默认图
const DEFAULT_IMG = "data:image/png;base64,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"

// 备案编号
const WEB_NO = {
  duck: '渝ICP备2022005388号-2',
  vip: '渝ICP备2022005388号-1'
}

// 百度统计代码
const BD_TAG = (key = 'duck') => {
  if (ENV === 'dev') return { __html: '' } // 开发环境不打点
  const bdStr = key === 'duck' ? 'https://hm.baidu.com/hm.js?fee151b3080bc39dd3c45710f7615bb9' : 'https://hm.baidu.com/hm.js?844e01d1597829c5e56ce23eca53d8a5'
  return {
    __html: `
      var _hmt = _hmt || [];
      window._hmt = _hmt; // 修改为window 全局变量
      (function() {
        var hm = document.createElement("script");
        hm.src = "${bdStr}";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
  }
}

// 搜索关键字推荐 todo - 后期需要使用接口获取
const HOT_KEYWORD = ['萌宠', '可达鸭', '小黄脸', '熊猫头', '猫咪', '狗狗', '沙雕', '怼人', '文字', '可爱', '阴阳怪气', '微信', '舔狗', '斗图']


export {
  HTML_TITLE,
  HTML_DES,
  HTML_KEY,
  PAGE_KEY,
  MESSAGE_TEXT,
  DEFAULT_IMG,
  WEB_NO,
  HOT_KEYWORD,
  BD_TAG,
}