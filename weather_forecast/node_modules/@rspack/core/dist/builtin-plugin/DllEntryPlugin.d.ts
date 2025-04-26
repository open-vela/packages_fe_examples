import { BuiltinPluginName } from "@rspack/binding";
export type DllEntryPluginOptions = {
    name: string;
};
export declare const DllEntryPlugin: {
    new (context: string, entries: string[], options: DllEntryPluginOptions): {
        name: BuiltinPluginName;
        _args: [context: string, entries: string[], options: DllEntryPluginOptions];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
