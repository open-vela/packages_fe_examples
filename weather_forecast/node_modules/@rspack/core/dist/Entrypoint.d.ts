import type { JsChunkGroup } from "@rspack/binding";
import { Chunk } from "./Chunk";
import { ChunkGroup } from "./ChunkGroup";
export declare class Entrypoint extends ChunkGroup {
    #private;
    static __from_binding(binding: JsChunkGroup): Entrypoint;
    protected constructor(binding: JsChunkGroup);
    getRuntimeChunk(): Readonly<Chunk | null>;
    getEntrypointChunk(): Readonly<Chunk | null>;
}
