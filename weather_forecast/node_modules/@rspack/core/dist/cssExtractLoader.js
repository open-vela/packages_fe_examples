"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/builtin-plugin/css-extract/loader.ts
var loader_exports = {};
__export(loader_exports, {
  ABSOLUTE_PUBLIC_PATH: () => ABSOLUTE_PUBLIC_PATH,
  AUTO_PUBLIC_PATH: () => AUTO_PUBLIC_PATH,
  BASE_URI: () => BASE_URI,
  MODULE_TYPE: () => MODULE_TYPE,
  SINGLE_DOT_PATH_SEGMENT: () => SINGLE_DOT_PATH_SEGMENT,
  default: () => loader_default,
  hotLoader: () => hotLoader,
  pitch: () => pitch
});
module.exports = __toCommonJS(loader_exports);
var import_node_path2 = __toESM(require("path"));

// src/builtin-plugin/css-extract/utils.ts
var import_node_path = __toESM(require("path"));
function isAbsolutePath(str) {
  return import_node_path.default.posix.isAbsolute(str) || import_node_path.default.win32.isAbsolute(str);
}
var PLUGIN_NAME = "css-extract-rspack-plugin";
var RELATIVE_PATH_REGEXP = /^\.\.?[/\\]/;
function isRelativePath(str) {
  return RELATIVE_PATH_REGEXP.test(str);
}
function stringifyRequest(loaderContext, request) {
  if (typeof loaderContext.utils !== "undefined" && typeof loaderContext.utils.contextify === "function") {
    return JSON.stringify(
      loaderContext.utils.contextify(
        loaderContext.context || loaderContext.rootContext,
        request
      )
    );
  }
  const splitted = request.split("!");
  const { context } = loaderContext;
  return JSON.stringify(
    splitted.map((part) => {
      const splittedPart = part.match(/^(.*?)(\?.*)/);
      const query = splittedPart ? splittedPart[2] : "";
      let singlePath = splittedPart ? splittedPart[1] : part;
      if (isAbsolutePath(singlePath) && context) {
        singlePath = import_node_path.default.relative(context, singlePath);
        if (isAbsolutePath(singlePath)) {
          return singlePath + query;
        }
        if (!isRelativePath(singlePath)) {
          singlePath = `./${singlePath}`;
        }
      }
      return singlePath.replace(/\\/g, "/") + query;
    }).join("!")
  );
}
function stringifyLocal(value) {
  return typeof value === "function" ? value.toString() : JSON.stringify(value);
}

