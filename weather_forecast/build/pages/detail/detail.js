
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

/*!************************************************!*\
  !*** ./src/pages/detail/detail.ux?uxType=page ***!
  \************************************************/
var $app_style$ = [[[[0,"page"]],{"width":"100%","height":"100%","flexDirection":"column","alignItems":"center","backgroundColor":"#eee"}],[[[0,"main-card"]],{"marginTop":"40px","width":"100%","flexDirection":"row","alignItems":"center","justifyContent":"center","background":"{\"values\":[]}","borderRadius":"16px","paddingTop":"18px","paddingRight":"0","paddingBottom":"18px","paddingLeft":"0","boxShadow":"0 2px 8px #ccc8"}],[[[0,"icon-main"]],{"width":"120px","height":"120px","marginRight":"15px"}],[[[0,"weather-block"]],{"flexDirection":"column","alignItems":"flex-start"}],[[[0,"main-temp"]],{"fontSize":"50px","fontWeight":"bold","color":"#1e3a8a","marginBottom":"2px"}],[[[0,"type"]],{"fontSize":"30px","color":"#555"}],[[[0,"summary"]],{"background":"{\"values\":[]}","width":"92%","borderRadius":"12px","marginTop":"16px","marginRight":"auto","marginBottom":"0","marginLeft":"auto","paddingTop":"10px","paddingRight":"12px","paddingBottom":"10px","paddingLeft":"12px","flexDirection":"row","flexWrap":"wrap","alignItems":"center","boxShadow":"0 2px 8px #e2e2e2"}],[[[0,"aqi"]],{"fontSize":"30px","color":"#405","marginRight":"14px","marginBottom":"4px"}],[[[0,"other"]],{"fontSize":"30px","color":"#405","marginRight":"14px","marginBottom":"4px"}],[[[0,"card"]],{"background":"{\"values\":[]}","borderRadius":"12px","width":"92%","marginTop":"16px","marginRight":"auto","marginBottom":"0","marginLeft":"auto","paddingTop":"12px","paddingRight":"16px","paddingBottom":"12px","paddingLeft":"16px","flexDirection":"column","boxShadow":"0 2px 8px #e2e2e2"}],[[[0,"card-title"]],{"fontSize":"35px","color":"#415de8","fontWeight":500,"marginBottom":"4px"}],[[[0,"card-desc"]],{"fontSize":"30px","color":"#333"}],[[[0,"hourly"]],{"paddingBottom":"10px"}],[[[0,"hour-row"]],{"flexDirection":"row","justifyContent":"space-between","marginTop":"5px"}],[[[0,"hour-group"]],{"flexDirection":"column","alignItems":"center","width":"23%","background":"{\"values\":[]}","borderRadius":"8px","paddingTop":"5px","paddingRight":"0","paddingBottom":"5px","paddingLeft":"0"}],[[[0,"hour-time"]],{"fontSize":"30px","color":"#666","marginBottom":"2px"}],[[[0,"hour-icon"]],{"width":"60px","height":"60px"}],[[[0,"hour-temp"]],{"fontSize":"30px","color":"#222","fontWeight":"bold","marginTop":"2px"}]]
var $app_script$ = function __scriptModule__(module, exports, $app_require$) {	"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  data: {
    day: '',
    icon: '/common/sunny-light.png',
    tempHigh: '18',
    tempLow: '',
    weather: '晴',
    hours: [{
      time: "08:00",
      icon: "/common/sunny-light.png",
      temp: 16
    }, {
      time: "12:00",
      icon: "/common/sunny-light.png",
      temp: 20
    }, {
      time: "16:00",
      icon: "/common/cloudy-light.png",
      temp: 18
    }, {
      time: "20:00",
      icon: "/common/cloudy-light.png",
      temp: 15
    }]
  },
  onInit(options) {
    console.log('Detail page received options:', JSON.stringify(options)); // 添加日志确认接收到的数据
    if (options) {
      // 移除或注释掉下面这行错误的代码：
      // const weather = options.weatherDetail;

      // 直接从 options 获取数据
      this.day = options.day || '--'; // 使用默认值以防万一
      this.tempHigh = options.tempHigh || '--';
      this.tempLow = options.tempLow || '--';
      this.icon = options.icon || '/common/unknown.png';
    } else {
      console.error('Detail page did not receive options!');
    }
  },
  goBack(eve) {
    if (eve.direction === 'right') {
      _system.default.back();
    }
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
"__opts__":{"classList":["page"],
"events":{"swipe":function(evt) { return _vm_.goBack(evt) }}}}, [aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["main-card"]}}, [aiot.__ce__("image", {"__vm__":_vm_,
"__opts__":{"classList":["icon-main"],
"src":function() { return _vm_.icon }}}, []),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["weather-block"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["main-temp"],
"value":function() { return (_vm_.tempHigh) + "/" + (_vm_.tempLow) + "℃" }}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["type"],
"value":function() { return _vm_.day }}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["type"],
"value":function() { return _vm_.weather }}}, [])])]),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["summary"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["other"],
"value":"体感温度 16℃"}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["other"],
"value":"湿度 45%"}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["other"],
"value":"东北风 3级"}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["aqi"],
"value":"空气质量 良"}}, [])]),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["card"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["card-title"],
"value":"穿搭建议"}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["card-desc"],
"value":"建议穿搭：薄外套+长裤"}}, [])]),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["card","hourly"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["card-title"],
"value":"逐小时预报"}}, []),
aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["hour-row"]}}, [aiot.__cf__({"__vm__":_vm_,
"__opts__":{"exp":function() { return _vm_.hours },
"key":"$idx",
"value":"$item"}}, function($idx, $item, ){
          return [aiot.__ce__("div", {"__vm__":_vm_,
"__opts__":{"classList":["hour-group"]}}, [aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["hour-time"],
"value":function() { return $item.time }}}, []),
aiot.__ce__("image", {"__vm__":_vm_,
"__opts__":{"classList":["hour-icon"],
"src":function() { return $item.icon }}}, []),
aiot.__ce__("text", {"__vm__":_vm_,
"__opts__":{"classList":["hour-temp"],
"value":function() { return ($item.temp) + "℃" }}}, [])])]
        })])])])

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGRldGFpbFxcZGV0YWlsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hlYXRoZXIvc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudXgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgQHN3aXBlPVwiZ29CYWNrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jYXJkXCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImljb24tbWFpblwiIHNyYz1cInt7IGljb24gfX1cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1ibG9ja1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibWFpbi10ZW1wXCI+e3sgdGVtcEhpZ2ggfX0ve3t0ZW1wTG93fX3ihIM8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0eXBlXCI+e3sgZGF5IH19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidHlwZVwiPnt7IHdlYXRoZXIgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJvdGhlclwiPuS9k+aEn+a4qeW6piAxNuKEgzwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJvdGhlclwiPua5v+W6piA0NSU8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwib3RoZXJcIj7kuJzljJfpo44gM+e6pzwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJhcWlcIj7nqbrmsJTotKjph48g6ImvPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+56m/5pCt5bu66K6uPC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImNhcmQtZGVzY1wiPuW7uuiuruepv+aQre+8muiWhOWkluWllyvplb/oo6Q8L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBob3VybHlcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+6YCQ5bCP5pe26aKE5oqlPC90ZXh0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG91ci1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1ncm91cFwiIGZvcj1cInt7aG91cnN9fVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJob3VyLXRpbWVcIj57eyRpdGVtLnRpbWV9fTwvdGV4dD5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImhvdXItaWNvblwiIHNyYz1cInt7JGl0ZW0uaWNvbn19XCIgLz5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaG91ci10ZW1wXCI+e3skaXRlbS50ZW1wfX3ihIM8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YToge1xyXG4gICAgZGF5OicnLFxyXG4gICAgaWNvbjogJy9jb21tb24vc3VubnktbGlnaHQucG5nJyxcclxuICAgIHRlbXBIaWdoOiAnMTgnLFxyXG4gICAgdGVtcExvdzonJyxcclxuICAgIHdlYXRoZXI6ICfmmbQnLFxyXG4gICAgaG91cnM6IFtcclxuICAgICAgeyB0aW1lOiBcIjA4OjAwXCIsIGljb246IFwiL2NvbW1vbi9zdW5ueS1saWdodC5wbmdcIiwgdGVtcDogMTYgfSxcclxuICAgICAgeyB0aW1lOiBcIjEyOjAwXCIsIGljb246IFwiL2NvbW1vbi9zdW5ueS1saWdodC5wbmdcIiwgdGVtcDogMjAgfSxcclxuICAgICAgeyB0aW1lOiBcIjE2OjAwXCIsIGljb246IFwiL2NvbW1vbi9jbG91ZHktbGlnaHQucG5nXCIsIHRlbXA6IDE4IH0sXHJcbiAgICAgIHsgdGltZTogXCIyMDowMFwiLCBpY29uOiBcIi9jb21tb24vY2xvdWR5LWxpZ2h0LnBuZ1wiLCB0ZW1wOiAxNSB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAgb25Jbml0KG9wdGlvbnMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdEZXRhaWwgcGFnZSByZWNlaXZlZCBvcHRpb25zOicsIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTsgLy8g5re75Yqg5pel5b+X56Gu6K6k5o6l5pS25Yiw55qE5pWw5o2uXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAvLyDnp7vpmaTmiJbms6jph4rmjonkuIvpnaLov5nooYzplJnor6/nmoTku6PnoIHvvJpcclxuICAgICAgLy8gY29uc3Qgd2VhdGhlciA9IG9wdGlvbnMud2VhdGhlckRldGFpbDtcclxuXHJcbiAgICAgIC8vIOebtOaOpeS7jiBvcHRpb25zIOiOt+WPluaVsOaNrlxyXG4gICAgICB0aGlzLmRheSA9IG9wdGlvbnMuZGF5IHx8ICctLSc7IC8vIOS9v+eUqOm7mOiupOWAvOS7pemYsuS4h+S4gFxyXG4gICAgICB0aGlzLnRlbXBIaWdoID0gb3B0aW9ucy50ZW1wSGlnaCB8fCAnLS0nO1xyXG4gICAgICB0aGlzLnRlbXBMb3cgPSBvcHRpb25zLnRlbXBMb3cgfHwgJy0tJztcclxuICAgICAgdGhpcy5pY29uID0gb3B0aW9ucy5pY29uIHx8ICcvY29tbW9uL3Vua25vd24ucG5nJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFpbCBwYWdlIGRpZCBub3QgcmVjZWl2ZSBvcHRpb25zIScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ29CYWNrKGV2ZSkge1xyXG4gICAgaWYgKGV2ZS5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLyog5Li75L+h5oGv5Y2h54mHICovXHJcbi5tYWluLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4ICNjY2M4O1xyXG59XHJcblxyXG4uaWNvbi1tYWluIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWJsb2NrIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubWFpbi10ZW1wIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMxZTNhOGE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbi50eXBlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi8qIOeugOimgeS/oeaBryAqL1xyXG4uc3VtbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjZmODtcclxuICB3aWR0aDogOTIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZTJlMmUyO1xyXG59XHJcbi5hcWksIC5vdGhlciB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjNDA1O1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi8qIOWNoeeJh+agt+W8jyAqL1xyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAjZTJlMmUyO1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICM0MTVkZTg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLmNhcmQtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiDpgJDlsI/ml7bpooTmiqXmjpLniYggKi9cclxuLmhvdXJseSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhvdXItcm93IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmhvdXItZ3JvdXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjMlO1xyXG4gIGJhY2tncm91bmQ6ICNmNGY2Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcbi5ob3VyLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLmhvdXItaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5ob3VyLXRlbXAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzIyMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRhdGEiLCJkYXkiLCJpY29uIiwidGVtcEhpZ2giLCJ0ZW1wTG93Iiwid2VhdGhlciIsImhvdXJzIiwidGltZSIsInRlbXAiLCJvbkluaXQiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImdvQmFjayIsImV2ZSIsImRpcmVjdGlvbiIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsYUFBQTtBQUFtQyxTQUFBRCx1QkFBQUcsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxDQUFBRixPQUFBLEdBQ3BCO0FBQ2ZILEVBQUVNLElBQUksRUFBRTtBQUNSTixJQUFJTyxHQUFHLEVBQUMsRUFBRTtBQUNWUCxJQUFJUSxJQUFJLEVBQUUseUJBQXlCO0FBQ25DUixJQUFJUyxRQUFRLEVBQUUsSUFBSTtBQUNsQlQsSUFBSVUsT0FBTyxFQUFDLEVBQUU7QUFDZFYsSUFBSVcsT0FBTyxFQUFFLEdBQUc7QUFDaEJYLElBQUlZLEtBQUssRUFBRSxDQUNMO0FBQU5aLE1BQVFhLElBQUksRUFBRSxPQUFPO0FBQXJCYixNQUF1QlEsSUFBSSxFQUFFLHlCQUF5QjtBQUF0RFIsTUFBd0RjLElBQUksRUFBRTtBQUE5RGQsSUFBaUUsQ0FBQyxFQUM1RDtBQUFOQSxNQUFRYSxJQUFJLEVBQUUsT0FBTztBQUFyQmIsTUFBdUJRLElBQUksRUFBRSx5QkFBeUI7QUFBdERSLE1BQXdEYyxJQUFJLEVBQUU7QUFBOURkLElBQWlFLENBQUMsRUFDNUQ7QUFBTkEsTUFBUWEsSUFBSSxFQUFFLE9BQU87QUFBckJiLE1BQXVCUSxJQUFJLEVBQUUsMEJBQTBCO0FBQXZEUixNQUF5RGMsSUFBSSxFQUFFO0FBQS9EZCxJQUFrRSxDQUFDLEVBQzdEO0FBQU5BLE1BQVFhLElBQUksRUFBRSxPQUFPO0FBQXJCYixNQUF1QlEsSUFBSSxFQUFFLDBCQUEwQjtBQUF2RFIsTUFBeURjLElBQUksRUFBRTtBQUEvRGQsSUFBa0UsQ0FBQztBQUVuRUEsRUFBRSxDQUFDO0FBQ0hBLEVBQUVlLE1BQU1BLENBQUNDLE9BQU8sRUFBRTtBQUNsQmhCLElBQUlpQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRWhCLElBQUksSUFBSWdCLE9BQU8sRUFBRTtBQUNqQmhCLE1BQU07QUFDTkEsTUFBTTs7QUFFTkEsTUFBTTtBQUNOQSxNQUFNLElBQUksQ0FBQ08sR0FBRyxHQUFHUyxPQUFPLENBQUNULEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUN0Q1AsTUFBTSxJQUFJLENBQUNTLFFBQVEsR0FBR08sT0FBTyxDQUFDUCxRQUFRLElBQUksSUFBSTtBQUM5Q1QsTUFBTSxJQUFJLENBQUNVLE9BQU8sR0FBR00sT0FBTyxDQUFDTixPQUFPLElBQUksSUFBSTtBQUM1Q1YsTUFBTSxJQUFJLENBQUNRLElBQUksR0FBR1EsT0FBTyxDQUFDUixJQUFJLElBQUkscUJBQXFCO0FBQ3ZEUixJQUFJLENBQUMsTUFBTTtBQUNYQSxNQUFNaUIsT0FBTyxDQUFDSSxLQUFLLENBQUMsc0NBQXNDLENBQUM7QUFDM0RyQixJQUFJO0FBQ0pBLEVBQUUsQ0FBQztBQUNIQSxFQUFFc0IsTUFBTUEsQ0FBQ0MsR0FBRyxFQUFFO0FBQ2R2QixJQUFJLElBQUl1QixHQUFHLENBQUNDLFNBQVMsS0FBSyxPQUFPLEVBQUU7QUFDbkN4QixNQUFNeUIsZUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUNuQjFCLElBQUk7QUFDSkEsRUFBRTtBQUNGLENBQUMifQ==