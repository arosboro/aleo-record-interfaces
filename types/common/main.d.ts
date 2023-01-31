// types/common/main.d.ts

/// <reference path=".//interfaces.d.ts" />
/// <reference path="./functions.d.ts" />

import { AleoRecord } from "./interfaces";

export type AleoRecordList = {
    [key: string]: AleoRecord;
};

export type AleoRecordIndex = string[];

export type RestResponse = {
[   key: string]: string;
};