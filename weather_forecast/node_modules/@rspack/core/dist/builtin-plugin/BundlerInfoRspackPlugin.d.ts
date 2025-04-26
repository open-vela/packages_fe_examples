import { BuiltinPluginName } from "@rspack/binding";
export type BundleInfoOptions = {
    version?: string;
    bundler?: string;
    force?: boolean | string[];
};
export declare const BundlerInfoRspackPlugin: {
    new (options: BundleInfoOptions): {
        name: BuiltinPluginName;
        _args: [options: BundleInfoOptions];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
