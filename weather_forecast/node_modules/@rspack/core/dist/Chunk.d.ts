import type { JsChunk } from "@rspack/binding";
import { ChunkGroup } from "./ChunkGroup";
import type { EntryOptions } from "./exports";
export declare class Chunk {
    #private;
    readonly name?: string;
    readonly id?: string;
    readonly ids: ReadonlyArray<string>;
    readonly idNameHints: ReadonlyArray<string>;
    readonly filenameTemplate?: string;
    readonly cssFilenameTemplate?: string;
    readonly files: ReadonlySet<string>;
    readonly runtime: ReadonlySet<string>;
    readonly hash?: string;
    readonly contentHash: Readonly<Record<string, string>>;
    readonly renderedHash?: string;
    readonly chunkReason?: string;
    readonly auxiliaryFiles: ReadonlySet<string>;
    static __from_binding(binding: JsChunk): Chunk;
    static __to_binding(chunk: Chunk): JsChunk;
    constructor(binding: JsChunk);
    isOnlyInitial(): boolean;
    canBeInitial(): boolean;
    hasRuntime(): boolean;
    get groupsIterable(): ReadonlySet<ChunkGroup>;
    getChunkMaps(realHash: boolean): {
        hash: Record<string | number, string>;
        contentHash: Record<string | number, Record<string, string>>;
        name: Record<string | number, string>;
    };
    getAllAsyncChunks(): ReadonlySet<Chunk>;
    getAllInitialChunks(): ReadonlySet<Chunk>;
    getAllReferencedChunks(): ReadonlySet<Chunk>;
    getEntryOptions(): Readonly<EntryOptions> | undefined;
}
