// types/common/main.d.ts

/// <reference path="./interfaces.d.ts" />
/// <reference path="./functions.d.ts" />

import { AleoRecord, RecordElement } from "./interfaces";

declare module "aleo-record-interfaces" {

    export type AleoRecordList = {
        [key: string]: AleoRecord;
    };

    export type AleoRecordIndex = string[];
}