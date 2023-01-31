import {AleoRecord, RecordElement, BoolElement, I8Element, I16Element, I32Element, I64Element, I128Element, U8Element, U16Element, U32Element, U64Element, U128Element, FieldElement, GroupElement, ScalarElement, AddressElement } from "./types/common/interfaces";
import { RestResponse } from "./types/common/main";

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