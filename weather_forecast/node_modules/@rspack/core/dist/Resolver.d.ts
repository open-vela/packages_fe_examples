import type * as binding from "@rspack/binding";
import { type Resolve } from "./config";
import type { ResolveCallback } from "./config/adapterRuleUse";
type ResolveContext = {};
type ResolveOptionsWithDependencyType = Resolve & {
    dependencyCategory?: string;
    resolveToContext?: boolean;
};
export type ResourceData = binding.JsResourceData;
export type ResolveRequest = ResourceData;
export declare class Resolver {
    binding: binding.JsResolver;
    constructor(binding: binding.JsResolver);
    resolveSync(context: object, path: string, request: string): string | false;
    resolve(context: object, path: string, request: string, resolveContext: ResolveContext, callback: ResolveCallback): void;
    withOptions({ dependencyCategory, resolveToContext, ...resolve }: ResolveOptionsWithDependencyType): Resolver;
}
export {};
