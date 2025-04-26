import { type BuiltinPlugin, BuiltinPluginName } from "@rspack/binding";
import type { Compiler } from "../Compiler";
import { RspackBuiltinPlugin } from "../builtin-plugin/base";
export declare class ShareRuntimePlugin extends RspackBuiltinPlugin {
    private enhanced;
    name: BuiltinPluginName;
    constructor(enhanced?: boolean);
    raw(compiler: Compiler): BuiltinPlugin | undefined;
}
