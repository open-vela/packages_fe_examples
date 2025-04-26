/**
 * The following code is modified based on
 * https://github.com/webpack/loader-runner
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/loader-runner/blob/main/LICENSE
 */
import { type JsLoaderContext, type JsLoaderItem } from "@rspack/binding";
import type { Compiler } from "../Compiler";
export declare class LoaderObject {
    request: string;
    path: string;
    query: string;
    fragment: string;
    options?: string | object;
    ident: string;
    normal?: Function;
    pitch?: Function;
    raw?: boolean;
    type?: "module" | "commonjs";
    parallel?: boolean;
    /**
     * @internal This field is rspack internal. Do not edit.
     */
    loaderItem: JsLoaderItem;
    constructor(loaderItem: JsLoaderItem, compiler: Compiler);
    get pitchExecuted(): boolean;
    set pitchExecuted(value: boolean);
    get normalExecuted(): boolean;
    set normalExecuted(value: boolean);
    shouldYield(): boolean;
    static __from_binding(loaderItem: JsLoaderItem, compiler: Compiler): LoaderObject;
    static __to_binding(loader: LoaderObject): JsLoaderItem;
}
export declare function runLoaders(compiler: Compiler, context: JsLoaderContext): Promise<JsLoaderContext>;
export declare function parsePathQueryFragment(str: string): {
    path: string;
    query: string;
    fragment: string;
};
