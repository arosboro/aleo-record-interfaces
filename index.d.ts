export interface RecordElement {
  raw: string;
  type:
    | "bool"
    | "i8"
    | "i16"
    | "i32"
    | "i64"
    | "i128"
    | "u8"
    | "u16"
    | "u32"
    | "u64"
    | "u128"
    | "field"
    | "group"
    | "scalar"
    | "address";
  value: boolean | number | BigInt | string;
  scope: "private" | "public";
}

export interface BoolElement extends RecordElement {
  raw: string;
  type: "bool";
  value: boolean;
  scope: "private" | "public";
}

export interface I8Element extends RecordElement {
  raw: string;
  type: "i8";
  value: number;
  scope: "private" | "public";
}

export interface I16Element extends RecordElement {
  raw: string;
  type: "i16";
  value: number;
  scope: "private" | "public";
}

export interface I32Element extends RecordElement {
  raw: string;
  type: "i32";
  value: number;
  scope: "private" | "public";
}

export interface I64Element extends RecordElement {
  raw: string;
  type: "i64";
  value: number;
  scope: "private" | "public";
}

export interface I128Element extends RecordElement {
  raw: string;
  type: "i128";
  value: BigInt;
  scope: "private" | "public";
}

export interface U8Element extends RecordElement {
  raw: string;
  type: "u8";
  value: number;
  scope: "private" | "public";
}

export interface U16Element extends RecordElement {
  raw: string;
  type: "u16";
  value: number;
  scope: "private" | "public";
}

export interface U32Element extends RecordElement {
  raw: string;
  type: "u32";
  value: number;
  scope: "private" | "public";
}

export interface U64Element extends RecordElement {
  raw: string;
  type: "u64";
  value: number;
  scope: "private" | "public";
}

export interface U128Element extends RecordElement {
  raw: string;
  type: "u128";
  value: BigInt;
  scope: "private" | "public";
}

export interface FieldElement extends RecordElement {
  raw: string;
  type: "field";
  value: BigInt;
  scope: "private" | "public";
}

export interface GroupElement extends RecordElement {
  raw: string;
  type: "group";
  value: BigInt;
  scope: "private" | "public";
}

export interface ScalarElement extends RecordElement {
  raw: string;
  type: "scalar";
  value: BigInt;
  scope: "private" | "public";
}

export interface AddressElement extends RecordElement {
  raw: string;
  type: "address";
  value: string;
  scope: "private" | "public";
}

export interface AleoRecord {
  owner: RecordElement;
  gates: RecordElement;
  _nonce: RecordElement;
  [key: string]: RecordElement;
}

export type AleoRecordList = {
  [key: string]: AleoRecord;
};

export type AleoRecordIndex = string[];

export type RestResponse = {
  [key: string]: string;
};

export function parse(res: string): AleoRecord {
    // TODO: This hack should not be necessary as the API improves.
    const res_data = res
      .replace(/ {2}/g, '  "')
      .replace(/: /g, '": "')
      .replace(/,/g, '",')
      .replace(/\n}/g, '"\n}');

    const data: RestResponse = JSON.parse(res_data);

    // Take the parsed JSON and turn into an AleoRecord.
    const record: AleoRecord = {} as AleoRecord;
    const keys: string[] = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        const key: string = keys[i];
        const raw: string = data[key];
        const regex = /^(aleo[a-z0-9]{59})?([0-9]+)?(bool|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|field|group|scalar)?\.(private|public)$/m;
        const matches: RegExpMatchArray | null = raw.match(regex);
        if (matches) {
            const address: string = matches[1] || "";
            const type: string = matches[3] || "address";
            const scope: string = matches[4] || "private";
            // Remove type and scope from raw.
            data[key] = raw.slice(0, -type.length - scope.length - 1);
            // Cast the values to the correct type.
            switch (type) {
                case "bool":
                    record[key] = {
                        raw,
                        type,
                        value: data[key] === "true",
                        scope,
                    } as BoolElement;
                    break;
                case "i8":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as I8Element;
                    break;
                case "i16":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as I16Element;
                    break;
                case "i32":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as I32Element;
                    break;
                case "i64":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as I64Element;
                    break;
                case "i128":
                    record[key] = {
                        raw,
                        type,
                        value: BigInt(data[key]),
                        scope,
                    } as I128Element;
                    break;
                case "u8":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as U8Element;
                    break;
                case "u16":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as U16Element;
                    break;
                case "u32":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as U32Element;
                    break;
                case "u64":
                    record[key] = {
                        raw,
                        type,
                        value: parseInt(data[key]),
                        scope,
                    } as U64Element;
                    break;
                case "u128":
                    record[key] = {
                        raw,
                        type,
                        value: BigInt(data[key]),
                        scope,
                    } as U128Element;
                    break;
                case "field":
                    record[key] = {
                        raw,
                        type,
                        value: BigInt(data[key]),
                        scope,
                    } as FieldElement;
                    break;
                case "group":
                    record[key] = {
                        raw,
                        type,
                        value: BigInt(data[key]),
                        scope,
                    } as GroupElement;
                    break;
                case "scalar":
                    record[key] = {
                        raw,
                        type,
                        value: BigInt(data[key]),
                        scope,
                    } as ScalarElement;
                    break;
                case "address":
                    record[key] = {
                        raw,
                        type,
                        value: address,
                        scope,
                    } as AddressElement;
                    break;
                default:
                    record[key] = {
                        raw,
                        type,
                        value: data[key],
                        scope,
                    } as RecordElement;
                    break;
            }
        }
    }
    return record;
}