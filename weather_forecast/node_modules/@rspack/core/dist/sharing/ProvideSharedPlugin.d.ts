import { type BuiltinPlugin, BuiltinPluginName, type RawProvideOptions } from "@rspack/binding";
import type { Compiler } from "../Compiler";
import { RspackBuiltinPlugin } from "../builtin-plugin/base";
export type ProvideSharedPluginOptions<Enhanced extends boolean = false> = {
    provides: Provides<Enhanced>;
    shareScope?: string;
    enhanced?: Enhanced;
};
export type Provides<Enhanced extends boolean> = (ProvidesItem | ProvidesObject<Enhanced>)[] | ProvidesObject<Enhanced>;
export type ProvidesItem = string;
export type ProvidesObject<Enhanced extends boolean> = {
    [k: string]: ProvidesConfig<Enhanced> | ProvidesItem;
};
export type ProvidesConfig<Enhanced extends boolean> = Enhanced extends true ? ProvidesEnhancedConfig : ProvidesV1Config;
type ProvidesV1Config = {
    eager?: boolean;
    shareKey: string;
    shareScope?: string;
    version?: false | string;
};
type ProvidesEnhancedConfig = ProvidesV1Config & ProvidesEnhancedExtraConfig;
type ProvidesEnhancedExtraConfig = {
    singleton?: boolean;
    strictVersion?: boolean;
    requiredVersion?: false | string;
};
export declare class ProvideSharedPlugin<Enhanced extends boolean = false> extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    _provides: [string, Omit<RawProvideOptions, "key">][];
    _enhanced?: Enhanced;
    constructor(options: ProvideSharedPluginOptions<Enhanced>);
    raw(compiler: Compiler): BuiltinPlugin;
}
export {};
