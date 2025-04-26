import { BuiltinPluginName } from "@rspack/binding";
export type LibManifestPluginOptions = {
    context?: string;
    entryOnly?: boolean;
    format?: boolean;
    name?: string;
    path: string;
    type?: string;
};
export declare const LibManifestPlugin: {
    new (options: LibManifestPluginOptions): {
        name: BuiltinPluginName;
        _args: [options: LibManifestPluginOptions];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("..").Compiler): void;
    };
};
