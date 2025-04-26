
        export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
          var org_app_require = $app_require$;
        
          (function(global, globalThis, window, $app_exports$, $app_evaluate$){
            var setTimeout = global.setTimeout;
            var setInterval = global.setInterval;
            var clearTimeout = global.clearTimeout;
            var clearInterval = global.clearInterval;
            var $app_require$ = global.$app_require$ || org_app_require

            // 转换动态 style 的函数
            var $translateStyle$ = function (value) {
              if (typeof value === 'string') {
                return Object.fromEntries(value.split(';').filter(item => Boolean(item && item.trim())).map(
                  item => {
                    const matchs = item.match(/([^:]+):(.*)/)
                    if (matchs && matchs.length> 2) {
                      return [matchs[1].trim().replace(/-([a-z])/g, (_, match) => match.toUpperCase()), matchs[2].trim()]
                    }
                    return []
                  }))}
              return value
            }
        
            var createPageHandler = function() {
              return (() => { // webpackBootstrap
var __webpack_modules__ = ({});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.4")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.3.4";

})();
/************************************************************************/

/*!**********************************************!*\
  !*** ./src/pages/index/index.ux?uxType=page ***!
  \**********************************************/
var $app_style$ = [[[[0,"html"]],{"width":"100%","height":"100%","marginTop":"0","marginRight":"0","marginBottom":"0","marginLeft":"0","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","overflow":"hidden"}],[[[0,"body"]],{"width":"100%","height":"100%","marginTop":"0","marginRight":"0","marginBottom":"0","marginLeft":"0","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","overflow":"hidden"}],[[[0,"page"]],{"width":"100%","height":"100%","position":"relative","flexDirection":"column","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","marginTop":"0","marginRight":"0","marginBottom":"0","marginLeft":"0"}],[[[0,"bg-image"]],{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","backgroundImage":"/common/bak.jpg","backgroundSize":"cover","backgroundRepeat":"no-repeat","opacity":0.6,"zIndex":0}],[[[0,"list-item-container"]],{"display":"flex","flexDirection":"row","justifyContent":"space-between","alignItems":"center","paddingTop":"20px","paddingRight":"15px","paddingBottom":"20px","paddingLeft":"15px","borderBottomWidth":"1px","borderBottomStyle":"solid","borderBottomColor":"#eee","width":"100%"}],[[[0,"left-column"]],{"flexGrow":1,"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start","paddingTop":"0px","paddingRight":"40px","paddingBottom":"0px","paddingLeft":"40px"}],[[[0,"right-column"]],{"flex":"0 0 80px","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"0px","paddingRight":"35px","paddingBottom":"0px","paddingLeft":"35px"}],[[[0,"text"]],{"color":"#ffffff"}],[[[0,"header"]],{"width":"100%","flexDirection":"column","alignItems":"center","zIndex":1}],[[[0,"current-time"]],{"fontSize":"36px","marginBottom":"5px"}],[[[0,"forecast-title"]],{"fontSize":"32px","color":"#eeeeee"}],[[[0,"weather-list"]],{"flex":1,"width":"100%","zIndex":1}],[[[0,"list-item"]],{"width":"100%","height":"150px","marginBottom":"15px"}],[[[0,"data"]],{"fontSize":"40px","color":"#ffffff","marginBottom":"5px","fontWeight":"bold","textShadow":"1px 1px 2px rgba(0,0,0,0.5)"}],[[[0,"temperature"]],{"fontSize":"40px","color":"#ffffff","fontWeight":"bold","textShadow":"1px 1px 2px rgba(0,0,0,0.5)"}],[[[0,"weather-icon"]],{"width":"90px","height":"90px"}]]
var $app_script$ = function __scriptModule__(module, exports, $app_require$) {	"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import fetch from '@system.fetch';
var _default = exports.default = {
  private: {
    currentTime: '12:00',
    // 初始时间
    forecastTitle: '未来天气',
    // 编造的天气数据列表 [T35](2) [T38](3)
    weatherList: [{
      day: '今天',
      tempHigh: '23',
      tempLow: '9',
      icon: '/common/cloudy-light.png'
    }, {
      day: '明天',
      tempHigh: '22',
      tempLow: '7',
      icon: '/common/moderate rain.png'
    }, {
      day: '周三',
      tempHigh: '24',
      tempLow: '10',
      icon: '/common/Sand blowing.png'
    }, {
      day: '周四',
      tempHigh: '25',
      tempLow: '10',
      icon: '/common/cloudy-light.png'
    }, {
      day: '周五',
      tempHigh: '26',
      tempLow: '12',
      icon: '/common/sunny-light.png'
    }, {
      day: '周六',
      tempHigh: '24',
      tempLow: '11',
      icon: '/common/sunny-light.png'
    }, {
      day: '周日',
      tempHigh: '3',
      tempLow: '-8',
      icon: '/common/snow.png'
    } // 添加更多数据以测试滑动
    ]
  },
  // onReady() {
  //   let key = '<你的key>';
  //   // location，这里使用的是武汉的code
  //   // 更多的location code可以查看：https://github.com/qwd/LocationList
  //   fetch.fetch({
  //     url: `https://devapi.qweather.com/v7/weather/now?location=101200101&key=${key}`
  //   }).then(res => {
  //     const result = res.data;
  //     console.log('返回的数据:', JSON.stringify(result.data, null, 2));
  //     this.weather = result.data.now;
  //   }).catch(error => {
  //     console.log(`数据请求失败:`, error);
  //   })
  // },
  onInit() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      this.currentTime = `${hours}:${minutes}`;
    }, 60000); // 每分钟更新一次
  },
  toListPage(itemData) {
    // 修改这里，添加参数 itemData
    console.log("Navigating to detail with data:", JSON.stringify(itemData)); // 调试日志
    _system.default.push({
      uri: '/pages/detail',
      params: {
        day: itemData.day,
        tempHigh: itemData.tempHigh,
        tempLow: itemData.tempLow,
        icon: itemData.icon
      }
    });
  }
};


  const moduleOwn = exports.default || module.exports
  const accessors = ['public', 'protected', 'private']

  if (moduleOwn.data && accessors.some(function (acc) { return moduleOwn[acc] })) {
    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称')
  }
  else if (!moduleOwn.data) {
    moduleOwn.data = {}
    moduleOwn._descriptor = {}
    accessors.forEach(function (acc) {
      const accType = typeof moduleOwn[acc]
      if (accType === 'object') {
        moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc])
        for (const name in moduleOwn[acc]) {
          moduleOwn._descriptor[name] = { access: acc }
        }
      }
      else if (accType === 'function') {
        console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象')
      }
    })
  }

}
var $app_template$ = function (vm) {
      const _vm_ = vm || this
      return aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["page"]}}, [aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["bg-image"]}}, []),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["header"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["current-time"],
"value":function() { return _vm_.currentTime }}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["forecast-title"],
"value":function() { return _vm_.forecastTitle }}}, [])]),
aiot.__ce__("list", {"__vm__":_vm_,
"__opts__":{"classList":["weather-list"]}}, [aiot.__cf__({"__vm__":_vm_,
"__opts__":{"exp":function() { return _vm_.weatherList },
"key":"$idx",
"value":"$item"}}, function($idx, $item, ){
          return [aiot.__ce__("list-item", {"__vm__":_vm_,
"__opts__":{"type":"forecast",
"classList":["list-item"]}}, [aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["list-item-container"],
"events":{"click":function(evt) { return _vm_.toListPage($item, evt) }}}}, [aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["left-column"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["data"],
"value":function() { return $item.day }}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["temperature"],
"value":function() { return ($item.tempHigh) + "°/" + ($item.tempLow) + "°" }}}, [])]),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["right-column"]}}, [aiot.__ce__("image", {"__vm__":_vm_,
"__opts__":{"classList":["weather-icon"],
"src":function() { return $item.icon }}}, [])])])])]
        })])])

    }
