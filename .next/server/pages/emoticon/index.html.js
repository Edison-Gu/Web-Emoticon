(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 2929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6000);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9661);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4036);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_MainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9330);
/* harmony import */ var _components_common_EmotionCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/*
 * @Descripttion: 表情包首页
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-19 23:39:05
 */











class Emoji extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  pageChange(pageNo, pageSize) {
    (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__/* .goRouter */ .GY)({
      key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX,
      query: {
        pageNo,
        pageSize
      }
    }); // window.location.href = url
  }

  render() {
    const {
      emoticonList,
      total,
      randomPageNo
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_MainContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "left-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {
          className: "card-container",
          title: "\u8868\u60C5\u5305\u7EC4\u56FE\u5927\u5168",
          extra: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            href: (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__/* .getPageUrl */ .XW)({
              key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX,
              query: {
                random: '100'
              }
            }),
            children: "\u968F\u673A\u6D4F\u89C8"
          }),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {
            gutter: [12, 16],
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["content-wrap"]),
            children: emoticonList.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {
              span: 6,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_EmotionCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                imgItem: item
              })
            }, index))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().pagination),
            showQuickJumper: true,
            pageSizeOptions: [12, 24, 36, 48],
            defaultPageSize: 12,
            defaultCurrent: randomPageNo,
            total: total,
            onChange: (pageNo, pageSize) => this.pageChange(pageNo, pageSize)
          })]
        })
      })
    });
  }

}

const getServerSideProps = async ctx => {
  let emoticonList = [];
  const {
    pageNo = 1,
    pageSize = 12,
    random = ''
  } = ctx.query;
  const {
    code,
    data,
    total,
    randomPageNo
  } = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchEmoticonList */ .x4)({
    pageNo,
    pageSize,
    random
  });

  if (code === 1) {
    emoticonList = data;
  }

  return {
    props: {
      emoticonList,
      total,
      randomPageNo: pageNo > 1 ? pageNo : randomPageNo
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emoji);

/***/ }),

/***/ 6000:
/***/ ((module) => {

// Exports
module.exports = {
	"emoticon-container": "emoticon_emoticon-container__Rc0ul",
	"img-item": "emoticon_img-item__T8Bbd",
	"content-wrap": "emoticon_content-wrap__6CR6_"
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
var __webpack_exports__ = __webpack_require__.X(0, [932,664,84,234,427,22], () => (__webpack_exec__(2929)));
module.exports = __webpack_exports__;

})();