(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "antd/lib/locale/zh_CN"
const zh_CN_namespaceObject = require("antd/lib/locale/zh_CN");
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/constants/config.ts
var config = __webpack_require__(3073);
// EXTERNAL MODULE: ./src/utils/jumpLink.ts
var jumpLink = __webpack_require__(9661);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/HtmlHead/index.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: html头部组件
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:31:20
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-20 22:46:46
 */









class HtmlHead extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      webKey: 'duck'
    };
  }

  componentDidMount() {
    const hostname = window.location.hostname;
    const webKey = hostname.indexOf('vip') > -1 ? 'vip' : 'duck';
    this.setState({
      webKey
    });
    router_.Router.events.on('routeChangeComplete', url => {
      window._hmt && window._hmt.push(['_trackPageview', url]);
    });

    if (hostname.indexOf('vip') > -1) {
      window.location.href = (0,jumpLink/* toDuck */.MJ)();
    }
  }

  getPageUrl() {
    const {
      router: {
        pathname = '/',
        asPath = ''
      }
    } = this.props;
    let url = config/* default.hostDomain */.Z.hostDomain;

    switch (pathname) {
      case '/emoticon/[_id]':
        url += asPath;
        break;

      case '/emoji/[_id]':
        url += asPath;
        break;

      default:
        break;
    }

    return url;
  }

  render() {
    const {
      htmlTitle
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [htmlTitle ? htmlTitle : constants/* HTML_TITLE */.zL, " - \u8868\u60C5\u9E2D - emojiduck.com"]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: htmlTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "site_name",
        content: "\u8868\u60C5\u9E2D_\u8868\u60C5\u5305_\u6597\u56FE\u8868\u60C5_emojiduck.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "article"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: this.getPageUrl()
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: htmlTitle ? `${htmlTitle}_斗图表情包，${constants/* HTML_DES */.wX}` : constants/* HTML_DES */.wX
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "Keywords",
        content: htmlTitle ? `${htmlTitle}_斗图表情包，${constants/* HTML_KEY */.vs}` : constants/* HTML_KEY */.vs
      }, "Keywords"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: htmlTitle ? `${htmlTitle}_斗图表情包，${constants/* HTML_DES */.wX}` : constants/* HTML_DES */.wX
      }, "description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "360-site-verification",
        content: "272fe5f5aee3e1dc4e2ba25e6fe22748"
      }), this.state.webKey === 'duck' ? /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "baidu-site-verification",
        content: "code-3xYnqoEwda"
      }) : /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "baidu-site-verification",
        content: "code-J5lc6gXrMs"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: (0,constants/* BD_TAG */.cx)(this.state.webKey)
      })]
    });
  }

} // export default HtmlHead


_defineProperty(HtmlHead, "defaultProps", {
  htmlTitle: ''
});

/* harmony default export */ const components_HtmlHead = ((0,router_.withRouter)(HtmlHead));
// EXTERNAL MODULE: ./src/components/PageHead/index.module.scss
var index_module = __webpack_require__(7910);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/PageHead/Search.module.scss
var Search_module = __webpack_require__(9266);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5427);
;// CONCATENATED MODULE: ./src/utils/storage.ts
/*
 * @Descripttion: 本地存储
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:55:22
 */

/**
 * 相关key说明
 * pc_ssr_nav_history - 头部搜索历史
 */


/**
 * 存入本地local
 * @param param0 
 */
const setLocalItem = ({
  key,
  value
}) => {
  window.localStorage.setItem(key, value);
};
/**
 * 获取本地local
 * @returns 
 */


const getLocalItem = ({
  key
}) => {
  const item = window.localStorage.getItem(key) || '';
  return (0,utils/* isJson */.sO)(item) ? JSON.parse(item) : item;
};

const removeLocalItem = ({
  key
}) => {
  window.localStorage.removeItem(key);
};


// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(4036);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./src/components/PageHead/Search.tsx











