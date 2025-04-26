import { BuiltinPluginName, type RawOccurrenceChunkIdsPluginOptions } from "@rspack/binding";
export declare const OccurrenceChunkIdsPlugin: {
    new (options?: RawOccurrenceChunkIdsPluginOptions | undefined): {
        name: BuiltinPluginName;
        _args: [options?: RawOccurrenceChunkIdsPluginOptions | undefined];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
