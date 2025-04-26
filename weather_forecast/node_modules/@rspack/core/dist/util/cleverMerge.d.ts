/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/util/cleverMerge.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
type Obj = Record<PropertyKey, any>;
export declare const DELETE: unique symbol;
/**
 * Merges two given objects and caches the result to avoid computation if same objects passed as arguments again.
 * @example
 * // performs cleverMerge(first, second), stores the result in WeakMap and returns result
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 *  // when same arguments passed, gets the result from WeakMap and returns it.
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 * @param first first object
 * @param second second object
 * @returns  merged object of first and second object
 */
export declare const cachedCleverMerge: <First, Second>(first: First, second: Second) => First | Second | (First & Second);
/**
 * @param obj object
 * @param property property
 * @param value assignment value
 * @returns new object
 */
export declare const cachedSetProperty: (obj: Obj, property: string, value: string | number | boolean) => Obj;
/**
 * Merges two objects. Objects are deeply clever merged.
 * Arrays might reference the old value with "...".
 * Non-object values take preference over object values.
 * @param first first object
 * @param second second object
 * @returns merged object of first and second object
 */
export declare const cleverMerge: <First, Second>(first: First, second: Second) => First | Second | (First & Second);
/**
 * @param obj the object
 * @returns the object without operations like "..." or DELETE
 */
export declare const removeOperations: <O extends Obj>(obj: O) => O;
/**
 * @param obj the object
 * @param byProperty the by description
 * @param values values
 * @returns object with merged byProperty
 */
export declare const resolveByProperty: <O extends Obj | null, P extends PropertyKey>(obj: O, byProperty: P, ...values: any[]) => Omit<O, P> | undefined;
export {};
