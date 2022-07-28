(() => {
var exports = {};
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1329);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4036);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_MainContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9330);
/* harmony import */ var _components_common_EmojiFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5639);
/* harmony import */ var _components_common_ImgWaterfall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6528);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/*
 * @Descripttion: 表情详情页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:31:57
 */











class Emoji extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      emojiInfo: {
        imgTitle,
        imgAlt,
        imgDes,
        imgDataOriginal,
        id
      },
      nextInfo,
      preInfo,
      hotList
    } = this.props;
    const imgConfig = {
      src: imgDataOriginal,
      alt: imgAlt,
      title: imgTitle
    };
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_MainContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "left-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
          className: "card-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["emoji-container"]),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["img-container"]),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Image // width={columnWidth}
              , {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["img-item"]),
                preview: false,
                title: imgTitle,
                src: imgDataOriginal,
                alt: imgDes,
                fallback: _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_IMG */ .YS,
                loading: "lazy"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().des),
              children: imgDes
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_EmojiFooter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            nextInfo: nextInfo,
            preInfo: preInfo,
            type: _constants__WEBPACK_IMPORTED_MODULE_1__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
          className: "card-container",
          title: "\u70ED\u95E8\u8868\u60C5",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_ImgWaterfall__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            imgList: hotList,
            id: id,
            columnCount: 5
          })
        })]
      })
    });
  }

}

const getServerSideProps = async context => {
  const id = context.params._id.replace('.html', '');

  let emojiInfo = {
    pId: '',
    htmlTitle: '',
    imgTitle: ''
  };
  let nextInfo = {
    title: '',
    imgTitle: ''
  };
  let preInfo = {
    title: '',
    imgTitle: ''
  };
  let hotList = [];
  const {
    code,
    data
  } = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchEmojiDetail */ ._B)({
    id
  });

  if (code === 1) {
    const {
      selfNode,
      upNode,
      downNode,
      hot
    } = data;
    emojiInfo = selfNode;
    nextInfo = downNode ? downNode : nextInfo;
    preInfo = upNode ? upNode : preInfo;
    hotList = hot;
    emojiInfo.htmlTitle = emojiInfo.imgTitle;
    nextInfo.title = nextInfo.imgTitle;
    preInfo.title = preInfo.imgTitle;
  }

  const {
    pId,
    htmlTitle
  } = emojiInfo;
  return {
    props: {
      emojiInfo,
      nextInfo,
      preInfo,
      hotList,
      id,
      pId,
      htmlTitle
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emoji);

/***/ }),

/***/ 1329:
/***/ ((module) => {

// Exports
module.exports = {
	"emoji-container": "emoji_emoji-container__bIjk_",
	"img-container": "emoji_img-container__zLY4z",
	"img-item": "emoji_img-item__vatiq",
	"des": "emoji_des__1emOa"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [932,664,84,234,639], () => (__webpack_exec__(8686)));
module.exports = __webpack_exports__;

})();