export declare function browserslistToTargets(browserslist: string[]): Record<string, number>;
export declare function toFeatures(featureOptions: FeatureOptions): Features;
export declare enum Features {
    Empty = 0,
    Nesting = 1,
    NotSelectorList = 2,
    DirSelector = 4,
    LangSelectorList = 8,
    IsSelector = 16,
    TextDecorationThicknessPercent = 32,
    MediaIntervalSyntax = 64,
    MediaRangeSyntax = 128,
    CustomMediaQueries = 256,
    ClampFunction = 512,
    ColorFunction = 1024,
    OklabColors = 2048,
    LabColors = 4096,
    P3Colors = 8192,
    HexAlphaColors = 16384,
    SpaceSeparatedColorNotation = 32768,
    FontFamilySystemUi = 65536,
    DoublePositionGradients = 131072,
    VendorPrefixes = 262144,
    LogicalProperties = 524288,
    Selectors = 31,
    MediaQueries = 448,
    Color = 64512
}
export interface Targets {
    android?: number;
    chrome?: number;
    edge?: number;
    firefox?: number;
    ie?: number;
    ios_saf?: number;
    opera?: number;
    safari?: number;
    samsung?: number;
}
export interface Drafts {
    /** Whether to enable @custom-media rules. */
    customMedia?: boolean;
}
export interface NonStandard {
    /** Whether to enable the non-standard >>> and /deep/ selector combinators used by Angular and Vue. */
    deepSelectorCombinator?: boolean;
}
export interface PseudoClasses {
    hover?: string;
    active?: string;
    focus?: string;
    focusVisible?: string;
    focusWithin?: string;
}
export type FeatureOptions = {
    nesting?: boolean;
    notSelectorList?: boolean;
    dirSelector?: boolean;
    langSelectorList?: boolean;
    isSelector?: boolean;
    textDecorationThicknessPercent?: boolean;
    mediaIntervalSyntax?: boolean;
    mediaRangeSyntax?: boolean;
    customMediaQueries?: boolean;
    clampFunction?: boolean;
    colorFunction?: boolean;
    oklabColors?: boolean;
    labColors?: boolean;
    p3Colors?: boolean;
    hexAlphaColors?: boolean;
    spaceSeparatedColorNotation?: boolean;
    fontFamilySystemUi?: boolean;
    doublePositionGradients?: boolean;
    vendorPrefixes?: boolean;
    logicalProperties?: boolean;
    selectors?: boolean;
    mediaQueries?: boolean;
    color?: boolean;
};
export type LoaderOptions = {
    minify?: boolean;
    errorRecovery?: boolean;
    targets?: Targets | string[] | string;
    include?: FeatureOptions;
    exclude?: FeatureOptions;
    /**
     * @deprecated Use `drafts` instead.
     * This will be removed in the next major version.
     */
    draft?: Drafts;
    drafts?: Drafts;
    nonStandard?: NonStandard;
    pseudoClasses?: PseudoClasses;
    unusedSymbols?: string[];
};
