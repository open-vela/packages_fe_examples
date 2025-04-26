import { type BuiltinPlugin, BuiltinPluginName } from "@rspack/binding";
import type { Compiler, Externals } from "..";
import { RspackBuiltinPlugin } from "./base";
export declare class ExternalsPlugin extends RspackBuiltinPlugin {
    private type;
    private externals;
    name: BuiltinPluginName;
    constructor(type: string, externals: Externals);
    raw(compiler: Compiler): BuiltinPlugin | undefined;
}
