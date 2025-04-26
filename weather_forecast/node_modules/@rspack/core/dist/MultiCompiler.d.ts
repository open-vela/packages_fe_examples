/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/MultiCompiler.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import * as liteTapable from "@rspack/lite-tapable";
import type { Compiler, RspackOptions } from ".";
import MultiStats from "./MultiStats";
import MultiWatching from "./MultiWatching";
import type { WatchOptions } from "./config";
import type { InputFileSystem, IntermediateFileSystem, WatchFileSystem } from "./util/fs";
export interface MultiCompilerOptions {
    /**
     * how many Compilers are allows to run at the same time in parallel
     */
    parallelism?: number;
}
export type MultiRspackOptions = ReadonlyArray<RspackOptions> & MultiCompilerOptions;
export declare class MultiCompiler {
    #private;
    compilers: Compiler[];
    dependencies: WeakMap<Compiler, string[]>;
    hooks: {
        done: liteTapable.SyncHook<MultiStats>;
        invalid: liteTapable.MultiHook<liteTapable.SyncHook<[string | null, number]>>;
        run: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[Compiler]>>;
        watchClose: liteTapable.SyncHook<[]>;
        watchRun: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[Compiler]>>;
        infrastructureLog: liteTapable.MultiHook<liteTapable.SyncBailHook<[string, string, any[]], true>>;
    };
    _options: MultiCompilerOptions;
    running: boolean;
    constructor(compilers: Compiler[] | Record<string, Compiler>, options?: MultiCompilerOptions);
    get options(): import(".").RspackOptionsNormalized[] & MultiCompilerOptions;
    get outputPath(): string;
    get inputFileSystem(): InputFileSystem;
    get outputFileSystem(): typeof import("fs");
    get watchFileSystem(): WatchFileSystem;
    get intermediateFileSystem(): IntermediateFileSystem;
    set inputFileSystem(value: InputFileSystem);
    set outputFileSystem(value: typeof import("fs"));
    set watchFileSystem(value: WatchFileSystem);
    set intermediateFileSystem(value: IntermediateFileSystem);
    getInfrastructureLogger(name: string): import("./logging/Logger").Logger;
    /**
     * @param compiler - the child compiler
     * @param dependencies - its dependencies
     */
    setDependencies(compiler: Compiler, dependencies: string[]): void;
    /**
     * @param callback - signals when the validation is complete
     * @returns true if the dependencies are valid
     */
    validateDependencies(callback: liteTapable.Callback<Error, MultiStats>): boolean;
    /**
     * @param watchOptions - the watcher's options
     * @param handler - signals when the call finishes
     * @returns a compiler watcher
     */
    watch(watchOptions: WatchOptions, handler: liteTapable.Callback<Error, MultiStats>): MultiWatching;
    /**
     * @param callback - signals when the call finishes
     * @param options - additional data like modifiedFiles, removedFiles
     */
    run(callback: liteTapable.Callback<Error, MultiStats>, options?: {
        modifiedFiles?: ReadonlySet<string>;
        removedFiles?: ReadonlySet<string>;
    }): void;
    purgeInputFileSystem(): void;
    close(callback: liteTapable.Callback<Error, void>): void;
}
