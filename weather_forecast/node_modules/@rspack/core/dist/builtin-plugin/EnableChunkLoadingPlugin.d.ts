/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/3919c84/lib/javascript/EnableChunkLoadingPlugin.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import { BuiltinPluginName } from "@rspack/binding";
import type { ChunkLoadingType, Compiler } from "../exports";
declare const EnableChunkLoadingPluginInner: {
    new (type: string): {
        name: BuiltinPluginName;
        _args: [type: string];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: Compiler): void;
    };
};
export declare class EnableChunkLoadingPlugin extends EnableChunkLoadingPluginInner {
    static setEnabled(compiler: Compiler, type: ChunkLoadingType): void;
    static checkEnabled(compiler: Compiler, type: ChunkLoadingType): void;
    apply(compiler: Compiler): void;
}
export {};
