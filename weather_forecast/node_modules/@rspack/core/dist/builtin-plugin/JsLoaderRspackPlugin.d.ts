import { BuiltinPluginName } from "@rspack/binding";
import type { Compiler } from "../Compiler";
export declare const JsLoaderRspackPlugin: {
    new (compiler: Compiler): {
        name: BuiltinPluginName;
        _args: [compiler: Compiler];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: Compiler): void;
    };
};
