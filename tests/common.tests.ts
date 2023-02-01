import {expect, test} from '@jest/globals';
import { RestResponse, AleoRecord } from "../index";
import { parse } from "../index";

// const res: string
test("parse", () => {
    const res: {[key: string]: RestResponse} = {"records": {"2661252512654681696994066764399908555781436994723467320365318087098058329799field":"{\n  owner: aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.private,\n  gates: 0u64.private,\n  8_bit_unsigned: 8u8.private,\n  16_bit_unsigned: 16u16.private,\n  32_bit_unsigned: 32u32.private,\n  64_bit_unsigned: 64u64.private,\n  128_bit_unsigned: 128u128.private,\n  8_bit_integer: 8i8.private,\n  16_bit_integer: 16i16.private,\n  32_bit_integer: 32i32.private,\n  64_bit_integer: 64i64.private,\n  128_bit_integer: 128i128.private,\n  address_private: aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.private,\n  address_public: aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.public,\n  field_element: 2734604548515610299757128760048960140915968145638895629029415735847641014158field.private,\n  scalar_element: 1scalar.private,\n  _nonce: 752620284377133979892289751686346110966909299639858831303153801633707307539group.public\n}"}};

    const keys = Object.keys(res.records);
    const record: AleoRecord = parse(res.records[keys[0]]);

    // owner: AddressElement
    expect(record.owner.type).toBe("address");
    expect(record.owner.scope).toBe("private");
    expect(record.owner.value).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx");
    expect(record.owner.raw).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.private");

    // gates: U64Element
    expect(record.gates.type).toBe("u64");
    expect(record.gates.scope).toBe("private");
    expect(record.gates.value).toBe(BigInt(0));
    expect(record.gates.raw).toBe("0u64.private");

    // 8_bit_unsigned: U8Element
    expect(record["8_bit_unsigned"].type).toBe("u8");
    expect(record["8_bit_unsigned"].scope).toBe("private");
    expect(record["8_bit_unsigned"].value).toBe(8);
    expect(record["8_bit_unsigned"].raw).toBe("8u8.private");

    // 16_bit_unsigned: U16Element
    expect(record["16_bit_unsigned"].type).toBe("u16");
    expect(record["16_bit_unsigned"].scope).toBe("private");
    expect(record["16_bit_unsigned"].value).toBe(16);
    expect(record["16_bit_unsigned"].raw).toBe("16u16.private");

    // 32_bit_unsigned: U32Element
    expect(record["32_bit_unsigned"].type).toBe("u32");
    expect(record["32_bit_unsigned"].scope).toBe("private");
    expect(record["32_bit_unsigned"].value).toBe(32);
    expect(record["32_bit_unsigned"].raw).toBe("32u32.private");

    // 64_bit_unsigned: U64Element
    expect(record["64_bit_unsigned"].type).toBe("u64");
    expect(record["64_bit_unsigned"].scope).toBe("private");
    expect(record["64_bit_unsigned"].value).toBe(BigInt("64"));
    expect(record["64_bit_unsigned"].raw).toBe("64u64.private");

    // 128_bit_unsigned: U128Element
    expect(record["128_bit_unsigned"].type).toBe("u128");
    expect(record["128_bit_unsigned"].scope).toBe("private");
    expect(record["128_bit_unsigned"].value).toBe(BigInt("128"));
    expect(record["128_bit_unsigned"].raw).toBe("128u128.private");

    // 8_bit_integer: I8Element
    expect(record["8_bit_integer"].type).toBe("i8");
    expect(record["8_bit_integer"].scope).toBe("private");
    expect(record["8_bit_integer"].value).toBe(8);
    expect(record["8_bit_integer"].raw).toBe("8i8.private");

    // 16_bit_integer: I16Element
    expect(record["16_bit_integer"].type).toBe("i16");
    expect(record["16_bit_integer"].scope).toBe("private");
    expect(record["16_bit_integer"].value).toBe(16);
    expect(record["16_bit_integer"].raw).toBe("16i16.private");

    // 32_bit_integer: I32Element
    expect(record["32_bit_integer"].type).toBe("i32");
    expect(record["32_bit_integer"].scope).toBe("private");
    expect(record["32_bit_integer"].value).toBe(32);
    expect(record["32_bit_integer"].raw).toBe("32i32.private");

    // 64_bit_integer: I64Element
    expect(record["64_bit_integer"].type).toBe("i64");
    expect(record["64_bit_integer"].scope).toBe("private");
    expect(record["64_bit_integer"].value).toBe(BigInt("64"));
    expect(record["64_bit_integer"].raw).toBe("64i64.private");

    // 128_bit_integer: I128Element
    expect(record["128_bit_integer"].type).toBe("i128");
    expect(record["128_bit_integer"].scope).toBe("private");
    expect(record["128_bit_integer"].value).toBe(BigInt("128"));
    expect(record["128_bit_integer"].raw).toBe("128i128.private");

    // address_private: AddressElement
    expect(record.address_private.type).toBe("address");
    expect(record.address_private.scope).toBe("private");
    expect(record.address_private.value).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx");
    expect(record.address_private.raw).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.private");

    // address_public: AddressElement
    expect(record.address_public.type).toBe("address");
    expect(record.address_public.scope).toBe("public");
    expect(record.address_public.value).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx");
    expect(record.address_public.raw).toBe("aleo1f5tw09w8ucyf6nk92qer0mgp455x7clgds7dy8jgm3smkfne65xsf6kajx.public");

    // field_element: FieldElement
    expect(record.field_element.type).toBe("field");
    expect(record.field_element.scope).toBe("private");
    expect(record.field_element.value).toBe(BigInt("2734604548515610299757128760048960140915968145638895629029415735847641014158"));
    expect(record.field_element.raw).toBe("2734604548515610299757128760048960140915968145638895629029415735847641014158field.private");

    // scalar_element: ScalarElement
    expect(record.scalar_element.type).toBe("scalar");
    expect(record.scalar_element.scope).toBe("private");
    expect(record.scalar_element.value).toBe(BigInt("1"));
    expect(record.scalar_element.raw).toBe("1scalar.private");

    // _nonce: GroupElement
    expect(record._nonce.type).toBe("group");
    expect(record._nonce.scope).toBe("public");
    expect(record._nonce.value).toBe(BigInt("752620284377133979892289751686346110966909299639858831303153801633707307539"));
    expect(record._nonce.raw).toBe("752620284377133979892289751686346110966909299639858831303153801633707307539group.public");
});