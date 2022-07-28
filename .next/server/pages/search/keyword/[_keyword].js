(() => {
var exports = {};
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 7440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6279);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9661);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4036);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_MainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9330);
/* harmony import */ var _components_common_EmotionCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _components_common_ImgWaterfall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6528);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/*
 * @Author: EdisonGu
 * @Date: 2022-07-22 23:36:00
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-24 13:27:50
 * @Descripttion: 模糊搜索详情页
 */












class Emoji extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL,
      tabList: [{
        key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL,
        tab: '表情'
      }, {
        key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_DETAIL */ .Fh.EMOTICON_DETAIL,
        tab: '表情包'
      }]
    };
  }

  pageChange(pageNo, pageSize) {
    let {
      tabType,
      keyword,
      emojiPreNo,
      emoticonPreNo
    } = this.props;
    tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? emojiPreNo = 0 : emoticonPreNo = 0; // goRouter({ key: PAGE_KEY.SEARCH_KEYWORD, query: { pageNo, pageSize, keyword, tabType, emojiPreNo, emoticonPreNo } })

    (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__/* .goRouter */ .GY)({
      key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.SEARCH_KEYWORD */ .Fh.SEARCH_KEYWORD,
      query: {
        keyword,
        tabType,
        pageNo,
        pageSize
      }
    }); // window.location.href = url
  }

  onTabChange(key) {
    let {
      keyword,
      pageNo,
      emojiPreNo,
      emoticonPreNo
    } = this.props;
    key === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? emoticonPreNo = pageNo : emojiPreNo = pageNo;
    (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_1__/* .goRouter */ .GY)({
      key: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.SEARCH_KEYWORD */ .Fh.SEARCH_KEYWORD,
      query: {
        keyword,
        tabType: key
      }
    }); // window.location.href = url
  }

  render() {
    const {
      pageList,
      total,
      tabType,
      pageNo,
      pageSize
    } = this.props;
    const {
      tabList
    } = this.state;
    const pageSizeOptions = tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? [30, 60, 90] : [12, 24, 36, 48];
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_MainContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "left-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {
          className: "card-container",
          activeTabKey: tabType,
          tabList: tabList,
          onTabChange: key => this.onTabChange(key),
          children: [tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_ImgWaterfall__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            imgList: pageList,
            id: pageNo,
            columnCount: 5
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {
            gutter: [16, 16],
            children: pageList.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {
              span: 6,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_EmotionCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                imgItem: item
              })
            }, index))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().pagination),
            showQuickJumper: true,
            pageSizeOptions: pageSizeOptions,
            pageSize: +pageSize,
            current: +pageNo,
            total: total,
            onChange: (pageNo, pageSize) => this.pageChange(pageNo, pageSize)
          })]
        })
      })
    });
  }

}

const getServerSideProps = async ctx => {
  let pageList = [];

  const _keyword = ctx.params._keyword.replace('.html', '') || '';

  const {
    pageNo = 1,
    pageSize = 0,
    emojiPreNo = 0,
    emoticonPreNo = 0,
    tabType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL
  } = ctx.query;
  const prePageNo = tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? +emojiPreNo : +emoticonPreNo;
  const {
    code,
    data,
    total
  } = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchSearchKeyword */ .RZ)({
    pageNo,
    // pageSize,
    // pageNo: prePageNo ? prePageNo : pageNo,
    pageSize: pageSize ? pageSize : tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? 30 : 12,
    keyword: _keyword,
    type: tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? 'emoji' : 'emoticon'
  });

  if (code === 1) {
    pageList = data;
  }

  return {
    props: {
      pageList,
      total,
      keyword: _keyword,
      tabType,
      pageNo,
      pageSize: pageSize ? pageSize : tabType === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOJI_DETAIL */ .Fh.EMOJI_DETAIL ? 30 : 12 // emojiPreNo, 
      // emoticonPreNo

    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emoji);

/***/ }),

/***/ 6279:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "keyword_pagination__Nqc95"
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [932,664,84,234,427,22], () => (__webpack_exec__(7440)));
module.exports = __webpack_exports__;

})();