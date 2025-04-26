import { BuiltinPluginName, type RawEvalDevToolModulePluginOptions } from "@rspack/binding";
export type { RawEvalDevToolModulePluginOptions as EvalDevToolModulePluginOptions };
export declare const EvalDevToolModulePlugin: {
    new (options: RawEvalDevToolModulePluginOptions): {
        name: BuiltinPluginName;
        _args: [options: RawEvalDevToolModulePluginOptions];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