let timer = null;
class Search_PageHead extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      showSearch: false,
      isSearch: false,
      searchHistory: [],
      emojiList: [],
      emoticonList: [],
      tabList: [{
        tab: '表情',
        key: constants/* PAGE_KEY.EMOJI_DETAIL */.Fh.EMOJI_DETAIL
      }, {
        tab: '表情包',
        key: constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL
      }, {
        tab: 'DIY表情',
        key: 'diy'
      }],
      tabType: constants/* PAGE_KEY.EMOJI_DETAIL */.Fh.EMOJI_DETAIL
    }; // this.inputFlag = 0
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      const {
        showSearch,
        keyword
      } = this.state;

      if (e.keyCode == 13 && showSearch && keyword) {
        this.handleSearch();
      }
    });
  }

  async searchApi() {
    const {
      keyword
    } = this.state;

    try {
      const {
        code,
        data
      } = await (0,api/* fetchSearchKeyword */.RZ)({
        keyword,
        type: 'all',
        pageSize: 10
      });

      if (code === 1 && data) {
        const {
          emoji = [],
          emoticon = []
        } = data;
        this.setState({
          emojiList: emoji,
          emoticonList: emoticon
        });
      }
    } catch (error) {
      console.log('----searchApi', error);
    }
  }

  setShowModel(showSearch) {
    const {
      keyword,
      emojiList
    } = this.state;
    this.setState({
      keyword: showSearch ? keyword : '',
      emojiList: showSearch ? emojiList : [],
      isSearch: false,
      showSearch,
      searchHistory: typeof getLocalItem({
        key: 'pc_ssr_nav_history'
      }) === 'object' ? getLocalItem({
        key: 'pc_ssr_nav_history'
      }) : []
    });
  }
  /**
   * 处理搜索
   */


  handleSearch() {
    const {
      keyword,
      searchHistory = []
    } = this.state;
    if (!keyword) return;
    const index = searchHistory.findIndex(item => item === keyword);
    const list = index > -1 ? searchHistory : [keyword, ...searchHistory].slice(0, 10);
    setLocalItem({
      key: 'pc_ssr_nav_history',
      value: JSON.stringify(list)
    });
    this.searchApi();
    this.setState({
      searchHistory: list,
      isSearch: true
    });
  }
  /**
   * 处理点击搜索历史item
   */


  async handleHistoryClick(item) {
    await this.setState({
      keyword: item
    });
    this.handleSearch();
  }
  /**
   * 搜索框输入事件
   */


  handleInputChange(e) {
    const keyword = e.target.value;
    this.setState({
      keyword,
      isSearch: keyword.length !== 0
    });
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.handleSearch();
    }, 500);
  }
  /**
   * 获取当前搜索展示tabData
   */


  handleTabeData() {
    let list = [];
    const {
      tabType,
      emojiList,
      emoticonList
    } = this.state;

    switch (tabType) {
      case constants/* PAGE_KEY.EMOJI_DETAIL */.Fh.EMOJI_DETAIL:
        list = emojiList;
        break;

      case constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL:
        list = emoticonList;
        break;

      default:
        break;
    }

    return list;
  }
  /**
   * 匹配到搜索后的字段
   */


  matchText(item) {
    const {
      keyword,
      tabType
    } = this.state;
    const {
      imgDes = '',
      title = '',
      count = 0
    } = item;
    const regExp = new RegExp(keyword, 'g');
    const str = tabType === constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL ? `${title} - ${count}张` : imgDes;
    const html = str.replace(regExp, `<span>${keyword}</span>`);
    return html;
  }
  /**
   * 删除对应下标的搜索历史记录
   */


  deleteHistory(index) {
    const {
      searchHistory = []
    } = this.state;
    const list = searchHistory.slice(index + 1);
    this.setState({
      searchHistory: list
    });
  }

  render() {
    const {
      searchHistory,
      emojiList,
      tabList,
      showSearch,
      keyword,
      tabType,
      isSearch
    } = this.state;
    const tabData = this.handleTabeData();
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Search_module_default())["search-container"],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Search_module_default())["nav-search"],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Search_module_default())["nav-input"],
          onClick: () => this.setShowModel(true),
          children: "\u8BF7\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u8868\u60C5~"
        }), /*#__PURE__*/jsx_runtime_.jsx(icons_.SearchOutlined, {
          className: (Search_module_default())["search-icon"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: showSearch ? (Search_module_default())["search-model"] : `${(Search_module_default())["search-model"]} ${(Search_module_default())["no-show"]}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Search_module_default())["model-input"],
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
              className: (Search_module_default())["search-input"],
              placeholder: "\u8BF7\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u8868\u60C5~",
              style: {
                left: showSearch ? '0' : '50px'
              },
              value: keyword,
              onChange: e => this.handleInputChange(e)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.SearchOutlined, {
                className: `${(Search_module_default()).icon} icon-search`,
                onClick: () => this.handleSearch()
              }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseOutlined, {
                className: (Search_module_default()).icon,
                onClick: () => this.setShowModel(false)
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              display: showSearch ? 'block' : 'none'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Search_module_default()).line
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Search_module_default())["model-content"],
              children: isSearch ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Search_module_default())["content-wrap"],
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Search_module_default()).title,
                  children: tabList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: item.key === tabType ? (Search_module_default()).active : '',
                    onClick: () => this.setState({
                      tabType: item.key
                    }),
                    children: item.tab
                  }, index))
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Search_module_default()).content,
                  children: tabData.length ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (Search_module_default())["content-search"],
                      children: tabData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: (Search_module_default())["content-item"],
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: (0,jumpLink/* getPageUrl */.XW)({
                            id: item.id,
                            key: tabType
                          }),
                          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                            dangerouslySetInnerHTML: {
                              __html: this.matchText(item)
                            }
                          })
                        })
                      }, index))
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (Search_module_default())["more-wrap"],
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: (Search_module_default()).line
                      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: (Search_module_default())["more-btn"],
                        href: (0,jumpLink/* getPageUrl */.XW)({
                          key: constants/* PAGE_KEY.SEARCH_KEYWORD */.Fh.SEARCH_KEYWORD,
                          query: {
                            keyword,
                            tabType
                          }
                        }),
                        children: "\u67E5\u770B\u66F4\u591A"
                      })]
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Empty, {
                    image: external_antd_.Empty.PRESENTED_IMAGE_SIMPLE
                  })
                })]
              }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Search_module_default())["history-wrap"],
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (Search_module_default())["history-title"],
                  children: ["\u641C\u7D22\u5386\u53F2", /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {
                    className: (Search_module_default()).icon,
                    onClick: () => {
                      this.setState({
                        searchHistory: []
                      });
                    }
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Search_module_default())["history-content"],
                  children: searchHistory.length ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: searchHistory.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (Search_module_default())["history-item"],
                      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                        onClick: () => this.handleHistoryClick(item),
                        children: item
                      }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseOutlined, {
                        className: (Search_module_default()).icon,
                        onClick: () => this.deleteHistory(index)
                      })]
                    }, index))
                  }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Empty, {
                    image: external_antd_.Empty.PRESENTED_IMAGE_SIMPLE
                  })
                })]
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Search_module_default()).mask,
          style: {
            display: showSearch ? 'block' : 'none'
          },
          onClick: () => this.setShowModel(false)
        })]
      })
    });
  }

}
;// CONCATENATED MODULE: ./src/components/PageHead/index.tsx
/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:41:40
 * @Descripttion: 
 */








class PageHead extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      tabList: [{
        label: '主页',
        key: constants/* PAGE_KEY.HOME */.Fh.HOME
      }, {
        label: '表情包',
        key: constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX
      }]
    };
  }

  tabClick(item) {
    const {
      key
    } = item;
    (0,jumpLink/* goRouter */.GY)({
      key
    });
  }

  handleActiveKey() {
    const {
      pathname = '/'
    } = this.props.pageParams;
    let activeKey = constants/* PAGE_KEY.HOME */.Fh.HOME;

    switch (pathname) {
      case '/':
        activeKey = constants/* PAGE_KEY.HOME */.Fh.HOME;
        break;

      case '/emoticon/index.html':
        activeKey = constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX;
        break;

      case '/emoticon/[_id]':
        activeKey = constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX;
        break;

      default:
        activeKey = '';
        break;
    }

    return activeKey;
  }

  render() {
    const {
      Header
    } = external_antd_.Layout;
    const {
      tabList
    } = this.state;
    return /*#__PURE__*/jsx_runtime_.jsx(Header, {
      className: (index_module_default())["page-head"],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default())["page-container"],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default())["tab-ul"],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
            mode: "horizontal",
            selectedKeys: [`${this.handleActiveKey()}`],
            items: tabList,
            onClick: item => this.tabClick(item)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Search_PageHead, {})]
      })
    });
  }

}
// EXTERNAL MODULE: ./src/components/PageFooter/index.module.scss
var PageFooter_index_module = __webpack_require__(4857);
var PageFooter_index_module_default = /*#__PURE__*/__webpack_require__.n(PageFooter_index_module);
;// CONCATENATED MODULE: ./src/components/PageFooter/index.tsx
/*
 * @Descripttion: 公用页脚
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 16:50:39
 */







class PageFooter extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const hostname = window.location.hostname;
    const webKey = hostname.indexOf('vip') > -1 ? 'vip' : 'duck';
  }

  render() {
    const {
      Footer
    } = external_antd_.Layout;
    return /*#__PURE__*/jsx_runtime_.jsx(Footer, {
      className: (PageFooter_index_module_default()).footer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (PageFooter_index_module_default())["footer-content"],
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PageFooter_index_module_default())["footer-item"],
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u5173\u4E8E\u8868\u60C5\u9E2D:"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u8868\u60C5\u9E2D(emojiduck.com)\uFF0C\u6709\u8DA3\u7684\u8868\u60C5\u5305\u7F51\u7AD9\u3002"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u804A\u5929\u6597\u56FE/\u6709\u8DA3\u8868\u60C5\u5305/\u8868\u60C5DIY/\u6765\u300C\u8868\u60C5\u9E2D\u300D\u5C31\u591F\u4E86\u3002"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u7248\u6743\u7533\u660E:"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u672C\u7AD9\u8D44\u6E90\u5747\u6765\u6E90\u4E8E\u4E92\u8054\u7F51\uFF0C\u7248\u6743\u5F52\u539F\u4F5C\u8005\u6240\u6709\u3002"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u5982\u4FB5\u72AF\u60A8\u7684\u6743\u76CA\uFF0C\u8BF7\u53CA\u65F6\u8054\u7CFB\u6211\u4EEC\u5904\u7406\u3002"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PageFooter_index_module_default())["footer-item"],
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u8054\u7CFB\u65B9\u5F0F:"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "edc.woker@gmail.com"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: (PageFooter_index_module_default())["a-ba"],
              href: "https://beian.miit.gov.cn",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/assets/img/icon/icon-ba.png",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: constants/* WEB_NO */.V5
              })]
            })
          })]
        })]
      })
    });
  }

}

/* harmony default export */ const components_PageFooter = (PageFooter);
// EXTERNAL MODULE: ./src/components/Breadcrumb/index.module.scss
var Breadcrumb_index_module = __webpack_require__(7237);
var Breadcrumb_index_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumb_index_module);
;// CONCATENATED MODULE: ./src/components/Breadcrumb/index.tsx
/*
 * @Descripttion: 公用面包屑
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 18:35:28
 */







class PageBreadcrumb extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadList: []
    };
  }

  componentDidMount() {
    this.handleBread();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageParams !== prevProps.pageParams) {
      this.handleBread();
    }
  }

  handleBread() {
    const {
      pathname,
      htmlTitle,
      keyword,
      id,
      pId
    } = this.props.pageParams;
    let breadList = [];

    switch (pathname) {
      case '/':
        breadList = [];
        break;

      case (0,constants/* PAGE_PATH_NAME */.gq)({
        key: 'EMOTICON_INDEX'
      }):
        breadList = [{
          label: '主页',
          key: constants/* PAGE_KEY.HOME */.Fh.HOME
        }, {
          label: '表情包',
          key: constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX
        }];
        break;

      case (0,constants/* PAGE_PATH_NAME */.gq)({
        key: 'EMOTICON_DETAIL'
      }):
        breadList = [{
          label: '主页',
          key: constants/* PAGE_KEY.HOME */.Fh.HOME
        }, {
          label: '表情包',
          key: constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX
        }, {
          id,
          label: htmlTitle,
          key: constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL
        }];
        break;

      case (0,constants/* PAGE_PATH_NAME */.gq)({
        key: 'EMOJI_DETAIL'
      }):
        breadList = [{
          label: '主页',
          key: constants/* PAGE_KEY.HOME */.Fh.HOME
        }, {
          label: '表情包',
          key: constants/* PAGE_KEY.EMOTICON_INDEX */.Fh.EMOTICON_INDEX
        }, {
          label: '表情包详情',
          key: constants/* PAGE_KEY.EMOTICON_DETAIL */.Fh.EMOTICON_DETAIL,
          id: pId
        }, {
          label: htmlTitle,
          key: constants/* PAGE_KEY.EMOJI_DETAIL */.Fh.EMOJI_DETAIL,
          id
        }];
        break;

      case (0,constants/* PAGE_PATH_NAME */.gq)({
        key: 'SEARCH_KEYWORD'
      }):
        breadList = [{
          label: '主页',
          key: constants/* PAGE_KEY.HOME */.Fh.HOME
        }, {
          label: `搜索：${keyword}`,
          key: constants/* PAGE_KEY.SEARCH_KEYWORD */.Fh.SEARCH_KEYWORD,
          keyword
        }];
        break;

      default:
        break;
    }

    this.setState({
      breadList
    });
  }

  render() {
    const {
      breadList = []
    } = this.state;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Breadcrumb_index_module_default())["breadcrumb-container"],
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Breadcrumb, {
        className: breadList.length ? (Breadcrumb_index_module_default()).breadcrumb : '',
        children: breadList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Breadcrumb.Item, {
          className: (Breadcrumb_index_module_default())["breadcrumb-item"],
          onClick: () => (0,jumpLink/* goRouter */.GY)({
            key: item.key,
            id: item.id,
            query: {
              keyword: item.keyword
            }
          }),
          children: item.label
        }, index))
      })
    });
  }

}

/* harmony default export */ const Breadcrumb = (PageBreadcrumb);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: EdisonGu
 * @Date: 2022-07-02 23:48:12
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 16:47:15
 * @Descripttion: 
 */














function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  const {
    Content
  } = external_antd_.Layout;
  const {
    id = '',
    pId = '',
    keyword = '',
    htmlTitle = ''
  } = pageProps;
  const {
    pathname = '/',
    asPath = ''
  } = router;
  const pageParams = {
    id,
    pId,
    keyword,
    htmlTitle,
    pathname,
    asPath
  };
  external_antd_.message.config({
    top: 100,
    maxCount: 5
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.ConfigProvider, {
    locale: (zh_CN_default()),
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_HtmlHead, {
      htmlTitle: htmlTitle
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageHead, {
        pageParams: pageParams
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
        style: {
          marginTop: 74
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb, {
          pageParams: pageParams
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_PageFooter, {})]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7237:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb-container": "Breadcrumb_breadcrumb-container__vxpyN",
	"breadcrumb": "Breadcrumb_breadcrumb__09OZ1",
	"breadcrumb-item": "Breadcrumb_breadcrumb-item__0rkgr"
};


/***/ }),

/***/ 4857:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "PageFooter_footer__pjcU3",
	"footer-content": "PageFooter_footer-content__T3wck",
	"footer-item": "PageFooter_footer-item__OqVpt",
	"a-ba": "PageFooter_a-ba__HKFXp"
};


/***/ }),

/***/ 9266:
/***/ ((module) => {

// Exports
module.exports = {
	"search-container": "Search_search-container__D9v0T",
	"nav-search": "Search_nav-search__CvXHW",
	"nav-input": "Search_nav-input__aHhXY",
	"icon-search": "Search_icon-search__spAce",
	"search-model": "Search_search-model__QceJt",
	"no-show": "Search_no-show__N5WHh",
	"model-input": "Search_model-input__kwdk0",
	"model-content": "Search_model-content__5g786",
	"content-wrap": "Search_content-wrap__mPhFS",
	"history-wrap": "Search_history-wrap__IhXsU",
	"history-title": "Search_history-title__42PWq",
	"history-content": "Search_history-content__1zjPT",
	"history-item": "Search_history-item__2e3bY",
	"icon": "Search_icon__KNstu",
	"title": "Search_title__fthXK",
	"active": "Search_active__oM8Fm",
	"content": "Search_content__MQbVV",
	"content-search": "Search_content-search__IExoP",
	"more-btn": "Search_more-btn__3OetL",
	"content-item": "Search_content-item__LRO8x",
	"search-input": "Search_search-input__yksOq",
	"line": "Search_line__6xq3J",
	"mask": "Search_mask__vmDAl"
};


/***/ }),

/***/ 7910:
/***/ ((module) => {

// Exports
module.exports = {
	"page-head": "PageHead_page-head__cDjLA",
	"logo": "PageHead_logo__svduF",
	"page-container": "PageHead_page-container__jo2P2",
	"tab-ul": "PageHead_tab-ul__9IlI4",
	"active": "PageHead_active__NSxwh"
};


/***/ }),

/***/ 4722:
/***/ (() => {



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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [84,427], () => (__webpack_exec__(6825)));
module.exports = __webpack_exports__;

})();