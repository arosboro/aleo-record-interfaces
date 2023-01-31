# Aleo TypeScript Interfaces
## Consume and Parse Api Responses for Unspent Records

### Example Usage Provided as a Pinia Store for a Vue 3 Application.

```typescript
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { AleoRecord, AleoRecordList, AleoRecordIndex, RestResponse, parse } from 'aleo-record-interfaces';

export const useAleoRecordStore = defineStore("AleoRecords", () => {
    const records = ref<AleoRecordList>({});
    const index = ref<AleoRecordIndex>([]);

    function consume(response: RestResponse): void {
        const keys = Object.keys(response);
        for (let i = 0; i < keys.length; i++) {
        const key: string = keys[i];
        const record: AleoRecord | undefined = parse(response[key]);
        if (!record) {
            continue;
        }
        records.value[key] = record;
        index.value = Object.keys(records.value);
        // Unicode for record icon before printing record and key.
        console.log("\u{1F4C8}", key, record);
    }

    function get(key: string): AleoRecord | undefined {
        return records.value[key];
    }

    return {
        consume,
        get,
        index,
        records
    };
});
```