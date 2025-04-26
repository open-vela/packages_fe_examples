import type * as binding from "@rspack/binding";
export type RspackError = binding.JsRspackError;
export declare class JsRspackDiagnostic {
    static __to_binding(error: Error | RspackError, severity: binding.JsRspackSeverity): binding.JsRspackDiagnostic;
}
export declare class NonErrorEmittedError extends Error {
    constructor(error: Error);
}
