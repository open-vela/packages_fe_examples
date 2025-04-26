import { type BuiltinPlugin, BuiltinPluginName } from "@rspack/binding";
import type { Compiler } from "../Compiler";
import { RspackBuiltinPlugin } from "./base";
export declare class MangleExportsPlugin extends RspackBuiltinPlugin {
    private deterministic;
    name: BuiltinPluginName;
    affectedHooks: "compilation";
    constructor(deterministic: boolean);
    raw(compiler: Compiler): BuiltinPlugin;
}
