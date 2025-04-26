export default class Hash {
    /**
     * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
     * @abstract
     * @param data data
     * @param inputEncoding data encoding
     * @returns updated hash
     */
    update(data: string | Buffer, inputEncoding?: string): this;
    /**
     * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
     * @abstract
     * @param encoding encoding of the return value
     * @returns  digest
     */
    digest(encoding?: string): string | Buffer;
}
