exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 22:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_EmotionCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/common/EmotionCard/index.module.scss
var index_module = __webpack_require__(7088);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/utils/jumpLink.ts
var jumpLink = __webpack_require__(9661);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5427);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
var icons_default = /*#__PURE__*/__webpack_require__.n(icons_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/Icon/Dashboard.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DashboardSvg = () => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M109.714286 512a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V219.428571a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v292.571429z m0 292.571429a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857v-73.142858a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v73.142858z m438.857143 0a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V585.142857a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v219.428572z m73.142857-658.285715a73.142857 73.142857 0 0 0-73.142857 73.142857v146.285715a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V219.428571a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571z"
  })
});

const DashboardIcon = (props, ref) => /*#__PURE__*/jsx_runtime_.jsx((icons_default()), _objectSpread({
  ref: ref,
  component: DashboardSvg
}, props));

/* harmony default export */ const Dashboard = (/*#__PURE__*/(0,external_react_.forwardRef)(DashboardIcon));
// EXTERNAL MODULE: ./src/components/common/ImgWaterfall/index.tsx + 5 modules
var ImgWaterfall = __webpack_require__(6528);
;// CONCATENATED MODULE: ./src/components/common/EmotionCard/index.tsx
function EmotionCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function EmotionCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EmotionCard_ownKeys(Object(source), true).forEach(function (key) { EmotionCard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EmotionCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EmotionCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-28 12:17:32
 */












class EmotionCard extends external_react_.Component {
  constructor(props) {
    super(props);

    EmotionCard_defineProperty(this, "myRef", void 0);

    this.myRef = /*#__PURE__*/external_react_default().createRef();
    this.state = {
      visible: false,
      positon: 'bottomLeft'
    };
  }

  componentDidMount() {
    this.handlePosition();
    window.addEventListener('scroll', () => {
      this.handlePosition();
    });
  }

  actionClick(type) {
    switch (type) {
      case 'like':
        external_antd_.message.success((0,utils/* randomMsgText */.WQ)());
        break;

      case 'eyes':
        this.setVisible(true);
        break;

      default:
        break;
    }

    const {
      imgItem: {
        imgDataOriginal
      }
    } = this.props;

    if (type === 'download') {
      window.open(imgDataOriginal);
    }
  }

  setVisible(visible) {
    this.setState({
      visible
    });
  }

  handleStyle(index) {
    const {
      imgItem: {
        imgList = []
      }
    } = this.props;
    let style = {
      width: '',
      height: '',
      marginBottom: '0'
    };

    if (imgList.length > 3) {
      switch (index) {
        case 0:
          style.width = '100%';
          style.height = '160px';
          style.marginBottom = '2px';
          break;

        default:
          style.width = `${236 / 3}px`;
          style.height = '78px';
          break;
      }
    }

    return style;
  }

  handleSize({
    index,
    type = 'width'
  }) {
    const {
      imgItem: {
        imgList = []
      }
    } = this.props;
    let width = 240;
    let height = 120;

    if (imgList.length > 3) {
      switch (index) {
        case 0:
          width = 240;
          height = 160;
          break;

        default:
          width = 236 / 3; // 中间留2px间距

          height = 78;
          break;
      }
    }

    return type === 'width' ? width : height;
  }
  /**
   * 处理下拉组件的位置
   */


  handlePosition() {
    let positon = 'bottomLeft';
    const dom = this.myRef.current;
    if (!dom) return;
    const top = dom.getBoundingClientRect().top;
    positon = top > 300 ? 'topRight' : 'bottomRight';
    this.setState({
      positon
    });
  }

  imgContent() {
    let {
      imgItem: {
        imgList = [],
        id
      }
    } = this.props;
    imgList = imgList.map(item => EmotionCard_objectSpread(EmotionCard_objectSpread({}, item), {}, {
      src: (0,utils/* transfromImgSrc */.Nt)({
        src: item.imgDataOriginal
      }) // src: item.imgDataOriginal

    }));

    const menu = /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (index_module_default())["dropdown-container"],
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (index_module_default())["waterfall-container"],
        children: /*#__PURE__*/jsx_runtime_.jsx(ImgWaterfall/* default */.Z, {
          imgList: imgList,
          id: id,
          columnCount: 3,
          columnGap: 2,
          rowGap: 2
        })
      })
    });

    return menu;
  }

  render() {
    const {
      imgItem: {
        imgList = [],
        title,
        count,
        id
      }
    } = this.props;
    const {
      positon
    } = this.state;
    const emotionList = [];
    imgList.map((item, index) => {
      if (index < 4) {
        emotionList.push(item);
      }
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (index_module_default())["img-card-container"],
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (index_module_default())["img-content"],
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: (0,jumpLink/* getPageUrl */.XW)({
            id,
            key: constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (index_module_default())["img-content-a"],
            children: emotionList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: this.handleStyle(index),
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Image, {
                className: (index_module_default())["img-item"],
                src: (0,utils/* transfromImgSrc */.Nt)({
                  src: item.imgDataOriginal
                }),
                alt: item.imgDes,
                title: item.imgTitle,
                width: this.handleSize({
                  index
                }),
                height: this.handleSize({
                  index,
                  type: 'height'
                }),
                preview: false
              })
            }, index))
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default())["img-detail"],
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).title,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: (0,jumpLink/* getPageUrl */.XW)({
                id,
                key: constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL
              }),
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                title: title,
                children: title
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
            className: (index_module_default())["dropdown-icon"],
            overlayClassName: "dropdown-container",
            overlay: this.imgContent(),
            placement: positon,
            destroyPopupOnHide: true // trigger={['click']}
            ,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: e => e.preventDefault(),
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Space, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Dashboard, {
                  ref: this.myRef,
                  className: (index_module_default())["icon-dashboard"]
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).des,
          children: [count, "\u5F20\u8868\u60C5"]
        })]
      })]
    });
  }

}

/* harmony default export */ const common_EmotionCard = (EmotionCard); // export default withTranslation('translation')(EmotionCard)

/***/ }),

/***/ 7088:
/***/ ((module) => {

// Exports
module.exports = {
	"img-card-container": "EmotionCard_img-card-container__zvrTM",
	"img-content-a": "EmotionCard_img-content-a__v_Mp5",
	"img-detail": "EmotionCard_img-detail__xCWio",
	"title": "EmotionCard_title__LqUPN",
	"des": "EmotionCard_des__6SDwP",
	"icon-dashboard": "EmotionCard_icon-dashboard__bD2TJ",
	"img-item": "EmotionCard_img-item__yTZEj",
	"card-meta": "EmotionCard_card-meta__Q8ZM2",
	"dropdown-icon": "EmotionCard_dropdown-icon__eEljO",
	"dropdown-container": "EmotionCard_dropdown-container__Q7v5U",
	"waterfall-container": "EmotionCard_waterfall-container__W2RP4"
};


/***/ })

};
;