$app_exports$['entry'] = function ($app_exports$) {
$app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
}
})()
;
            }
        
            return createPageHandler();
          })(global, globalThis, window, $app_exports$, $app_evaluate$)
        }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3doZWF0aGVyL3NyYy9wYWdlcy9pbmRleC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPCEtLSDnoa7kv53miYDmnInlhoXlrrnpg73lnKjov5nkuIDkuKrmoLkgZGl2IOWGhSAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJnLWltYWdlXCI+PC9kaXY+XHJcbiAgICA8IS0tIOmhtumDqOS/oeaBryAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJjdXJyZW50LXRpbWVcIj57eyBjdXJyZW50VGltZSB9fTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJmb3JlY2FzdC10aXRsZVwiPnt7IGZvcmVjYXN0VGl0bGUgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOWkqeawlOmihOaKpeWIl+ihqCAtLT5cclxuICAgIDxsaXN0IGNsYXNzPVwid2VhdGhlci1saXN0XCI+XHJcbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cImZvcmVjYXN0XCIgZm9yPVwie3sgd2VhdGhlckxpc3QgfX1cIiBjbGFzcz1cImxpc3QtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCIgb25jbGljaz1cInRvTGlzdFBhZ2UoJGl0ZW0pXCI+XHJcbiAgICAgICAgICA8IS0tIOW3puS+p+WIl++8muWMheWQq+aXpeacn+WSjOa4qeW6piAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRhdGFcIj57eyAkaXRlbS5kYXkgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGVtcGVyYXR1cmVcIj57eyAkaXRlbS50ZW1wSGlnaCB9fcKwL3t7ICRpdGVtLnRlbXBMb3cgfX3CsDwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSDlj7PkvqfliJfvvJrljIXlkKvlpKnmsJTlm77moIcgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cIndlYXRoZXItaWNvblwiIHNyYz1cInt7ICRpdGVtLmljb24gfX1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDwhLS0gbGlzdC1pdGVtLWNvbnRhaW5lciDnmoTnu5PmnZ/moIfnrb4gLS0+XHJcbiAgICAgIDwvbGlzdC1pdGVtPlxyXG4gICAgPC9saXN0PlxyXG4gIDwvZGl2PiA8IS0tIHBhZ2UgKOagueWFg+e0oCkg55qE57uT5p2f5qCH562+IC0tPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcblxyXG48c3R5bGU+XHJcbiAgLyog5Z+656GA5qC35byPICovXHJcbi5odG1sLCAuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiAgLnBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwOyAvKiDlsJ3or5Xmt7vliqAgKi9cclxuICBtYXJnaW46IDA7ICAvKiDlsJ3or5Xmt7vliqAgKi9cclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2NvbW1vbi9iYWsuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7ICovXHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyog5rC05bmz5o6S5YiXICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIOS4pOerr+Wvuem9kCAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyog5Lqk5Y+J6L2077yI5Z6C55u077yJ5bGF5LitICovXHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7IC8qIOWinuWKoOS4iuS4i+WGhei+uei3ne+8jOiwg+aVtOaVtOS9k+Wkp+Wwj+aEnyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuICAubGVmdC1jb2x1bW4ge1xyXG4gIC8qIOWFgeiuuOivpeWIl+agueaNrumcgOimgeWinumVvyAqL1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvKiDnp7vpmaQgZmxleDogMSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyog5qC55o2u6ZyA6KaB5a+56b2Q5paH5pysICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyog5YaF6YOo5YWD57Sg5Z6C55u05o6S5YiXICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIOS9v+aXpeacn+WSjOa4qeW6puS9nOS4uuS4gOS4quaVtOS9k+WcqOWeguebtOaWueWQkeWxheS4rSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiDkvb/ml6XmnJ/lkozmuKnluqbmlofmnKzlt6blr7npvZAgKi9cclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbHVtbiB7XHJcbiAgICBmbGV4OiAwIDAgODBweDsgLyog6K6+572u5LiA5Liq5Z+656GA5a695bqm77yM5L6L5aaCODBweO+8jOS4jeS8uOe8qSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiDmsLTlubPlsYXkuK3lhoXpg6jlhYPntKAgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIOWeguebtOWxheS4reWGhemDqOWFg+e0oCAqL1xyXG4gICAgcGFkZGluZzogMHB4IDM1cHg7IC8qIOWIl+ihqOmhueWGhemDqOW3puWPs+i+uei3nSAqL1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovIC8qIOiwg+ivleeUqCAqL1xyXG59XHJcblxyXG5cclxuICAudGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyog6buY6K6k5paH5a2X6aKc6Imy5Li655m96ImyICovIFxyXG4gIH1cclxuXHJcbiAgLyog6aG26YOo5L+h5oGv5qC35byPICovXHJcbiAgLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIOerluWQkeaOkuWIlyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyog5rC05bmz5bGF5LitICovXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyNXB4OyAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50LXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcmVjYXN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjZWVlZWVlOyBcclxuICB9XHJcblxyXG4gIC8qIOWkqeawlOWIl+ihqOagt+W8jyAqL1xyXG4gIC53ZWF0aGVyLWxpc3Qge1xyXG4gICAgZmxleDogMTsgLyog5Y2g5o2u5Ymp5L2Z56m66Ze0ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAubGlzdC1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDsgLyog5YiX6KGo6aG56auY5bqmICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiDliJfooajpobnpl7Tot50gKi9cclxuICB9XHJcblxyXG4uZGF0YSB7XHJcbiAgZm9udC1zaXplOiA0MHB4OyAvKiDosIPmlbTlrZfkvZPlpKflsI8gKi9cclxuICBjb2xvcjogI2ZmZmZmZjsgLyog56Gu5L+d6aKc6ImyICovXHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyAvKiDmt7vliqDlupXpg6jovrnot53vvIzkuI7muKnluqbliIbpmpTlvIAgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4udGVtcGVyYXR1cmUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgLyog6LCD5pW05a2X5L2T5aSn5bCPICovXHJcbiAgY29sb3I6ICNmZmZmZmY7IC8qIOWPr+S7peiuvue9ruS4jeWQjOminOiJsiAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbiAgLndlYXRoZXItaWNvbiB7XHJcbiAgICB3aWR0aDogOTBweDsgLyog5Zu+5qCH5a695bqmICovXHJcbiAgICBoZWlnaHQ6IDkwcHg7IC8qIOWbvuagh+mrmOW6piAqL1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcclxuICAvLyBpbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJpdmF0ZToge1xyXG4gICAgICBjdXJyZW50VGltZTogJzEyOjAwJywgLy8g5Yid5aeL5pe26Ze0XHJcbiAgICAgIGZvcmVjYXN0VGl0bGU6ICfmnKrmnaXlpKnmsJQnLFxyXG4gICAgICAvLyDnvJbpgKDnmoTlpKnmsJTmlbDmja7liJfooaggW1QzNV0oMikgW1QzOF0oMylcclxuICAgICAgd2VhdGhlckxpc3Q6IFtcclxuICAgICAgICB7IGRheTogJ+S7iuWkqScsIHRlbXBIaWdoOiAnMjMnLCB0ZW1wTG93OiAnOScsIGljb246ICcvY29tbW9uL2Nsb3VkeS1saWdodC5wbmcnIH0sIFxyXG4gICAgICAgIHsgZGF5OiAn5piO5aSpJywgdGVtcEhpZ2g6ICcyMicsIHRlbXBMb3c6ICc3JywgaWNvbjogJy9jb21tb24vbW9kZXJhdGUgcmFpbi5wbmcnIH0sIFxyXG4gICAgICAgIHsgZGF5OiAn5ZGo5LiJJywgdGVtcEhpZ2g6ICcyNCcsIHRlbXBMb3c6ICcxMCcsIGljb246ICcvY29tbW9uL1NhbmQgYmxvd2luZy5wbmcnIH0sIFxyXG4gICAgICAgIHsgZGF5OiAn5ZGo5ZubJywgdGVtcEhpZ2g6ICcyNScsIHRlbXBMb3c6ICcxMCcsIGljb246ICcvY29tbW9uL2Nsb3VkeS1saWdodC5wbmcnIH0sXHJcbiAgICAgICAgeyBkYXk6ICflkajkupQnLCB0ZW1wSGlnaDogJzI2JywgdGVtcExvdzogJzEyJywgaWNvbjogJy9jb21tb24vc3VubnktbGlnaHQucG5nJyB9LFxyXG4gICAgICAgIHsgZGF5OiAn5ZGo5YWtJywgdGVtcEhpZ2g6ICcyNCcsIHRlbXBMb3c6ICcxMScsIGljb246ICcvY29tbW9uL3N1bm55LWxpZ2h0LnBuZycgfSxcclxuICAgICAgICB7IGRheTogJ+WRqOaXpScsIHRlbXBIaWdoOiAnMycsIHRlbXBMb3c6ICctOCcsIGljb246ICcvY29tbW9uL3Nub3cucG5nJyB9IC8vIOa3u+WKoOabtOWkmuaVsOaNruS7pea1i+ivlea7keWKqFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgLy8gb25SZWFkeSgpIHtcclxuICAgIC8vICAgbGV0IGtleSA9ICc85L2g55qEa2V5Pic7XHJcbiAgICAvLyAgIC8vIGxvY2F0aW9u77yM6L+Z6YeM5L2/55So55qE5piv5q2m5rGJ55qEY29kZVxyXG4gICAgLy8gICAvLyDmm7TlpJrnmoRsb2NhdGlvbiBjb2Rl5Y+v5Lul5p+l55yL77yaaHR0cHM6Ly9naXRodWIuY29tL3F3ZC9Mb2NhdGlvbkxpc3RcclxuICAgIC8vICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgLy8gICAgIHVybDogYGh0dHBzOi8vZGV2YXBpLnF3ZWF0aGVyLmNvbS92Ny93ZWF0aGVyL25vdz9sb2NhdGlvbj0xMDEyMDAxMDEma2V5PSR7a2V5fWBcclxuICAgIC8vICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfov5Tlm57nmoTmlbDmja46JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEsIG51bGwsIDIpKTtcclxuICAgIC8vICAgICB0aGlzLndlYXRoZXIgPSByZXN1bHQuZGF0YS5ub3c7XHJcbiAgICAvLyAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhg5pWw5o2u6K+35rGC5aSx6LSlOmAsIGVycm9yKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgICB9LCA2MDAwMCk7IC8vIOavj+WIhumSn+abtOaWsOS4gOasoVxyXG4gICAgfSxcclxuICAgIHRvTGlzdFBhZ2UoaXRlbURhdGEpIHsgLy8g5L+u5pS56L+Z6YeM77yM5re75Yqg5Y+C5pWwIGl0ZW1EYXRhXHJcbiAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmcgdG8gZGV0YWlsIHdpdGggZGF0YTpcIiwgSlNPTi5zdHJpbmdpZnkoaXRlbURhdGEpKTsgLy8g6LCD6K+V5pel5b+XXHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHVyaTogJy9wYWdlcy9kZXRhaWwnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBkYXk6IGl0ZW1EYXRhLmRheSxcclxuICAgICAgICB0ZW1wSGlnaDogaXRlbURhdGEudGVtcEhpZ2gsXHJcbiAgICAgICAgdGVtcExvdzogaXRlbURhdGEudGVtcExvdyxcclxuICAgICAgICBpY29uOiBpdGVtRGF0YS5pY29uXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOlsiIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsImN1cnJlbnRUaW1lIiwiZm9yZWNhc3RUaXRsZSIsIndlYXRoZXJMaXN0IiwiZGF5IiwidGVtcEhpZ2giLCJ0ZW1wTG93IiwiaWNvbiIsIm9uSW5pdCIsInNldEludGVydmFsIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiU3RyaW5nIiwiZ2V0SG91cnMiLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9MaXN0UGFnZSIsIml0ZW1EYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb3V0ZXIiLCJwdXNoIiwidXJpIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlKRSxJQUFBQyxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLGFBQUE7QUFBbUMsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFDbkM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsQ0FBQUYsT0FBQSxHQUNlO0FBQ2pCTixFQUFJUyxPQUFPLEVBQUU7QUFDYlQsSUFBTVUsV0FBVyxFQUFFLE9BQU87QUFBMUJWLElBQTRCO0FBQzVCQSxJQUFNVyxhQUFhLEVBQUUsTUFBTTtBQUMzQlgsSUFBTTtBQUNOQSxJQUFNWSxXQUFXLEVBQUUsQ0FDWDtBQUFSWixNQUFVYSxHQUFHLEVBQUUsSUFBSTtBQUFuQmIsTUFBcUJjLFFBQVEsRUFBRSxJQUFJO0FBQW5DZCxNQUFxQ2UsT0FBTyxFQUFFLEdBQUc7QUFBakRmLE1BQW1EZ0IsSUFBSSxFQUFFO0FBQXpEaEIsSUFBb0YsQ0FBQyxFQUM3RTtBQUFSQSxNQUFVYSxHQUFHLEVBQUUsSUFBSTtBQUFuQmIsTUFBcUJjLFFBQVEsRUFBRSxJQUFJO0FBQW5DZCxNQUFxQ2UsT0FBTyxFQUFFLEdBQUc7QUFBakRmLE1BQW1EZ0IsSUFBSSxFQUFFO0FBQXpEaEIsSUFBcUYsQ0FBQyxFQUM5RTtBQUFSQSxNQUFVYSxHQUFHLEVBQUUsSUFBSTtBQUFuQmIsTUFBcUJjLFFBQVEsRUFBRSxJQUFJO0FBQW5DZCxNQUFxQ2UsT0FBTyxFQUFFLElBQUk7QUFBbERmLE1BQW9EZ0IsSUFBSSxFQUFFO0FBQTFEaEIsSUFBcUYsQ0FBQyxFQUM5RTtBQUFSQSxNQUFVYSxHQUFHLEVB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