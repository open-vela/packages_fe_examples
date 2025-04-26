import { BuiltinPluginName, type JsRsdoctorAsset, type JsRsdoctorAssetPatch, type JsRsdoctorChunk, type JsRsdoctorChunkAssets, type JsRsdoctorChunkGraph, type JsRsdoctorChunkModules, type JsRsdoctorDependency, type JsRsdoctorEntrypoint, type JsRsdoctorEntrypointAssets, type JsRsdoctorExportInfo, type JsRsdoctorModule, type JsRsdoctorModuleGraph, type JsRsdoctorModuleGraphModule, type JsRsdoctorModuleIdsPatch, type JsRsdoctorModuleOriginalSource, type JsRsdoctorModuleSourcesPatch, type JsRsdoctorSideEffect, type JsRsdoctorSourcePosition, type JsRsdoctorSourceRange, type JsRsdoctorStatement, type JsRsdoctorVariable } from "@rspack/binding";
import * as liteTapable from "@rspack/lite-tapable";
import { type Compilation } from "../Compilation";
import type { Compiler } from "../Compiler";
import type { CreatePartialRegisters } from "../taps/types";
export declare namespace RsdoctorPluginData {
    export type { JsRsdoctorAsset as RsdoctorAsset, JsRsdoctorChunkGraph as RsdoctorChunkGraph, JsRsdoctorModuleGraph as RsdoctorModuleGraph, JsRsdoctorChunk as RsdoctorChunk, JsRsdoctorModule as RsdoctorModule, JsRsdoctorSideEffect as RsdoctorSideEffect, JsRsdoctorExportInfo as RsdoctorExportInfo, JsRsdoctorVariable as RsdoctorVariable, JsRsdoctorDependency as RsdoctorDependency, JsRsdoctorEntrypoint as RsdoctorEntrypoint, JsRsdoctorStatement as RsdoctorStatement, JsRsdoctorSourceRange as RsdoctorSourceRange, JsRsdoctorSourcePosition as RsdoctorSourcePosition, JsRsdoctorModuleGraphModule as RsdoctorModuleGraphModule, JsRsdoctorModuleIdsPatch as RsdoctorModuleIdsPatch, JsRsdoctorModuleOriginalSource as RsdoctorModuleOriginalSource, JsRsdoctorAssetPatch as RsdoctorAssetPatch, JsRsdoctorChunkAssets as RsdoctorChunkAssets, JsRsdoctorEntrypointAssets as RsdoctorEntrypointAssets, JsRsdoctorChunkModules as RsdoctorChunkModules, JsRsdoctorModuleSourcesPatch as RsdoctorModuleSourcesPatch };
}
export type RsdoctorPluginOptions = {
    moduleGraphFeatures?: boolean | Array<"graph" | "ids" | "sources">;
    chunkGraphFeatures?: boolean | Array<"graph" | "assets">;
};
declare const RsdoctorPluginImpl: {
    new (c?: RsdoctorPluginOptions | undefined): {
        name: BuiltinPluginName;
        _args: [c?: RsdoctorPluginOptions | undefined];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: Compiler): void;
    };
};
export type RsdoctorPluginHooks = {
    moduleGraph: liteTapable.AsyncSeriesBailHook<[
        JsRsdoctorModuleGraph
    ], false | void>;
    chunkGraph: liteTapable.AsyncSeriesBailHook<[
        JsRsdoctorChunkGraph
    ], false | void>;
    moduleIds: liteTapable.AsyncSeriesBailHook<[
        JsRsdoctorModuleIdsPatch
    ], false | void>;
    moduleSources: liteTapable.AsyncSeriesBailHook<[
        JsRsdoctorModuleSourcesPatch
    ], false | void>;
    assets: liteTapable.AsyncSeriesBailHook<[JsRsdoctorAssetPatch], false | void>;
};
declare const RsdoctorPlugin: typeof RsdoctorPluginImpl & {
    /**
     * @deprecated Use `getCompilationHooks` instead.
     */
    getHooks: (compilation: Compilation) => RsdoctorPluginHooks;
    getCompilationHooks: (compilation: Compilation) => RsdoctorPluginHooks;
};
export declare const createRsdoctorPluginHooksRegisters: CreatePartialRegisters<`RsdoctorPlugin`>;
export { RsdoctorPlugin };
