/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/NormalModuleReplacementPlugin.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import type { Compiler } from "../Compiler";
import type { ResolveData } from "../Module";
type ModuleReplacer = (createData: ResolveData) => void;
export declare class NormalModuleReplacementPlugin {
    readonly resourceRegExp: RegExp;
    readonly newResource: string | ModuleReplacer;
    /**
     * Create an instance of the plugin
     * @param resourceRegExp the resource matcher
     * @param newResource the resource replacement
     */
    constructor(resourceRegExp: RegExp, newResource: string | ModuleReplacer);
    /**
     * Apply the plugin
     * @param compiler the compiler instance
     * @returns
     */
    apply(compiler: Compiler): void;
}
export {};
