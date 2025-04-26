import { BuiltinPluginName } from "@rspack/binding";
import type { Module } from "../../Module";
export declare const BuiltinLazyCompilationPlugin: {
    new (module: (args: {
        module: string;
        path: string;
    }) => {
        active: boolean;
        data: string;
        client: string;
    }, cacheable: boolean, entries: boolean, imports: boolean, test?: RegExp | ((module: Module) => boolean) | undefined): {
        name: BuiltinPluginName;
        _args: [module: (args: {
            module: string;
            path: string;
        }) => {
            active: boolean;
            data: string;
            client: string;
        }, cacheable: boolean, entries: boolean, imports: boolean, test?: RegExp | ((module: Module) => boolean) | undefined];
        affectedHooks: "done" | "make" | "compile" | "emit" | "afterEmit" | "invalid" | "thisCompilation" | "afterDone" | "compilation" | "normalModuleFactory" | "contextModuleFactory" | "initialize" | "shouldEmit" | "infrastructureLog" | "beforeRun" | "run" | "assetEmitted" | "failed" | "shutdown" | "watchRun" | "watchClose" | "environment" | "afterEnvironment" | "afterPlugins" | "afterResolvers" | "beforeCompile" | "afterCompile" | "finishMake" | "entryOption" | "additionalPass" | undefined;
        raw(compiler: import("../..").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../..").Compiler): void;
    };
};
