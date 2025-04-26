interface ParsedResource {
    resource: string;
    path: string;
    query: string;
    fragment: string;
}
type ParsedResourceWithoutFragment = Omit<ParsedResource, "fragment">;
export declare const makePathsRelative: {
    (context: string, identifier: string, associatedObjectForCache: object | undefined): string;
    bindCache(associatedObjectForCache: object | undefined): ((arg0: string, arg1: string) => string);
    bindContextCache(context: string, associatedObjectForCache: object | undefined): ((arg0: string) => string);
};
export declare const makePathsAbsolute: {
    (context: string, identifier: string, associatedObjectForCache: object | undefined): string;
    bindCache(associatedObjectForCache: object | undefined): ((arg0: string, arg1: string) => string);
    bindContextCache(context: string, associatedObjectForCache: object | undefined): ((arg0: string) => string);
};
export declare const contextify: {
    (context: string, identifier: string, associatedObjectForCache: object | undefined): string;
    bindCache(associatedObjectForCache: object | undefined): ((arg0: string, arg1: string) => string);
    bindContextCache(context: string, associatedObjectForCache: object | undefined): ((arg0: string) => string);
};
export declare const absolutify: {
    (context: string, identifier: string, associatedObjectForCache: object | undefined): string;
    bindCache(associatedObjectForCache: object | undefined): ((arg0: string, arg1: string) => string);
    bindContextCache(context: string, associatedObjectForCache: object | undefined): ((arg0: string) => string);
};
export declare const parseResource: {
    (str: string, associatedObjectForCache?: object): ParsedResource;
    bindCache(associatedObjectForCache: object): (str: string) => ParsedResource;
};
export declare const parseResourceWithoutFragment: {
    (str: string, associatedObjectForCache?: object): ParsedResourceWithoutFragment;
    bindCache(associatedObjectForCache: object): (str: string) => ParsedResourceWithoutFragment;
};
/**
 * @param filename the filename which should be undone
 * @param outputPath the output path that is restored (only relevant when filename contains "..")
 * @param enforceRelative true returns ./ for empty paths
 * @returns repeated ../ to leave the directory of the provided filename to be back on output dir
 */
export declare const getUndoPath: (filename: string, outputPath: string, enforceRelative: boolean) => string;
export {};
