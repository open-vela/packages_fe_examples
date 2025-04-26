import { type BuiltinPlugin, BuiltinPluginName } from "@rspack/binding";
import type { Compiler } from "../Compiler";
import { RspackBuiltinPlugin } from "./base";
export declare class FlagDependencyUsagePlugin extends RspackBuiltinPlugin {
    private global;
    name: BuiltinPluginName;
    affectedHooks: "compilation";
    constructor(global: boolean);
    raw(compiler: Compiler): BuiltinPlugin;
}
