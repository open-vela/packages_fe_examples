
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
var __webpack_modules__ = ({
"./src/manifest.json": 
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
(function (module) {
"use strict";
module.exports = JSON.parse('{"package":"com.application.watch.demo","name":"wheather","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"}],"config":{"logLevel":"log","designWidth":480},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/detail":{"component":"detail"}}}}')

}),

});
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {

/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
var $app_style$ = []
var $app_script$ = function __scriptModule__(module, exports, $app_require$) {	"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  onCreate() {
    console.log("app created");
  },
  onDestroy() {
    console.log("app destroyed");
  }
};

}
$app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.style = $app_style$;
$app_exports$.default.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
})();

})()
;
            }
        
            return createPageHandler();
          })(global, globalThis, window, $app_exports$, $app_evaluate$)
        }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hlYXRoZXIvc3JjL2FwcC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkNyZWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImFwcCBjcmVhdGVkXCIpXG4gIH0sXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImFwcCBkZXN0cm95ZWRcIilcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJuYW1lcyI6WyIiLCJvbkNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxpQ0FBZTtBQUNmQSxFQUFFQyxRQUFRQSxDQUFBLEVBQUc7QUFDYkQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQzlCSCxFQUFFLENBQUM7QUFDSEEsRUFBRUksU0FBU0EsQ0FBQSxFQUFHO0FBQ2RKLElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUNoQ0gsRUFBRTtBQUNGLENBQUMifQ==