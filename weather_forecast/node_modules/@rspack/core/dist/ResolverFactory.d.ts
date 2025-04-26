import * as binding from "@rspack/binding";
import { Resolver } from "./Resolver";
import { type Resolve } from "./config";
type ResolveOptionsWithDependencyType = Resolve & {
    dependencyCategory?: string;
    resolveToContext?: boolean;
};
export declare class ResolverFactory {
    #private;
    static __to_binding(resolver_factory: ResolverFactory): binding.JsResolverFactory;
    constructor(pnp: boolean);
    get(type: string, resolveOptions?: ResolveOptionsWithDependencyType): Resolver;
}
export {};
