export interface RawImageData<T> {
    width: number;
    height: number;
    data: T;
}

type BufferRet = RawImageData<Buffer>;
type BufferLike = Buffer | Uint8Array | ArrayLike<number> | Iterable<number> | ArrayBuffer;

export declare function encode(imgData: RawImageData<BufferLike>, quality?: number): BufferRet;