// src/builtin-plugin/css-extract/loader.ts
var BASE_URI = "webpack://";
var MODULE_TYPE = "css/mini-extract";
var AUTO_PUBLIC_PATH = "__mini_css_extract_plugin_public_path_auto__";
var ABSOLUTE_PUBLIC_PATH = `${BASE_URI}/mini-css-extract-plugin/`;
var SINGLE_DOT_PATH_SEGMENT = "__mini_css_extract_plugin_single_dot_path_segment__";
function hotLoader(content, context) {
  const localsJsonString = JSON.stringify(JSON.stringify(context.locals));
  return `${content}
    if(module.hot) {
      (function() {
        var localsJsonString = ${localsJsonString};
        // ${Date.now()}
        var cssReload = require(${stringifyRequest(
    context.loaderContext,
    import_node_path2.default.join(__dirname, "cssExtractHmr.js")
  )}).cssReload(module.id, ${JSON.stringify(context.options ?? {})});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  `;
}
var loader = function loader2(content) {
  var _a, _b, _c;
  if (((_c = (_b = (_a = this._compiler) == null ? void 0 : _a.options) == null ? void 0 : _b.experiments) == null ? void 0 : _c.css) && this._module && (this._module.type === "css" || this._module.type === "css/auto" || this._module.type === "css/global" || this._module.type === "css/module")) {
    return content;
  }
};
var pitch = function(request, _, data) {
  var _a, _b, _c;
  if (((_c = (_b = (_a = this._compiler) == null ? void 0 : _a.options) == null ? void 0 : _b.experiments) == null ? void 0 : _c.css) && this._module && (this._module.type === "css" || this._module.type === "css/auto" || this._module.type === "css/global" || this._module.type === "css/module")) {
    const e = new Error(
      `use type 'css' and \`CssExtractRspackPlugin\` together, please set \`experiments.css\` to \`false\` or set \`{ type: "javascript/auto" }\` for rules with \`CssExtractRspackPlugin\` in your rspack config (now \`CssExtractRspackPlugin\` does nothing).`
    );
    e.stack = void 0;
    this.emitWarning(e);
    return;
  }
  const options = this.getOptions();
  const emit = typeof options.emit !== "undefined" ? options.emit : true;
  const callback = this.async();
  const filepath = this.resourcePath;
  const parseMeta = this.__internal__parseMeta;
  this.addDependency(filepath);
  let { publicPath } = this._compilation.outputOptions;
  if (typeof options.publicPath === "string") {
    publicPath = options.publicPath;
  } else if (typeof options.publicPath === "function") {
    publicPath = options.publicPath(this.resourcePath, this.rootContext);
  }
  if (publicPath === "auto") {
    publicPath = AUTO_PUBLIC_PATH;
  }
  let publicPathForExtract;
  if (typeof publicPath === "string") {
    const isAbsolutePublicPath = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(publicPath);
    publicPathForExtract = isAbsolutePublicPath ? publicPath : `${ABSOLUTE_PUBLIC_PATH}${publicPath.replace(
      /\./g,
      SINGLE_DOT_PATH_SEGMENT
    )}`;
  } else {
    publicPathForExtract = publicPath;
  }
  const handleExports = (originalExports) => {
    let locals;
    let namedExport;
    const esModule = typeof options.esModule !== "undefined" ? options.esModule : true;
    let dependencies = [];
    try {
      const exports2 = originalExports.__esModule ? originalExports.default : originalExports;
      namedExport = // eslint-disable-next-line no-underscore-dangle
      originalExports.__esModule && (!originalExports.default || !("locals" in originalExports.default));
      if (namedExport) {
        for (const key of Object.keys(originalExports)) {
          if (key !== "default") {
            if (!locals) {
              locals = {};
            }
            locals[key] = originalExports[key];
          }
        }
      } else {
        locals = exports2 == null ? void 0 : exports2.locals;
      }
      if (Array.isArray(exports2) && emit) {
        const identifierCountMap = /* @__PURE__ */ new Map();
        dependencies = exports2.map(([id, content, media, sourceMap, supports, layer]) => {
          const identifier = id;
          const context = this.rootContext;
          const count = identifierCountMap.get(identifier) || 0;
          identifierCountMap.set(identifier, count + 1);
          return {
            identifier,
            context,
            content,
            media,
            supports,
            layer,
            identifierIndex: count,
            sourceMap: sourceMap ? JSON.stringify(sourceMap) : (
              // eslint-disable-next-line no-undefined
              void 0
            ),
            filepath
          };
        }).filter((item) => item !== null);
      }
    } catch (e) {
      callback(e);
      return;
    }
    const result = function makeResult() {
      if (locals) {
        if (namedExport) {
          const identifiers = Array.from(
            function* generateIdentifiers() {
              let identifierId = 0;
              for (const key of Object.keys(locals)) {
                identifierId += 1;
                yield [`_${identifierId.toString(16)}`, key];
              }
            }()
          );
          const localsString = identifiers.map(
            ([id, key]) => `
var ${id} = ${stringifyLocal(locals[key])};`
          ).join("");
          const exportsString = `export { ${identifiers.map(([id, key]) => `${id} as ${JSON.stringify(key)}`).join(", ")} }`;
          const defaultExport = typeof options.defaultExport !== "undefined" ? options.defaultExport : false;
          return defaultExport ? `${localsString}
${exportsString}
export default { ${identifiers.map(([id, key]) => `${JSON.stringify(key)}: ${id}`).join(", ")} }
` : `${localsString}
${exportsString}
`;
        }
        return `
${esModule ? "export default" : "module.exports = "} ${JSON.stringify(locals)};`;
      }
      if (esModule) {
        return "\nexport {};";
      }
      return "";
    }();
    let resultSource = `// extracted by ${PLUGIN_NAME}`;
    resultSource += this.hot && emit ? hotLoader(result, { loaderContext: this, options, locals }) : result;
    if (dependencies.length > 0) {
      parseMeta[PLUGIN_NAME] = JSON.stringify(dependencies);
    }
    callback(null, resultSource, void 0, data);
  };
  this.importModule(
    `${this.resourcePath}.webpack[javascript/auto]!=!!!${request}`,
    {
      layer: options.layer,
      publicPath: publicPathForExtract,
      baseUri: `${BASE_URI}/`
    },
    (error, exports2) => {
      if (error) {
        callback(error);
        return;
      }
      handleExports(exports2);
    }
  );
};
var loader_default = loader;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ABSOLUTE_PUBLIC_PATH,
  AUTO_PUBLIC_PATH,
  BASE_URI,
  MODULE_TYPE,
  SINGLE_DOT_PATH_SEGMENT,
  hotLoader,
  pitch
});
