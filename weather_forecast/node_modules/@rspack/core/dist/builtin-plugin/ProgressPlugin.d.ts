import { BuiltinPluginName, type RawProgressPluginOptions } from "@rspack/binding";
export type ProgressPluginArgument = Partial<Omit<RawProgressPluginOptions, "handler">> | ((percentage: number, msg: string, ...args: string[]) => void) | undefined;
export declare const ProgressPlugin: {
    new (progress?: ProgressPluginArgument): {
        name: BuiltinPluginName;
        _args: [progress?: ProgressPluginArgument];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
