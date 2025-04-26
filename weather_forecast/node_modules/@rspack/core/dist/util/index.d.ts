import type { JsRspackError, JsStatsError } from "@rspack/binding";
import type { LoaderObject } from "../loader-runner";
export declare function mapValues(record: Record<string, string>, fn: (key: string) => string): {
    [k: string]: string;
};
export declare function isNil(value: unknown): value is null | undefined;
export declare const toBuffer: (bufLike: string | Buffer | Uint8Array) => Buffer;
export declare const toObject: (input: string | Buffer | object) => object;
export declare function serializeObject(map: string | object | undefined | null): Buffer | undefined;
export declare function isPromiseLike(value: unknown): value is Promise<any>;
export declare function isJsStatsError(err: any): err is JsStatsError;
export declare function concatErrorMsgAndStack(err: Error | JsRspackError | string): JsRspackError;
export declare function indent(str: string, prefix: string): string;
export declare function stringifyLoaderObject(o: LoaderObject): string;
export declare function asArray<T>(item: T[]): T[];
export declare function asArray<T>(item: readonly T[]): readonly T[];
export declare function asArray<T>(item: T): T[];
export declare const deprecatedWarn: (content: string, enable?: boolean) => void;
export declare const unsupported: (name: string, issue?: string) => never;
