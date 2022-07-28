exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 5639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4662);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_jumpLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9661);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: 表情详情底部组件
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:56:39
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:37:11
 */










class EmojiFooter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      vImgType: 'pre',
      vImgList: []
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      const {
        nextInfo,
        preInfo,
        type
      } = this.props;

      if (e.keyCode == 37 && preInfo.id) {
        (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_4__/* .goRouter */ .GY)({
          key: type,
          id: preInfo.id
        });
      }

      if (e.keyCode == 39 && nextInfo.id) {
        (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_4__/* .goRouter */ .GY)({
          key: type,
          id: nextInfo.id
        });
      }
    });
  }

  handleTitle(title) {
    const {
      type
    } = this.props;

    if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX) {}

    if (title) {
      return `: ${title}`;
    }
  }
  /**
   * 
   * @param visible 
   * @param vImgType pre-上一篇眼睛icon，next- 下一篇眼睛icon，img-图片容器关闭按钮
   * @returns 
   */


  setVisible(visible, vImgType) {
    const {
      nextInfo,
      preInfo,
      type
    } = this.props;
    const {
      imgList: preImgList = []
    } = preInfo;
    const {
      imgList: nextImgList = []
    } = nextInfo;
    let vImgList = [];

    if (vImgType == 'img') {
      this.setState({
        visible
      });
      return;
    }

    if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX) {
      vImgList = vImgType === 'pre' ? [preInfo] : [nextInfo];
    } else {
      vImgList = vImgType === 'pre' ? preImgList : nextImgList;
    }

    if (!vImgList || vImgList.length == 0) {
      antd__WEBPACK_IMPORTED_MODULE_3__.message.warning('诶，预览不了，好气~');
      return;
    }

    this.setState({
      visible,
      vImgList
    });
  }

  render() {
    const {
      visible,
      vImgList
    } = this.state;
    const {
      nextInfo,
      preInfo,
      type
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["footer-container"]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["btn-box"]),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn),
            shape: "round",
            disabled: !preInfo.id,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)({
                id: preInfo.id,
                key: type
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                title: nextInfo.title,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["btn-content"]),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LeftOutlined, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                    children: ["\u4E0A\u4E00\u7BC7", this.handleTitle(preInfo.title)]
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["eye-box"]),
            onClick: () => this.setVisible(true, 'pre'),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: ["\u9884\u89C8\u8868\u60C5\u70B9\u6211\uFF0C\u70B9\u6211", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SwapRightOutlined, {})]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.EyeOutlined, {})]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn),
            shape: "round",
            disabled: !nextInfo.id,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: (0,_utils_jumpLink__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)({
                id: nextInfo.id,
                key: type
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                title: nextInfo.title,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["btn-content"]),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                    children: ["\u4E0B\u4E00\u7BC7", this.handleTitle(nextInfo.title)]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.RightOutlined, {})]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["eye-box"]),
            onClick: () => this.setVisible(true, 'next'),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: ["\u9884\u89C8\u8868\u60C5\u70B9\u6211\uFF0C\u70B9\u6211", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SwapRightOutlined, {})]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.EyeOutlined, {})]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          style: {
            display: 'none'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Image.PreviewGroup, {
            preview: {
              visible,
              onVisibleChange: vis => this.setVisible(vis, 'img')
            },
            children: vImgList.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Image, {
              src: item.imgDataOriginal,
              alt: item.imgAlt,
              title: item.imgTitle
            }, index))
          }, "next")
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["des-box"]),
        children: "\u53CB\u60C5\u63D0\u793A\uFF1A\u6309 \u2190 \u2192 \u65B9\u5411\u952E\u53EF\u4EE5\u6362\u8868\u60C5\u5305\uFF0C\u9F20\u6807\u70B9\u51FB\u773C\u775B\u56FE\u6807\u53EF\u4EE5\u9884\u89C8\u8868\u60C5\u5305"
      })]
    });
  }

}

_defineProperty(EmojiFooter, "defaultProps", {
  type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_KEY.EMOTICON_INDEX */ .Fh.EMOTICON_INDEX
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiFooter);

/***/ }),

/***/ 4662:
/***/ ((module) => {

// Exports
module.exports = {
	"footer-container": "EmojiFooter_footer-container__Rc2jw",
	"btn-box": "EmojiFooter_btn-box__w2jHZ",
	"eye-box": "EmojiFooter_eye-box__KPhw3",
	"btn": "EmojiFooter_btn__o_C7f",
	"btn-content": "EmojiFooter_btn-content__c68dP",
	"des-box": "EmojiFooter_des-box__RzriE"
};


/***/ })

};
;