"use strict";
exports.__esModule = true;
exports.parse = void 0;
function parse(res) {
    // TODO: This hack should not be necessary as the API improves.
    var res_data = res
        .replace(/ {2}/g, '  "')
        .replace(/: /g, '": "')
        .replace(/,/g, '",')
        .replace(/\n}/g, '"\n}');
    var data = JSON.parse(res_data);
    // Take the parsed JSON and turn into an AleoRecord.
    var record = {};
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var raw = data[key];
        var regex = /^(aleo[a-z0-9]{59})?([0-9]+)?(bool|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|field|group|scalar)?\.(private|public)$/m;
        var matches = raw.match(regex);
        if (matches) {
            var address = matches[1] || "";
            var type = matches[3] || "address";
            var scope = matches[4] || "private";
            // Remove type and scope from raw.
            data[key] = raw.slice(0, -type.length - scope.length - 1);
            // Cast the values to the correct type.
            switch (type) {
                case "bool":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: data[key] === "true",
                        scope: scope
                    };
                    break;
                case "i8":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "i16":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "i32":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "i64":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "i128":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "u8":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "u16":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "u32":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: parseInt(data[key]),
                        scope: scope
                    };
                    break;
                case "u64":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "u128":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "field":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "group":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "scalar":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: BigInt(data[key]),
                        scope: scope
                    };
                    break;
                case "address":
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: address,
                        scope: scope
                    };
                    break;
                default:
                    record[key] = {
                        raw: raw,
                        type: type,
                        value: data[key],
                        scope: scope
                    };
                    break;
            }
        }
    }
    return record;
}
exports.parse = parse;
