import { type IssueData, type ParseReturnType, ZodType, type ZodTypeDef, z } from "../../compiled/zod";
import type { RspackOptions } from "./types";
export type ZodCrossFieldsOptions = ZodTypeDef & {
    patterns: Array<{
        test: (root: RspackOptions) => boolean;
        type: ZodType;
        issue?: (res: ParseReturnType<any>) => Array<IssueData>;
    }>;
    default: ZodType;
};
export declare class ZodRspackCrossChecker<T> extends ZodType<T> {
    private params;
    constructor(params: ZodCrossFieldsOptions);
    _parse(input: z.ParseInput): z.ParseReturnType<T>;
    _getRootData(ctx: z.ParseContext): any;
}
