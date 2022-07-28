"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 5427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WQ": () => (/* binding */ randomMsgText),
/* harmony export */   "sO": () => (/* binding */ isJson),
/* harmony export */   "Nt": () => (/* binding */ transfromImgSrc)
/* harmony export */ });
/* unused harmony export randomCount */
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/*
 * @Author: EdisonGu
 * @Date: 2022-06-07 09:19:37
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 15:39:10
 * @Descripttion: 
 */

/**
 * 随机获取点赞文案
 * @returns 
 */

const randomMsgText = () => {
  const index = Math.floor(Math.random() * _constants_index__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGE_TEXT.length */ ._P.length);
  return _constants_index__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGE_TEXT */ ._P[index];
};
/**
 * 随机获取count内的正整数
 * @param count 
 * @returns 
 */


const randomCount = (count = 10) => {
  return Math.floor(Math.random() * count);
};
/**
 * 判断是否是json字符串
 * @returns Boolean
 */


const isJson = row => {
  if (typeof row !== 'string') return false;

  try {
    const data = JSON.parse(row);

    if (data && typeof data === 'object') {
      return true;
    }
  } catch (error) {
    return false;
  }
};
/**
 * 转换新浪的图片地址 orj180 - 最小，orj360 - 小，bmiddle - 默认大小，mw1024 - 大，mw2000 - 超大
 * 动图不转换为最小的
 * @params size: mini - orj360, normal - bmiddle, large - mw1024, max - mw2000
 */


const transfromImgSrc = ({
  src,
  size = 'mini'
}) => {
  if (size === 'mini' && src.indexOf('gif') > -1) {
    // 动图不转换为最小的
    return src;
  }

  if (src.indexOf('bmiddle') > -1) {
    switch (size) {
      case 'mini':
        src = src.replace('bmiddle', 'orj360');
        break;

      case 'large':
        src = src.replace('bmiddle', 'mw1024');

      default:
        break;
    }
  }

  return src;
};



/***/ })

};
;