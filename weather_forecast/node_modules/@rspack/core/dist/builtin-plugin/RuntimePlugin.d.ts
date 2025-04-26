import * as binding from "@rspack/binding";
import * as liteTapable from "@rspack/lite-tapable";
import { Chunk } from "../Chunk";
import { type Compilation } from "../Compilation";
import type { CreatePartialRegisters } from "../taps/types";
export declare const RuntimePluginImpl: {
    new (): {
        name: binding.BuiltinPluginName;
        _args: [];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): binding.BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
export type RuntimePluginHooks = {
    createScript: liteTapable.SyncWaterfallHook<[string, Chunk]>;
    linkPreload: liteTapable.SyncWaterfallHook<[string, Chunk]>;
    linkPrefetch: liteTapable.SyncWaterfallHook<[string, Chunk]>;
};
declare const RuntimePlugin: typeof RuntimePluginImpl & {
    /**
     * @deprecated Use `getCompilationHooks` instead.
     */
    getHooks: (compilation: Compilation) => RuntimePluginHooks;
    getCompilationHooks: (compilation: Compilation) => RuntimePluginHooks;
};
export declare const createRuntimePluginHooksRegisters: CreatePartialRegisters<`RuntimePlugin`>;
export { RuntimePlugin };
