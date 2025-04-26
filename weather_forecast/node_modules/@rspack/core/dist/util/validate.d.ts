import type { z } from "../../compiled/zod";
export declare class ValidationError extends Error {
    constructor(message: string);
}
export declare function validate<T extends z.ZodType>(opts: any, schema: T): void;
export declare function isValidate<T extends z.ZodType>(opts: any, schema: T): boolean;
