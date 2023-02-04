# Aleo TypeScript Record Interfaces
## A Library to Consume and Parse Api Responses for Unspent Records

`npm run test` to run the tests.
Example output:

    % npm run test

> aleo-record-interfaces@1.0.6 test
> tsc && jest tests/common.tests.ts

 PASS  tests/common.tests.ts
  parse
    ✓ AddressElement (2 ms)
    ✓ U64Element
    ✓ U8Element (1 ms)
    ✓ U16Element (1 ms)
    ✓ U32Element (1 ms)
    ✓ U64Element (1 ms)
    ✓ U128Element
    ✓ I8Element
    ✓ I16Element
    ✓ I32Element
    ✓ I64Element (1 ms)
    ✓ I128Element (1 ms)
    ✓ PrivateAddressElement (1 ms)
    ✓ PublicAddressElement (2 ms)
    ✓ FieldElement (5 ms)
    ✓ ScalarElement (1 ms)
    ✓ GroupElement (3 ms)

Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.868 s, estimated 1 s
Ran all test suites matching /tests\/common.tests.ts/i.

### Example Usage Provided as a Pinia Store for a Vue 3 Application.

```typescript
// store/records.ts
import { defineStore } from "pinia";
import { ref } from "vue";

import {
  type AleoRecord,
  type AleoRecordList,
  type AleoRecordIndex,
  type RestResponse,
  parse,
} from "aleo-record-interfaces";

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
  }

  function get(key: string): AleoRecord | undefined {
    return records.value[key];
  }

  return {
    consume,
    get,
    index,
    records,
  };
});
```

```typescript
// views/Records.vue setup script
import { axios } from 'axios';
import { useAleoRecordStore } from '@/store/records.ts';

const aleoRecordStore = useAleoRecordStore();

try {
    // /api/ is set up as a vuejs proxy to the development node.
    const response = await axios.post("/api/testnet3/records/unspent", {
        view_key: "AViewKey1huxxFRxUvS9Xx2Cy49JK8nn7ZNQ9mrfeMiq6UYZbbdZ5",
    });
    // The keys are hashes, (field values) in string format.
    // Each record starts out serialized as a JSON string.
    // It is important to pull records from the response before parsing.
    aleoRecordStore.consume(response.data.records); 
} catch (error) {
    console.log(error);
}
```