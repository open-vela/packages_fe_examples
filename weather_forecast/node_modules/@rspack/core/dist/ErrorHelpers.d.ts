/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/ErrorHelpers.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
export declare const cutOffByFlag: (stack: string, flag: string) => string;
export declare const cutOffLoaderExecution: (stack: string) => string;
export declare const cutOffWebpackOptions: (stack: string) => string;
export declare const cutOffMultilineMessage: (stack: string, message: string) => string;
export declare const cutOffMessage: (stack: string, message: string) => string;
export declare const cleanUp: (stack: string, message: string) => string;
export declare const cleanUpWebpackOptions: (stack: string, message: string) => string;
