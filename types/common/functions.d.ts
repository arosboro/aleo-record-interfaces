// types/common/functions.d.ts

import { RestResponse, AleoRecord } from "./interfaces";

export function parse(res: RestResponse): AleoRecord;