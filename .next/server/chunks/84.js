"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 4036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_B": () => (/* reexport */ fetchEmojiDetail),
  "_A": () => (/* reexport */ fetchEmoticonDetail),
  "x4": () => (/* reexport */ fetchEmoticonList),
  "Y9": () => (/* reexport */ fetchNewestList),
  "RZ": () => (/* reexport */ fetchSearchKeyword)
});

// UNUSED EXPORTS: fetchHotEmoji, fetchKeyword

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/api/instance.ts

const BASE_DOMAIN = "https://www.emojiduck.com/api";
// 创建axios实例
const service = external_axios_default().create({
  baseURL: BASE_DOMAIN,
  timeout: 10000
});
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
}); // response interceptors

service.interceptors.response.use(response => {
  if ((response || {}).status == 200) {
    return response.data;
  }
}, error => {
  Promise.reject(error);
});
/* harmony default export */ const instance = (service);
;// CONCATENATED MODULE: ./src/api/services/emoticon.ts
/*
 * @Descripttion: 表情包相关接口
 * @Author: EdisonGu
 * @Date: 2022-04-27 15:16:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:47:11
 */


/**
 * 表情包列表
 */
const fetchEmoticonList = async params => {
  const res = await instance.get(`/emoticonList`, {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};
/**
 * 首页热门推荐
 */


const fetchNewestList = async params => {
  const res = await instance.get(`/emoticonList`, {
    params: {
      pageNo: 6,
      pageSize: 12
    }
  });
  return res ? res : {
    code: -1,
    data: null
  };
};
/**
 * 表情包详情
 */


const fetchEmoticonDetail = async params => {
  const res = await instance.get(`/emoticonDetail`, {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};


;// CONCATENATED MODULE: ./src/api/services/emoji.ts
/*
 * @Descripttion: 表情相关请求
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-25 22:59:39
 */


const fetchEmojiDetail = async params => {
  const res = await instance.get(`/emojiDetail`, {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};

const fetchHotEmoji = async params => {
  const res = await AxiosService.get('hotEmoji', {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};


;// CONCATENATED MODULE: ./src/api/services/search.ts
/*
 * @Author: EdisonGu
 * @Date: 2022-07-03 21:54:02
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:55:39
 * @Descripttion: 搜索相关接口
 */


/**
 * 表情包+表情模糊搜索
 */
const fetchSearchKeyword = async params => {
  const res = await instance.get(`/searchKeyword`, {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};
/**
 * 热搜关键词
 */


const fetchKeyword = async params => {
  const res = await AxiosService.get(`/searchKeyword`, {
    params
  });
  return res ? res : {
    code: -1,
    data: null
  };
};


;// CONCATENATED MODULE: ./src/api/index.ts
/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-25 22:59:51
 * @Descripttion: 
 */




/***/ }),

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 16:52:50
 * @Descripttion: 
 */
const env = "production" || 0;
const HOST_DOMAIN = "https://www.emojiduck.com";
const config = {
  dev: {// hostDomain: 'http://localhost:3000',
  },
  test: {},
  production: {}
}[env];
config.hostDomain = HOST_DOMAIN;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zL": () => (/* binding */ HTML_TITLE),
/* harmony export */   "wX": () => (/* binding */ HTML_DES),
/* harmony export */   "vs": () => (/* binding */ HTML_KEY),
/* harmony export */   "Fh": () => (/* binding */ PAGE_KEY),
/* harmony export */   "gq": () => (/* binding */ PAGE_PATH_NAME),
/* harmony export */   "_P": () => (/* binding */ MESSAGE_TEXT),
/* harmony export */   "YS": () => (/* binding */ DEFAULT_IMG),
/* harmony export */   "V5": () => (/* binding */ WEB_NO),
/* harmony export */   "kp": () => (/* binding */ HOT_KEYWORD),
/* harmony export */   "cx": () => (/* binding */ BD_TAG)
/* harmony export */ });
/*
 * @Author: EdisonGu
 * @Date: 2022-06-25 22:05:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 17:23:22
 * @Descripttion: 
 */
const ENV = "production" || 0; // 头部title

const HTML_TITLE = '表情鸭 - 搞笑表情包 - 逗比表情包 - 表情包大全 - 微信表情包 - QQ表情包 - 表情DIY - 表情包制作 - 自制表情包  - 表情斗图'; // 头部描述

const HTML_DES = '表情鸭 - 全网最有趣/逗比的表情包分享网站，每天准时更新聊天表情、微信表情包、熊猫头表情包，DIY斗图，表情斗图，自制表情包，gif表情包，动图加字，表情恶搞。喜欢斗图，发表情，找表情，想成为斗图达人就来 [表情鸭] 网！'; // 头部关键字

const HTML_KEY = '表情包,表情包制作,搞笑表情包,emoji,表情包图片,微信表情包,蘑菇头,斗图,表情包下载,表情包大全,表情鸭,qq表情包,金馆长表情包,有趣表情包,逗比表情包,熊猫头表情包,张学友表情包,真香表情包,表情下载,贴吧表情包,表情包集中营,DIY表情，gif表情'; // 页面路由key

const PAGE_KEY = {
  HOME: 'home',
  // 主页
  EMOTICON_INDEX: 'emoticonIndex',
  // 表情包主页
  EMOTICON_DETAIL: 'emoticonDetail',
  // 表情包详情
  EMOJI_DETAIL: 'emojiDetail',
  // 表情详情
  SEARCH_KEYWORD: 'searchKeyword' // 搜索主页

}; // 提示窗字

const MESSAGE_TEXT = ['老板点得好呀~', '感谢大佬的点赞~', '牛哇，牛哇~', '再多点点其它表情呗~']; // 默认图

const DEFAULT_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="; // 备案编号

const WEB_NO = '渝ICP备2022005388号'; // 搜索关键字推荐 todo - 后期需要使用接口获取

const HOT_KEYWORD = ['萌宠', '可达鸭', '小黄脸', '熊猫头', '猫咪', '狗狗', '沙雕', '怼人', '文字', '可爱', '阴阳怪气', '微信', '舔狗', '斗图']; // 百度统计代码

const BD_TAG = (key = 'duck') => {
  if (ENV === 'dev') return {
    __html: ''
  }; // 开发环境不打点

  const bdStr = key === 'duck' ? 'https://hm.baidu.com/hm.js?fee151b3080bc39dd3c45710f7615bb9' : 'https://hm.baidu.com/hm.js?844e01d1597829c5e56ce23eca53d8a5';
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
  };
}; // 页面路由path


const PAGE_PATH_NAME = ({
  key = 'HOME',
  id = '[_id]',
  keyword = '[_keyword]'
}) => {
  const pathname = {
    HOME: '/',
    EMOTICON_INDEX: '/emoticon/index.html',
    EMOTICON_DETAIL: `/emoticon/${id}`,
    // 表情包详情
    EMOJI_DETAIL: `/emoji/${id}`,
    // 表情详情
    SEARCH_KEYWORD: `/search/keyword/${keyword}` // 搜索主页

  }[key];
  return pathname;
}; // 获取ant卡片的间距
// const CONTENT_WIDTH = 100




/***/ }),

/***/ 9661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XW": () => (/* binding */ getPageUrl),
/* harmony export */   "GY": () => (/* binding */ goRouter),
/* harmony export */   "MJ": () => (/* binding */ toDuck)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3073);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-25 12:17:13
 */
// const domain = process.env.JUMP_DOMAIN




const goRouter = ({
  key = _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.HOME */ .Fh.HOME,
  id = '',
  query = {}
}) => {
  switch (key) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.HOME */ .Fh.HOME:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push(`/`);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
        pathname: `/emoticon/index.html`,
        query
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_DETAIL */ .Fh.EMOTICON_DETAIL:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push(`/emoticon/${id ? id : 'index'}.html`); // 没有传id默认进入表情包页面

      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push(id ? `/emoji/${id}.html` : `/emoticon/index.html`); // 没有传id默认进入表情包页面

      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.SEARCH_KEYWORD */ .Fh.SEARCH_KEYWORD:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
        pathname: `/search/keyword/${query.keyword}.html`,
        query
      });
      break;

    default:
      next_router__WEBPACK_IMPORTED_MODULE_0___default().push(`/`);
      break;
  }
};
/**
 * 根据传参获取相应的页面地址
 * @param param
 */


const getPageUrl = ({
  key = _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.HOME */ .Fh.HOME,
  id = '',
  query,
  complete = false
}) => {
  const {
    hostDomain
  } = _constants_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
  let url = hostDomain;
  const domain = complete ? hostDomain : '';
  let urlParams = '';

  for (const key in query) {
    urlParams += `&${key}=${query[key]}`;
  }

  switch (key) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX:
      url = `${domain}/emoticon/index.html`;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_DETAIL */ .Fh.EMOTICON_DETAIL:
      url = `${domain}/emoticon/${id}.html`;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL:
      url = `${domain}/emoji/${id}.html`;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.SEARCH_KEYWORD */ .Fh.SEARCH_KEYWORD:
      url = `${domain}/search/keyword/${query.keyword}.html`;
      break;

    default:
      url = hostDomain;
      break;
  }

  return urlParams ? `${url}?${urlParams.slice(1)}` : url;
};
/**
 * 如果是访问的vip域名就重定向到duck
 * todo 后续实现在nginx配置
 */


const toDuck = () => {
  const {
    hostDomain
  } = _constants_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
  const {
    pathname,
    search
  } = window.location;
  return `${hostDomain}${pathname}${search}`;
};



/***/ })

};
;