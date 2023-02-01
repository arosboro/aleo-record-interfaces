export type AleoRecordList = Record<string, AleoRecord>;
export type AleoRecordIndex = string[];
export type RestResponse = Record<string, string>;
export interface AleoRecord {
    owner: RecordElement;
    gates: RecordElement;
    _nonce: RecordElement;
    [key: string]: RecordElement;
}
export interface RecordElement {
    raw: string;
    type: 'bool' | 'i8' | 'i16' | 'i32' | 'i64' | 'i128' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'field' | 'group' | 'scalar' | 'address';
    value: boolean | number | bigint | string;
    scope: 'private' | 'public';
}
export interface BoolElement extends RecordElement {
    raw: string;
    type: 'bool';
    value: boolean;
    scope: 'private' | 'public';
}
export interface I8Element extends RecordElement {
    raw: string;
    type: 'i8';
    value: number;
    scope: 'private' | 'public';
}
export interface I16Element extends RecordElement {
    raw: string;
    type: 'i16';
    value: number;
    scope: 'private' | 'public';
}
export interface I32Element extends RecordElement {
    raw: string;
    type: 'i32';
    value: number;
    scope: 'private' | 'public';
}
export interface I64Element extends RecordElement {
    raw: string;
    type: 'i64';
    value: bigint;
    scope: 'private' | 'public';
}
export interface I128Element extends RecordElement {
    raw: string;
    type: 'i128';
    value: bigint;
    scope: 'private' | 'public';
}
export interface U8Element extends RecordElement {
    raw: string;
    type: 'u8';
    value: number;
    scope: 'private' | 'public';
}
export interface U16Element extends RecordElement {
    raw: string;
    type: 'u16';
    value: number;
    scope: 'private' | 'public';
}
export interface U32Element extends RecordElement {
    raw: string;
    type: 'u32';
    value: number;
    scope: 'private' | 'public';
}
export interface U64Element extends RecordElement {
    raw: string;
    type: 'u64';
    value: bigint;
    scope: 'private' | 'public';
}
export interface U128Element extends RecordElement {
    raw: string;
    type: 'u128';
    value: bigint;
    scope: 'private' | 'public';
}
export interface FieldElement extends RecordElement {
    raw: string;
    type: 'field';
    value: bigint;
    scope: 'private' | 'public';
}
export interface GroupElement extends RecordElement {
    raw: string;
    type: 'group';
    value: bigint;
    scope: 'private' | 'public';
}
export interface ScalarElement extends RecordElement {
    raw: string;
    type: 'scalar';
    value: bigint;
    scope: 'private' | 'public';
}
export interface AddressElement extends RecordElement {
    raw: string;
    type: 'address';
    value: string;
    scope: 'private' | 'public';
}
export declare function parse(res: string): AleoRecord;
