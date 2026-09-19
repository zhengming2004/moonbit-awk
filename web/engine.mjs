function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TPB9ArrayViewGUiRP211localreview3awk7SessionEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB21int64__to__string__js = (num, radix) => BigInt.asIntN(64, num).toString(radix);
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGiE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $unsafe_make_string(a, b) {
  return String.fromCodePoint(b).repeat(a);
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRP211localreview3awk5ValueE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGOUbsERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUbsERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOUbsERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUbsERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP211localreview3awk7SessionE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGiRP211localreview3awk7SessionE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP211localreview3awk5ValueE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB3MapGsRP211localreview3awk5ValueEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP211localreview3awk11FunctionDefE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP211localreview3awk5RegexE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP211localreview3awk9MainInputE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsiEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGiiEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPC16double6Double8mod__ffi = (a, b) => (a % b);
function _M0TPB9ArrayViewGRP211localreview3awk5ValueE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
const _M0FPC28encoding4utf823decode__utf8__lossy__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   const end = start + len;
   const slice = bytes.subarray(start, end);
   const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
   return decoder.decode(slice);
 })(
   new TextDecoder("utf-8", { ignoreBOM: true }),
   new TextDecoder("utf-8", { ignoreBOM: false }),
 );
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest.prototype.$tag = 9;
function _M0DTPC15error5Error38localreview_2fawk_2eRuntimeFlow_2eJump(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error38localreview_2fawk_2eRuntimeFlow_2eJump.prototype.$tag = 8;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 7;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 6;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 5;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 3;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 2;
function _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid.prototype.$tag = 1;
function _M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
const _M0MPC16bigint6BigInt9from__int = (x) => BigInt(x);
const _M0MPC16bigint6BigInt21js__to__string__radix = (x, radix) => x.toString(radix);
const _M0MPC16bigint6BigInt11compare__js = (x, y) => x < y ? -1 : x > y ? 1 : 0;
const _M0MPC16bigint6BigInt9equal__js = (x, y) => x === y;
const _M0MPC16bigint6BigInt11from__int64 = (x) => BigInt.asIntN(64, x);
const _M0MPC16bigint6BigInt8is__zero = (x) => x === 0n;
const _M0MPC16bigint6BigInt12op__neg__ffi = (x) => -x;
const _M0MPC16bigint6BigInt12op__add__ffi = (x, y) => x + y;
const _M0MPC16bigint6BigInt12op__sub__ffi = (x, y) => x - y;
const _M0MPC16bigint6BigInt12op__mul__ffi = (x, y) => x * y;
const _M0MPC16bigint6BigInt12op__div__ffi = (x, y) => x / y;
const _M0MPC16bigint6BigInt12op__mod__ffi = (x, y) => x % y;
const _M0MPC16bigint6BigInt11modpow__ffi = (x, y, z) => {
  if (z === 1n) return 0n;
  let result = 1n;
  x = ((x % z) + z) % z;
  while (y > 0n) {
    if (y & 1n) {
       result = (result * x) % z;
    }
    y >>= 1n;
    x = (x * x) % z;
  }
  return result;
};
const _M0MPC16bigint6BigInt8pow__ffi = (x, y) => x ** y;
const _M0MPC16bigint6BigInt7js__shl = (x, y) => x << BigInt(y);
const _M0MPC16bigint6BigInt7js__shr = (x, y) => x >> BigInt(y);
const _M0MPC16bigint6BigInt7to__int = (x) => Number(BigInt.asIntN(32, x));
const _M0MPC16bigint6BigInt11bit__length = (n) => {
  if (n >= 0) {
    return n === 0n ? 0 : n.toString(2).length;
  } else {
    const absN = -n;
    const absMinus1 = absN - 1n;
    return absMinus1 === 0n ? 0 : absMinus1.toString(2).length;
  }
};
const _M0FPC16bigint21can__convert__to__int = (x) => x >= -(2n ** 31n) && x < 2n ** 31n;
const _M0FPC16bigint7is__neg = (x) => x < 0n;
function _M0DTP211localreview3awk5Value5Empty() {}
_M0DTP211localreview3awk5Value5Empty.prototype.$tag = 0;
const _M0DTP211localreview3awk5Value5Empty__ = new _M0DTP211localreview3awk5Value5Empty();
function _M0DTP211localreview3awk5Value6Number(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk5Value6Number.prototype.$tag = 1;
function _M0DTP211localreview3awk5Value4Text(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk5Value4Text.prototype.$tag = 2;
function _M0DTP211localreview3awk5Value13NumericString(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk5Value13NumericString.prototype.$tag = 3;
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRPC16bigint6BigIntE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk12InputRequest4Open(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk12InputRequest4Open.prototype.$tag = 0;
function _M0DTP211localreview3awk12InputRequest4Read() {}
_M0DTP211localreview3awk12InputRequest4Read.prototype.$tag = 1;
const _M0DTP211localreview3awk12InputRequest4Read__ = new _M0DTP211localreview3awk12InputRequest4Read();
function _M0DTP211localreview3awk12InputRequest5Close() {}
_M0DTP211localreview3awk12InputRequest5Close.prototype.$tag = 2;
const _M0DTP211localreview3awk12InputRequest5Close__ = new _M0DTP211localreview3awk12InputRequest5Close();
function _M0DTPC16result6ResultGOcRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOcRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOcRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOcRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk9MainInput(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12) {
  this.reader = param0;
  this.data = param1;
  this.start = param2;
  this.eof = param3;
  this.opened = param4;
  this.failure = param5;
  this.index = param6;
  this.had_file = param7;
  this.mode = param8;
  this.separator = param9;
  this.csv = param10;
  this.csv_started = param11;
  this.csv_header_done = param12;
}
function _M0DTP211localreview3awk10InputReply5Ready() {}
_M0DTP211localreview3awk10InputReply5Ready.prototype.$tag = 0;
const _M0DTP211localreview3awk10InputReply5Ready__ = new _M0DTP211localreview3awk10InputReply5Ready();
function _M0DTP211localreview3awk10InputReply5Chunk(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk10InputReply5Chunk.prototype.$tag = 1;
function _M0DTP211localreview3awk10InputReply3End() {}
_M0DTP211localreview3awk10InputReply3End.prototype.$tag = 2;
const _M0DTP211localreview3awk10InputReply3End__ = new _M0DTP211localreview3awk10InputReply3End();
function _M0DTP211localreview3awk10InputReply6Failed(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk10InputReply6Failed.prototype.$tag = 3;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB3MapGiiEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOUiiEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGOUiiERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUiiERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOUiiERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUiiERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk11Instruction7Consume(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk11Instruction7Consume.prototype.$tag = 0;
function _M0DTP211localreview3awk11Instruction3Any(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk11Instruction3Any.prototype.$tag = 1;
function _M0DTP211localreview3awk11Instruction6Assert(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk11Instruction6Assert.prototype.$tag = 2;
function _M0DTP211localreview3awk11Instruction4Fork(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk11Instruction4Fork.prototype.$tag = 3;
function _M0DTP211localreview3awk11Instruction6Accept() {}
_M0DTP211localreview3awk11Instruction6Accept.prototype.$tag = 4;
const _M0DTP211localreview3awk11Instruction6Accept__ = new _M0DTP211localreview3awk11Instruction6Accept();
function _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk9RegexTree7Epsilon() {}
_M0DTP211localreview3awk9RegexTree7Epsilon.prototype.$tag = 0;
const _M0DTP211localreview3awk9RegexTree7Epsilon__ = new _M0DTP211localreview3awk9RegexTree7Epsilon();
function _M0DTP211localreview3awk9RegexTree9Character(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9RegexTree9Character.prototype.$tag = 1;
function _M0DTP211localreview3awk9RegexTree3Dot(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9RegexTree3Dot.prototype.$tag = 2;
function _M0DTP211localreview3awk9RegexTree9Assertion(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9RegexTree9Assertion.prototype.$tag = 3;
function _M0DTP211localreview3awk9RegexTree8Sequence(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9RegexTree8Sequence.prototype.$tag = 4;
function _M0DTP211localreview3awk9RegexTree11Alternative(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9RegexTree11Alternative.prototype.$tag = 5;
function _M0DTP211localreview3awk9RegexTree6Repeat(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk9RegexTree6Repeat.prototype.$tag = 6;
function _M0TP211localreview3awk7CharSet(param0, param1, param2) {
  this.ranges = param0;
  this.negative = param1;
  this.fold = param2;
}
function _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRP211localreview3awk9RegexTreeE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk11RegexReader(param0, param1, param2, param3, param4) {
  this.chars = param0;
  this.pos = param1;
  this.fold = param2;
  this.multiline = param3;
  this.dotall = param4;
}
function _M0TP211localreview3awk5Regex(param0, param1) {
  this.code = param0;
  this.start = param1;
}
function _M0DTPC16option6OptionGRPC16bigint6BigIntE4None() {}
_M0DTPC16option6OptionGRPC16bigint6BigIntE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPC16bigint6BigIntE4None__ = new _M0DTPC16option6OptionGRPC16bigint6BigIntE4None();
function _M0DTPC16option6OptionGRPC16bigint6BigIntE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPC16bigint6BigIntE4Some.prototype.$tag = 1;
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function $i64_trunc_f64(a) {
  if (Number.isNaN(a)) return 0n;
  if (a >= 9223372036854775807) return 9223372036854775807n;
  if (a <= -9223372036854775808) return 9223372036854775808n;
  return BigInt.asUintN(64, BigInt(Math.trunc(a)));
}
function _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGcE(param0) {
  this.val = param0;
}
function _M0TP211localreview3awk7CSVMode(param0, param1, param2, param3) {
  this.format = param0;
  this.separator = param1;
  this.comment = param2;
  this.header = param3;
}
function _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk5Token(param0, param1, param2, param3) {
  this.text = param0;
  this.quoted = param1;
  this.regexp = param2;
  this.adjacent = param3;
}
function _M0TP211localreview3awk6Cursor(param0, param1) {
  this.tokens = param0;
  this.pos = param1;
}
function _M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRP211localreview3awk4ExprE(param0) {
  this.val = param0;
}
function _M0DTP211localreview3awk4Expr7Literal(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr7Literal.prototype.$tag = 0;
function _M0DTP211localreview3awk4Expr12RegexLiteral(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr12RegexLiteral.prototype.$tag = 1;
function _M0DTP211localreview3awk4Expr8Variable(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr8Variable.prototype.$tag = 2;
function _M0DTP211localreview3awk4Expr5Field(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr5Field.prototype.$tag = 3;
function _M0DTP211localreview3awk4Expr10NamedField(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr10NamedField.prototype.$tag = 4;
function _M0DTP211localreview3awk4Expr7Element(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr7Element.prototype.$tag = 5;
function _M0DTP211localreview3awk4Expr5Tuple(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr5Tuple.prototype.$tag = 6;
function _M0DTP211localreview3awk4Expr5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr5Unary.prototype.$tag = 7;
function _M0DTP211localreview3awk4Expr6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr6Binary.prototype.$tag = 8;
function _M0DTP211localreview3awk4Expr6Assign(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr6Assign.prototype.$tag = 9;
function _M0DTP211localreview3awk4Expr9Increment(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr9Increment.prototype.$tag = 10;
function _M0DTP211localreview3awk4Expr11Conditional(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr11Conditional.prototype.$tag = 11;
function _M0DTP211localreview3awk4Expr4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr4Call.prototype.$tag = 12;
function _M0DTP211localreview3awk4Expr7Getline(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr7Getline.prototype.$tag = 13;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk9Statement5Block(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement5Block.prototype.$tag = 0;
function _M0DTP211localreview3awk9Statement5Print(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement5Print.prototype.$tag = 1;
function _M0DTP211localreview3awk9Statement6Printf(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement6Printf.prototype.$tag = 2;
function _M0DTP211localreview3awk9Statement10Expression(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement10Expression.prototype.$tag = 3;
function _M0DTP211localreview3awk9Statement2If(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk9Statement2If.prototype.$tag = 4;
function _M0DTP211localreview3awk9Statement5While(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement5While.prototype.$tag = 5;
function _M0DTP211localreview3awk9Statement2Do(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement2Do.prototype.$tag = 6;
function _M0DTP211localreview3awk9Statement3For(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP211localreview3awk9Statement3For.prototype.$tag = 7;
function _M0DTP211localreview3awk9Statement5ForIn(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk9Statement5ForIn.prototype.$tag = 8;
function _M0DTP211localreview3awk9Statement6Delete(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement6Delete.prototype.$tag = 9;
function _M0DTP211localreview3awk9Statement5Break() {}
_M0DTP211localreview3awk9Statement5Break.prototype.$tag = 10;
const _M0DTP211localreview3awk9Statement5Break__ = new _M0DTP211localreview3awk9Statement5Break();
function _M0DTP211localreview3awk9Statement8Continue() {}
_M0DTP211localreview3awk9Statement8Continue.prototype.$tag = 11;
const _M0DTP211localreview3awk9Statement8Continue__ = new _M0DTP211localreview3awk9Statement8Continue();
function _M0DTP211localreview3awk9Statement4Next() {}
_M0DTP211localreview3awk9Statement4Next.prototype.$tag = 12;
const _M0DTP211localreview3awk9Statement4Next__ = new _M0DTP211localreview3awk9Statement4Next();
function _M0DTP211localreview3awk9Statement8NextFile() {}
_M0DTP211localreview3awk9Statement8NextFile.prototype.$tag = 13;
const _M0DTP211localreview3awk9Statement8NextFile__ = new _M0DTP211localreview3awk9Statement8NextFile();
function _M0DTP211localreview3awk9Statement4Exit(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement4Exit.prototype.$tag = 14;
function _M0DTP211localreview3awk9Statement6Return(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement6Return.prototype.$tag = 15;
function _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP211localreview3awk11FunctionDefEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk11FunctionDef(param0, param1) {
  this.params = param0;
  this.body = param1;
}
function _M0TP211localreview3awk4Rule(param0, param1, param2, param3, param4) {
  this.phase = param0;
  this.condition = param1;
  this.until = param2;
  this.body = param3;
  this.active = param4;
}
function _M0TP211localreview3awk7Program(param0, param1, param2) {
  this.rules = param0;
  this.functions = param1;
  this.kinds = param2;
}
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP211localreview3awk4Slot12VariableSlot(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Slot12VariableSlot.prototype.$tag = 0;
function _M0DTP211localreview3awk4Slot9FieldSlot(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Slot9FieldSlot.prototype.$tag = 1;
function _M0DTP211localreview3awk4Slot11ElementSlot(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Slot11ElementSlot.prototype.$tag = 2;
function _M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB3MapGsRP211localreview3awk5ValueEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP211localreview3awk5RegexEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP211localreview3awk9MainInputEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP211localreview3awk5State(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29) {
  this.vars = param0;
  this.arrays = param1;
  this.fields = param2;
  this.fields_ready = param3;
  this.reuse_csv_fields = param4;
  this.saved_fs = param5;
  this.input_mode = param6;
  this.output_mode = param7;
  this.field_names = param8;
  this.record = param9;
  this.record_true_string = param10;
  this.output = param11;
  this.output_size = param12;
  this.steps = param13;
  this.step_limit = param14;
  this.entries = param15;
  this.eval_depth = param16;
  this.regexes = param17;
  this.functions = param18;
  this.kinds = param19;
  this.frames = param20;
  this.random_state = param21;
  this.random_seed = param22;
  this.clock_seconds = param23;
  this.input = param24;
  this.io = param25;
  this.readers = param26;
  this.writers = param27;
  this.protected_stdin = param28;
  this.output_sink = param29;
}
function _M0TP211localreview3awk7Session(param0, param1, param2, param3, param4, param5, param6) {
  this.state = param0;
  this.rules = param1;
  this.phase = param2;
  this.status = param3;
  this.stopped = param4;
  this.skip_file = param5;
  this.feed_header_pending = param6;
}
function _M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk9IORequest10OpenReader(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9IORequest10OpenReader.prototype.$tag = 0;
function _M0DTP211localreview3awk9IORequest10ReadReader(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9IORequest10ReadReader.prototype.$tag = 1;
function _M0DTP211localreview3awk9IORequest10OpenWriter(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9IORequest10OpenWriter.prototype.$tag = 2;
function _M0DTP211localreview3awk9IORequest11WriteWriter(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9IORequest11WriteWriter.prototype.$tag = 3;
function _M0DTP211localreview3awk9IORequest11CloseStream(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9IORequest11CloseStream.prototype.$tag = 4;
function _M0DTP211localreview3awk9IORequest11FlushStream(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9IORequest11FlushStream.prototype.$tag = 5;
function _M0DTP211localreview3awk9IORequest7Execute(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9IORequest7Execute.prototype.$tag = 6;
function $compare_float(a, b) {
  return (a >= b) - (a <= b);
}
function _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview3awk4Flow6Normal() {}
_M0DTP211localreview3awk4Flow6Normal.prototype.$tag = 0;
const _M0DTP211localreview3awk4Flow6Normal__ = new _M0DTP211localreview3awk4Flow6Normal();
function _M0DTP211localreview3awk4Flow9BreakFlow() {}
_M0DTP211localreview3awk4Flow9BreakFlow.prototype.$tag = 1;
const _M0DTP211localreview3awk4Flow9BreakFlow__ = new _M0DTP211localreview3awk4Flow9BreakFlow();
function _M0DTP211localreview3awk4Flow12ContinueFlow() {}
_M0DTP211localreview3awk4Flow12ContinueFlow.prototype.$tag = 2;
const _M0DTP211localreview3awk4Flow12ContinueFlow__ = new _M0DTP211localreview3awk4Flow12ContinueFlow();
function _M0DTP211localreview3awk4Flow8NextFlow() {}
_M0DTP211localreview3awk4Flow8NextFlow.prototype.$tag = 3;
const _M0DTP211localreview3awk4Flow8NextFlow__ = new _M0DTP211localreview3awk4Flow8NextFlow();
function _M0DTP211localreview3awk4Flow12NextFileFlow() {}
_M0DTP211localreview3awk4Flow12NextFileFlow.prototype.$tag = 4;
const _M0DTP211localreview3awk4Flow12NextFileFlow__ = new _M0DTP211localreview3awk4Flow12NextFileFlow();
function _M0DTP211localreview3awk4Flow8ExitFlow(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Flow8ExitFlow.prototype.$tag = 5;
function _M0DTP211localreview3awk4Flow10ReturnFlow(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Flow10ReturnFlow.prototype.$tag = 6;
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUbsERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbsERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUbsERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbsERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk5Frame(param0, param1, param2, param3) {
  this.params = param0;
  this.vars = param1;
  this.arrays = param2;
  this.owned = param3;
}
function _M0DTPC16result6ResultGOUssERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUssERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOUssERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUssERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None() {}
_M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None__ = new _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None();
function _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4None() {}
_M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4None__ = new _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4None();
function _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGOWsEOsE4None() {}
_M0DTPC16option6OptionGOWsEOsE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOWsEOsE4None__ = new _M0DTPC16option6OptionGOWsEOsE4None();
function _M0DTPC16option6OptionGOWsEOsE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOWsEOsE4Some.prototype.$tag = 1;
function _M0TP211localreview3awk9RunResult(param0, param1, param2) {
  this.output = param0;
  this.exit_status = param1;
  this.steps = param2;
}
const _M0FP411localreview3awk3cmd3web16current__seconds = () => Date.now() / 1000;
function _M0TPB8MutLocalGORP211localreview3awk7SessionE(param0) {
  this.val = param0;
}
const _M0FP411localreview3awk3cmd3web10host__call = (io, action, value) => {
  try { return io(action, value); }
  catch (error) { return '!' + String(error?.message ?? error); }
};
function _M0DTP211localreview3awk7IOReply7IOReady() {}
_M0DTP211localreview3awk7IOReply7IOReady.prototype.$tag = 0;
const _M0DTP211localreview3awk7IOReply7IOReady__ = new _M0DTP211localreview3awk7IOReply7IOReady();
function _M0DTP211localreview3awk7IOReply6IOData(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk7IOReply6IOData.prototype.$tag = 1;
function _M0DTP211localreview3awk7IOReply5IOEnd() {}
_M0DTP211localreview3awk7IOReply5IOEnd.prototype.$tag = 2;
const _M0DTP211localreview3awk7IOReply5IOEnd__ = new _M0DTP211localreview3awk7IOReply5IOEnd();
function _M0DTP211localreview3awk7IOReply8IOStatus(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk7IOReply8IOStatus.prototype.$tag = 3;
function _M0DTP211localreview3awk7IOReply8IOFailed(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk7IOReply8IOFailed.prototype.$tag = 4;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 9: {
      return _M0MPC15debug4Repr8opaque__("localreview/awk/cmd/web.BridgeError.InvalidRequest", _M0MPC15debug4Repr7omitted());
    }
    case 5: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 2: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    case 6: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 7: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 1: {
      return _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__reprGRP211localreview3awk10ParseErrorE(_e);
    }
    case 8: {
      return _M0MPC15debug4Repr8opaque__("localreview/awk.RuntimeFlow.Jump", _M0MPC15debug4Repr7omitted());
    }
    case 4: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 3: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__reprGRP211localreview3awk10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GiE = 0;
const _M0MPB4Iter4nextN6constrS9856GiE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GiE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1891 = 0n;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPC15debug6renderN6constrS1705 = 16;
const _bind = [];
const _M0FP411localreview3awk3cmd3web8sessions = _M0MPB3Map3MapGiRP211localreview3awk7SessionE(new _M0TPB9ArrayViewGUiRP211localreview3awk7SessionEE(_bind, 0, 0), undefined);
const _M0FP411localreview3awk3cmd3web13next__session = _M0MPC13ref3Ref3RefGiE(0);
function _M0FPC15abort5abortGRPB9ArrayViewGcEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGRPC16bigint6BigIntE(msg) {
  return $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0IPC16string6StringPB6ToJson8to__json(self) {
  return new _M0DTPB4Json6String(self);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP211localreview3awk5ValueEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGcEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGRP211localreview3awk5ValueE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP211localreview3awk5ValueEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGcEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0MPC13int3Int10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGiiE(self, other) {
  return self._0 === other._0 && self._1 === other._1;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOUiiEE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGUiiEE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGRPC16bigint6BigIntE(x, y) {
  return _M0IPC16bigint6BigIntPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGRPC16bigint6BigIntE(x, y) {
  return _M0IPC16bigint6BigIntPB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__leGRPC16bigint6BigIntE(x, y) {
  return _M0IPC16bigint6BigIntPB7Compare7compare(x, y) <= 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGiE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GiE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GiE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGiE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GiE;
  }
  return new _M0TPB4IterGiE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind$2 = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  const _bind$5 = _bind$2.length;
  if (_bind$3 < 0 || (_bind$3 > _bind$4 || _bind$4 > _bind$5)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind$2, _bind$3, _bind$4);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$2 = self.str;
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  let _tmp = _bind$3;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string10StringView16lexical__compare(self, other) {
  const self_len = self.end - self.start | 0;
  const other_len = other.end - other.start | 0;
  const min_len = self_len < other_len ? self_len : other_len;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < min_len) {
      const self_char = self.str.charCodeAt(self.start + i | 0);
      const other_char = other.str.charCodeAt(other.start + i | 0);
      const cmp = _M0IPC16uint166UInt16PB7Compare7compare(self_char, other_char);
      if (cmp !== 0) {
        return cmp;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return $compare_int(self_len, other_len);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind$2 = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0FPB20unsafe__make__string(_tmp, _tmp$2) {
  return $unsafe_make_string(_tmp, _tmp$2);
}
function _M0MPC16string6String4make(length, value) {
  if (length >= 0) {
    if (value <= 65535) {
      return _M0FPB20unsafe__make__string(length, value);
    } else {
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(2, length) | 0);
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < length) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, value);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("invalid length");
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB9ArrayViewGcEE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind$2 = self.str;
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  let _tmp = _bind$3;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGbE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind$2 = str.end - str.start | 0;
  switch (_bind$2) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$3 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$3 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$2 = chars.str;
  const _bind$3 = chars.start;
  const _bind$4 = chars.end;
  let _tmp = _bind$3;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$5 = code >>> 5 | 0;
        switch (_bind$5) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$2 = code >>> 5 | 0;
    switch (_bind$2) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind$2 === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind$2;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$2 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$2 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(self, f) {
  return new _M0TPB4IterGRP211localreview3awk5ValueE(() => {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    const _bind$2 = remaining.val;
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _view = _Some;
      const _bind$3 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$3 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$3;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind$2 = self.size_hint;
  let result;
  if (_bind$2 === undefined) {
    result = [];
  } else {
    const _Some = _bind$2;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(_n);
  }
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind$2 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind$2 === undefined) {
    return self;
  } else {
    const _Some = _bind$2;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$3 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$4 = _bind$3.str;
    const _bind$5 = _bind$3.start;
    const _bind$6 = _bind$3.end;
    let _tmp = _bind$5;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$6) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$7 = _bind$4.charCodeAt(_string_index);
          if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
            const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
            if (_bind$8 >= 56320 && _bind$8 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9to__upper(self) {
  const _bind$2 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind$2 === undefined) {
    return self;
  } else {
    const _Some = _bind$2;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$3 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$4 = _bind$3.str;
    const _bind$5 = _bind$3.start;
    const _bind$6 = _bind$3.end;
    let _tmp = _bind$5;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$6) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$7 = _bind$4.charCodeAt(_string_index);
          if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
            const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
            if (_bind$8 >= 56320 && _bind$8 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0MPC16string6String16lexical__compare(self, other) {
  return _M0MPC16string10StringView16lexical__compare(new _M0TPC16string10StringView(self, 0, self.length), new _M0TPC16string10StringView(other, 0, other.length));
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0MPC15array9ArrayView4iterGcE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGcE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return -1;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGiE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGiE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGiE(self) {
  return _M0MPC15array9ArrayView4iterGiE(new _M0TPB9ArrayViewGiE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGUiiEE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGUiiEE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC13int3Int3min(self, other) {
  return self < other ? self : other;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$2 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$2) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$3 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$3.end - _bind$3.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$2 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$2) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$3 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$3.end - _bind$3.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$3 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$3) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGUiiEE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IPC15tuple6Tuple2PB2Eq5equalGiiE(_x, _y);
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGiE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGiE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGbE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGiE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyRP211localreview3awk9MainInputE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC16option6Option3mapGRP211localreview3awk5TokenbE(self, f) {
  if (self === undefined) {
    return -1;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC16option6Option3mapGUbRP211localreview3awk4ExprEUbsEEHRPC15error5Error(self, f) {
  if (self === undefined) {
    return new _M0DTPC16result6ResultGOUbsERPC15error5ErrorE2Ok(undefined);
  } else {
    const _Some = self;
    const _t = _Some;
    const _bind$2 = f(_t);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGOUbsERPC15error5ErrorE2Ok(_tmp);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP211localreview3awk5ValueE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGRP211localreview3awk5ValueE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGcE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGRP211localreview3awk5ValueE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP211localreview3awk5ValueE(self.buf, len, len, self.start, 0);
}
function _M0MPC15array9ArrayView9to__ownedGcE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGcE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGiRP211localreview3awk7SessionE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGiRP211localreview3awk7SessionE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsiE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGiiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGiiE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGiRP211localreview3awk7SessionE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGiRP211localreview3awk7SessionE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiiE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGiRP211localreview3awk7SessionE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP211localreview3awk7SessionE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP211localreview3awk7SessionE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP211localreview3awk7SessionE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP211localreview3awk7SessionE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP211localreview3awk7SessionE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP211localreview3awk7SessionE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGiRP211localreview3awk7SessionE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP211localreview3awk7SessionE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP211localreview3awk7SessionE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP211localreview3awk7SessionE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGiRP211localreview3awk7SessionE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP211localreview3awk7SessionE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP211localreview3awk7SessionE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP211localreview3awk7SessionE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGiRP211localreview3awk7SessionE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP211localreview3awk7SessionE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP211localreview3awk5ValueE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview3awk5ValueE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview3awk5ValueE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGsRP211localreview3awk5ValueEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGsRP211localreview3awk5ValueEE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGsRP211localreview3awk5ValueEE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP211localreview3awk11FunctionDefE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview3awk11FunctionDefE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview3awk11FunctionDefE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP211localreview3awk5RegexE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview3awk5RegexE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview3awk5RegexE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP211localreview3awk9MainInputE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview3awk9MainInputE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview3awk9MainInputE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGiiE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiiE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGiiE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGiRP211localreview3awk7SessionE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP211localreview3awk7SessionE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP211localreview3awk5ValueE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview3awk5ValueE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGsRP211localreview3awk5ValueEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP211localreview3awk11FunctionDefE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview3awk11FunctionDefE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP211localreview3awk5RegexE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview3awk5RegexE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP211localreview3awk9MainInputE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview3awk9MainInputE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiiE(self, key, value) {
  _M0MPB3Map15set__with__hashGiiE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP211localreview3awk7SessionE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRP211localreview3awk7SessionE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP211localreview3awk7SessionE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP211localreview3awk5ValueE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP211localreview3awk5ValueE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB3MapGsRP211localreview3awk5ValueEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP211localreview3awk5RegexE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP211localreview3awk5RegexE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP211localreview3awk9MainInputE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP211localreview3awk9MainInputE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP211localreview3awk11FunctionDefE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP211localreview3awk11FunctionDefE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiiE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC15debug4ReprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC15debug4ReprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP211localreview3awk7SessionE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP211localreview3awk5ValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGsRP211localreview3awk5ValueEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP211localreview3awk5RegexE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP211localreview3awk11FunctionDefE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP211localreview3awk9MainInputE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map2atGsRPB3MapGsRP211localreview3awk5ValueEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      $panic();
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map2atGsRP211localreview3awk11FunctionDefE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      $panic();
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map8containsGsRP211localreview3awk11FunctionDefE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP211localreview3awk5ValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP211localreview3awk9MainInputE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map12contains__kvGsiE(self, key, value) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && (_entry.key === key && _entry.value === value)) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGiRP211localreview3awk7SessionE(self, entry) {
  const _bind$2 = entry.prev;
  if (_bind$2 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry.next;
  }
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGsRP211localreview3awk5ValueE(self, entry) {
  const _bind$2 = entry.prev;
  if (_bind$2 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_bind$2 >>> 0 < _tmp.length ? _tmp[_bind$2] : $oob()).next = entry.next;
  }
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGiRP211localreview3awk7SessionE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$2 = self.entries[next];
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGiRP211localreview3awk7SessionE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGsRP211localreview3awk5ValueE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$2 = self.entries[next];
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsRPB4JsonE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGiRP211localreview3awk7SessionE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGiRP211localreview3awk7SessionE(self, _entry);
        _M0MPB3Map11shift__backGiRP211localreview3awk7SessionE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGsRP211localreview3awk5ValueE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP211localreview3awk5ValueE(self, _entry);
        _M0MPB3Map11shift__backGsRP211localreview3awk5ValueE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGsRP211localreview3awk9MainInputE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP211localreview3awk5ValueE(self, _entry);
        _M0MPB3Map11shift__backGsRP211localreview3awk5ValueE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGssE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP211localreview3awk5ValueE(self, _entry);
        _M0MPB3Map11shift__backGsRP211localreview3awk5ValueE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGiRP211localreview3awk7SessionE(self, key) {
  _M0MPB3Map18remove__with__hashGiRP211localreview3awk7SessionE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6removeGsRP211localreview3awk5ValueE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP211localreview3awk5ValueE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGsRP211localreview3awk9MainInputE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP211localreview3awk9MainInputE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGssE(self, key) {
  _M0MPB3Map18remove__with__hashGssE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6lengthGiRP211localreview3awk7SessionE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(self) {
  return self.size;
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPB3Map9is__emptyGiiE(self) {
  return self.size === 0;
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRP211localreview3awk9MainInputEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRP211localreview3awk9MainInputEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4iterGsiE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsiEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4iterGiiE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGiiEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPB4JsonE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0MPB3Map5iter2GsiE(self) {
  return _M0MPB3Map4iterGsiE(self);
}
function _M0MPB3Map5iter2GiiE(self) {
  return _M0MPB3Map4iterGiiE(self);
}
function _M0IPB3MapPB2Eq5equalGsiE(self, that) {
  if (self.size === that.size) {
    const _it = _M0MPB3Map5iter2GsiE(self);
    while (true) {
      const _bind$2 = _M0MPB5Iter24nextGsiE(_it);
      if (_bind$2 === undefined) {
        return true;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        if (_M0MPB3Map12contains__kvGsiE(that, _k, _v)) {
        } else {
          return false;
        }
        continue;
      }
    }
  } else {
    return false;
  }
}
function _M0MPB3Map4copyGsiE(self) {
  const _bind$2 = self.capacity;
  const _bind$3 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$4 = self.size;
  const _bind$5 = self.capacity_mask;
  const _bind$6 = self.grow_at;
  const _bind$7 = undefined;
  const _bind$8 = self.tail;
  const other = new _M0TPB3MapGsiE(_bind$3, _bind$4, _bind$2, _bind$5, _bind$6, _bind$7, _bind$8);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  const _bind$9 = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  if (_bind$9 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$9;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_entry = new _M0TPB5EntryGsiE(_prev, next, _psl, _hash, _key, _value);
      const _tmp$6 = other.entries;
      if (idx >>> 0 < _tmp$6.length) {
        _tmp$6[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        _tmp$3 = _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(_prev >>> 0 < _tmp$7.length ? _tmp$7[_prev] : $oob());
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  return self ? _M0MPC14json4Json7boolean(true) : _M0MPC14json4Json7boolean(false);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0MPC15array5Array3mapGRPB4JsonsE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP211localreview3awk5ValuesE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP211localreview3awk4ExprRP211localreview3awk5ValueEHRPC15error5Error(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERPC15error5ErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP211localreview3awk5ValuesEHRP211localreview3awk10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      const _bind$3 = f(v);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview3awk10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGcRP211localreview3awk5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGcsE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGiE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGiE(self);
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3anyGUiiEE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGcE(self, f) {
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      return true;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPB4JsonE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPB5Iter24nextGsiE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPB5Iter24nextGiiE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0MPC13int3Int3abs(self) {
  return self < 0 ? -self | 0 : self;
}
function _M0MPC15bytes5Bytes12view_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$2 = end$2 - start | 0;
    return new _M0TPC15bytes9BytesView(self, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
  }
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5trunc(_tmp) {
  return Math.trunc(_tmp);
}
function _M0IPC16double6DoublePB3Mod3mod(self, other) {
  return _M0MPC16double6Double8mod__ffi(self, other);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double7is__inf(self) {
  return self > _M0FPB18double__max__value || self < _M0FPB18double__min__value;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char21is__ascii__alphabetic(self) {
  return self >= 65 && self <= 90 ? true : self >= 97 && self <= 122;
}
function _M0MPC14char4Char19is__ascii__hexdigit(self) {
  return self >= 48 && self <= 57 ? true : self >= 65 && self <= 70 ? true : self >= 97 && self <= 102;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char14is__whitespace(self) {
  if (self <= 32) {
    return self >= 9 && self <= 13 ? true : self === 32;
  }
  return self === 133 ? true : self === 160 ? true : self === 5760 ? true : self >= 8192 && self <= 8202 ? true : self === 8232 ? true : self === 8233 ? true : self === 8239 ? true : self === 8287 ? true : self === 12288;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char20to__ascii__lowercase(self) {
  if (_M0MPC14char4Char20is__ascii__uppercase(self)) {
    return self + 32 | 0;
  }
  return self;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15bytes9BytesView4data(self) {
  return self.buf;
}
function _M0MPC15bytes9BytesView13start__offset(self) {
  return self.start;
}
function _M0MPC15array5Array12view_2einnerGcE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$2 = self;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind$2, start, start + _bind$3 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("View index out of bounds");
  }
}
function _M0MPC15array5Array12view_2einnerGRP211localreview3awk5ValueE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$2 = self;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGRP211localreview3awk5ValueE(_bind$2, start, start + _bind$3 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("View index out of bounds");
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGcE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGcE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGbE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGbE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGbE(self) {
  if (_M0MPC15array5Array9is__emptyGbE(self)) {
    return -1;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGbE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGcE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRPC16string10StringViewE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGsE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGsE(arr, start, end) {
  const _bind$2 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$2)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGsE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGRP211localreview3awk5ValueE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGsE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGsE(arr, cmp) {
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGsE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S448GsE(_env, a, b) {
  const arr = _env._2;
  const swaps = _env._1;
  const cmp = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGsE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S452GsE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GsE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GsE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GsE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGsE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: swaps, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GsE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GsE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GsE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S452GsE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGsE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGsE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGsE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGsE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$2 = len / 2 | 0;
  let _tmp = _bind$2 - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGsE(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGsE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGsE(_M0MPC15array12MutArrayView5sliceGsE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGsE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGsE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$2 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind$2) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGsE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGsE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGsE(arr, cmp) {
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind$2) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGsE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGsE(arr, cmp, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGsE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGsE(arr$2, cmp);
      return undefined;
    }
    const _bind$2 = _M0FPB24fixed__choose__pivot__byGsE(arr$2, cmp);
    const _pivot_index = _bind$2._0;
    const _likely_sorted = _bind$2._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGsE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$3 = _M0FPB20fixed__partition__byGsE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$3._0;
    const _partitioned = _bind$3._1;
    const _tmp$6 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$6 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGsE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGsE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGsE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGsE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGsE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGsE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGsE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array8sort__byGsE(self, cmp) {
  const _bind$2 = self.length;
  _M0MPC15array12MutArrayView8sort__byGsE(new _M0TPB12MutArrayViewGsE(self, 0, _bind$2), cmp);
}
function _M0MPC15array5Array3getGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : -1;
}
function _M0MPC15array5Array3getGRP211localreview3awk5ValueE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0IPC15array5ArrayPB2Eq5equalGcE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP211localreview3awk5ValueE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP211localreview3awk5ValueE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGRP211localreview3awk5ValueE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3anyGRP211localreview3awk4RuleE(self, f) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array5Array3anyGcE(self, f) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array5Array5clearGsE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, 0);
}
function _M0MPC15array5Array5clearGcE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGcE(self, 0);
}
function _M0MPC15array5Array6filterGcE(self, f) {
  const arr = [];
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGcE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGcE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$2 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4lastGRP211localreview3awk5FrameE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP211localreview3awk10ParseErrorE(value) {
  return _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr4char(x) {
  return new _M0DTPC15debug4Repr7CharLit(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(fields);
  let _tmp;
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
    if (_bind$2 === undefined) {
      _tmp = _acc;
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp);
}
function _M0MPC15debug4Repr8opaque__(name, children) {
  return new _M0DTPC15debug4Repr6Opaque(name, children);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind$2 = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$2) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$3 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$3 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$3;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind$2 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$3 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$3 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$3;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$2 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGRP211localreview3awk5ValueE(lines, last_i, `${_M0MPC15array5Array2atGRPC16string10StringViewE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGUiiEE(lines));
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGUiiEE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$2 = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$3 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$3) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$2 = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$2) {
                const item = contents[1 + _ | 0];
                const _bind$3 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$3, 0, _bind$3.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGUiiEE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGUiiEE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGUiiEE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$2 = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$2) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$3 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$3) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$2 = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind$2) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPB4JsonE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$2 = v.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _one = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$2 = _val.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _first = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$2 = v.lines;
        if (_bind$2.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$2.length === 1) {
            const _one = _bind$2[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$2[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$2, 1, _bind$2.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC14char4CharPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4char(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(self) {
  const _Failure = self;
  const _msg = _Failure._0;
  return _M0MPC15debug4Repr4ctor("Failure", [{ _0: undefined, _1: _M0MPC15debug4Repr6string(_msg) }]);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0FPC28encoding4utf821decode__lossy_2einner(bytes, ignore_bom) {
  return _M0FPC28encoding4utf823decode__utf8__lossy__js(_M0MPC15bytes9BytesView4data(bytes), _M0MPC15bytes9BytesView13start__offset(bytes), bytes.end - bytes.start | 0, !ignore_bom);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$2 = s$2;
      if ((_bind$2.end - _bind$2.start | 0) >= 1) {
        const _x = _bind$2.str.charCodeAt(_bind$2.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$2 = s$2;
    if ((_bind$2.end - _bind$2.start | 0) >= 1) {
      const _x = _bind$2.str.charCodeAt(_bind$2.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$3 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$3._0;
        const _exp_num = _bind$3._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$2 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) >= 1) {
    const _x = _bind$3.str.charCodeAt(_bind$3.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
      s$3 = _x$2;
      const _bind$4 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$4 = s$3;
      if ((_bind$4.end - _bind$4.start | 0) >= 1) {
        const _x = _bind$4.str.charCodeAt(_bind$4.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number_val = _bind$5._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$4 = s$3;
  if ((_bind$4.end - _bind$4.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$4 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$5 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$7 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _accept_state_298;
  switch (_bind$2) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind$2 = _accept_state_216;
      switch (_bind$2) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$2 = rest_start + 1 | 0;
                          _tmp$2 = _bind$2;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob(), 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind$2 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$2 = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          rest$3 = _ok._0;
        } else {
          return _bind$2;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind$2 = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind$2 = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind$2 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$2;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$2 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_bind$3 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$3;
        const _num = _Some;
        const _bind$4 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$4.$tag === 1) {
          const _Some$2 = _bind$4;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$5 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp = _ok._0;
            } else {
              return _bind$5;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_x_813) {
  switch (_x_813.$tag) {
    case 7: {
      const _InvalidChar = _x_813;
      const _$42$arg_814 = _InvalidChar._0;
      const _$42$arg_815 = _InvalidChar._1;
      return _M0MPC15debug4Repr4ctor("InvalidChar", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_814) }, { _0: undefined, _1: _M0IPC14char4CharPC15debug5Debug8to__repr(_$42$arg_815) }]);
    }
    case 6: {
      return _M0MPC15debug4Repr4ctor("InvalidEof", []);
    }
    case 5: {
      const _InvalidNumber = _x_813;
      const _$42$arg_816 = _InvalidNumber._0;
      const _$42$arg_817 = _InvalidNumber._1;
      return _M0MPC15debug4Repr4ctor("InvalidNumber", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_816) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_$42$arg_817) }]);
    }
    case 4: {
      const _InvalidIdentEscape = _x_813;
      const _$42$arg_818 = _InvalidIdentEscape._0;
      return _M0MPC15debug4Repr4ctor("InvalidIdentEscape", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_818) }]);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("DepthLimitExceeded", []);
    }
  }
}
function _M0IPC14json8PositionPC15debug5Debug8to__repr(_x_774) {
  const _bind$2 = [{ _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$2, 0, 2), undefined));
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$2 = _M0MPC16string10StringView11code__units(input);
  const _bind$3 = _bind$2.end - _bind$2.start | 0;
  if (offset < 0 || offset > _bind$3) {
    $panic();
  }
  const _bind$4 = new _M0TPB9ArrayViewGkE(_bind$2.buf, _bind$2.start, offset + _bind$2.start | 0);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$5) {
      const code_unit = _bind$4.buf[_bind$4.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind$2 = ctx.input;
      const _bind$3 = _bind$2.str.charCodeAt(_bind$2.start + offset | 0);
      switch (_bind$3) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1891;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind$2 = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind$2 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$2;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$2 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$2.str.charCodeAt(_bind$2.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$3 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, _bind$3);
    }
    const _bind$3 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$3.str.charCodeAt(_bind$3.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$4 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          value = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L;
        }
        const _bind$5 = s;
        return new _M0TPC14json11LexedNumber(_bind$5, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double13neg__infinity);
      } else {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$2 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$2.str.charCodeAt(_bind$2.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$3 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$4 = ctx.input;
          const _bind$5 = _bind$4.str.charCodeAt(_bind$4.start + i | 0);
          if (_bind$5 >= 48 && _bind$5 <= 57) {
            const digit = _bind$5 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$5 === 46) {
              has_decimal = true;
            } else {
              if (_bind$5 === 101) {
                break _L$2;
              } else {
                if (_bind$5 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$4 = ctx.input;
          const next = _bind$4.str.charCodeAt(_bind$4.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      d = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$3, d);
  }
  if (scan.negative) {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double13neg__infinity);
  } else {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$3 = ctx.input;
        const c2 = _bind$3.str.charCodeAt(_bind$3.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$2 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 46) {
          const _bind$3 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                d = _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$3 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$3;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$4 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  c = _ok._0;
                } else {
                  return _bind$4;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$5;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$6 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$6;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$7.$tag === 1) {
                        const _ok = _bind$7;
                        _ok._0;
                      } else {
                        return _bind$7;
                      }
                    }
                  }
                  const _bind$7 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    c2 = _ok._0;
                  } else {
                    return _bind$7;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      _ok._0;
                    } else {
                      return _bind$8;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _ok._0;
                    } else {
                      return _bind$5;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$2 = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = ctx.input;
      const c = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$4 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$3 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$3;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$4 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$5;
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _bind$5 = _ok._0;
                      } else {
                        return _bind$4;
                      }
                      const _n = _bind$5.value;
                      const _repr = _bind$5.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$4 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$5;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind$5 = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        const _n = _bind$5.value;
                        const _repr = _bind$5.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$4;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _bind$4 = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    const _n = _bind$4.value;
                    const _repr = _bind$4.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          s = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          s = _ok._0;
        } else {
          return _bind$3;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 34) {
      const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        s = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    tok = _ok._0;
  } else {
    return _bind$2;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGRPB9ArrayViewGcEE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$3 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(vec, _tmp$4);
      const _bind$4 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        tok2 = _ok._0;
      } else {
        return _bind$4;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$5 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$3 = _ok._0;
          } else {
            return _bind$5;
          }
          continue _L;
        }
        case 8: {
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$2 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 0), undefined);
  let _tmp;
  const _bind$3 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$4 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$5 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$4 = _ok._0;
        } else {
          return _bind$5;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$6 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          return _bind$6;
        }
        switch (_bind$7.$tag) {
          case 9: {
            const _bind$8 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$3 = _ok._0;
            } else {
              return _bind$8;
            }
            continue _L;
          }
          case 6: {
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$2 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    val = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind$2 = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRPC16string10StringViewE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPC16string10StringViewE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind$2 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind$2;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$3 = _func(_k, _v);
              if (_bind$3 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$3;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16bigint6BigInt18to__string_2einner(self, radix) {
  if (radix < 2 || radix > 36) {
    _M0FPC15abort5abortGuE("radix must be between 2 and 36");
  }
  return _M0MPC16bigint6BigInt21js__to__string__radix(self, radix);
}
function _M0IPC16bigint6BigIntPB7Compare7compare(self, other) {
  return _M0MPC16bigint6BigInt11compare__js(self, other);
}
function _M0IPC16bigint6BigIntPB2Eq5equal(self, other) {
  return _M0MPC16bigint6BigInt9equal__js(self, other);
}
function _M0IPC16bigint6BigIntPB3Neg3neg(self) {
  return _M0MPC16bigint6BigInt12op__neg__ffi(self);
}
function _M0IPC16bigint6BigIntPB3Add3add(self, other) {
  return _M0MPC16bigint6BigInt12op__add__ffi(self, other);
}
function _M0IPC16bigint6BigIntPB3Sub3sub(self, other) {
  return _M0MPC16bigint6BigInt12op__sub__ffi(self, other);
}
function _M0IPC16bigint6BigIntPB3Mul3mul(self, other) {
  return _M0MPC16bigint6BigInt12op__mul__ffi(self, other);
}
function _M0IPC16bigint6BigIntPB3Div3div(self, other) {
  return _M0MPC16bigint6BigInt12op__div__ffi(self, other);
}
function _M0IPC16bigint6BigIntPB3Mod3mod(self, other) {
  return _M0MPC16bigint6BigInt12op__mod__ffi(self, other);
}
function _M0MPC16bigint6BigInt3pow(self, exponent, modulus) {
  if (_M0IP016_24default__implPB7Compare6op__ltGRPC16bigint6BigIntE(exponent, 0n)) {
    _M0FPC15abort5abortGuE("negative exponent");
  }
  if (modulus.$tag === 1) {
    const _Some = modulus;
    const _modulus = _Some._0;
    return _M0IP016_24default__implPB7Compare6op__leGRPC16bigint6BigIntE(_modulus, 0n) ? _M0FPC15abort5abortGRPC16bigint6BigIntE("non-positive modulus") : _M0MPC16bigint6BigInt11modpow__ffi(self, exponent, _modulus);
  } else {
    return _M0MPC16bigint6BigInt8pow__ffi(self, exponent);
  }
}
function _M0IPC16bigint6BigIntPB3Shl3shl(self, n) {
  if (n < 0) {
    _M0FPC15abort5abortGuE("negative shift count");
  }
  return _M0MPC16bigint6BigInt7js__shl(self, n);
}
function _M0IPC16bigint6BigIntPB3Shr3shr(self, n) {
  if (n < 0) {
    _M0FPC15abort5abortGuE("negative shift count");
  }
  return _M0MPC16bigint6BigInt7js__shr(self, n);
}
function _M0MPC16bigint6BigInt12compare__int(self, other) {
  if (_M0FPC16bigint21can__convert__to__int(self)) {
    const self$2 = _M0MPC16bigint6BigInt7to__int(self);
    return $compare_int(self$2, other);
  } else {
    return _M0FPC16bigint7is__neg(self) ? -1 : 1;
  }
}
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FPC14math3cos(_tmp) {
  return Math.cos(_tmp);
}
function _M0FPC14math5atan2(_tmp, _tmp$2) {
  return Math.atan2(_tmp, _tmp$2);
}
function _M0FPC14math6scalbn(x, exp) {
  let n = exp;
  let y = x;
  if (n > 1023) {
    y = y * 8.98846567431158e+307;
    n = n - 1023 | 0;
    if (n > 1023) {
      y = y * 8.98846567431158e+307;
      n = n - 1023 | 0;
      if (n > 1023) {
        n = 1023;
      }
    }
  } else {
    if (n < -1022) {
      y = y * 2.0041683600089728e-292;
      n = n + 969 | 0;
      if (n < -1022) {
        y = y * 2.0041683600089728e-292;
        n = n + 969 | 0;
        if (n < -1022) {
          n = -1022;
        }
      }
    }
  }
  const ui = BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(1023 + n | 0) << BigInt(52 & 63));
  return y * $i64_reinterpret_f64(ui);
}
function _M0FPC14math3pow(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function _M0FPC14math2ln(_tmp) {
  return Math.log(_tmp);
}
function _M0FPC14math3exp(_tmp) {
  return Math.exp(_tmp);
}
function _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__repr(_x_1108) {
  let _arg_1110;
  _L: {
    let _arg_1109;
    _L$2: {
      if (_x_1108.$tag === 1) {
        const _Invalid = _x_1108;
        const _$42$arg_1109 = _Invalid._0;
        _arg_1109 = _$42$arg_1109;
        break _L$2;
      } else {
        const _InputFailure = _x_1108;
        const _$42$arg_1110 = _InputFailure._0;
        _arg_1110 = _$42$arg_1110;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1109) }]);
  }
  return _M0MPC15debug4Repr4ctor("InputFailure", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1110) }]);
}
function _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__reprGRP211localreview3awk10ParseErrorE(_x_1108) {
  let _arg_1110;
  _L: {
    let _arg_1109;
    _L$2: {
      if (_x_1108.$tag === 1) {
        const _Invalid = _x_1108;
        const _$42$arg_1109 = _Invalid._0;
        _arg_1109 = _$42$arg_1109;
        break _L$2;
      } else {
        const _InputFailure = _x_1108;
        const _$42$arg_1110 = _InputFailure._0;
        _arg_1110 = _$42$arg_1110;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1109) }]);
  }
  return _M0MPC15debug4Repr4ctor("InputFailure", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1110) }]);
}
function _M0IP211localreview3awk9RunResultPB6ToJson8to__json(_x_1099) {
  const _bind$2 = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "output", _M0IPC16string6StringPB6ToJson8to__json(_x_1099.output));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "exit_status", _M0IPC13int3IntPB6ToJson8to__json(_x_1099.exit_status));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "steps", _M0IPC13int3IntPB6ToJson8to__json(_x_1099.steps));
  return _M0MPC14json4Json6object($36$map);
}
function _M0FP211localreview3awk6finite(n) {
  return new _M0DTP211localreview3awk5Value6Number(n);
}
function _M0FP211localreview3awk5digit(c) {
  return c >= 48 && c <= 57;
}
function _M0FP211localreview3awk11number__end(cs, start, signed) {
  const i = new _M0TPB8MutLocalGiE(start);
  if (signed && (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 43 || _M0MPC15array5Array2atGcE(cs, i.val) === 45))) {
    i.val = i.val + 1 | 0;
  }
  const digits = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
      i.val = i.val + 1 | 0;
      digits.val = digits.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 46) {
    i.val = i.val + 1 | 0;
    while (true) {
      if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
        i.val = i.val + 1 | 0;
        digits.val = digits.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (digits.val === 0) {
    return start;
  }
  if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 101 || _M0MPC15array5Array2atGcE(cs, i.val) === 69)) {
    const exponent = i.val;
    i.val = i.val + 1 | 0;
    if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 43 || _M0MPC15array5Array2atGcE(cs, i.val) === 45)) {
      i.val = i.val + 1 | 0;
    }
    const before = i.val;
    while (true) {
      if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (i.val === before) {
      i.val = exponent;
    }
  }
  return i.val;
}
function _M0FP211localreview3awk15numeric__prefix(text) {
  const cs = _M0MPC16string6String9to__array(text);
  const start = new _M0TPB8MutLocalGiE(0);
  const sign = new _M0TPB8MutLocalGdE(1);
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, 0), 45) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, 0), 43)) {
    if (_M0MPC15array5Array2atGcE(cs, 0) === 45) {
      sign.val = -1;
    }
    start.val = 1;
  }
  const tail = _M0MPC16string6String9to__lower(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start.val, undefined)));
  const _bind$2 = ["infinity", "inf", "nan"];
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const word = _bind$2[_];
      if (_M0MPC16string6String11has__prefix(tail, new _M0TPC16string10StringView(word, 0, word.length))) {
        return { _0: word === "nan" ? 0 / 0 : sign.val * (1 / 0), _1: start.val + word.length | 0, _2: false };
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val), 48) && (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val + 1 | 0), 120) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val + 1 | 0), 88))) {
    const i = new _M0TPB8MutLocalGiE(start.val + 2 | 0);
    const point = new _M0TPB8MutLocalGbE(false);
    const digits = new _M0TPB8MutLocalGiE(0);
    const fraction = new _M0TPB8MutLocalGiE(0);
    const kept = new _M0TPB8MutLocalGiE(0);
    const omitted = new _M0TPB8MutLocalGiE(0);
    const sticky = new _M0TPB8MutLocalGbE(false);
    const head = new _M0TPB8MutLocalGRPC16bigint6BigIntE(_M0MPC16bigint6BigInt9from__int(0));
    while (true) {
      if (i.val < cs.length) {
        const c = _M0MPC15array5Array2atGcE(cs, i.val);
        if (c === 46 && !point.val) {
          point.val = true;
          i.val = i.val + 1 | 0;
          continue;
        }
        if (!_M0MPC14char4Char19is__ascii__hexdigit(c)) {
          break;
        }
        const digit = c <= 57 ? c - 48 | 0 : _M0MPC14char4Char20to__ascii__lowercase(c) - 87 | 0;
        digits.val = digits.val + 1 | 0;
        if (point.val) {
          fraction.val = fraction.val + 1 | 0;
        }
        if (kept.val < 16) {
          if (kept.val > 0 || digit > 0) {
            head.val = _M0IPC16bigint6BigIntPB3Add3add(_M0IPC16bigint6BigIntPB3Shl3shl(head.val, 4), _M0MPC16bigint6BigInt9from__int(digit));
            kept.val = kept.val + 1 | 0;
          }
        } else {
          omitted.val = omitted.val + 1 | 0;
          if (digit > 0) {
            sticky.val = true;
          }
        }
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (digits.val > 0) {
      const exponent = new _M0TPB8MutLocalGiE(0);
      if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 112) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 80)) {
        const saved = i.val;
        i.val = i.val + 1 | 0;
        const direction = new _M0TPB8MutLocalGiE(1);
        if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 45) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 43)) {
          if (_M0MPC15array5Array2atGcE(cs, i.val) === 45) {
            direction.val = -1;
          }
          i.val = i.val + 1 | 0;
        }
        const begin = i.val;
        while (true) {
          if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
            exponent.val = _M0MPC13int3Int3min(((Math.imul(exponent.val, 10) | 0) + _M0MPC15array5Array2atGcE(cs, i.val) | 0) - 48 | 0, 10000000);
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (i.val === begin) {
          i.val = saved;
        } else {
          exponent.val = Math.imul(exponent.val, direction.val) | 0;
        }
      }
      if (_M0MPC16bigint6BigInt8is__zero(head.val)) {
        return { _0: sign.val * 0, _1: i.val, _2: false };
      }
      const power = (exponent.val - (Math.imul(4, fraction.val) | 0) | 0) + (Math.imul(4, omitted.val) | 0) | 0;
      const bits = _M0MPC16bigint6BigInt11bit__length(head.val);
      const top = (power + bits | 0) - 1 | 0;
      if (top > 1023) {
        return { _0: sign.val * (1 / 0), _1: i.val, _2: true };
      }
      if (top < -1075) {
        return { _0: sign.val * 0, _1: i.val, _2: false };
      }
      const drop = _M0MPC13int3Int3max(_M0MPC13int3Int3max(bits - 53 | 0, -1074 - power | 0), 0);
      const rounded = new _M0TPB8MutLocalGRPC16bigint6BigIntE(_M0IPC16bigint6BigIntPB3Shr3shr(head.val, drop));
      if (drop > 0) {
        const rest = _M0IPC16bigint6BigIntPB3Sub3sub(head.val, _M0IPC16bigint6BigIntPB3Shl3shl(rounded.val, drop));
        const half = _M0IPC16bigint6BigIntPB3Shl3shl(_M0MPC16bigint6BigInt9from__int(1), drop - 1 | 0);
        if (_M0IP016_24default__implPB7Compare6op__gtGRPC16bigint6BigIntE(rest, half) || _M0IPC16bigint6BigIntPB2Eq5equal(rest, half) && (sticky.val || _M0MPC16bigint6BigInt12compare__int(_M0IPC16bigint6BigIntPB3Mod3mod(rounded.val, _M0MPC16bigint6BigInt9from__int(2)), 1) === 0)) {
          rounded.val = _M0IPC16bigint6BigIntPB3Add3add(rounded.val, _M0MPC16bigint6BigInt9from__int(1));
        }
      }
      let mantissa;
      let _try_err;
      _L: {
        _L$2: {
          const _bind$4 = _M0MPC16bigint6BigInt18to__string_2einner(rounded.val, 10);
          const _bind$5 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            mantissa = _ok._0;
          } else {
            const _err = _bind$5;
            _try_err = _err._0;
            break _L$2;
          }
          break _L;
        }
        mantissa = 0;
      }
      const n = sign.val * _M0FPC14math6scalbn(mantissa, power + drop | 0);
      return { _0: n, _1: i.val, _2: _M0MPC16double6Double7is__inf(n) };
    }
  }
  const end = _M0FP211localreview3awk11number__end(cs, 0, true);
  if (end === 0) {
    return { _0: 0, _1: 0, _2: false };
  }
  let n;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$4 = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, 0, end));
      const _bind$5 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        n = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    n = sign.val * (1 / 0);
  }
  return { _0: n, _1: end, _2: _M0MPC16double6Double7is__inf(n) };
}
function _M0FP211localreview3awk12input__value(text) {
  const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined));
  let end;
  let n;
  let overflow;
  _L: {
    const _bind$2 = _M0FP211localreview3awk15numeric__prefix(trimmed);
    const _n = _bind$2._0;
    const _end = _bind$2._1;
    const _overflow = _bind$2._2;
    end = _end;
    n = _n;
    overflow = _overflow;
    break _L;
  }
  if (end > 0 && (end === _M0MPC16string6String9to__array(trimmed).length && !overflow)) {
    return new _M0DTP211localreview3awk5Value13NumericString(text, n);
  }
  return new _M0DTP211localreview3awk5Value4Text(text);
}
function _M0MP211localreview3awk5Value4text(self) {
  let n;
  _L: {
    switch (self.$tag) {
      case 0: {
        return "";
      }
      case 1: {
        const _Number = self;
        const _n = _Number._0;
        n = _n;
        break _L;
      }
      case 2: {
        const _Text = self;
        const _s = _Text._0;
        return _s;
      }
      default: {
        const _NumericString = self;
        const _s$2 = _NumericString._0;
        return _s$2;
      }
    }
  }
  return String(n);
}
function _M0MP211localreview3awk5Value6number(self) {
  let s;
  _L: {
    switch (self.$tag) {
      case 0: {
        return 0;
      }
      case 1: {
        const _Number = self;
        const _n = _Number._0;
        return _n;
      }
      case 3: {
        const _NumericString = self;
        const _n$2 = _NumericString._1;
        return _n$2;
      }
      default: {
        const _Text = self;
        const _s = _Text._0;
        s = _s;
        break _L;
      }
    }
  }
  const _bind$2 = _M0FP211localreview3awk15numeric__prefix(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(s, undefined)));
  const _n = _bind$2._0;
  return _n;
}
function _M0MP211localreview3awk5Value5truth(self) {
  let s;
  _L: {
    let n;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          return false;
        }
        case 1: {
          const _Number = self;
          const _n = _Number._0;
          n = _n;
          break _L$2;
        }
        case 3: {
          const _NumericString = self;
          const _n$2 = _NumericString._1;
          n = _n$2;
          break _L$2;
        }
        default: {
          const _Text = self;
          const _s = _Text._0;
          s = _s;
          break _L;
        }
      }
    }
    return n !== 0;
  }
  return !_M0MPC16string6String9is__empty(s);
}
function _M0FP211localreview3awk7boolean(b) {
  return new _M0DTP211localreview3awk5Value6Number(b ? 1 : 0);
}
function _M0MP211localreview3awk5State4tick(self) {
  if (self.steps >= self.step_limit) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("execution step budget"));
  }
  self.steps = self.steps + 1 | 0;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk9MainInput4more(self, st) {
  const _bind$2 = _M0MP211localreview3awk5State4tick(st);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  let message;
  _L: {
    _L$2: {
      const _bind$3 = self.failure;
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _message = _Some;
        message = _message;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure(message));
  }
  if (self.start > 0) {
    self.data = _M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(self.data, self.start, undefined));
    self.start = 0;
  }
  let message$2;
  _L$2: {
    let text;
    _L$3: {
      const _func = self.reader;
      const _bind$3 = _func(_M0DTP211localreview3awk12InputRequest4Read__);
      switch (_bind$3.$tag) {
        case 1: {
          const _Chunk = _bind$3;
          const _text = _Chunk._0;
          text = _text;
          break _L$3;
        }
        case 2: {
          self.eof = true;
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
        }
        case 3: {
          const _Failed = _bind$3;
          const _message = _Failed._0;
          message$2 = _message;
          break _L$2;
        }
        default: {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("input provider must return Chunk or End for Read"));
        }
      }
    }
    if (_M0MPC16string6String9is__empty(text) || text.length > 65536) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("input chunk must contain 1..65536 UTF-16 units"));
    }
    const _bind$3 = _M0MPC16string6String9to__array(text);
    const _bind$4 = _bind$3.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$4) {
        const c = _bind$3[_];
        _M0MPC15array5Array4pushGcE(self.data, c);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (self.data.length > 1065536) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
    } else {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
  }
  self.failure = message$2;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure(message$2));
}
function _M0MP211localreview3awk9MainInput9csv__peek(self, st) {
  while (true) {
    if (self.start === self.data.length && !self.eof) {
      const _bind$2 = _M0MP211localreview3awk9MainInput4more(self, st);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGOcRP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array3getGcE(self.data, self.start));
}
function _M0MP211localreview3awk9MainInput9csv__body(self, st, mode, prefix) {
  const raw = _M0MPC15array5Array4copyGcE(prefix);
  const field = _M0MPC15array5Array4copyGcE(prefix);
  const fields = [];
  const quoted = new _M0TPB8MutLocalGbE(false);
  const at_start = new _M0TPB8MutLocalGbE(_M0MPC15array5Array9is__emptyGcE(prefix));
  const strip_cr = new _M0TPB8MutLocalGbE(false);
  const units = new _M0TPB8MutLocalGiE(prefix.length);
  while (true) {
    let c;
    _L: {
      const _bind$2 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    const _bind$2 = _M0MP211localreview3awk5State4tick(st);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    self.start = self.start + 1 | 0;
    units.val = units.val + (c > 65535 ? 2 : 1) | 0;
    if (units.val > 1000000) {
      return new _M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
    }
    if (at_start.val && c === 34) {
      _M0MPC15array5Array4pushGcE(raw, c);
      quoted.val = true;
      at_start.val = false;
      continue;
    }
    if (c === 13) {
      const _bind$3 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4 === -1) {
        _M0MPC15array5Array4pushGcE(raw, c);
        break;
      }
    }
    if (quoted.val && c === 34) {
      _M0MPC15array5Array4pushGcE(raw, c);
      const _bind$3 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
      let next;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        next = _ok._0;
      } else {
        return _bind$3;
      }
      if (_M0IPC16option6OptionPB2Eq5equalGcE(next, 34)) {
        self.start = self.start + 1 | 0;
        _M0MPC15array5Array4pushGcE(raw, 34);
        _M0MPC15array5Array4pushGcE(field, 34);
        units.val = units.val + 1 | 0;
        continue;
      }
      _L$2: {
        _L$3: {
          if (_M0IPC16option6OptionPB2Eq5equalGcE(next, mode.separator)) {
            break _L$3;
          } else {
            if (_M0IPC16option6OptionPB2Eq5equalGcE(next, 10)) {
              break _L$3;
            } else {
              if (next === -1) {
                break _L$3;
              } else {
                if (_M0IPC16option6OptionPB2Eq5equalGcE(next, 13)) {
                  self.start = self.start + 1 | 0;
                  const _bind$4 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
                  let after;
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    after = _ok._0;
                  } else {
                    return _bind$4;
                  }
                  _L$4: {
                    _L$5: {
                      if (_M0IPC16option6OptionPB2Eq5equalGcE(after, 10)) {
                        break _L$5;
                      } else {
                        if (after === -1) {
                          break _L$5;
                        }
                      }
                      break _L$4;
                    }
                    if (after === -1) {
                      _M0MPC15array5Array4pushGcE(raw, 13);
                    }
                    break;
                  }
                  _M0MPC15array5Array4pushGcE(raw, 13);
                  _M0MPC15array5Array4pushGcE(field, 34);
                  _M0MPC15array5Array4pushGcE(field, 13);
                  units.val = units.val + 1 | 0;
                } else {
                  _M0MPC15array5Array4pushGcE(field, 34);
                }
              }
            }
          }
          break _L$2;
        }
        quoted.val = false;
      }
      continue;
    }
    let _tmp;
    if (c === 10) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (c === 13) {
        const _bind$3 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
        let _tmp$3;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$3 = _ok._0;
        } else {
          return _bind$3;
        }
        _tmp$2 = _M0IPC16option6OptionPB2Eq5equalGcE(_tmp$3, 10);
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      if (c === 13) {
        self.start = self.start + 1 | 0;
      }
      if (!quoted.val) {
        break;
      }
      if (c === 13) {
        _M0MPC15array5Array4pushGcE(raw, 13);
        strip_cr.val = true;
      }
      _M0MPC15array5Array4pushGcE(raw, 10);
      _M0MPC15array5Array4pushGcE(field, 10);
      at_start.val = false;
      continue;
    }
    _M0MPC15array5Array4pushGcE(raw, c);
    if (!quoted.val && c === mode.separator) {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(fields, _M0FP211localreview3awk12input__value(_M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(field, 0, field.length))));
      if (fields.length >= 10000) {
        return new _M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field count budget"));
      }
      _M0MPC15array5Array5clearGcE(field);
      at_start.val = true;
    } else {
      _M0MPC15array5Array4pushGcE(field, c);
      at_start.val = false;
    }
    continue;
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(fields, _M0FP211localreview3awk12input__value(_M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(field, 0, field.length))));
  let text;
  if (strip_cr.val) {
    const _bind$2 = _M0MPC15array5Array6filterGcE(raw, (c) => c !== 13);
    text = _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(_bind$2, 0, _bind$2.length));
  } else {
    text = _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(raw, 0, raw.length));
  }
  return new _M0DTPC16result6ResultGUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok({ _0: text, _1: fields });
}
function _M0MP211localreview3awk9MainInput8csv__row(self, st, mode) {
  if (!self.csv_started) {
    const _bind$2 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_tmp, 65279)) {
      self.start = self.start + 1 | 0;
    }
    self.csv_started = true;
  }
  while (true) {
    let c;
    const _bind$2 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      c = _c;
    }
    if (c === mode.comment && mode.comment !== 0) {
      while (true) {
        let c$2;
        _L: {
          const _bind$4 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
          let _bind$5;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _bind$5 = _ok._0;
          } else {
            return _bind$4;
          }
          if (_bind$5 === -1) {
            break;
          } else {
            const _Some = _bind$5;
            const _c = _Some;
            c$2 = _c;
            break _L;
          }
        }
        self.start = self.start + 1 | 0;
        const _bind$4 = _M0MP211localreview3awk5State4tick(st);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        if (c$2 === 10) {
          break;
        }
        continue;
      }
    } else {
      if (c === 10) {
        self.start = self.start + 1 | 0;
      } else {
        if (c === 13) {
          self.start = self.start + 1 | 0;
          const _bind$4 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
          let _tmp;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
          } else {
            return _bind$4;
          }
          if (_M0IPC16option6OptionPB2Eq5equalGcE(_tmp, 10)) {
            self.start = self.start + 1 | 0;
          } else {
            const _bind$5 = _M0MP211localreview3awk9MainInput9csv__peek(self, st);
            let _bind$6;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _bind$6 = _ok._0;
            } else {
              return _bind$5;
            }
            if (_bind$6 === -1) {
              return new _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(undefined);
            } else {
              const _bind$7 = _M0MP211localreview3awk9MainInput9csv__body(self, st, mode, [13]);
              let _tmp$2;
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _tmp$2 = _ok._0;
              } else {
                return _bind$7;
              }
              return new _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(_tmp$2);
            }
          }
        } else {
          break;
        }
      }
    }
    continue;
  }
  const _bind$2 = _M0MP211localreview3awk9MainInput9csv__body(self, st, mode, []);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGOUsRPB5ArrayGRP211localreview3awk5ValueEERP211localreview3awk10ParseErrorE2Ok(_tmp);
}
function _M0FP211localreview3awk11csv__record(text, mode, st) {
  const source = new _M0TP211localreview3awk9MainInput((_discard_) => _M0DTP211localreview3awk10InputReply3End__, _M0MPC16string6String9to__array(text), 0, true, false, undefined, 0, true, 4, 10, mode, false, true);
  return _M0MP211localreview3awk9MainInput8csv__row(source, st, mode);
}
function _M0FP211localreview3awk11csv__fields(text, mode, st) {
  let fields;
  _L: {
    const _bind$2 = _M0FP211localreview3awk11csv__record(text, mode, st);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok([]);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _fields = _x._1;
      fields = _fields;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(fields);
}
function _M0FP211localreview3awk16drop__record__cr(text) {
  const _bind$2 = "\r";
  if (_M0MPC16string6String11has__suffix(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(text, 0, text.length - 1 | 0));
  } else {
    return text;
  }
}
function _M0FP211localreview3awk14class__matches(set, c) {
  const codes = [c];
  if (set.fold) {
    const _bind$2 = [_M0MPC16string6String9to__lower(_M0IPC14char4CharPB4Show10to__string(c)), _M0MPC16string6String9to__upper(_M0IPC14char4CharPB4Show10to__string(c))];
    const _bind$3 = _bind$2.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const s = _bind$2[_];
        let ch;
        _L: {
          _L$2: {
            const _bind$4 = _M0MPC16string6String9to__array(s);
            if (_bind$4.length === 1) {
              const _ch = _bind$4[0];
              ch = _ch;
              break _L$2;
            }
            break _L;
          }
          _M0MPC15array5Array4pushGiE(codes, ch);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (_M0MPC15array5Array8containsGiE([75, 107, 8490], c)) {
      const _bind$4 = [75, 107, 8490];
      const _bind$5 = _bind$4.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$5) {
          const n = _bind$4[_];
          _M0MPC15array5Array4pushGiE(codes, n);
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    if (_M0MPC15array5Array8containsGiE([83, 115, 383], c)) {
      const _bind$4 = [83, 115, 383];
      const _bind$5 = _bind$4.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$5) {
          const n = _bind$4[_];
          _M0MPC15array5Array4pushGiE(codes, n);
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    if (_M0MPC15array5Array8containsGiE([931, 962, 963], c)) {
      const _bind$4 = [931, 962, 963];
      const _bind$5 = _bind$4.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$5) {
          const n = _bind$4[_];
          _M0MPC15array5Array4pushGiE(codes, n);
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return _M0MPB4Iter3anyGiE(_M0MPC15array5Array4iterGiE(codes), (code) => _M0MPB4Iter3anyGUiiEE(_M0MPC15array5Array4iterGUiiEE(set.ranges), (range) => code >= range._0 && code <= range._1));
}
function _M0FP211localreview3awk11regex__word(c) {
  let c$2;
  _L: {
    if (c === -1) {
      return false;
    } else {
      const _Some = c;
      const _c = _Some;
      c$2 = _c;
      break _L;
    }
  }
  return _M0MPC14char4Char21is__ascii__alphabetic(c$2) || (_M0FP211localreview3awk5digit(c$2) || c$2 === 95);
}
function _M0FP211localreview3awk13regex__assert(kind, text, pos, base) {
  const left = pos > base ? _M0MPC15array5Array3getGcE(text, pos - 1 | 0) : -1;
  const right = _M0MPC15array5Array3getGcE(text, pos);
  _L: {
    _L$2: {
      switch (kind) {
        case "line-start": {
          return pos === base || _M0IPC16option6OptionPB2Eq5equalGcE(left, 10);
        }
        case "line-end": {
          return pos === text.length || _M0IPC16option6OptionPB2Eq5equalGcE(right, 10);
        }
        case "^": {
          break _L$2;
        }
        case "A": {
          break _L$2;
        }
        case "$": {
          break _L;
        }
        case "z": {
          break _L;
        }
        case "b": {
          return _M0IP016_24default__implPB2Eq10not__equalGbE(_M0FP211localreview3awk11regex__word(left), _M0FP211localreview3awk11regex__word(right));
        }
        case "B": {
          return _M0FP211localreview3awk11regex__word(left) === _M0FP211localreview3awk11regex__word(right);
        }
        default: {
          return false;
        }
      }
    }
    return pos === base;
  }
  return pos === text.length;
}
function _M0FP211localreview3awk20regex__match_2einner(regex, text, from, st, base) {
  const _bind$2 = [];
  const threads = new _M0TPB8MutLocalGRPB3MapGiiEE(_M0MPB3Map3MapGiiE(new _M0TPB9ArrayViewGUiiEE(_bind$2, 0, 0), undefined));
  const best = new _M0TPB8MutLocalGOUiiEE(undefined);
  const _bind$3 = text.length;
  let _tmp = from;
  while (true) {
    const pos = _tmp;
    if (pos <= _bind$3) {
      const stack = [];
      const _it = _M0MPB3Map5iter2GiiE(threads.val);
      while (true) {
        let pc;
        let start;
        _L: {
          const _bind$4 = _M0MPB5Iter24nextGiiE(_it);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some = _bind$4;
            const _x = _Some;
            const _pc = _x._0;
            const _start = _x._1;
            pc = _pc;
            start = _start;
            break _L;
          }
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, { _0: pc, _1: start });
        continue;
      }
      if (_M0IPC16option6OptionPB2Eq5equalGUiiEE(best.val, undefined)) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, { _0: regex.start, _1: pos });
      }
      const _bind$4 = [];
      const seen = _M0MPB3Map3MapGiiE(new _M0TPB9ArrayViewGUiiEE(_bind$4, 0, 0), undefined);
      const _bind$5 = [];
      const next = _M0MPB3Map3MapGiiE(new _M0TPB9ArrayViewGUiiEE(_bind$5, 0, 0), undefined);
      while (true) {
        let pc;
        let start;
        _L: {
          const _bind$6 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
          if (_bind$6 === undefined) {
            break;
          } else {
            const _Some = _bind$6;
            const _x = _Some;
            const _pc = _x._0;
            const _start = _x._1;
            pc = _pc;
            start = _start;
            break _L;
          }
        }
        const _bind$6 = _M0MP211localreview3awk5State4tick(st);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
        let old;
        _L$2: {
          _L$3: {
            const _bind$7 = _M0MPB3Map3getGiiE(seen, pc);
            if (_bind$7 === undefined) {
            } else {
              const _Some = _bind$7;
              const _old = _Some;
              old = _old;
              break _L$3;
            }
            break _L$2;
          }
          if (old <= start) {
            continue;
          }
        }
        let first;
        _L$3: {
          _L$4: {
            const _bind$7 = best.val;
            if (_bind$7 === undefined) {
            } else {
              const _Some = _bind$7;
              const _x = _Some;
              const _first = _x._0;
              first = _first;
              break _L$4;
            }
            break _L$3;
          }
          if (start > first) {
            continue;
          }
        }
        _M0MPB3Map3setGiiE(seen, pc, start);
        let set;
        let target;
        _L$4: {
          _L$5: {
            let all;
            let target$2;
            _L$6: {
              _L$7: {
                let kind;
                let target$3;
                _L$8: {
                  _L$9: {
                    let a;
                    let b;
                    _L$10: {
                      _L$11: {
                        const _bind$7 = _M0MPC15array5Array2atGRPC16string10StringViewE(regex.code, pc);
                        switch (_bind$7.$tag) {
                          case 4: {
                            _L$12: {
                              _L$13: {
                                if (_M0IPC16option6OptionPB2Eq5equalGUiiEE(best.val, undefined)) {
                                  break _L$13;
                                } else {
                                  let first$2;
                                  let last;
                                  _L$14: {
                                    _L$15: {
                                      const _bind$8 = best.val;
                                      if (_bind$8 === undefined) {
                                      } else {
                                        const _Some = _bind$8;
                                        const _x = _Some;
                                        const _first = _x._0;
                                        const _last = _x._1;
                                        first$2 = _first;
                                        last = _last;
                                        break _L$15;
                                      }
                                      break _L$14;
                                    }
                                    if (start < first$2) {
                                      break _L$13;
                                    } else {
                                      if (start === first$2) {
                                        if (pos > last) {
                                          break _L$13;
                                        }
                                      }
                                    }
                                  }
                                }
                                break _L$12;
                              }
                              best.val = { _0: start, _1: pos };
                            }
                            break;
                          }
                          case 3: {
                            const _Fork = _bind$7;
                            const _a = _Fork._0;
                            const _b = _Fork._1;
                            a = _a;
                            b = _b;
                            break _L$11;
                          }
                          case 2: {
                            const _Assert = _bind$7;
                            const _kind = _Assert._0;
                            const _target = _Assert._1;
                            kind = _kind;
                            target$3 = _target;
                            break _L$9;
                          }
                          case 1: {
                            const _Any = _bind$7;
                            const _all = _Any._0;
                            const _target$2 = _Any._1;
                            all = _all;
                            target$2 = _target$2;
                            break _L$7;
                          }
                          default: {
                            const _Consume = _bind$7;
                            const _set = _Consume._0;
                            const _target$3 = _Consume._1;
                            set = _set;
                            target = _target$3;
                            break _L$5;
                          }
                        }
                        break _L$10;
                      }
                      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, { _0: a, _1: start });
                      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, { _0: b, _1: start });
                    }
                    break _L$8;
                  }
                  if (_M0FP211localreview3awk13regex__assert(kind, text, pos, base)) {
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, { _0: target$3, _1: start });
                  }
                }
                break _L$6;
              }
              if (pos < text.length && ((all || _M0MPC15array5Array2atGcE(text, pos) !== 10) && (_M0IPC16option6OptionPB2Eq5equalGiE(_M0MPB3Map3getGiiE(next, target$2), undefined) || _M0MPC16option6Option6unwrapGiE(_M0MPB3Map3getGiiE(next, target$2)) > start))) {
                _M0MPB3Map3setGiiE(next, target$2, start);
              }
            }
            break _L$4;
          }
          if (pos < text.length) {
            const included = _M0FP211localreview3awk14class__matches(set, _M0MPC15array5Array2atGcE(text, pos));
            if (_M0IP016_24default__implPB2Eq10not__equalGbE(included, set.negative) && (_M0IPC16option6OptionPB2Eq5equalGiE(_M0MPB3Map3getGiiE(next, target), undefined) || _M0MPC16option6Option6unwrapGiE(_M0MPB3Map3getGiiE(next, target)) > start)) {
              _M0MPB3Map3setGiiE(next, target, start);
            }
          }
        }
        continue;
      }
      threads.val = next;
      if (_M0IP016_24default__implPB2Eq10not__equalGOUiiEE(best.val, undefined) && _M0MPB3Map9is__emptyGiiE(threads.val)) {
        break;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGOUiiERP211localreview3awk10ParseErrorE2Ok(best.val);
}
function _M0FP211localreview3awk11regex__emit(code, instruction) {
  if (code.length >= 4096) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex instruction limit"));
  }
  const i = code.length;
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(code, instruction);
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(i);
}
function _M0FP211localreview3awk14regex__compile(tree, code, next) {
  let low;
  let item;
  let high;
  _L: {
    let items;
    _L$2: {
      let items$2;
      _L$3: {
        let a;
        _L$4: {
          let all;
          _L$5: {
            let s;
            _L$6: {
              switch (tree.$tag) {
                case 0: {
                  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(next);
                }
                case 1: {
                  const _Character = tree;
                  const _s = _Character._0;
                  s = _s;
                  break _L$6;
                }
                case 2: {
                  const _Dot = tree;
                  const _all = _Dot._0;
                  all = _all;
                  break _L$5;
                }
                case 3: {
                  const _Assertion = tree;
                  const _a = _Assertion._0;
                  a = _a;
                  break _L$4;
                }
                case 4: {
                  const _Sequence = tree;
                  const _items = _Sequence._0;
                  items$2 = _items;
                  break _L$3;
                }
                case 5: {
                  const _Alternative = tree;
                  const _items$2 = _Alternative._0;
                  items = _items$2;
                  break _L$2;
                }
                default: {
                  const _Repeat = tree;
                  const _item = _Repeat._0;
                  const _low = _Repeat._1;
                  const _high = _Repeat._2;
                  low = _low;
                  item = _item;
                  high = _high;
                  break _L;
                }
              }
            }
            return _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction7Consume(s, next));
          }
          return _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction3Any(all, next));
        }
        return _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction6Assert(a, next));
      }
      const start = new _M0TPB8MutLocalGiE(next);
      let _tmp = items$2.length - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= 0) {
          const _bind$2 = _M0FP211localreview3awk14regex__compile(_M0MPC15array5Array2atGRPC16string10StringViewE(items$2, i), code, start.val);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          start.val = _tmp$2;
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(start.val);
    }
    const _bind$2 = _M0FP211localreview3awk14regex__compile(_M0MPC15array5Array2atGRPC16string10StringViewE(items, items.length - 1 | 0), code, next);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const start = new _M0TPB8MutLocalGiE(_tmp);
    let _tmp$2 = items.length - 2 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _bind$3 = _M0FP211localreview3awk14regex__compile(_M0MPC15array5Array2atGRPC16string10StringViewE(items, i), code, next);
        let other;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          other = _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction4Fork(other, start.val));
        let _tmp$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$3 = _ok._0;
        } else {
          return _bind$4;
        }
        start.val = _tmp$3;
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(start.val);
  }
  const start = new _M0TPB8MutLocalGiE(next);
  if (high < 0) {
    const _bind$2 = _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction4Fork(-1, -1));
    let loop_id;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      loop_id = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0FP211localreview3awk14regex__compile(item, code, loop_id);
    let body;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      body = _ok._0;
    } else {
      return _bind$3;
    }
    _M0MPC15array5Array3setGRP211localreview3awk5ValueE(code, loop_id, new _M0DTP211localreview3awk11Instruction4Fork(body, next));
    start.val = loop_id;
  } else {
    let _tmp = low;
    while (true) {
      const _ = _tmp;
      if (_ < high) {
        const _bind$2 = _M0FP211localreview3awk14regex__compile(item, code, start.val);
        let body;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          body = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP211localreview3awk11regex__emit(code, new _M0DTP211localreview3awk11Instruction4Fork(body, start.val));
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        start.val = _tmp$2;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind$2 = 0;
  let _tmp = _bind$2;
  while (true) {
    const _ = _tmp;
    if (_ < low) {
      const _bind$3 = _M0FP211localreview3awk14regex__compile(item, code, start.val);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      start.val = _tmp$2;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(start.val);
}
function _M0FP211localreview3awk12regex__class(name) {
  switch (name) {
    case "alnum": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 48, _1: 57 }, { _0: 65, _1: 90 }, { _0: 97, _1: 122 }]);
    }
    case "alpha": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 65, _1: 90 }, { _0: 97, _1: 122 }]);
    }
    case "blank": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 9, _1: 9 }, { _0: 32, _1: 32 }]);
    }
    case "cntrl": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 0, _1: 31 }, { _0: 127, _1: 127 }]);
    }
    case "digit": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 48, _1: 57 }]);
    }
    case "graph": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 33, _1: 126 }]);
    }
    case "lower": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 97, _1: 122 }]);
    }
    case "print": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 32, _1: 126 }]);
    }
    case "punct": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 33, _1: 47 }, { _0: 58, _1: 64 }, { _0: 91, _1: 96 }, { _0: 123, _1: 126 }]);
    }
    case "space": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 9, _1: 13 }, { _0: 32, _1: 32 }]);
    }
    case "upper": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 65, _1: 90 }]);
    }
    case "xdigit": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 48, _1: 57 }, { _0: 65, _1: 70 }, { _0: 97, _1: 102 }]);
    }
    case "word": {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE2Ok([{ _0: 48, _1: 57 }, { _0: 65, _1: 90 }, { _0: 95, _1: 95 }, { _0: 97, _1: 122 }]);
    }
    default: {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiiEERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unknown regular expression character class: ${name}`));
    }
  }
}
function _M0MP211localreview3awk11RegexReader4peek(self) {
  return _M0MPC15array5Array3getGcE(self.chars, self.pos);
}
function _M0MP211localreview3awk11RegexReader4take(self) {
  let c;
  _L: {
    const _bind$2 = _M0MP211localreview3awk11RegexReader4peek(self);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("incomplete regular expression"));
    } else {
      const _Some = _bind$2;
      const _c = _Some;
      c = _c;
      break _L;
    }
  }
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGcRP211localreview3awk10ParseErrorE2Ok(c);
}
function _M0MP211localreview3awk11RegexReader6escape(self) {
  const _bind$2 = _M0MP211localreview3awk11RegexReader4take(self);
  let c;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    c = _ok._0;
  } else {
    return _bind$2;
  }
  if (_M0MPC15array5Array8containsGcE([100, 68, 115, 83, 119, 87], c)) {
    let _tmp;
    if (c === 115 || c === 83) {
      _tmp = [{ _0: 9, _1: 10 }, { _0: 12, _1: 13 }, { _0: 32, _1: 32 }];
    } else {
      const _bind$3 = _M0FP211localreview3awk12regex__class(c === 100 || c === 68 ? "digit" : "word");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp = _ok._0;
      } else {
        return _bind$3;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9RegexTree9Character(new _M0TP211localreview3awk7CharSet(_tmp, c === 68 || (c === 83 || c === 87), self.fold)));
  }
  if (c === 112 || (c === 80 || c === 81)) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unsupported Unicode property or quoted regex escape"));
  }
  if (_M0MPC15array5Array8containsGcE([98, 66, 65, 122], c)) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9RegexTree9Assertion(_M0IPC14char4CharPB4Show10to__string(c)));
  }
  let n;
  let c$2;
  _L: {
    _L$2: {
      let c$3;
      _L$3: {
        _L$4: {
          switch (c) {
            case 110: {
              n = 10;
              break;
            }
            case 116: {
              n = 9;
              break;
            }
            case 114: {
              n = 13;
              break;
            }
            case 102: {
              n = 12;
              break;
            }
            case 118: {
              n = 11;
              break;
            }
            case 97: {
              n = 7;
              break;
            }
            case 120: {
              const value = new _M0TPB8MutLocalGiE(0);
              const count = new _M0TPB8MutLocalGiE(0);
              while (true) {
                if (count.val < 2) {
                  let ch;
                  _L$5: {
                    const _bind$3 = _M0MP211localreview3awk11RegexReader4peek(self);
                    if (_bind$3 === -1) {
                      break;
                    } else {
                      const _Some = _bind$3;
                      const _ch = _Some;
                      ch = _ch;
                      break _L$5;
                    }
                  }
                  if (_M0MPC14char4Char19is__ascii__hexdigit(ch)) {
                    self.pos = self.pos + 1 | 0;
                    value.val = (Math.imul(value.val, 16) | 0) + (ch <= 57 ? ch - 48 | 0 : _M0MPC14char4Char20to__ascii__lowercase(ch) - 87 | 0) | 0;
                    count.val = count.val + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                } else {
                  break;
                }
              }
              if (count.val === 0) {
                return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid regex hex escape"));
              }
              n = value.val;
              break;
            }
            default: {
              if (c >= 48 && c <= 55) {
                c$3 = c;
                break _L$4;
              } else {
                c$2 = c;
                break _L$2;
              }
            }
          }
          break _L$3;
        }
        const value = new _M0TPB8MutLocalGiE(c$3 - 48 | 0);
        const count = new _M0TPB8MutLocalGiE(1);
        while (true) {
          if (count.val < 3) {
            let ch;
            _L$5: {
              const _bind$3 = _M0MP211localreview3awk11RegexReader4peek(self);
              if (_bind$3 === -1) {
                break;
              } else {
                const _Some = _bind$3;
                const _ch = _Some;
                ch = _ch;
                break _L$5;
              }
            }
            if (ch >= 48) {
              if (ch <= 55) {
                self.pos = self.pos + 1 | 0;
                value.val = ((Math.imul(value.val, 8) | 0) + ch | 0) - 48 | 0;
                count.val = count.val + 1 | 0;
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          } else {
            break;
          }
        }
        n = value.val;
      }
      break _L;
    }
    n = c$2;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9RegexTree9Character(new _M0TP211localreview3awk7CharSet([{ _0: n, _1: n }], false, self.fold)));
}
function _M0MP211localreview3awk11RegexReader9set__char(self) {
  const _bind$2 = _M0MP211localreview3awk11RegexReader4take(self);
  let c;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    c = _ok._0;
  } else {
    return _bind$2;
  }
  if (c !== 92) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(c);
  }
  _L: {
    let b;
    let a;
    _L$2: {
      const _bind$3 = _M0MP211localreview3awk11RegexReader6escape(self);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4.$tag === 1) {
        const _Character = _bind$4;
        const _x = _Character._0;
        const _x$2 = _x.ranges;
        if (_x$2.length === 1) {
          const _x$3 = _x$2[0];
          const _a = _x$3._0;
          const _b = _x$3._1;
          const _x$4 = _x.negative;
          if (_x$4 === false) {
            if (_a === _b) {
              b = _b;
              a = _a;
              break _L$2;
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(a);
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid class escape"));
}
function _M0MP211localreview3awk11RegexReader3set(self) {
  const negative = _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 94);
  if (negative) {
    self.pos = self.pos + 1 | 0;
  }
  const ranges = [];
  const first = new _M0TPB8MutLocalGbE(true);
  while (true) {
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), -1)) {
      return new _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unterminated character class"));
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 93) && !first.val) {
      self.pos = self.pos + 1 | 0;
      break;
    }
    first.val = false;
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 92)) {
      let escape;
      _L: {
        _L$2: {
          const _bind$2 = _M0MPC15array5Array3getGcE(self.chars, self.pos + 1 | 0);
          if (_bind$2 === -1) {
          } else {
            const _Some = _bind$2;
            const _escape = _Some;
            escape = _escape;
            break _L$2;
          }
          break _L;
        }
        if (_M0MPC15array5Array8containsGcE([100, 68, 115, 83, 119, 87], escape)) {
          self.pos = self.pos + 1 | 0;
          let set;
          _L$3: {
            _L$4: {
              const _bind$2 = _M0MP211localreview3awk11RegexReader6escape(self);
              let _bind$3;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _bind$3 = _ok._0;
              } else {
                return _bind$2;
              }
              if (_bind$3.$tag === 1) {
                const _Character = _bind$3;
                const _set = _Character._0;
                set = _set;
                break _L$4;
              }
              break _L$3;
            }
            if (set.negative) {
              const start = new _M0TPB8MutLocalGiE(0);
              const _bind$2 = set.ranges;
              const _bind$3 = _bind$2.length;
              let _tmp = 0;
              while (true) {
                const _ = _tmp;
                if (_ < _bind$3) {
                  const range = _bind$2[_];
                  let low;
                  let high;
                  _L$5: {
                    const _low = range._0;
                    const _high = range._1;
                    low = _low;
                    high = _high;
                    break _L$5;
                  }
                  if (start.val < low) {
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, { _0: start.val, _1: low - 1 | 0 });
                  }
                  start.val = high + 1 | 0;
                  _tmp = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (start.val <= 1114111) {
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, { _0: start.val, _1: 1114111 });
              }
            } else {
              const _bind$2 = set.ranges;
              const _bind$3 = _bind$2.length;
              let _tmp = 0;
              while (true) {
                const _ = _tmp;
                if (_ < _bind$3) {
                  const range = _bind$2[_];
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, range);
                  _tmp = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
          }
          continue;
        }
      }
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 91) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.chars, self.pos + 1 | 0), 58)) {
      self.pos = self.pos + 2 | 0;
      const begin = self.pos;
      while (true) {
        if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), -1) && _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), 58)) {
          self.pos = self.pos + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const name = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.chars, begin, self.pos));
      let _tmp;
      const _bind$2 = _M0MP211localreview3awk11RegexReader4take(self);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_tmp$2 !== 58) {
        _tmp = true;
      } else {
        const _bind$3 = _M0MP211localreview3awk11RegexReader4take(self);
        let _tmp$3;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$3 = _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = _tmp$3 !== 93;
      }
      if (_tmp) {
        return new _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid POSIX class"));
      }
      const _bind$3 = _M0FP211localreview3awk12regex__class(name);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$5 = _bind$4.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const range = _bind$4[_];
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, range);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      continue;
    }
    const _bind$2 = _M0MP211localreview3awk11RegexReader9set__char(self);
    let a;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      a = _ok._0;
    } else {
      return _bind$2;
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 45) && (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MPC15array5Array3getGcE(self.chars, self.pos + 1 | 0), 93) && _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MPC15array5Array3getGcE(self.chars, self.pos + 1 | 0), -1))) {
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP211localreview3awk11RegexReader9set__char(self);
      let b;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        b = _ok._0;
      } else {
        return _bind$3;
      }
      if (b < a) {
        return new _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("reversed regex range"));
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, { _0: a, _1: b });
    } else {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ranges, { _0: a, _1: a });
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk7CharSetRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk7CharSet(ranges, negative, self.fold));
}
function _M0MP211localreview3awk11RegexReader10expression(self, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex nesting limit"));
  }
  const alternatives = [];
  while (true) {
    const sequence = [];
    while (true) {
      if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), -1) && (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), 41) && _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), 124))) {
        const _bind$2 = _M0MP211localreview3awk11RegexReader4take(self);
        let c;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          c = _ok._0;
        } else {
          return _bind$2;
        }
        let atom;
        _L: {
          _L$2: {
            switch (c) {
              case 40: {
                const _bind$3 = _M0MP211localreview3awk11RegexReader5group(self, depth + 1 | 0);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  atom = _ok._0;
                } else {
                  return _bind$3;
                }
                break;
              }
              case 91: {
                const _bind$4 = _M0MP211localreview3awk11RegexReader3set(self);
                let _tmp;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                } else {
                  return _bind$4;
                }
                atom = new _M0DTP211localreview3awk9RegexTree9Character(_tmp);
                break;
              }
              case 46: {
                atom = new _M0DTP211localreview3awk9RegexTree3Dot(self.dotall);
                break;
              }
              case 94: {
                atom = new _M0DTP211localreview3awk9RegexTree9Assertion(self.multiline ? "line-start" : "^");
                break;
              }
              case 36: {
                atom = new _M0DTP211localreview3awk9RegexTree9Assertion(self.multiline ? "line-end" : "$");
                break;
              }
              case 92: {
                const _bind$5 = _M0MP211localreview3awk11RegexReader6escape(self);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  atom = _ok._0;
                } else {
                  return _bind$5;
                }
                break;
              }
              case 42: {
                break _L$2;
              }
              case 43: {
                break _L$2;
              }
              case 63: {
                break _L$2;
              }
              default: {
                atom = new _M0DTP211localreview3awk9RegexTree9Character(new _M0TP211localreview3awk7CharSet([{ _0: c, _1: c }], false, self.fold));
              }
            }
            break _L;
          }
          return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex repetition has no operand"));
        }
        const node = new _M0TPB8MutLocalGRP211localreview3awk9RegexTreeE(atom);
        let q;
        _L$2: {
          _L$3: {
            const _bind$3 = _M0MP211localreview3awk11RegexReader4peek(self);
            if (_bind$3 === -1) {
            } else {
              const _Some = _bind$3;
              const _q = _Some;
              q = _q;
              break _L$3;
            }
            break _L$2;
          }
          _L$4: {
            _L$5: {
              if (q === 42) {
                break _L$5;
              } else {
                if (q === 43) {
                  break _L$5;
                } else {
                  if (q === 63) {
                    break _L$5;
                  } else {
                    if (q === 123) {
                      break _L$5;
                    }
                  }
                }
              }
              break _L$4;
            }
            const saved = self.pos;
            self.pos = self.pos + 1 | 0;
            let bounds;
            switch (q) {
              case 42: {
                bounds = { _0: 0, _1: -1 };
                break;
              }
              case 43: {
                bounds = { _0: 1, _1: -1 };
                break;
              }
              case 63: {
                bounds = { _0: 0, _1: 1 };
                break;
              }
              default: {
                const begin = self.pos;
                const low = new _M0TPB8MutLocalGiE(0);
                while (true) {
                  let c$2;
                  _L$6: {
                    const _bind$3 = _M0MP211localreview3awk11RegexReader4peek(self);
                    if (_bind$3 === -1) {
                      break;
                    } else {
                      const _Some = _bind$3;
                      const _c = _Some;
                      c$2 = _c;
                      break _L$6;
                    }
                  }
                  if (_M0FP211localreview3awk5digit(c$2)) {
                    low.val = ((Math.imul(low.val, 10) | 0) + c$2 | 0) - 48 | 0;
                    if (low.val > 1000) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex repeat limit"));
                    }
                    self.pos = self.pos + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                if (begin === self.pos) {
                  self.pos = saved;
                  bounds = undefined;
                } else {
                  let high;
                  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 44)) {
                    self.pos = self.pos + 1 | 0;
                    const begin$2 = self.pos;
                    const high$2 = new _M0TPB8MutLocalGiE(0);
                    while (true) {
                      let c$2;
                      _L$6: {
                        const _bind$3 = _M0MP211localreview3awk11RegexReader4peek(self);
                        if (_bind$3 === -1) {
                          break;
                        } else {
                          const _Some = _bind$3;
                          const _c = _Some;
                          c$2 = _c;
                          break _L$6;
                        }
                      }
                      if (_M0FP211localreview3awk5digit(c$2)) {
                        high$2.val = ((Math.imul(high$2.val, 10) | 0) + c$2 | 0) - 48 | 0;
                        if (high$2.val > 1000) {
                          return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex repeat limit"));
                        }
                        self.pos = self.pos + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    high = begin$2 === self.pos ? -1 : high$2.val;
                  } else {
                    high = low.val;
                  }
                  if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), 125)) {
                    self.pos = saved;
                    bounds = undefined;
                  } else {
                    self.pos = self.pos + 1 | 0;
                    if (high >= 0 && high < low.val) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("reversed regex repetition"));
                    }
                    bounds = { _0: low.val, _1: high };
                  }
                }
              }
            }
            let low$2;
            let high;
            _L$6: {
              _L$7: {
                if (bounds === undefined) {
                } else {
                  const _Some = bounds;
                  const _x = _Some;
                  const _low = _x._0;
                  const _high = _x._1;
                  low$2 = _low;
                  high = _high;
                  break _L$7;
                }
                break _L$6;
              }
              node.val = new _M0DTP211localreview3awk9RegexTree6Repeat(node.val, low$2, high);
              if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 63)) {
                self.pos = self.pos + 1 | 0;
              }
            }
          }
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(sequence, node.val);
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(alternatives, _M0MPC15array5Array9is__emptyGRPB4JsonE(sequence) ? _M0DTP211localreview3awk9RegexTree7Epsilon__ : sequence.length === 1 ? _M0MPC15array5Array2atGRPC16string10StringViewE(sequence, 0) : new _M0DTP211localreview3awk9RegexTree8Sequence(sequence));
    if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP211localreview3awk11RegexReader4peek(self), 124)) {
      break;
    }
    self.pos = self.pos + 1 | 0;
    continue;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(alternatives.length === 1 ? _M0MPC15array5Array2atGRPC16string10StringViewE(alternatives, 0) : new _M0DTP211localreview3awk9RegexTree11Alternative(alternatives));
}
function _M0MP211localreview3awk11RegexReader5group(self, depth) {
  const old = { _0: self.fold, _1: self.multiline, _2: self.dotall };
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 63)) {
    self.pos = self.pos + 1 | 0;
    const enabled = new _M0TPB8MutLocalGbE(true);
    const flags = new _M0TPB8MutLocalGiE(0);
    while (true) {
      let c;
      _L: {
        const _bind$2 = _M0MP211localreview3awk11RegexReader4peek(self);
        if (_bind$2 === -1) {
          break;
        } else {
          const _Some = _bind$2;
          const _c = _Some;
          c = _c;
          break _L;
        }
      }
      if (_M0MPC15array5Array8containsGcE([105, 109, 115, 85, 45], c)) {
        self.pos = self.pos + 1 | 0;
        switch (c) {
          case 45: {
            enabled.val = false;
            break;
          }
          case 105: {
            self.fold = enabled.val;
            flags.val = flags.val + 1 | 0;
            break;
          }
          case 109: {
            self.multiline = enabled.val;
            flags.val = flags.val + 1 | 0;
            break;
          }
          case 115: {
            self.dotall = enabled.val;
            flags.val = flags.val + 1 | 0;
            break;
          }
          default: {
            flags.val = flags.val + 1 | 0;
          }
        }
        continue;
      } else {
        break;
      }
    }
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP211localreview3awk11RegexReader4peek(self), 41) && flags.val > 0) {
      self.pos = self.pos + 1 | 0;
      return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk9RegexTree7Epsilon__);
    }
    const _bind$2 = _M0MP211localreview3awk11RegexReader4take(self);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    if (_tmp !== 58) {
      return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unsupported regex group extension"));
    }
  }
  const _bind$2 = _M0MP211localreview3awk11RegexReader10expression(self, depth);
  let result;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    result = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk11RegexReader4take(self);
  let _tmp;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp = _ok._0;
  } else {
    return _bind$3;
  }
  if (_tmp !== 41) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unclosed regex group"));
  }
  self.fold = old._0;
  self.multiline = old._1;
  self.dotall = old._2;
  return new _M0DTPC16result6ResultGRP211localreview3awk9RegexTreeRP211localreview3awk10ParseErrorE2Ok(result);
}
function _M0FP211localreview3awk14compile__regex(source) {
  if (source.length > 10000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("regex source limit"));
  }
  const reader = new _M0TP211localreview3awk11RegexReader(_M0MPC16string6String9to__array(source), 0, false, false, true);
  const _bind$2 = _M0MP211localreview3awk11RegexReader10expression(reader, 0);
  let tree;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    tree = _ok._0;
  } else {
    return _bind$2;
  }
  if (reader.pos !== reader.chars.length) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("trailing regex input"));
  }
  const code = [_M0DTP211localreview3awk11Instruction6Accept__];
  const _bind$3 = _M0FP211localreview3awk14regex__compile(tree, code, 0);
  let start;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    start = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk5Regex(code, start));
}
function _M0MP211localreview3awk5State5regex(self, pattern) {
  let regex;
  _L: {
    _L$2: {
      const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk5RegexE(self.regexes, pattern);
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _regex = _Some;
        regex = _regex;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE2Ok(regex);
  }
  const _bind$2 = _M0FP211localreview3awk14compile__regex(pattern);
  let regex$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    regex$2 = _ok._0;
  } else {
    return _bind$2;
  }
  if (_M0MPB3Map6lengthGsRP211localreview3awk5ValueE(self.regexes) >= 128) {
    _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(self.regexes);
  }
  _M0MPB3Map3setGsRP211localreview3awk5RegexE(self.regexes, pattern, regex$2);
  return new _M0DTPC16result6ResultGRP211localreview3awk5RegexRP211localreview3awk10ParseErrorE2Ok(regex$2);
}
function _M0FP211localreview3awk21split__fields_2einner(text, separator, st, is_regex) {
  if (_M0MPC16string6String9is__empty(text)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok([]);
  }
  if (_M0MPC16string6String9is__empty(separator)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array3mapGcRP211localreview3awk5ValueE(_M0MPC16string6String9to__array(text), (c) => _M0FP211localreview3awk12input__value(_M0IPC14char4CharPB4Show10to__string(c))));
  }
  let _tmp;
  if (separator === " " && !is_regex) {
    const chars = _M0MPC16string6String9to__array(text);
    const result = [];
    const start = new _M0TPB8MutLocalGiE(0);
    const _bind$2 = 0;
    const _bind$3 = chars.length;
    let _tmp$2 = _bind$2;
    while (true) {
      const i = _tmp$2;
      if (i <= _bind$3) {
        if (i === chars.length || _M0MPC14char4Char14is__whitespace(_M0MPC15array5Array2atGcE(chars, i))) {
          if (i > start.val) {
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(result, _M0FP211localreview3awk12input__value(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start.val, i))));
          }
          start.val = i + 1 | 0;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp = result;
  } else {
    if (_M0MPC16string6String9to__array(separator).length === 1 && !is_regex) {
      _tmp = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(separator, 0, separator.length)), (s) => _M0FP211localreview3awk12input__value(_M0MPC16string10StringView9to__owned(s))));
    } else {
      const _bind$2 = _M0MP211localreview3awk5State5regex(st, separator);
      let regex;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        regex = _ok._0;
      } else {
        return _bind$2;
      }
      const chars = _M0MPC16string6String9to__array(text);
      const fields = [];
      const start = new _M0TPB8MutLocalGiE(0);
      const from = new _M0TPB8MutLocalGiE(0);
      const last_nonempty_end = new _M0TPB8MutLocalGiE(-1);
      const final_empty = new _M0TPB8MutLocalGbE(false);
      while (true) {
        if (from.val <= chars.length) {
          let a;
          let b;
          _L: {
            const _bind$3 = _M0FP211localreview3awk20regex__match_2einner(regex, chars, from.val, st, 0);
            let _bind$4;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _bind$4 = _ok._0;
            } else {
              return _bind$3;
            }
            if (_bind$4 === undefined) {
              break;
            } else {
              const _Some = _bind$4;
              const _x = _Some;
              const _a = _x._0;
              const _b = _x._1;
              a = _a;
              b = _b;
              break _L;
            }
          }
          if (a === b && a === last_nonempty_end.val) {
            from.val = a + 1 | 0;
            continue;
          }
          if (b > 0) {
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(fields, _M0FP211localreview3awk12input__value(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start.val, a))));
          }
          start.val = b;
          final_empty.val = a === b && b === chars.length;
          if (a === b) {
            from.val = a + 1 | 0;
          } else {
            from.val = b;
            last_nonempty_end.val = b;
          }
          if (fields.length > 10000) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field count budget"));
          }
          continue;
        } else {
          break;
        }
      }
      if (!final_empty.val) {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(fields, _M0FP211localreview3awk12input__value(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start.val, undefined))));
      }
      _tmp = fields;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(_tmp);
}
function _M0FP211localreview3awk14decimal__power(n) {
  return _M0MPC16bigint6BigInt3pow(_M0MPC16bigint6BigInt9from__int(10), _M0MPC16bigint6BigInt9from__int(n), _M0DTPC16option6OptionGRPC16bigint6BigIntE4None__);
}
function _M0FP211localreview3awk17decimal__exponent(n, d) {
  if (_M0MPC16bigint6BigInt8is__zero(n)) {
    return 0;
  }
  const guess = _M0MPC16bigint6BigInt18to__string_2einner(n, 10).length - _M0MPC16bigint6BigInt18to__string_2einner(d, 10).length | 0;
  return (guess >= 0 ? _M0IP016_24default__implPB7Compare6op__ltGRPC16bigint6BigIntE(n, _M0IPC16bigint6BigIntPB3Mul3mul(d, _M0FP211localreview3awk14decimal__power(guess))) : _M0IP016_24default__implPB7Compare6op__ltGRPC16bigint6BigIntE(_M0IPC16bigint6BigIntPB3Mul3mul(n, _M0FP211localreview3awk14decimal__power(-guess | 0)), d)) ? guess - 1 | 0 : guess;
}
function _M0FP211localreview3awk14decimal__round(numerator, denominator, places) {
  const n = places >= 0 ? _M0IPC16bigint6BigIntPB3Mul3mul(numerator, _M0FP211localreview3awk14decimal__power(places)) : numerator;
  const d = places < 0 ? _M0IPC16bigint6BigIntPB3Mul3mul(denominator, _M0FP211localreview3awk14decimal__power(-places | 0)) : denominator;
  const whole = _M0IPC16bigint6BigIntPB3Div3div(n, d);
  const remainder = _M0IPC16bigint6BigIntPB3Mul3mul(_M0IPC16bigint6BigIntPB3Mod3mod(n, d), _M0MPC16bigint6BigInt9from__int(2));
  return _M0MPC16bigint6BigInt18to__string_2einner(_M0IP016_24default__implPB7Compare6op__gtGRPC16bigint6BigIntE(remainder, d) || _M0IPC16bigint6BigIntPB2Eq5equal(remainder, d) && _M0MPC16bigint6BigInt12compare__int(_M0IPC16bigint6BigIntPB3Mod3mod(whole, _M0MPC16bigint6BigInt9from__int(2)), 1) === 0 ? _M0IPC16bigint6BigIntPB3Add3add(whole, _M0MPC16bigint6BigInt9from__int(1)) : whole, 10);
}
function _M0FP211localreview3awk5zeros(n) {
  return _M0MPC16string6String4make(_M0MPC13int3Int3max(n, 0), 48);
}
function _M0FP211localreview3awk13fixed__digits(digits, precision, point) {
  const digits$2 = digits.length <= precision ? `${_M0FP211localreview3awk5zeros((precision + 1 | 0) - digits.length | 0)}${digits}` : digits;
  if (precision === 0) {
    return `${digits$2}${point ? "." : ""}`;
  } else {
    const at = digits$2.length - precision | 0;
    return `${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits$2, 0, at))}.${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits$2, at, undefined))}`;
  }
}
function _M0FP211localreview3awk5ratio(n) {
  const bits = $f64_reinterpret_i64(n);
  const power = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, bits) >> BigInt(52 & 63)) & 2047n))) | 0;
  const mantissa = BigInt.asUintN(64, BigInt.asUintN(64, bits & 4503599627370495n) + (power === 0 ? 0n : 4503599627370496n));
  const shift = power === 0 ? -1074 : power - 1075 | 0;
  const numerator = mantissa;
  return shift >= 0 ? { _0: _M0IPC16bigint6BigIntPB3Shl3shl(numerator, shift), _1: _M0MPC16bigint6BigInt9from__int(1) } : { _0: numerator, _1: _M0IPC16bigint6BigIntPB3Shl3shl(_M0MPC16bigint6BigInt9from__int(1), -shift | 0) };
}
function _M0FP211localreview3awk18scientific__digits(digits, precision, exponent, point, upper) {
  const exp = _M0MPC13int3Int18to__string_2einner(_M0MPC13int3Int3abs(exponent), 10);
  return `${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, 0, 1))}${precision > 0 ? `.${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, 1, undefined))}` : point ? "." : ""}${upper ? "E" : "e"}${exponent < 0 ? "-" : "+"}${_M0FP211localreview3awk5zeros(2 - exp.length | 0)}${exp}`;
}
function _M0FP211localreview3awk14trim__fraction(text) {
  const _bind$2 = ".";
  if (!_M0MPC16string6String8contains(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    return text;
  }
  const cs = _M0MPC16string6String9to__array(text);
  const end = new _M0TPB8MutLocalGiE(cs.length);
  while (true) {
    if (end.val > 0 && _M0MPC15array5Array2atGcE(cs, end.val - 1 | 0) === 48) {
      end.val = end.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (end.val > 0 && _M0MPC15array5Array2atGcE(cs, end.val - 1 | 0) === 46) {
    end.val = end.val - 1 | 0;
  }
  return _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, 0, end.val));
}
function _M0FP211localreview3awk13float__digits(n, verb, precision, alternate) {
  if (_M0MPC16double6Double7is__nan(n)) {
    return verb === 69 || (verb === 71 || verb === 70) ? "NAN" : "nan";
  }
  if (_M0MPC16double6Double7is__inf(n)) {
    return verb === 69 || (verb === 71 || verb === 70) ? "INF" : "inf";
  }
  let numerator;
  let denominator;
  _L: {
    const _bind$2 = _M0FP211localreview3awk5ratio(n);
    const _numerator = _bind$2._0;
    const _denominator = _bind$2._1;
    numerator = _numerator;
    denominator = _denominator;
    break _L;
  }
  if (verb === 102 || verb === 70) {
    return _M0FP211localreview3awk13fixed__digits(_M0FP211localreview3awk14decimal__round(numerator, denominator, precision), precision, alternate);
  }
  const p = verb === 103 || verb === 71 ? _M0MPC13int3Int3max(precision, 1) : precision + 1 | 0;
  const exponent = new _M0TPB8MutLocalGiE(_M0FP211localreview3awk17decimal__exponent(numerator, denominator));
  const digits = new _M0TPB8MutLocalGsE(_M0FP211localreview3awk14decimal__round(numerator, denominator, (p - 1 | 0) - exponent.val | 0));
  if (digits.val.length > p) {
    digits.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits.val, 0, p));
    exponent.val = exponent.val + 1 | 0;
  }
  if (digits.val.length < p) {
    digits.val = `${_M0FP211localreview3awk5zeros(p - digits.val.length | 0)}${digits.val}`;
  }
  if (verb === 101 || verb === 69) {
    return _M0FP211localreview3awk18scientific__digits(digits.val, p - 1 | 0, exponent.val, alternate, verb === 69);
  }
  if (exponent.val < -4 || exponent.val >= p) {
    let mantissa;
    if (alternate) {
      mantissa = digits.val;
    } else {
      const end = new _M0TPB8MutLocalGiE(digits.val.length);
      while (true) {
        let _tmp;
        if (end.val > 1) {
          const _tmp$2 = _M0MPC16string6String11sub_2einner(digits.val, end.val - 1 | 0, end.val);
          const _bind$2 = "0";
          _tmp = _M0IPC16string10StringViewPB2Eq5equal(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
        } else {
          _tmp = false;
        }
        if (_tmp) {
          end.val = end.val - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      mantissa = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits.val, 0, end.val));
    }
    return _M0FP211localreview3awk18scientific__digits(mantissa, mantissa.length - 1 | 0, exponent.val, alternate, verb === 71);
  } else {
    const places = _M0MPC13int3Int3max((p - 1 | 0) - exponent.val | 0, 0);
    const text = _M0FP211localreview3awk13fixed__digits(`${digits.val}${_M0FP211localreview3awk5zeros((exponent.val + 1 | 0) - p | 0)}`, places, alternate);
    return alternate ? text : _M0FP211localreview3awk14trim__fraction(text);
  }
}
function _M0FP211localreview3awk15format__integer(n) {
  return _M0MPC16double6Double7is__nan(n) || (n >= 9.2233720368547758e+018 || n < -9.2233720368547758e+018) ? 9223372036854775808n : $i64_trunc_f64(n);
}
function _M0MP211localreview3awk5State12text_2einner(self, value, printing) {
  let n;
  _L: {
    if (value.$tag === 1) {
      const _Number = value;
      const _n = _Number._0;
      n = _n;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0MP211localreview3awk5Value4text(value));
    }
  }
  if (!_M0MPC16double6Double7is__inf(n) && (!_M0MPC16double6Double7is__nan(n) && (n === _M0MPC16double6Double5trunc(n) && (n >= -9.2233720368547758e+018 && n < 9.2233720368547758e+018)))) {
    return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0MPC15int645Int6418to__string_2einner($i64_trunc_f64(n), 10));
  }
  const key = printing ? "OFMT" : "CONVFMT";
  const format = _M0MP211localreview3awk5Value4text(_M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPB3Map3getGsRP211localreview3awk5ValueE(self.vars, key), new _M0DTP211localreview3awk5Value4Text("%.6g")));
  return _M0FP211localreview3awk22format__values_2einner(format, [value], self, true);
}
function _M0FP211localreview3awk22format__values_2einner(format, values, st, conversion) {
  const cs = _M0MPC16string6String9to__array(format);
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const i = new _M0TPB8MutLocalGiE(0);
  const next = new _M0TPB8MutLocalGiE(0);
  const size = new _M0TPB8MutLocalGiE(0);
  const add = (s) => {
    size.val = size.val + s.length | 0;
    if (size.val > 1000000) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("formatted output limit"));
    }
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0IPB13StringBuilderPB6Logger13write__string(out, s));
  };
  const argument = (index) => {
    if (index < 0 || index >= values.length) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("not enough format arguments"));
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array2atGRPC16string10StringViewE(values, index));
  };
  while (true) {
    if (i.val < cs.length) {
      const _bind$2 = _M0MP211localreview3awk5State4tick(st);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      if (_M0MPC15array5Array2atGcE(cs, i.val) !== 37) {
        const _bind$3 = add(_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val)));
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      i.val = i.val + 1 | 0;
      if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 37) {
        const _bind$3 = add("%");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      const left = new _M0TPB8MutLocalGbE(false);
      const plus = new _M0TPB8MutLocalGbE(false);
      const space = new _M0TPB8MutLocalGbE(false);
      const zero = new _M0TPB8MutLocalGbE(false);
      const alternate = new _M0TPB8MutLocalGbE(false);
      while (true) {
        if (i.val < cs.length && _M0MPC15array5Array8containsGcE([45, 43, 32, 48, 35], _M0MPC15array5Array2atGcE(cs, i.val))) {
          const _bind$3 = _M0MPC15array5Array2atGcE(cs, i.val);
          switch (_bind$3) {
            case 45: {
              left.val = true;
              break;
            }
            case 43: {
              plus.val = true;
              break;
            }
            case 32: {
              space.val = true;
              break;
            }
            case 48: {
              zero.val = true;
              break;
            }
            default: {
              alternate.val = true;
            }
          }
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const width = new _M0TPB8MutLocalGiE(0);
      if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 42) {
        i.val = i.val + 1 | 0;
        const _bind$3 = argument(next.val);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        const n = _M0MP211localreview3awk5Value6number(_tmp);
        next.val = next.val + 1 | 0;
        if (Math.abs(n) > 1000000) {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("format width limit"));
        }
        width.val = _M0MPC16double6Double7to__int(n);
        if (width.val < 0) {
          left.val = true;
          width.val = -width.val | 0;
        }
      } else {
        while (true) {
          if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
            width.val = ((Math.imul(width.val, 10) | 0) + _M0MPC15array5Array2atGcE(cs, i.val) | 0) - 48 | 0;
            if (width.val > 1000000) {
              return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("format width limit"));
            }
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      const precision = new _M0TPB8MutLocalGiE(-1);
      if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 46) {
        i.val = i.val + 1 | 0;
        precision.val = 0;
        if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 42) {
          i.val = i.val + 1 | 0;
          const _bind$3 = argument(next.val);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          const n = _M0MP211localreview3awk5Value6number(_tmp);
          next.val = next.val + 1 | 0;
          if (n > 1000) {
            return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("format precision limit"));
          }
          precision.val = n < 0 ? -1 : _M0MPC16double6Double7to__int(n);
        } else {
          while (true) {
            if (i.val < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
              precision.val = ((Math.imul(precision.val, 10) | 0) + _M0MPC15array5Array2atGcE(cs, i.val) | 0) - 48 | 0;
              if (precision.val > 1000) {
                return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("format precision limit"));
              }
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
      }
      while (true) {
        if (i.val < cs.length && _M0MPC15array5Array8containsGcE([104, 108, 76], _M0MPC15array5Array2atGcE(cs, i.val))) {
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i.val >= cs.length) {
        return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("incomplete format"));
      }
      const verb = _M0MPC15array5Array2atGcE(cs, i.val);
      i.val = i.val + 1 | 0;
      const index = next.val;
      next.val = next.val + 1 | 0;
      const _bind$3 = argument(index);
      let v;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        v = _ok._0;
      } else {
        return _bind$3;
      }
      const prefix = new _M0TPB8MutLocalGsE("");
      let _tmp;
      if (verb === 115) {
        let text;
        _L: {
          _L$2: {
            if (conversion) {
              if (v.$tag === 1) {
                text = "";
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
            break _L;
          }
          if (conversion) {
            text = _M0MP211localreview3awk5Value4text(v);
          } else {
            const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, v, false);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              text = _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
        const chars = _M0MPC16string6String9to__array(text);
        _tmp = precision.val >= 0 ? _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, 0, _M0MPC13int3Int3min(precision.val, chars.length))) : text;
      } else {
        if (verb === 99) {
          let s;
          _L: {
            _L$2: {
              if (v.$tag === 2) {
                const _Text = v;
                const _s = _Text._0;
                s = _s;
                break _L$2;
              } else {
                const n = _M0MP211localreview3awk5Value6number(v);
                const code = n >= 0 && n <= 1114111 ? _M0MPC16double6Double7to__int(n) : 65533;
                _tmp = _M0IPC14char4CharPB4Show10to__string(code >= 55296 && code <= 57343 ? 65533 : code);
              }
              break _L;
            }
            _tmp = _M0IPC14char4CharPB4Show10to__string(_M0MPC16option6Option10unwrap__orGcE(_M0MPC15array5Array3getGcE(_M0MPC16string6String9to__array(s), 0), 0));
          }
        } else {
          if (_M0MPC15array5Array8containsGcE([100, 105, 117, 111, 120, 88], verb)) {
            const n = _M0FP211localreview3awk15format__integer(_M0MP211localreview3awk5Value6number(v));
            const signed = verb === 100 || verb === 105;
            const magnitude = signed && BigInt.asIntN(64, n) < BigInt.asIntN(64, 0n) ? _M0IPC16bigint6BigIntPB3Neg3neg(_M0MPC16bigint6BigInt11from__int64(n)) : signed ? _M0MPC16bigint6BigInt11from__int64(n) : n;
            if (signed) {
              prefix.val = BigInt.asIntN(64, n) < BigInt.asIntN(64, 0n) ? "-" : plus.val ? "+" : space.val ? " " : "";
            }
            const radix = verb === 111 ? 8 : verb === 120 || verb === 88 ? 16 : 10;
            const text = new _M0TPB8MutLocalGsE(precision.val === 0 && _M0MPC16bigint6BigInt8is__zero(magnitude) ? "" : _M0MPC16bigint6BigInt18to__string_2einner(magnitude, radix));
            text.val = `${_M0FP211localreview3awk5zeros(precision.val - text.val.length | 0)}${text.val}`;
            let _tmp$2;
            if (alternate.val) {
              let _tmp$3;
              if (verb === 111) {
                const _tmp$4 = text.val;
                const _bind$4 = "0";
                _tmp$3 = !_M0MPC16string6String11has__prefix(_tmp$4, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
              } else {
                _tmp$3 = false;
              }
              _tmp$2 = _tmp$3;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              text.val = `0${text.val}`;
            }
            if (alternate.val && ((verb === 120 || verb === 88) && !_M0MPC16bigint6BigInt8is__zero(magnitude))) {
              prefix.val = verb === 120 ? "0x" : "0X";
            }
            if (precision.val >= 0) {
              zero.val = false;
            }
            _tmp = verb === 88 ? _M0MPC16string6String9to__upper(text.val) : text.val;
          } else {
            if (_M0MPC15array5Array8containsGcE([101, 69, 102, 70, 103, 71], verb)) {
              const n = _M0MP211localreview3awk5Value6number(v);
              const negative = !_M0MPC16double6Double7is__nan(n) && BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, $f64_reinterpret_i64(n)) >> BigInt(63 & 63))) !== BigInt.asUintN(64, 0n);
              prefix.val = negative ? "-" : plus.val ? "+" : space.val ? " " : "";
              if (_M0MPC16double6Double7is__nan(n) || _M0MPC16double6Double7is__inf(n)) {
                zero.val = false;
              }
              _tmp = _M0FP211localreview3awk13float__digits(n, verb, precision.val < 0 ? 6 : precision.val, alternate.val);
            } else {
              return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported format conversion: ${_M0IPC14char4CharPB4Show10to__string(verb)}`));
            }
          }
        }
      }
      const body = new _M0TPB8MutLocalGsE(_tmp);
      if (verb === 115 || verb === 99) {
        zero.val = false;
      }
      const padding = _M0MPC13int3Int3max((width.val - _M0MPC16string6String9to__array(prefix.val).length | 0) - _M0MPC16string6String9to__array(body.val).length | 0, 0);
      if (left.val) {
        body.val = `${prefix.val}${body.val}${_M0MPC16string6String4make(padding, 32)}`;
      } else {
        if (zero.val) {
          body.val = `${prefix.val}${_M0FP211localreview3awk5zeros(padding)}${body.val}`;
        } else {
          body.val = `${_M0MPC16string6String4make(padding, 32)}${prefix.val}${body.val}`;
        }
      }
      const _bind$4 = add(body.val);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
}
function _M0MP211localreview3awk5State12local__frame(self, name) {
  _L: {
    let frame;
    _L$2: {
      const _bind$2 = _M0MPC15array5Array4lastGRP211localreview3awk5FrameE(self.frames);
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _frame = _Some;
        frame = _frame;
        break _L$2;
      }
    }
    if (_M0MPC15array5Array8containsGsE(frame.params, name)) {
      return frame;
    } else {
      break _L;
    }
  }
  return undefined;
}
function _M0MP211localreview3awk5State10has__array(self, name) {
  let frame;
  _L: {
    const _bind$2 = _M0MP211localreview3awk5State12local__frame(self, name);
    if (_bind$2 === undefined) {
      return _M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name);
    } else {
      const _Some = _bind$2;
      const _frame = _Some;
      frame = _frame;
      break _L;
    }
  }
  return _M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(frame.arrays, name);
}
function _M0MP211localreview3awk5State8variable(self, name) {
  if (name === "NF") {
    const _bind$2 = _M0MP211localreview3awk5State14ensure__fields(self);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  let vars;
  let frame;
  _L: {
    _L$2: {
      const _bind$2 = _M0MP211localreview3awk5State12local__frame(self, name);
      if (_bind$2 === undefined) {
        vars = self.vars;
      } else {
        const _Some = _bind$2;
        const _frame = _Some;
        frame = _frame;
        break _L$2;
      }
      break _L;
    }
    vars = frame.vars;
  }
  if (_M0MP211localreview3awk5State10has__array(self, name)) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`array used as scalar: ${name}`));
  }
  let value;
  _L$2: {
    const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk5ValueE(vars, name);
    if (_bind$2 === undefined) {
      _M0MPB3Map3setGsRP211localreview3awk5ValueE(vars, name, _M0DTP211localreview3awk5Value5Empty__);
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk5Value5Empty__);
    } else {
      const _Some = _bind$2;
      const _value = _Some;
      value = _value;
      break _L$2;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(value);
}
function _M0MP211localreview3awk5State14ensure__fields(self) {
  if (self.fields_ready) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  self.fields_ready = true;
  let mode;
  _L: {
    _L$2: {
      const _bind$2 = self.input_mode;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _mode = _Some;
        mode = _mode;
        break _L$2;
      }
      break _L;
    }
    if (!self.reuse_csv_fields) {
      const _bind$2 = _M0FP211localreview3awk11csv__fields(self.record, mode, self);
      let parsed;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        parsed = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array5clearGsE(self.fields);
      const _bind$3 = parsed.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$3) {
          const field = parsed[_];
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.fields, field);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", new _M0DTP211localreview3awk5Value6Number(self.fields.length + 0));
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  const fs = self.saved_fs;
  const _bind$2 = _M0FP211localreview3awk21split__fields_2einner(self.record, fs, self, false);
  let raw;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    raw = _ok._0;
  } else {
    return _bind$2;
  }
  let fields;
  let _tmp;
  const _bind$3 = _M0MP211localreview3awk5State8variable(self, "RS");
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP211localreview3awk5State12text_2einner(self, _tmp$2, false);
  let _tmp$3;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$3 = _ok._0;
  } else {
    return _bind$4;
  }
  if (_M0MPC16string6String9is__empty(_tmp$3)) {
    _tmp = _M0MPC16string6String9to__array(fs).length === 1;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    const result = [];
    const _bind$5 = raw.length;
    let _tmp$4 = 0;
    while (true) {
      const _ = _tmp$4;
      if (_ < _bind$5) {
        const value = raw[_];
        const _tmp$5 = _M0MP211localreview3awk5Value4text(value);
        const _bind$6 = "\n";
        const _it = _M0MPC16string6String5split(_tmp$5, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
        while (true) {
          let part;
          _L$2: {
            const _bind$7 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
            if (_bind$7 === undefined) {
              break;
            } else {
              const _Some = _bind$7;
              const _part = _Some;
              part = _part;
              break _L$2;
            }
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(result, _M0FP211localreview3awk12input__value(_M0FP211localreview3awk16drop__record__cr(_M0MPC16string10StringView9to__owned(part))));
          continue;
        }
        _tmp$4 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    fields = result;
  } else {
    fields = raw;
  }
  if (fields.length > 10000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field count budget"));
  }
  _M0MPC15array5Array5clearGsE(self.fields);
  const _bind$5 = fields.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$5) {
      const field = fields[_];
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.fields, field);
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", new _M0DTP211localreview3awk5Value6Number(self.fields.length + 0)));
}
function _M0MP211localreview3awk5State5array(self, name) {
  const frame = _M0MP211localreview3awk5State12local__frame(self, name);
  let vars;
  let f;
  _L: {
    _L$2: {
      if (frame === undefined) {
        vars = self.vars;
      } else {
        const _Some = frame;
        const _f = _Some;
        f = _f;
        break _L$2;
      }
      break _L;
    }
    vars = f.vars;
  }
  let arrays;
  let f$2;
  _L$2: {
    _L$3: {
      if (frame === undefined) {
        arrays = self.arrays;
      } else {
        const _Some = frame;
        const _f = _Some;
        f$2 = _f;
        break _L$3;
      }
      break _L$2;
    }
    arrays = f$2.arrays;
  }
  if (_M0MPB3Map8containsGsRP211localreview3awk5ValueE(vars, name)) {
    return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`scalar used as array: ${name}`));
  }
  let a;
  _L$3: {
    const _bind$2 = _M0MPB3Map3getGsRPB3MapGsRP211localreview3awk5ValueEE(arrays, name);
    if (_bind$2 === undefined) {
      const _bind$3 = [];
      const a$2 = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$3, 0, 0), undefined);
      _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(arrays, name, a$2);
      let f$3;
      _L$4: {
        _L$5: {
          if (frame === undefined) {
          } else {
            const _Some = frame;
            const _f = _Some;
            f$3 = _f;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(f$3.owned, a$2);
      }
      return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(a$2);
    } else {
      const _Some = _bind$2;
      const _a = _Some;
      a = _a;
      break _L$3;
    }
  }
  return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(a);
}
function _M0MP211localreview3awk5State12put__element(self, name, key, value) {
  const _bind$2 = _M0MP211localreview3awk5State5array(self, name);
  let a;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    a = _ok._0;
  } else {
    return _bind$2;
  }
  if (!_M0MPB3Map8containsGsRP211localreview3awk5ValueE(a, key)) {
    if (self.entries >= 100000) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("array entry budget"));
    }
    self.entries = self.entries + 1 | 0;
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(a, key, value));
}
function _M0MP211localreview3awk5State19set__record_2einner(self, text, true_string) {
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
  }
  self.record = text;
  self.record_true_string = true_string;
  const _bind$2 = _M0MP211localreview3awk5State8variable(self, "FS");
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk5State12text_2einner(self, _tmp, false);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  self.saved_fs = _tmp$2;
  self.fields_ready = false;
  self.reuse_csv_fields = false;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0FP211localreview3awk10csv__write(fields, separator) {
  const result = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$2 = fields.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const field = fields[i];
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(result, separator);
      }
      const chars = _M0MPC16string6String9to__array(field);
      let quote;
      if (field === "\\.") {
        quote = true;
      } else {
        let _tmp$2;
        if (_M0MPC15array5Array3anyGcE(chars, (c) => c === separator || (c === 34 || (c === 13 || c === 10)))) {
          _tmp$2 = true;
        } else {
          let _tmp$3;
          let c;
          _L: {
            _L$2: {
              const _bind$3 = _M0MPC15array5Array3getGcE(chars, 0);
              if (_bind$3 === -1) {
                _tmp$3 = false;
              } else {
                const _Some = _bind$3;
                const _c = _Some;
                c = _c;
                break _L$2;
              }
              break _L;
            }
            _tmp$3 = _M0MPC14char4Char14is__whitespace(c);
          }
          _tmp$2 = _tmp$3;
        }
        quote = _tmp$2;
      }
      if (quote) {
        _M0IPB13StringBuilderPB6Logger11write__char(result, 34);
      }
      const _bind$3 = chars.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$3) {
          const c = chars[_];
          _M0IPB13StringBuilderPB6Logger11write__char(result, c);
          if (quote && c === 34) {
            _M0IPB13StringBuilderPB6Logger11write__char(result, 34);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (quote) {
        _M0IPB13StringBuilderPB6Logger11write__char(result, 34);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(result);
}
function _M0MP211localreview3awk5State7rebuild(self) {
  const _bind$2 = _M0MP211localreview3awk5State8variable(self, "OFS");
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk5State12text_2einner(self, _tmp, false);
  let ofs;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    ofs = _ok._0;
  } else {
    return _bind$3;
  }
  const length = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = self.fields;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const value = _bind$4[_];
      const _tmp$3 = length.val;
      const _bind$6 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
      let _tmp$4;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$4 = _ok._0;
      } else {
        return _bind$6;
      }
      length.val = _tmp$3 + (_tmp$4.length + ofs.length | 0) | 0;
      if (length.val > 1000000) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.record_true_string = true;
  const _bind$6 = _M0MPC15array5Array3mapGRP211localreview3awk5ValuesEHRP211localreview3awk10ParseError(self.fields, (v) => _M0MP211localreview3awk5State12text_2einner(self, v, false));
  let texts;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    texts = _ok._0;
  } else {
    return _bind$6;
  }
  let _tmp$3;
  let mode;
  _L: {
    _L$2: {
      const _bind$7 = self.output_mode;
      if (_bind$7 === undefined) {
        _tmp$3 = _M0MPC15array5Array4joinGsE(texts, new _M0TPC16string10StringView(ofs, 0, ofs.length));
      } else {
        const _Some = _bind$7;
        const _mode = _Some;
        mode = _mode;
        break _L$2;
      }
      break _L;
    }
    _tmp$3 = _M0FP211localreview3awk10csv__write(texts, mode.separator);
  }
  self.record = _tmp$3;
  if (self.record.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", new _M0DTP211localreview3awk5Value6Number(self.fields.length + 0)));
}
function _M0FP211localreview3awk12field__index(n) {
  if (n < -10000 || n > 10000) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field index -10000..10000 required"));
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(_M0MPC16double6Double7to__int(n));
}
function _M0MP211localreview3awk5State4read(self, slot) {
  let name;
  let key;
  _L: {
    let i;
    _L$2: {
      let name$2;
      _L$3: {
        switch (slot.$tag) {
          case 0: {
            const _VariableSlot = slot;
            const _name = _VariableSlot._0;
            name$2 = _name;
            break _L$3;
          }
          case 1: {
            const _FieldSlot = slot;
            const _i = _FieldSlot._0;
            i = _i;
            break _L$2;
          }
          default: {
            const _ElementSlot = slot;
            const _name$2 = _ElementSlot._0;
            const _key = _ElementSlot._1;
            name = _name$2;
            key = _key;
            break _L;
          }
        }
      }
      return _M0MP211localreview3awk5State8variable(self, name$2);
    }
    if (i === 0) {
      return self.record_true_string ? new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(self.record)) : new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk12input__value(self.record));
    } else {
      const _bind$2 = _M0MP211localreview3awk5State14ensure__fields(self);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      const index = i < 0 ? (self.fields.length + 1 | 0) + i | 0 : i;
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPC15array5Array3getGRP211localreview3awk5ValueE(self.fields, index - 1 | 0), new _M0DTP211localreview3awk5Value4Text("")));
    }
  }
  const _bind$2 = _M0MP211localreview3awk5State5array(self, name);
  let a;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    a = _ok._0;
  } else {
    return _bind$2;
  }
  let v;
  _L$2: {
    const _bind$3 = _M0MPB3Map3getGsRP211localreview3awk5ValueE(a, key);
    if (_bind$3 === undefined) {
      const _bind$4 = _M0MP211localreview3awk5State12put__element(self, name, key, _M0DTP211localreview3awk5Value5Empty__);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk5Value5Empty__);
    } else {
      const _Some = _bind$3;
      const _v = _Some;
      v = _v;
      break _L$2;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(v);
}
function _M0FP211localreview3awk9csv__mode(text, input) {
  const chars = _M0MPC16string6String9to__array(text);
  const words = [];
  const first = new _M0TPB8MutLocalGiE(0);
  const _bind$2 = 0;
  const _bind$3 = chars.length;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i <= _bind$3) {
      if (i === chars.length || _M0MPC14char4Char14is__whitespace(_M0MPC15array5Array2atGcE(chars, i))) {
        if (first.val < i) {
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(words, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, first.val, i)));
        }
        first.val = i + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(words)) {
    return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  const format = _M0MPC15array5Array2atGRPC16string10StringViewE(words, 0);
  let _tmp$2;
  switch (format) {
    case "csv": {
      _tmp$2 = 44;
      break;
    }
    case "tsv": {
      _tmp$2 = 9;
      break;
    }
    default: {
      return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid CSV/TSV mode"));
    }
  }
  const separator = new _M0TPB8MutLocalGcE(_tmp$2);
  const comment = new _M0TPB8MutLocalGcE(0);
  const header = new _M0TPB8MutLocalGbE(false);
  const _bind$4 = _M0MPC15array5Array12view_2einnerGRP211localreview3awk5ValueE(words, 1, undefined);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const word = _bind$4.buf[_bind$4.start + _ | 0];
      const _bind$6 = "=";
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(word, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length)));
      const key = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
      const value = parts.length > 1 ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(word, key.length + 1 | 0, undefined)) : "";
      if (key === "separator" || input && key === "comment") {
        const value$2 = _M0MPC16string6String9to__array(value);
        if (value$2.length !== 1) {
          return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("CSV delimiter must be one character"));
        }
        const c = _M0MPC15array5Array2atGcE(value$2, 0);
        if (_M0MPC15array5Array8containsGcE([0, 13, 10, 34, 65533], c)) {
          return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid CSV delimiter"));
        }
        if (key === "separator") {
          separator.val = c;
        } else {
          comment.val = c;
        }
      } else {
        if (input && key === "header") {
          let _tmp$4;
          switch (value) {
            case "": {
              _tmp$4 = true;
              break;
            }
            case "true": {
              _tmp$4 = true;
              break;
            }
            case "false": {
              _tmp$4 = false;
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid CSV header option"));
            }
          }
          header.val = _tmp$4;
        } else {
          return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid CSV/TSV option"));
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (separator.val === comment.val) {
    return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("CSV separator equals comment delimiter"));
  }
  return new _M0DTPC16result6ResultGORP211localreview3awk7CSVModeRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk7CSVMode(format, separator.val, comment.val, header.val));
}
function _M0FP211localreview3awk15csv__mode__text(mode) {
  let mode$2;
  _L: {
    if (mode === undefined) {
      return "";
    } else {
      const _Some = mode;
      const _mode = _Some;
      mode$2 = _mode;
      break _L;
    }
  }
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(out, mode$2.format);
  if (mode$2.separator !== (mode$2.format === "csv" ? 44 : 9)) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, " separator=");
    _M0IPB13StringBuilderPB6Logger11write__char(out, mode$2.separator);
  }
  if (mode$2.comment !== 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, " comment=");
    _M0IPB13StringBuilderPB6Logger11write__char(out, mode$2.comment);
  }
  if (mode$2.header) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, " header");
  }
  return _M0MPB13StringBuilder10to__string(out);
}
function _M0MP211localreview3awk5State13write_2einner(self, slot, value, global) {
  let name;
  let key;
  _L: {
    let i;
    _L$2: {
      let name$2;
      _L$3: {
        switch (slot.$tag) {
          case 0: {
            const _VariableSlot = slot;
            const _name = _VariableSlot._0;
            name$2 = _name;
            break _L$3;
          }
          case 1: {
            const _FieldSlot = slot;
            const _i = _FieldSlot._0;
            i = _i;
            break _L$2;
          }
          default: {
            const _ElementSlot = slot;
            const _name$2 = _ElementSlot._0;
            const _key = _ElementSlot._1;
            name = _name$2;
            key = _key;
            break _L;
          }
        }
      }
      if (global ? _M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name$2) : _M0MP211localreview3awk5State10has__array(self, name$2)) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`array used as scalar: ${name$2}`));
      }
      if (name$2 === "INPUTMODE" || name$2 === "OUTPUTMODE") {
        const _bind$2 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP211localreview3awk9csv__mode(_tmp, name$2 === "INPUTMODE");
        let mode;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          mode = _ok._0;
        } else {
          return _bind$3;
        }
        if (name$2 === "INPUTMODE") {
          self.input_mode = mode;
        } else {
          self.output_mode = mode;
        }
        _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, name$2, new _M0DTP211localreview3awk5Value4Text(_M0FP211localreview3awk15csv__mode__text(mode)));
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      if (name$2 === "NF") {
        const _bind$2 = _M0MP211localreview3awk5State14ensure__fields(self);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP211localreview3awk12field__index(_M0MP211localreview3awk5Value6number(value));
        let size;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          size = _ok._0;
        } else {
          return _bind$3;
        }
        if (size < 0) {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("negative NF"));
        }
        while (true) {
          if (self.fields.length > size) {
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(self.fields);
            continue;
          } else {
            break;
          }
        }
        while (true) {
          if (self.fields.length < size) {
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.fields, _M0DTP211localreview3awk5Value5Empty__);
            continue;
          } else {
            break;
          }
        }
        const _bind$4 = _M0MP211localreview3awk5State7rebuild(self);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", value));
      } else {
        if (_M0MPC15array5Array8containsGsE(["ARGV", "ENVIRON", "FIELDS"], name$2)) {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported special variable ${name$2}`));
        }
        let _tmp;
        if (name$2 === "RS" || name$2 === "FS") {
          const _bind$2 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          _tmp = _M0MPC16string6String9to__array(_tmp$2).length > 1;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          const _bind$2 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          const _bind$3 = _M0MP211localreview3awk5State5regex(self, _tmp$2);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
        }
        let frame;
        _L$4: {
          const _bind$2 = global ? undefined : _M0MP211localreview3awk5State12local__frame(self, name$2);
          if (_bind$2 === undefined) {
            return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, name$2, value));
          } else {
            const _Some = _bind$2;
            const _frame = _Some;
            frame = _frame;
            break _L$4;
          }
        }
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(frame.vars, name$2, value));
      }
    }
    if (i === 0) {
      const _bind$2 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return _M0MP211localreview3awk5State19set__record_2einner(self, _tmp, true);
    } else {
      const _bind$2 = _M0MP211localreview3awk5State14ensure__fields(self);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      const i$2 = i < 0 ? (self.fields.length + 1 | 0) + i | 0 : i;
      if (i$2 < 1) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      while (true) {
        if (self.fields.length < i$2) {
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.fields, _M0DTP211localreview3awk5Value5Empty__);
          continue;
        } else {
          break;
        }
      }
      const _tmp = self.fields;
      const _tmp$2 = i$2 - 1 | 0;
      const _bind$3 = _M0MP211localreview3awk5State12text_2einner(self, value, false);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array3setGRP211localreview3awk5ValueE(_tmp, _tmp$2, new _M0DTP211localreview3awk5Value4Text(_tmp$3));
      return _M0MP211localreview3awk5State7rebuild(self);
    }
  }
  return _M0MP211localreview3awk5State12put__element(self, name, key, value);
}
function _M0MP211localreview3awk5State4emit(self, text) {
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("output length budget"));
  }
  let sink;
  _L: {
    _L$2: {
      const _bind$2 = self.output_sink;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _sink = _Some;
        sink = _sink;
        break _L$2;
      }
      break _L;
    }
    let message;
    _L$3: {
      _L$4: {
        const _bind$2 = sink(text);
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _message = _Some;
          message = _message;
          break _L$4;
        }
        break _L$3;
      }
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`output: ${message}`));
    }
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  if (text.length > (1000000 - self.output_size | 0)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("output length budget"));
  }
  self.output_size = self.output_size + text.length | 0;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array4pushGRPC14json10WriteFrameE(self.output, text));
}
function _M0FP211localreview3awk13builtin__name(name) {
  return _M0MPC15array5Array8containsGsE(["length", "substr", "index", "split", "int", "sqrt", "tolower", "toupper", "sprintf", "match", "sub", "gsub", "sin", "cos", "atan2", "exp", "log", "rand", "srand", "system", "close", "fflush"], name);
}
function _M0FP211localreview3awk4word(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c === 95 || (c >= 48 && c <= 57 || c > 127)));
}
function _M0FP211localreview3awk10identifier(s) {
  const cs = _M0MPC16string6String9to__array(s);
  return !_M0MPC15array5Array9is__emptyGcE(cs) && (_M0FP211localreview3awk4word(_M0MPC15array5Array2atGcE(cs, 0)) && (!_M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, 0)) && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), _M0FP211localreview3awk4word)));
}
function _M0FP211localreview3awk11awk__escape(cs, i) {
  if (i.val >= cs.length) {
    return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unfinished string escape"));
  }
  const c = _M0MPC15array5Array2atGcE(cs, i.val);
  i.val = i.val + 1 | 0;
  let c$2;
  _L: {
    _L$2: {
      switch (c) {
        case 110: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\n");
        }
        case 114: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\r");
        }
        case 116: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\t");
        }
        case 98: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\b");
        }
        case 102: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\f");
        }
        case 118: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\u000b");
        }
        case 97: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("\u0007");
        }
        case 10: {
          return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok("");
        }
        case 120: {
          break _L$2;
        }
        case 117: {
          break _L$2;
        }
        default: {
          if (c >= 48 && c <= 55) {
            c$2 = c;
            break _L;
          } else {
            return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0IPC14char4CharPB4Show10to__string(c));
          }
        }
      }
    }
    const maximum = c === 117 ? 8 : 2;
    const value = new _M0TPB8MutLocalGiE(0);
    const count = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (count.val < maximum && (i.val < cs.length && _M0MPC14char4Char19is__ascii__hexdigit(_M0MPC15array5Array2atGcE(cs, i.val)))) {
        const d = _M0MPC15array5Array2atGcE(cs, i.val);
        value.val = (Math.imul(value.val, 16) | 0) + (d <= 57 ? d - 48 | 0 : _M0MPC14char4Char20to__ascii__lowercase(d) - 87 | 0) | 0;
        i.val = i.val + 1 | 0;
        count.val = count.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (count.val === 0) {
      return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0IPC14char4CharPB4Show10to__string(c));
    }
    if (value.val > 1114111 || (value.val < 0 || value.val >= 55296 && value.val <= 57343)) {
      return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid Unicode escape"));
    }
    return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0IPC14char4CharPB4Show10to__string(value.val));
  }
  const value = new _M0TPB8MutLocalGiE(c$2 - 48 | 0);
  const count = new _M0TPB8MutLocalGiE(1);
  while (true) {
    if (count.val < 3 && (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) >= 48 && _M0MPC15array5Array2atGcE(cs, i.val) <= 55))) {
      value.val = ((Math.imul(value.val, 8) | 0) + _M0MPC15array5Array2atGcE(cs, i.val) | 0) - 48 | 0;
      i.val = i.val + 1 | 0;
      count.val = count.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0IPC14char4CharPB4Show10to__string(value.val));
}
function _M0FP211localreview3awk8reserved(s) {
  return _M0MPC15array5Array8containsGsE(["BEGIN", "END", "if", "else", "while", "do", "for", "in", "break", "continue", "next", "nextfile", "exit", "delete", "print", "printf", "function", "func", "return", "getline"], s);
}
function _M0FP211localreview3awk3lex(source, newlines) {
  if (source.length > 100000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("source limit"));
  }
  const cs = _M0MPC16string6String9to__array(source);
  const ts = [];
  const i = new _M0TPB8MutLocalGiE(0);
  const last_end = new _M0TPB8MutLocalGiE(0);
  const expected = new _M0TPB8MutLocalGbE(true);
  const brackets = new _M0TPB8MutLocalGiE(0);
  const parens = [];
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 32 || (c === 9 || c === 13)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 10) {
        if (newlines && (_M0MPC15array5Array9is__emptyGbE(parens) && brackets.val === 0)) {
          _L: {
            _L$2: {
              let t;
              _L$3: {
                const _bind$2 = _M0MPC15array5Array4lastGRP211localreview3awk5FrameE(ts);
                if (_bind$2 === undefined) {
                  break _L$2;
                } else {
                  const _Some = _bind$2;
                  const _t = _Some;
                  t = _t;
                  break _L$3;
                }
              }
              if (!t.quoted) {
                if (!t.regexp) {
                  if (_M0MPC15array5Array8containsGsE([",", "&&", "||", "?", ":"], t.text)) {
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
              break _L;
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP211localreview3awk5Token("\n", false, false, false));
            expected.val = true;
          }
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 92 && ((i.val + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 10)) {
        i.val = i.val + 2 | 0;
        continue;
      }
      if (c === 35) {
        while (true) {
          if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) !== 10) {
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        continue;
      }
      const start = i.val;
      const adjacent = i.val === last_end.val;
      let text;
      let quoted;
      let regexp;
      _L: {
        if (c === 34) {
          i.val = i.val + 1 | 0;
          const s = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          const closed = new _M0TPB8MutLocalGbE(false);
          while (true) {
            if (i.val < cs.length) {
              const ch = _M0MPC15array5Array2atGcE(cs, i.val);
              i.val = i.val + 1 | 0;
              if (ch === 34) {
                closed.val = true;
                break;
              }
              if (ch === 10) {
                return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("newline in string"));
              }
              if (ch === 92) {
                const offset = _M0MPC13ref3Ref3RefGiE(i.val);
                const _bind$2 = _M0FP211localreview3awk11awk__escape(cs, offset);
                let _tmp;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp = _ok._0;
                } else {
                  return _bind$2;
                }
                _M0IPB13StringBuilderPB6Logger13write__string(s, _tmp);
                i.val = offset.val;
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(s, ch);
              }
              continue;
            } else {
              break;
            }
          }
          if (!closed.val) {
            return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unterminated string"));
          }
          expected.val = false;
          text = _M0MPB13StringBuilder10to__string(s);
          quoted = true;
          regexp = false;
          break _L;
        } else {
          if (c === 47 && expected.val) {
            i.val = i.val + 1 | 0;
            const s = _M0MPB13StringBuilder21StringBuilder_2einner(0);
            const closed = new _M0TPB8MutLocalGbE(false);
            while (true) {
              if (i.val < cs.length) {
                const ch = _M0MPC15array5Array2atGcE(cs, i.val);
                i.val = i.val + 1 | 0;
                if (ch === 47) {
                  closed.val = true;
                  break;
                }
                if (ch === 10) {
                  return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("newline in regex"));
                }
                if (ch === 92) {
                  if (i.val >= cs.length) {
                    return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unfinished regex escape"));
                  }
                  if (_M0MPC15array5Array2atGcE(cs, i.val) === 47) {
                    _M0IPB13StringBuilderPB6Logger11write__char(s, 47);
                    i.val = i.val + 1 | 0;
                  } else {
                    if (_M0MPC15array5Array2atGcE(cs, i.val) === 10) {
                      i.val = i.val + 1 | 0;
                    } else {
                      _M0IPB13StringBuilderPB6Logger11write__char(s, 92);
                      _M0IPB13StringBuilderPB6Logger11write__char(s, _M0MPC15array5Array2atGcE(cs, i.val));
                      i.val = i.val + 1 | 0;
                    }
                  }
                } else {
                  _M0IPB13StringBuilderPB6Logger11write__char(s, ch);
                }
                continue;
              } else {
                break;
              }
            }
            if (!closed.val) {
              return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unterminated regex"));
            }
            expected.val = false;
            text = _M0MPB13StringBuilder10to__string(s);
            quoted = false;
            regexp = true;
            break _L;
          } else {
            if (_M0FP211localreview3awk5digit(c) || c === 46 && ((i.val + 1 | 0) < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0)))) {
              i.val = _M0FP211localreview3awk11number__end(cs, i.val, false);
              expected.val = false;
              text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val));
              quoted = false;
              regexp = false;
              break _L;
            } else {
              if (_M0FP211localreview3awk4word(c)) {
                while (true) {
                  if (i.val < cs.length && _M0FP211localreview3awk4word(_M0MPC15array5Array2atGcE(cs, i.val))) {
                    i.val = i.val + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                const name = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val));
                expected.val = _M0FP211localreview3awk8reserved(name) && !_M0MPC15array5Array8containsGsE(["break", "continue", "next"], name);
                text = name;
                quoted = false;
                regexp = false;
                break _L;
              } else {
                i.val = i.val + 1 | 0;
                const text$2 = new _M0TPB8MutLocalGsE(_M0IPC14char4CharPB4Show10to__string(c));
                if (i.val < cs.length) {
                  const pair = `${text$2.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
                  if (_M0MPC15array5Array8containsGsE(["==", "!=", ">=", "<=", "!~", "+=", "-=", "*=", "/=", "%=", "^=", "++", "--", "&&", "||", ">>", "**"], pair)) {
                    text$2.val = pair;
                    i.val = i.val + 1 | 0;
                    if (text$2.val === "**") {
                      text$2.val = "^";
                      if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 61) {
                        text$2.val = "^=";
                        i.val = i.val + 1 | 0;
                      }
                    }
                  }
                }
                if (text$2.val === "(") {
                  _M0MPC15array5Array4pushGbE(parens, _M0MPC16option6Option10unwrap__orGbE(_M0MPC16option6Option3mapGRP211localreview3awk5TokenbE(_M0MPC15array5Array4lastGRP211localreview3awk5FrameE(ts), (t) => _M0MPC15array5Array8containsGsE(["if", "while", "for"], t.text)), false));
                  expected.val = true;
                } else {
                  if (text$2.val === ")") {
                    expected.val = _M0MPC16option6Option10unwrap__orGbE(_M0MPC15array5Array3popGbE(parens), false);
                  } else {
                    if (text$2.val === "[") {
                      brackets.val = brackets.val + 1 | 0;
                      expected.val = true;
                    } else {
                      if (text$2.val === "]") {
                        brackets.val = brackets.val - 1 | 0;
                        expected.val = false;
                      } else {
                        if (text$2.val === "++" || text$2.val === "--") {
                        } else {
                          expected.val = true;
                        }
                      }
                    }
                  }
                }
                text = text$2.val;
                quoted = false;
                regexp = false;
                break _L;
              }
            }
          }
        }
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP211localreview3awk5Token(text, quoted, regexp, adjacent));
      last_end.val = i.val;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk6Cursor(ts, 0));
}
function _M0FP211localreview3awk17special__variable(name) {
  return _M0MPC15array5Array8containsGsE(["FS", "OFS", "RS", "ORS", "NR", "FNR", "NF", "FILENAME", "OFMT", "CONVFMT", "SUBSEP", "RSTART", "RLENGTH", "RT", "ARGC", "ARGV", "ENVIRON", "FIELDS", "INPUTMODE", "OUTPUTMODE"], name);
}
function _M0FP211localreview3awk17validate__control(stmt, loops, phase) {
  let _tmp = stmt;
  let _tmp$2 = loops;
  let _tmp$3 = phase;
  _L: while (true) {
    const stmt$2 = _tmp;
    const loops$2 = _tmp$2;
    const phase$2 = _tmp$3;
    let body;
    _L$2: {
      let yes;
      let no;
      _L$3: {
        let statements;
        _L$4: {
          _L$5: {
            _L$6: {
              switch (stmt$2.$tag) {
                case 10: {
                  break _L$6;
                }
                case 11: {
                  break _L$6;
                }
                case 12: {
                  break _L$5;
                }
                case 13: {
                  break _L$5;
                }
                case 15: {
                  if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase$2, "function")) {
                    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("return outside function"));
                  } else {
                    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                  }
                }
                case 0: {
                  const _Block = stmt$2;
                  const _statements = _Block._0;
                  statements = _statements;
                  break _L$4;
                }
                case 4: {
                  const _If = stmt$2;
                  const _yes = _If._1;
                  const _no = _If._2;
                  yes = _yes;
                  no = _no;
                  break _L$3;
                }
                case 5: {
                  const _While = stmt$2;
                  const _body = _While._1;
                  body = _body;
                  break _L$2;
                }
                case 6: {
                  const _Do = stmt$2;
                  const _body$2 = _Do._0;
                  body = _body$2;
                  break _L$2;
                }
                case 7: {
                  const _For = stmt$2;
                  const _body$3 = _For._3;
                  body = _body$3;
                  break _L$2;
                }
                case 8: {
                  const _ForIn = stmt$2;
                  const _body$4 = _ForIn._2;
                  body = _body$4;
                  break _L$2;
                }
                default: {
                  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                }
              }
            }
            if (loops$2 === 0) {
              return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("break/continue outside loop"));
            } else {
              return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
            }
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase$2, "record") && _M0IP016_24default__implPB2Eq10not__equalGsE(phase$2, "function")) {
            return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next outside record action"));
          } else {
            return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
          }
        }
        const _bind$2 = statements.length;
        let _tmp$4 = 0;
        while (true) {
          const _ = _tmp$4;
          if (_ < _bind$2) {
            const statement = statements[_];
            const _bind$3 = _M0FP211localreview3awk17validate__control(statement, loops$2, phase$2);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            _tmp$4 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      const _bind$2 = _M0FP211localreview3awk17validate__control(yes, loops$2, phase$2);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      let other;
      _L$4: {
        if (no === undefined) {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
        } else {
          const _Some = no;
          const _other = _Some;
          other = _other;
          break _L$4;
        }
      }
      _tmp = other;
      continue;
    }
    _tmp = body;
    _tmp$2 = loops$2 + 1 | 0;
    continue;
  }
}
function _M0FP211localreview3awk6lvalue(e) {
  switch (e.$tag) {
    case 2: {
      return true;
    }
    case 3: {
      return true;
    }
    case 5: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP211localreview3awk12scoped__name(program, scope, name) {
  _L: {
    let f;
    _L$2: {
      const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk11FunctionDefE(program.functions, scope);
      if (_bind$2 === undefined) {
        break _L;
      } else {
        const _Some = _bind$2;
        const _f = _Some;
        f = _f;
        break _L$2;
      }
    }
    if (_M0MPC15array5Array8containsGsE(f.params, name)) {
      return `${scope}::${name}`;
    } else {
      break _L;
    }
  }
  return name;
}
function _M0FP211localreview3awk10mark__kind(program, scope, name, kind) {
  if (_M0MPB3Map8containsGsRP211localreview3awk11FunctionDefE(program.functions, name)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`function name used as variable: ${name}`));
  }
  if (kind === 2 && (_M0FP211localreview3awk17special__variable(name) && !_M0MPC15array5Array8containsGsE(["ARGV", "ENVIRON", "FIELDS"], name))) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("special scalar used as array"));
  }
  const key = _M0FP211localreview3awk12scoped__name(program, scope, name);
  const merged = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(program.kinds, key), 0) | kind;
  if (merged === 3) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`variable used as both scalar and array: ${name}`));
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsiE(program.kinds, key, merged));
}
function _M0FP211localreview3awk14validate__expr(e, program, scope) {
  let _tmp = e;
  let _tmp$2 = program;
  let _tmp$3 = scope;
  _L: while (true) {
    const e$2 = _tmp;
    const program$2 = _tmp$2;
    const scope$2 = _tmp$3;
    let name;
    let args;
    _L$2: {
      let a;
      let c;
      let b;
      _L$3: {
        let a$2;
        let b$2;
        _L$4: {
          let left;
          let name$2;
          _L$5: {
            let name$3;
            let keys;
            _L$6: {
              let e$3;
              _L$7: {
                let name$4;
                _L$8: {
                  let target;
                  let source;
                  _L$9: {
                    switch (e$2.$tag) {
                      case 0: {
                        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                      }
                      case 1: {
                        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                      }
                      case 13: {
                        const _Getline = e$2;
                        const _target = _Getline._0;
                        const _source = _Getline._1;
                        target = _target;
                        source = _source;
                        break _L$9;
                      }
                      case 2: {
                        const _Variable = e$2;
                        const _name = _Variable._0;
                        name$4 = _name;
                        break _L$8;
                      }
                      case 3: {
                        const _Field = e$2;
                        const _e = _Field._0;
                        e$3 = _e;
                        break _L$7;
                      }
                      case 4: {
                        const _NamedField = e$2;
                        const _e$2 = _NamedField._0;
                        e$3 = _e$2;
                        break _L$7;
                      }
                      case 7: {
                        const _Unary = e$2;
                        const _e$3 = _Unary._1;
                        e$3 = _e$3;
                        break _L$7;
                      }
                      case 10: {
                        const _Increment = e$2;
                        const _e$4 = _Increment._0;
                        e$3 = _e$4;
                        break _L$7;
                      }
                      case 5: {
                        const _Element = e$2;
                        const _name$2 = _Element._0;
                        const _keys = _Element._1;
                        name$3 = _name$2;
                        keys = _keys;
                        break _L$6;
                      }
                      case 6: {
                        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("tuple only allowed with in"));
                      }
                      case 8: {
                        const _Binary = e$2;
                        const _x = _Binary._0;
                        if (_x === "in") {
                          const _left = _Binary._1;
                          const _x$2 = _Binary._2;
                          if (_x$2.$tag === 2) {
                            const _Variable$2 = _x$2;
                            const _name$3 = _Variable$2._0;
                            left = _left;
                            name$2 = _name$3;
                            break _L$5;
                          } else {
                            return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("in requires array name"));
                          }
                        } else {
                          const _a = _Binary._1;
                          const _b = _Binary._2;
                          a$2 = _a;
                          b$2 = _b;
                          break _L$4;
                        }
                      }
                      case 9: {
                        const _Assign = e$2;
                        const _a = _Assign._1;
                        const _b = _Assign._2;
                        a$2 = _a;
                        b$2 = _b;
                        break _L$4;
                      }
                      case 11: {
                        const _Conditional = e$2;
                        const _c = _Conditional._0;
                        const _a$2 = _Conditional._1;
                        const _b$2 = _Conditional._2;
                        a = _a$2;
                        c = _c;
                        b = _b$2;
                        break _L$3;
                      }
                      default: {
                        const _Call = e$2;
                        const _name$3 = _Call._0;
                        const _args = _Call._1;
                        name = _name$3;
                        args = _args;
                        break _L$2;
                      }
                    }
                  }
                  let e$4;
                  _L$10: {
                    _L$11: {
                      if (target === undefined) {
                      } else {
                        const _Some = target;
                        const _e = _Some;
                        e$4 = _e;
                        break _L$11;
                      }
                      break _L$10;
                    }
                    const _bind$2 = _M0FP211localreview3awk14validate__expr(e$4, program$2, scope$2);
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _ok._0;
                    } else {
                      return _bind$2;
                    }
                  }
                  let e$5;
                  _L$11: {
                    if (source === undefined) {
                      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                    } else {
                      const _Some = source;
                      const _x = _Some;
                      const _e = _x._1;
                      e$5 = _e;
                      break _L$11;
                    }
                  }
                  _tmp = e$5;
                  continue;
                }
                return _M0FP211localreview3awk10mark__kind(program$2, scope$2, name$4, 1);
              }
              _tmp = e$3;
              continue;
            }
            const _bind$2 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, name$3, 2);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = keys.length;
            let _tmp$4 = 0;
            while (true) {
              const _ = _tmp$4;
              if (_ < _bind$3) {
                const key = keys[_];
                const _bind$4 = _M0FP211localreview3awk14validate__expr(key, program$2, scope$2);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                _tmp$4 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
          }
          const _bind$2 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, name$2, 2);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          let keys;
          _L$6: {
            if (left.$tag === 6) {
              const _Tuple = left;
              const _keys = _Tuple._0;
              keys = _keys;
              break _L$6;
            } else {
              _tmp = left;
              continue;
            }
          }
          const _bind$3 = keys.length;
          let _tmp$4 = 0;
          while (true) {
            const _ = _tmp$4;
            if (_ < _bind$3) {
              const key = keys[_];
              const _bind$4 = _M0FP211localreview3awk14validate__expr(key, program$2, scope$2);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              _tmp$4 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
        }
        const _bind$2 = _M0FP211localreview3awk14validate__expr(a$2, program$2, scope$2);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        _tmp = b$2;
        continue;
      }
      const _bind$2 = _M0FP211localreview3awk14validate__expr(c, program$2, scope$2);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0FP211localreview3awk14validate__expr(a, program$2, scope$2);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = b;
      continue;
    }
    if (_M0FP211localreview3awk13builtin__name(name)) {
      let low;
      let high;
      _L$3: {
        _L$4: {
          _L$5: {
            _L$6: {
              switch (name) {
                case "length": {
                  break _L$6;
                }
                case "srand": {
                  break _L$6;
                }
                case "fflush": {
                  break _L$6;
                }
                case "rand": {
                  low = 0;
                  high = 0;
                  break _L$3;
                }
                case "substr": {
                  break _L$5;
                }
                case "split": {
                  break _L$5;
                }
                case "sub": {
                  break _L$5;
                }
                case "gsub": {
                  break _L$5;
                }
                case "index": {
                  break _L$4;
                }
                case "match": {
                  break _L$4;
                }
                case "atan2": {
                  break _L$4;
                }
                case "sprintf": {
                  low = 1;
                  high = 10000;
                  break _L$3;
                }
                default: {
                  low = 1;
                  high = 1;
                  break _L$3;
                }
              }
            }
            low = 0;
            high = 1;
            break _L$3;
          }
          low = 2;
          high = 3;
          break _L$3;
        }
        low = 2;
        high = 2;
        break _L$3;
      }
      if (args.length < low || args.length > high) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`invalid arguments to ${name}`));
      }
      const _bind$2 = args.length;
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < _bind$2) {
          const arg = args[i];
          if (name === "split" && i === 1) {
            let array;
            _L$4: {
              if (arg.$tag === 2) {
                const _Variable = arg;
                const _array = _Variable._0;
                array = _array;
                break _L$4;
              } else {
                return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("split needs array variable"));
              }
            }
            const _bind$3 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, array, 2);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            _L$4: {
              _L$5: {
                if (name === "length") {
                  if (arg.$tag === 2) {
                  } else {
                    break _L$5;
                  }
                } else {
                  break _L$5;
                }
                break _L$4;
              }
              if ((name === "sub" || name === "gsub") && (i === 2 && !_M0FP211localreview3awk6lvalue(arg))) {
                return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("substitution target must be assignable"));
              }
              const _bind$3 = _M0FP211localreview3awk14validate__expr(arg, program$2, scope$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    } else {
      let f;
      const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk11FunctionDefE(program$2.functions, name);
      if (_bind$2 === undefined) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`undefined function ${name}`));
      } else {
        const _Some = _bind$2;
        const _f = _Some;
        f = _f;
      }
      if (args.length > f.params.length) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("too many function arguments"));
      }
      const _bind$3 = args.length;
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < _bind$3) {
          const arg = args[i];
          const kind = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(program$2.kinds, `${name}::${_M0MPC15array5Array2atGRPC16string10StringViewE(f.params, i)}`), 0);
          let actual;
          _L$3: {
            _L$4: {
              if (arg.$tag === 2) {
                const _Variable = arg;
                const _actual = _Variable._0;
                actual = _actual;
                break _L$4;
              } else {
                if (kind === 2) {
                  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("array parameter requires array variable"));
                }
                const _bind$4 = _M0FP211localreview3awk14validate__expr(arg, program$2, scope$2);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
              break _L$3;
            }
            const _bind$4 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, actual, kind);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          }
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
  }
}
function _M0FP211localreview3awk19validate__statement(stmt, program, scope) {
  let _tmp = stmt;
  let _tmp$2 = program;
  let _tmp$3 = scope;
  _L: while (true) {
    const stmt$2 = _tmp;
    const program$2 = _tmp$2;
    const scope$2 = _tmp$3;
    let v;
    _L$2: {
      let array;
      let keys;
      _L$3: {
        let array$2;
        let key;
        let s;
        _L$4: {
          let c;
          let a;
          let b;
          let s$2;
          _L$5: {
            let c$2;
            let s$3;
            _L$6: {
              let a$2;
              let c$3;
              let b$2;
              _L$7: {
                let x;
                _L$8: {
                  let redirect;
                  let xs;
                  _L$9: {
                    let xs$2;
                    _L$10: {
                      switch (stmt$2.$tag) {
                        case 0: {
                          const _Block = stmt$2;
                          const _xs = _Block._0;
                          xs$2 = _xs;
                          break _L$10;
                        }
                        case 1: {
                          const _Print = stmt$2;
                          const _xs$2 = _Print._0;
                          const _redirect = _Print._1;
                          redirect = _redirect;
                          xs = _xs$2;
                          break _L$9;
                        }
                        case 2: {
                          const _Printf = stmt$2;
                          const _xs$3 = _Printf._0;
                          const _redirect$2 = _Printf._1;
                          redirect = _redirect$2;
                          xs = _xs$3;
                          break _L$9;
                        }
                        case 3: {
                          const _Expression = stmt$2;
                          const _x = _Expression._0;
                          x = _x;
                          break _L$8;
                        }
                        case 4: {
                          const _If = stmt$2;
                          const _c = _If._0;
                          const _a = _If._1;
                          const _b = _If._2;
                          a$2 = _a;
                          c$3 = _c;
                          b$2 = _b;
                          break _L$7;
                        }
                        case 5: {
                          const _While = stmt$2;
                          const _c$2 = _While._0;
                          const _s = _While._1;
                          c$2 = _c$2;
                          s$3 = _s;
                          break _L$6;
                        }
                        case 6: {
                          const _Do = stmt$2;
                          const _s$2 = _Do._0;
                          const _c$3 = _Do._1;
                          c$2 = _c$3;
                          s$3 = _s$2;
                          break _L$6;
                        }
                        case 7: {
                          const _For = stmt$2;
                          const _a$2 = _For._0;
                          const _b$2 = _For._1;
                          const _c$4 = _For._2;
                          const _s$3 = _For._3;
                          c = _c$4;
                          a = _a$2;
                          b = _b$2;
                          s$2 = _s$3;
                          break _L$5;
                        }
                        case 8: {
                          const _ForIn = stmt$2;
                          const _key = _ForIn._0;
                          const _array = _ForIn._1;
                          const _s$4 = _ForIn._2;
                          array$2 = _array;
                          key = _key;
                          s = _s$4;
                          break _L$4;
                        }
                        case 9: {
                          const _Delete = stmt$2;
                          const _array$2 = _Delete._0;
                          const _keys = _Delete._1;
                          array = _array$2;
                          keys = _keys;
                          break _L$3;
                        }
                        case 14: {
                          const _Exit = stmt$2;
                          const _v = _Exit._0;
                          v = _v;
                          break _L$2;
                        }
                        case 15: {
                          const _Return = stmt$2;
                          const _v$2 = _Return._0;
                          v = _v$2;
                          break _L$2;
                        }
                        default: {
                          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                        }
                      }
                    }
                    const _bind$2 = xs$2.length;
                    let _tmp$4 = 0;
                    while (true) {
                      const _ = _tmp$4;
                      if (_ < _bind$2) {
                        const x$2 = xs$2[_];
                        const _bind$3 = _M0FP211localreview3awk19validate__statement(x$2, program$2, scope$2);
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _ok._0;
                        } else {
                          return _bind$3;
                        }
                        _tmp$4 = _ + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                  }
                  const _bind$2 = xs.length;
                  let _tmp$4 = 0;
                  while (true) {
                    const _ = _tmp$4;
                    if (_ < _bind$2) {
                      const x$2 = xs[_];
                      const _bind$3 = _M0FP211localreview3awk14validate__expr(x$2, program$2, scope$2);
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _ok._0;
                      } else {
                        return _bind$3;
                      }
                      _tmp$4 = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  let e;
                  _L$10: {
                    if (redirect === undefined) {
                      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                    } else {
                      const _Some = redirect;
                      const _x = _Some;
                      const _e = _x._1;
                      e = _e;
                      break _L$10;
                    }
                  }
                  return _M0FP211localreview3awk14validate__expr(e, program$2, scope$2);
                }
                return _M0FP211localreview3awk14validate__expr(x, program$2, scope$2);
              }
              const _bind$2 = _M0FP211localreview3awk14validate__expr(c$3, program$2, scope$2);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0FP211localreview3awk19validate__statement(a$2, program$2, scope$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              let b$3;
              _L$8: {
                if (b$2 === undefined) {
                  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
                } else {
                  const _Some = b$2;
                  const _b = _Some;
                  b$3 = _b;
                  break _L$8;
                }
              }
              _tmp = b$3;
              continue;
            }
            const _bind$2 = _M0FP211localreview3awk14validate__expr(c$2, program$2, scope$2);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            _tmp = s$3;
            continue;
          }
          const _bind$2 = [a, b, c];
          const _bind$3 = _bind$2.length;
          let _tmp$4 = 0;
          while (true) {
            const _ = _tmp$4;
            if (_ < _bind$3) {
              const v$2 = _bind$2[_];
              let v$3;
              _L$6: {
                _L$7: {
                  if (v$2 === undefined) {
                  } else {
                    const _Some = v$2;
                    const _v = _Some;
                    v$3 = _v;
                    break _L$7;
                  }
                  break _L$6;
                }
                const _bind$4 = _M0FP211localreview3awk14validate__expr(v$3, program$2, scope$2);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
              _tmp$4 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp = s$2;
          continue;
        }
        const _bind$2 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, key, 1);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, array$2, 2);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = s;
        continue;
      }
      const _bind$2 = _M0FP211localreview3awk10mark__kind(program$2, scope$2, array, 2);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      let keys$2;
      _L$4: {
        if (keys.$tag === 1) {
          const _Some = keys;
          const _keys = _Some._0;
          keys$2 = _keys;
          break _L$4;
        } else {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
        }
      }
      const _bind$3 = keys$2.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$3) {
          const k = keys$2[_];
          const _bind$4 = _M0FP211localreview3awk14validate__expr(k, program$2, scope$2);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _ok._0;
          } else {
            return _bind$4;
          }
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
    let v$2;
    _L$3: {
      if (v === undefined) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      } else {
        const _Some = v;
        const _v = _Some;
        v$2 = _v;
        break _L$3;
      }
    }
    return _M0FP211localreview3awk14validate__expr(v$2, program$2, scope$2);
  }
}
function _M0FP211localreview3awk17validate__program(program) {
  if (_M0MPB3Map6lengthGsRP211localreview3awk5ValueE(program.functions) > 128) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("function count limit"));
  }
  const _bind$2 = 0;
  const _bind$3 = 128;
  let _tmp = _bind$2;
  while (true) {
    const _ = _tmp;
    if (_ <= _bind$3) {
      const before = _M0MPB3Map4copyGsiE(program.kinds);
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(program.functions);
      while (true) {
        let name;
        let f;
        _L: {
          const _bind$4 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some = _bind$4;
            const _x = _Some;
            const _name = _x._0;
            const _f = _x._1;
            name = _name;
            f = _f;
            break _L;
          }
        }
        const _bind$4 = _M0FP211localreview3awk19validate__statement(f.body, program, name);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        continue;
      }
      const _bind$4 = program.rules;
      const _bind$5 = _bind$4.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$5) {
          const rule = _bind$4[_$2];
          let e;
          _L: {
            _L$2: {
              const _bind$6 = rule.condition;
              if (_bind$6 === undefined) {
              } else {
                const _Some = _bind$6;
                const _e = _Some;
                e = _e;
                break _L$2;
              }
              break _L;
            }
            const _bind$6 = _M0FP211localreview3awk14validate__expr(e, program, "");
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
          let e$2;
          _L$2: {
            _L$3: {
              const _bind$6 = rule.until;
              if (_bind$6 === undefined) {
              } else {
                const _Some = _bind$6;
                const _e = _Some;
                e$2 = _e;
                break _L$3;
              }
              break _L$2;
            }
            const _bind$6 = _M0FP211localreview3awk14validate__expr(e$2, program, "");
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
          const _bind$6 = _M0FP211localreview3awk19validate__statement(rule.body, program, "");
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0IPB3MapPB2Eq5equalGsiE(before, program.kinds)) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("function type inference limit"));
}
function _M0MP211localreview3awk6Cursor4peek(self) {
  return self.pos < self.tokens.length ? (_M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).regexp ? "<regex>" : _M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).quoted ? "<string>" : _M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).text) : "<eof>";
}
function _M0MP211localreview3awk6Cursor3eat(self, text) {
  if (_M0MP211localreview3awk6Cursor4peek(self) === text) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
  }
}
function _M0MP211localreview3awk6Cursor8newlines(self) {
  while (true) {
    if (_M0MP211localreview3awk6Cursor3eat(self, "\n")) {
      continue;
    } else {
      return;
    }
  }
}
function _M0MP211localreview3awk6Cursor14end__statement(self) {
  if (_M0MP211localreview3awk6Cursor3eat(self, ";") || _M0MP211localreview3awk6Cursor3eat(self, "\n")) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MP211localreview3awk6Cursor8newlines(self));
  } else {
    if (!_M0MPC15array5Array8containsGsE(["}", "<eof>", "else"], _M0MP211localreview3awk6Cursor4peek(self))) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("expected statement separator"));
    } else {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
  }
}
function _M0FP211localreview3awk8priority(op) {
  switch (op) {
    case "=": {
      return 1;
    }
    case "+=": {
      return 1;
    }
    case "-=": {
      return 1;
    }
    case "*=": {
      return 1;
    }
    case "/=": {
      return 1;
    }
    case "%=": {
      return 1;
    }
    case "^=": {
      return 1;
    }
    case "?": {
      return 2;
    }
    case "||": {
      return 3;
    }
    case "&&": {
      return 4;
    }
    case "in": {
      return 5;
    }
    case "~": {
      return 6;
    }
    case "!~": {
      return 6;
    }
    case "==": {
      return 7;
    }
    case "!=": {
      return 7;
    }
    case "<": {
      return 7;
    }
    case ">": {
      return 7;
    }
    case "<=": {
      return 7;
    }
    case ">=": {
      return 7;
    }
    case "+": {
      return 9;
    }
    case "-": {
      return 9;
    }
    case "*": {
      return 10;
    }
    case "/": {
      return 10;
    }
    case "%": {
      return 10;
    }
    case "^": {
      return 12;
    }
    case "++": {
      return 13;
    }
    case "--": {
      return 13;
    }
    default: {
      return 0;
    }
  }
}
function _M0MP211localreview3awk6Cursor4need(self, text) {
  if (!_M0MP211localreview3awk6Cursor3eat(self, text)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`expected ${text}, got ${_M0MP211localreview3awk6Cursor4peek(self)}`));
  } else {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
}
function _M0MP211localreview3awk6Cursor4take(self) {
  if (self.pos >= self.tokens.length) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unexpected end"));
  }
  const t = _M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos);
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGRP211localreview3awk5TokenRP211localreview3awk10ParseErrorE2Ok(t);
}
function _M0MP211localreview3awk6Cursor18expression_2einner(self, min, depth, printing) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("expression depth"));
  }
  const _bind$2 = _M0MP211localreview3awk6Cursor4take(self);
  let t;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    t = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp;
  if (t.regexp) {
    const _bind$3 = _M0FP211localreview3awk14compile__regex(t.text);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    _tmp = new _M0DTP211localreview3awk4Expr12RegexLiteral(t.text);
  } else {
    if (t.quoted) {
      _tmp = new _M0DTP211localreview3awk4Expr7Literal(new _M0DTP211localreview3awk5Value4Text(t.text));
    } else {
      if (t.text === "(") {
        const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
        let first;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          first = _ok._0;
        } else {
          return _bind$3;
        }
        const entries = [first];
        while (true) {
          if (_M0MP211localreview3awk6Cursor3eat(self, ",")) {
            const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
            let _tmp$2;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp$2 = _ok._0;
            } else {
              return _bind$4;
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(entries, _tmp$2);
            continue;
          } else {
            break;
          }
        }
        const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, ")");
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        _tmp = entries.length === 1 ? first : new _M0DTP211localreview3awk4Expr5Tuple(entries);
      } else {
        if (t.text === "getline") {
          const _bind$3 = _M0MP211localreview3awk6Cursor15getline__target(self, depth + 1 | 0);
          let target;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            target = _ok._0;
          } else {
            return _bind$3;
          }
          let source;
          if (_M0MP211localreview3awk6Cursor3eat(self, "<")) {
            const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 14, depth + 1 | 0, false);
            let _tmp$2;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp$2 = _ok._0;
            } else {
              return _bind$4;
            }
            source = { _0: false, _1: _tmp$2 };
          } else {
            source = undefined;
          }
          _tmp = new _M0DTP211localreview3awk4Expr7Getline(target, source);
        } else {
          if (t.text === "@") {
            const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 14, depth + 1 | 0, false);
            let _tmp$2;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$2 = _ok._0;
            } else {
              return _bind$3;
            }
            _tmp = new _M0DTP211localreview3awk4Expr10NamedField(_tmp$2);
          } else {
            if (t.text === "$") {
              const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 14, depth + 1 | 0, false);
              let _tmp$2;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$2 = _ok._0;
              } else {
                return _bind$3;
              }
              _tmp = new _M0DTP211localreview3awk4Expr5Field(_tmp$2);
            } else {
              if (_M0MPC15array5Array8containsGsE(["+", "-", "!"], t.text)) {
                const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 11, depth + 1 | 0, false);
                let _tmp$2;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _tmp$2 = _ok._0;
                } else {
                  return _bind$3;
                }
                _tmp = new _M0DTP211localreview3awk4Expr5Unary(t.text, _tmp$2);
              } else {
                if (t.text === "++" || t.text === "--") {
                  const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 13, depth + 1 | 0, false);
                  let target;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    target = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  if (!_M0FP211localreview3awk6lvalue(target)) {
                    return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("increment target"));
                  }
                  _tmp = new _M0DTP211localreview3awk4Expr9Increment(target, t.text === "++" ? 1 : -1, true);
                } else {
                  if (_M0FP211localreview3awk10identifier(t.text) && !_M0FP211localreview3awk8reserved(t.text)) {
                    if (_M0FP211localreview3awk13builtin__name(t.text) && (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MP211localreview3awk6Cursor4peek(self), "(") && (_M0IP016_24default__implPB2Eq10not__equalGsE(t.text, "length") || _M0MP211localreview3awk6Cursor4peek(self) === "["))) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("builtin requires parentheses"));
                    }
                    if (_M0MP211localreview3awk6Cursor3eat(self, "[")) {
                      const _bind$3 = _M0MP211localreview3awk6Cursor9arguments(self, "]", depth + 1 | 0);
                      let keys;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        keys = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(keys)) {
                        return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("empty array subscript"));
                      }
                      _tmp = new _M0DTP211localreview3awk4Expr7Element(t.text, keys);
                    } else {
                      if (_M0MP211localreview3awk6Cursor4peek(self) === "(" && (_M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).adjacent || _M0FP211localreview3awk13builtin__name(t.text))) {
                        self.pos = self.pos + 1 | 0;
                        const _bind$3 = _M0MP211localreview3awk6Cursor9arguments(self, ")", depth + 1 | 0);
                        let _tmp$2;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _tmp$2 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        _tmp = new _M0DTP211localreview3awk4Expr4Call(t.text, _tmp$2);
                      } else {
                        _tmp = t.text === "length" ? new _M0DTP211localreview3awk4Expr4Call("length", []) : new _M0DTP211localreview3awk4Expr8Variable(t.text);
                      }
                    }
                  } else {
                    const cs = _M0MPC16string6String9to__array(t.text);
                    if (_M0MPC15array5Array9is__emptyGcE(cs) || _M0FP211localreview3awk11number__end(cs, 0, false) !== cs.length) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unexpected token ${t.text}`));
                    }
                    let _tmp$2;
                    let _try_err;
                    _L: {
                      _L$2: {
                        const _bind$3 = t.text;
                        const _bind$4 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _tmp$2 = _ok._0;
                        } else {
                          const _err = _bind$4;
                          _try_err = _err._0;
                          break _L$2;
                        }
                        break _L;
                      }
                      _L$3: {
                        _L$4: {
                          if (_try_err.$tag === 2) {
                            const _Failure = _try_err;
                            const _x = _Failure._0;
                            if (_x === "value out of range") {
                              _tmp$2 = 1 / 0;
                            } else {
                              break _L$4;
                            }
                          } else {
                            break _L$4;
                          }
                          break _L$3;
                        }
                        return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid number"));
                      }
                    }
                    _tmp = new _M0DTP211localreview3awk4Expr7Literal(_M0FP211localreview3awk6finite(_tmp$2));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const left = new _M0TPB8MutLocalGRP211localreview3awk4ExprE(_tmp);
  while (true) {
    const op = _M0MP211localreview3awk6Cursor4peek(self);
    if (printing && _M0MPC15array5Array8containsGsE([">", ">>", "|"], op)) {
      break;
    }
    if (op === "|" && min <= 1) {
      self.pos = self.pos + 1 | 0;
      const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, "getline");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP211localreview3awk6Cursor15getline__target(self, depth + 1 | 0);
      let target;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        target = _ok._0;
      } else {
        return _bind$4;
      }
      left.val = new _M0DTP211localreview3awk4Expr7Getline(target, { _0: true, _1: left.val });
      continue;
    }
    const p = new _M0TPB8MutLocalGiE(_M0FP211localreview3awk8priority(op));
    const concat = new _M0TPB8MutLocalGbE(false);
    if (p.val === 0) {
      _L: {
        _L$2: {
          if (op === "<string>") {
            break _L$2;
          } else {
            if (op === "(") {
              break _L$2;
            } else {
              if (op === "$") {
                break _L$2;
              } else {
                if (op === "@") {
                  break _L$2;
                } else {
                  if (op === "getline") {
                    break _L$2;
                  } else {
                    _L$3: {
                      if (_M0FP211localreview3awk10identifier(op)) {
                        if (!_M0FP211localreview3awk8reserved(op)) {
                          break _L$2;
                        } else {
                          break _L$3;
                        }
                      } else {
                        break _L$3;
                      }
                    }
                    let c;
                    _L$4: {
                      _L$5: {
                        const _bind$3 = _M0MPC15array5Array3getGcE(_M0MPC16string6String9to__array(op), 0);
                        if (_bind$3 === -1) {
                        } else {
                          const _Some = _bind$3;
                          const _c = _Some;
                          c = _c;
                          break _L$5;
                        }
                        break _L$4;
                      }
                      if (_M0FP211localreview3awk5digit(c)) {
                        break _L$2;
                      }
                    }
                  }
                }
              }
            }
          }
          break _L;
        }
        p.val = 8;
        concat.val = true;
      }
    }
    if (p.val === 0 || p.val < min) {
      break;
    }
    if (!concat.val) {
      self.pos = self.pos + 1 | 0;
    }
    if (op === "++" || op === "--") {
      if (!_M0FP211localreview3awk6lvalue(left.val)) {
        return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("increment target"));
      }
      left.val = new _M0DTP211localreview3awk4Expr9Increment(left.val, op === "++" ? 1 : -1, false);
      continue;
    }
    if (op === "?") {
      const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
      let yes;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        yes = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, ":");
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      const _bind$5 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 2, depth + 1 | 0, false);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      left.val = new _M0DTP211localreview3awk4Expr11Conditional(left.val, yes, _tmp$2);
      continue;
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, p.val === 1 || op === "^" ? p.val : p.val + 1 | 0, depth + 1 | 0, printing);
    let right;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      right = _ok._0;
    } else {
      return _bind$3;
    }
    if (p.val === 1) {
      if (!_M0FP211localreview3awk6lvalue(left.val)) {
        return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("assignment target"));
      }
      left.val = new _M0DTP211localreview3awk4Expr6Assign(op, left.val, right);
    } else {
      left.val = new _M0DTP211localreview3awk4Expr6Binary(concat.val ? "concat" : op, left.val, right);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok(left.val);
}
function _M0MP211localreview3awk6Cursor9arguments(self, close, depth) {
  const args = [];
  if (!_M0MP211localreview3awk6Cursor3eat(self, close)) {
    while (true) {
      const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth, false);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, _tmp);
      if (!_M0MP211localreview3awk6Cursor3eat(self, ",")) {
        break;
      }
      continue;
    }
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, close);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok(args);
}
function _M0MP211localreview3awk6Cursor15getline__target(self, depth) {
  const next = _M0MP211localreview3awk6Cursor4peek(self);
  let _tmp;
  if (next === "$" || _M0FP211localreview3awk10identifier(next) && (!_M0FP211localreview3awk8reserved(next) && !_M0FP211localreview3awk13builtin__name(next))) {
    const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 14, depth, false);
    let target;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      target = _ok._0;
    } else {
      return _bind$2;
    }
    if (!_M0FP211localreview3awk6lvalue(target)) {
      return new _M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("getline target must be assignable"));
    }
    _tmp = target;
  } else {
    _tmp = undefined;
  }
  return new _M0DTPC16result6ResultGORP211localreview3awk4ExprRP211localreview3awk10ParseErrorE2Ok(_tmp);
}
function _M0MP211localreview3awk6Cursor10separators(self) {
  while (true) {
    if (_M0MP211localreview3awk6Cursor3eat(self, ";") || _M0MP211localreview3awk6Cursor3eat(self, "\n")) {
      continue;
    } else {
      return;
    }
  }
}
function _M0MP211localreview3awk6Cursor9statement(self, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("statement depth"));
  }
  _M0MP211localreview3awk6Cursor8newlines(self);
  if (_M0MP211localreview3awk6Cursor3eat(self, ";")) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5Block([]));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "{")) {
    const body = [];
    _M0MP211localreview3awk6Cursor10separators(self);
    while (true) {
      if (!_M0MP211localreview3awk6Cursor3eat(self, "}")) {
        const _bind$2 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(body, _tmp);
        _M0MP211localreview3awk6Cursor10separators(self);
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5Block(body));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "if")) {
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      condition = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let yes;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      yes = _ok._0;
    } else {
      return _bind$5;
    }
    _M0MP211localreview3awk6Cursor8newlines(self);
    let no;
    if (_M0MP211localreview3awk6Cursor3eat(self, "else")) {
      const _bind$6 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        no = _ok._0;
      } else {
        return _bind$6;
      }
    } else {
      no = undefined;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement2If(condition, yes, no));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "while")) {
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      condition = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let _tmp;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp = _ok._0;
    } else {
      return _bind$5;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5While(condition, _tmp));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "do")) {
    const _bind$2 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let body;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      body = _ok._0;
    } else {
      return _bind$2;
    }
    _M0MP211localreview3awk6Cursor8newlines(self);
    const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, "while");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      condition = _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _ok._0;
    } else {
      return _bind$6;
    }
    const _bind$7 = _M0MP211localreview3awk6Cursor14end__statement(self);
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement2Do(body, condition));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "for")) {
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    let first;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ";") {
      first = undefined;
    } else {
      const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        first = _ok._0;
      } else {
        return _bind$3;
      }
    }
    let key;
    let array;
    _L: {
      _L$2: {
        if (first === undefined) {
        } else {
          const _Some = first;
          const _x = _Some;
          if (_x.$tag === 8) {
            const _Binary = _x;
            const _x$2 = _Binary._0;
            if (_x$2 === "in") {
              const _x$3 = _Binary._1;
              if (_x$3.$tag === 2) {
                const _Variable = _x$3;
                const _key = _Variable._0;
                const _x$4 = _Binary._2;
                if (_x$4.$tag === 2) {
                  const _Variable$2 = _x$4;
                  const _array = _Variable$2._0;
                  key = _key;
                  array = _array;
                  break _L$2;
                }
              }
            }
          }
        }
        break _L;
      }
      const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ")");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
      let _tmp;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp = _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5ForIn(key, array, _tmp));
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ";");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    let condition;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ";") {
      condition = undefined;
    } else {
      const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        condition = _ok._0;
      } else {
        return _bind$4;
      }
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor4need(self, ";");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    let step;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ")") {
      step = undefined;
    } else {
      const _bind$5 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        step = _ok._0;
      } else {
        return _bind$5;
      }
    }
    const _bind$5 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let _tmp;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp = _ok._0;
    } else {
      return _bind$6;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement3For(first, condition, step, _tmp));
  }
  let result;
  if (_M0MP211localreview3awk6Cursor4peek(self) === "print" || _M0MP211localreview3awk6Cursor4peek(self) === "printf") {
    const formatted = _M0MP211localreview3awk6Cursor3eat(self, "printf");
    if (!formatted) {
      const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, "print");
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
    }
    const values = [];
    if (!_M0MPC15array5Array8containsGsE([";", "\n", "}", "<eof>", "else", ">", ">>", "|"], _M0MP211localreview3awk6Cursor4peek(self))) {
      let e;
      _L: {
        _L$2: {
          let xs;
          _L$3: {
            const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, true);
            let _bind$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _bind$3 = _ok._0;
            } else {
              return _bind$2;
            }
            if (_bind$3.$tag === 6) {
              const _Tuple = _bind$3;
              const _xs = _Tuple._0;
              xs = _xs;
              break _L$3;
            } else {
              e = _bind$3;
              break _L$2;
            }
          }
          const _bind$2 = xs.length;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const x = xs[_];
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, x);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, e);
      }
      while (true) {
        if (_M0MP211localreview3awk6Cursor3eat(self, ",")) {
          const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, true);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, _tmp);
          continue;
        } else {
          break;
        }
      }
    }
    let redirect;
    if (_M0MPC15array5Array8containsGsE([">", ">>", "|"], _M0MP211localreview3awk6Cursor4peek(self))) {
      const _bind$2 = _M0MP211localreview3awk6Cursor4take(self);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const mode = _tmp.text;
      const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      redirect = { _0: mode, _1: _tmp$2 };
    } else {
      redirect = undefined;
    }
    result = formatted ? new _M0DTP211localreview3awk9Statement6Printf(values, redirect) : new _M0DTP211localreview3awk9Statement5Print(values, redirect);
  } else {
    if (_M0MP211localreview3awk6Cursor3eat(self, "break")) {
      result = _M0DTP211localreview3awk9Statement5Break__;
    } else {
      if (_M0MP211localreview3awk6Cursor3eat(self, "continue")) {
        result = _M0DTP211localreview3awk9Statement8Continue__;
      } else {
        if (_M0MP211localreview3awk6Cursor3eat(self, "nextfile")) {
          result = _M0DTP211localreview3awk9Statement8NextFile__;
        } else {
          if (_M0MP211localreview3awk6Cursor3eat(self, "next")) {
            result = _M0DTP211localreview3awk9Statement4Next__;
          } else {
            if (_M0MP211localreview3awk6Cursor3eat(self, "exit")) {
              let _tmp;
              if (_M0MPC15array5Array8containsGsE([";", "\n", "}", "<eof>", "else"], _M0MP211localreview3awk6Cursor4peek(self))) {
                _tmp = undefined;
              } else {
                const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp = _ok._0;
                } else {
                  return _bind$2;
                }
              }
              result = new _M0DTP211localreview3awk9Statement4Exit(_tmp);
            } else {
              if (_M0MP211localreview3awk6Cursor3eat(self, "return")) {
                let _tmp;
                if (_M0MPC15array5Array8containsGsE([";", "\n", "}", "<eof>"], _M0MP211localreview3awk6Cursor4peek(self))) {
                  _tmp = undefined;
                } else {
                  const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp = _ok._0;
                  } else {
                    return _bind$2;
                  }
                }
                result = new _M0DTP211localreview3awk9Statement6Return(_tmp);
              } else {
                if (_M0MP211localreview3awk6Cursor3eat(self, "delete")) {
                  const _bind$2 = _M0MP211localreview3awk6Cursor4take(self);
                  let name;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    name = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  if (name.quoted || !_M0FP211localreview3awk10identifier(name.text)) {
                    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("array name"));
                  }
                  let keys;
                  if (_M0MP211localreview3awk6Cursor3eat(self, "[")) {
                    const _bind$3 = _M0MP211localreview3awk6Cursor9arguments(self, "]", 0);
                    let _tmp;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _tmp = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    keys = new _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some(_tmp);
                  } else {
                    keys = _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None__;
                  }
                  result = new _M0DTP211localreview3awk9Statement6Delete(name.text, keys);
                } else {
                  const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
                  let _tmp;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  result = new _M0DTP211localreview3awk9Statement10Expression(_tmp);
                }
              }
            }
          }
        }
      }
    }
  }
  const _bind$2 = _M0MP211localreview3awk6Cursor14end__statement(self);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(result);
}
function _M0FP211localreview3awk5parse(program) {
  const _bind$2 = _M0FP211localreview3awk3lex(program, true);
  let c;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    c = _ok._0;
  } else {
    return _bind$2;
  }
  const rules = [];
  const _bind$3 = [];
  const functions = _M0MPB3Map3MapGsRP211localreview3awk11FunctionDefE(new _M0TPB9ArrayViewGUsRP211localreview3awk11FunctionDefEE(_bind$3, 0, 0), undefined);
  _M0MP211localreview3awk6Cursor10separators(c);
  while (true) {
    if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MP211localreview3awk6Cursor4peek(c), "<eof>")) {
      if (_M0MP211localreview3awk6Cursor3eat(c, "function") || _M0MP211localreview3awk6Cursor3eat(c, "func")) {
        const _bind$4 = _M0MP211localreview3awk6Cursor4take(c);
        let name;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          name = _ok._0;
        } else {
          return _bind$4;
        }
        if (name.quoted || (name.regexp || (!_M0FP211localreview3awk10identifier(name.text) || (_M0FP211localreview3awk8reserved(name.text) || (_M0FP211localreview3awk13builtin__name(name.text) || _M0MPB3Map8containsGsRP211localreview3awk11FunctionDefE(functions, name.text)))))) {
          return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid or duplicate function name"));
        }
        const _bind$5 = _M0MP211localreview3awk6Cursor4need(c, "(");
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
        const params = [];
        if (!_M0MP211localreview3awk6Cursor3eat(c, ")")) {
          while (true) {
            const _bind$6 = _M0MP211localreview3awk6Cursor4take(c);
            let token;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              token = _ok._0;
            } else {
              return _bind$6;
            }
            if (token.quoted || (token.regexp || (!_M0FP211localreview3awk10identifier(token.text) || (_M0FP211localreview3awk8reserved(token.text) || (_M0FP211localreview3awk13builtin__name(token.text) || (_M0FP211localreview3awk17special__variable(token.text) || _M0MPC15array5Array8containsGsE(params, token.text))))))) {
              return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid or duplicate parameter"));
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(params, token.text);
            if (params.length > 128) {
              return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("function parameter limit"));
            }
            if (!_M0MP211localreview3awk6Cursor3eat(c, ",")) {
              break;
            }
            continue;
          }
          const _bind$6 = _M0MP211localreview3awk6Cursor4need(c, ")");
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
        }
        _M0MP211localreview3awk6Cursor8newlines(c);
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MP211localreview3awk6Cursor4peek(c), "{")) {
          return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("function requires a block"));
        }
        const _bind$6 = _M0MP211localreview3awk6Cursor9statement(c, 0);
        let body;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          body = _ok._0;
        } else {
          return _bind$6;
        }
        const _bind$7 = _M0FP211localreview3awk17validate__control(body, 0, "function");
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          return _bind$7;
        }
        _M0MPB3Map3setGsRP211localreview3awk11FunctionDefE(functions, name.text, new _M0TP211localreview3awk11FunctionDef(params, body));
        _M0MP211localreview3awk6Cursor10separators(c);
        continue;
      }
      const phase = _M0MP211localreview3awk6Cursor3eat(c, "BEGIN") ? "BEGIN" : _M0MP211localreview3awk6Cursor3eat(c, "END") ? "END" : "record";
      let condition;
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase, "record") || _M0MP211localreview3awk6Cursor4peek(c) === "{") {
        condition = undefined;
      } else {
        const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(c, 1, 0, false);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          condition = _ok._0;
        } else {
          return _bind$4;
        }
      }
      let until;
      _L: {
        _L$2: {
          if (condition === undefined) {
            break _L$2;
          } else {
            if (_M0MP211localreview3awk6Cursor3eat(c, ",")) {
              const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(c, 1, 0, false);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                until = _ok._0;
              } else {
                return _bind$4;
              }
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        until = undefined;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase, "record")) {
        _M0MP211localreview3awk6Cursor8newlines(c);
      }
      let body;
      if (_M0MP211localreview3awk6Cursor4peek(c) === "{") {
        const _bind$4 = _M0MP211localreview3awk6Cursor9statement(c, 0);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          body = _ok._0;
        } else {
          return _bind$4;
        }
      } else {
        _L$2: {
          _L$3: {
            if (phase === "record") {
              if (condition === undefined) {
                break _L$3;
              } else {
                const _bind$4 = _M0MP211localreview3awk6Cursor14end__statement(c);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                body = new _M0DTP211localreview3awk9Statement5Print([], undefined);
              }
            } else {
              break _L$3;
            }
            break _L$2;
          }
          return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("expected rule action"));
        }
      }
      const _bind$4 = _M0FP211localreview3awk17validate__control(body, 0, phase);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(rules, new _M0TP211localreview3awk4Rule(phase, condition, until, body, false));
      _M0MP211localreview3awk6Cursor10separators(c);
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = [];
  const program$2 = new _M0TP211localreview3awk7Program(rules, functions, _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined));
  const _bind$5 = _M0FP211localreview3awk17validate__program(program$2);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk7ProgramRP211localreview3awk10ParseErrorE2Ok(program$2);
}
function _M0MP211localreview3awk5State16assign__argument(self, name, text) {
  if (!_M0FP211localreview3awk10identifier(name) || (_M0FP211localreview3awk8reserved(name) || (_M0FP211localreview3awk13builtin__name(name) || _M0MPB3Map8containsGsRP211localreview3awk11FunctionDefE(self.functions, name)))) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid assignment name"));
  }
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("assignment value limit"));
  }
  const cs = _M0MPC16string6String9to__array(text);
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const i = _M0MPC13ref3Ref3RefGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      i.val = i.val + 1 | 0;
      if (c === 92) {
        const _bind$2 = _M0FP211localreview3awk11awk__escape(cs, i);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _tmp);
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(out, c);
      }
      continue;
    } else {
      break;
    }
  }
  return _M0MP211localreview3awk5State13write_2einner(self, new _M0DTP211localreview3awk4Slot12VariableSlot(name), _M0FP211localreview3awk12input__value(_M0MPB13StringBuilder10to__string(out)), true);
}
function _M0MP211localreview3awk7Session6assign(self, name, text) {
  return _M0MP211localreview3awk5State16assign__argument(self.state, name, text);
}
function _M0FP211localreview3awk20new__session_2einner(program, separator, input_mode, output_mode, variables, environment, arguments_, step_limit, clock_seconds, io, input, output_sink) {
  if (step_limit < 1 || step_limit > 1000000000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("step limit 1..1000000000 required"));
  }
  const _bind$2 = _M0FP211localreview3awk5parse(program);
  let parsed;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    parsed = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = [{ _0: "NR", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "FNR", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "NF", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "FS", _1: new _M0DTP211localreview3awk5Value4Text(separator) }, { _0: "OFS", _1: new _M0DTP211localreview3awk5Value4Text(" ") }, { _0: "RS", _1: new _M0DTP211localreview3awk5Value4Text("\n") }, { _0: "RT", _1: new _M0DTP211localreview3awk5Value4Text("") }, { _0: "ORS", _1: new _M0DTP211localreview3awk5Value4Text("\n") }, { _0: "SUBSEP", _1: new _M0DTP211localreview3awk5Value4Text("\u001c") }, { _0: "OFMT", _1: new _M0DTP211localreview3awk5Value4Text("%.6g") }, { _0: "CONVFMT", _1: new _M0DTP211localreview3awk5Value4Text("%.6g") }, { _0: "RSTART", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "RLENGTH", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "FILENAME", _1: new _M0DTP211localreview3awk5Value4Text("") }, { _0: "ARGC", _1: new _M0DTP211localreview3awk5Value6Number(arguments_.length + 0) }];
  const _bind$4 = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$3, 0, 15), undefined);
  const _bind$5 = [];
  const _bind$6 = _M0MPB3Map3MapGsRPB3MapGsRP211localreview3awk5ValueEE(new _M0TPB9ArrayViewGUsRPB3MapGsRP211localreview3awk5ValueEEE(_bind$5, 0, 0), undefined);
  const _bind$7 = [];
  const _bind$8 = false;
  const _bind$9 = true;
  const _bind$10 = undefined;
  const _bind$11 = undefined;
  const _bind$12 = _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
  const _bind$13 = "";
  const _bind$14 = false;
  const _bind$15 = [];
  const _bind$16 = 0;
  const _bind$17 = 0;
  const _bind$18 = 0;
  const _bind$19 = 0;
  const _bind$20 = [];
  const _bind$21 = _M0MPB3Map3MapGsRP211localreview3awk5RegexE(new _M0TPB9ArrayViewGUsRP211localreview3awk5RegexEE(_bind$20, 0, 0), undefined);
  const _bind$22 = parsed.functions;
  const _bind$23 = parsed.kinds;
  const _bind$24 = [];
  const _bind$25 = 1n;
  const _bind$26 = 1;
  const _bind$27 = [];
  const _bind$28 = _M0MPB3Map3MapGsRP211localreview3awk9MainInputE(new _M0TPB9ArrayViewGUsRP211localreview3awk9MainInputEE(_bind$27, 0, 0), undefined);
  const _bind$29 = [];
  const _bind$30 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$29, 0, 0), undefined);
  const _bind$31 = false;
  const _bind$32 = _M0MPC16option6Option3mapGWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyRP211localreview3awk9MainInputE(input, (reader) => new _M0TP211localreview3awk9MainInput(reader, [], 0, false, false, undefined, 1, false, 0, 10, undefined, false, false));
  const st = new _M0TP211localreview3awk5State(_bind$4, _bind$6, _bind$7, _bind$8, _bind$9, separator, _bind$10, _bind$11, _bind$12, _bind$13, _bind$14, _bind$15, _bind$16, _bind$17, step_limit, _bind$18, _bind$19, _bind$21, _bind$22, _bind$23, _bind$24, _bind$25, _bind$26, clock_seconds, _bind$32, io, _bind$28, _bind$30, _bind$31, output_sink);
  const _it = _M0MPB3Map5iter2GsiE(parsed.kinds);
  while (true) {
    let name;
    let kind;
    _L: {
      const _bind$33 = _M0MPB5Iter24nextGsiE(_it);
      if (_bind$33 === undefined) {
        break;
      } else {
        const _Some = _bind$33;
        const _x = _Some;
        const _name = _x._0;
        const _kind = _x._1;
        name = _name;
        kind = _kind;
        break _L;
      }
    }
    let _tmp;
    if (kind === 2) {
      const _bind$33 = "::";
      _tmp = !_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$33, 0, _bind$33.length));
    } else {
      _tmp = false;
    }
    if (_tmp) {
      const _tmp$2 = st.arrays;
      const _bind$33 = [];
      _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(_tmp$2, name, _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$33, 0, 0), undefined));
    }
    continue;
  }
  const _tmp = st.arrays;
  const _bind$33 = [];
  _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(_tmp, "ARGV", _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$33, 0, 0), undefined));
  const _tmp$2 = st.arrays;
  const _bind$34 = [];
  _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(_tmp$2, "ENVIRON", _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$34, 0, 0), undefined));
  const _tmp$3 = st.arrays;
  const _bind$35 = [];
  _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(_tmp$3, "FIELDS", _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$35, 0, 0), undefined));
  const _bind$36 = _M0MP211localreview3awk5State13write_2einner(st, new _M0DTP211localreview3awk4Slot12VariableSlot("INPUTMODE"), new _M0DTP211localreview3awk5Value4Text(input_mode), false);
  if (_bind$36.$tag === 1) {
    const _ok = _bind$36;
    _ok._0;
  } else {
    return _bind$36;
  }
  const _bind$37 = _M0MP211localreview3awk5State13write_2einner(st, new _M0DTP211localreview3awk4Slot12VariableSlot("OUTPUTMODE"), new _M0DTP211localreview3awk5Value4Text(output_mode), false);
  if (_bind$37.$tag === 1) {
    const _ok = _bind$37;
    _ok._0;
  } else {
    return _bind$37;
  }
  const _bind$38 = arguments_.length;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < _bind$38) {
      const value = arguments_[i];
      const _bind$39 = _M0MP211localreview3awk5State12put__element(st, "ARGV", _M0MPC13int3Int18to__string_2einner(i, 10), _M0FP211localreview3awk12input__value(value));
      if (_bind$39.$tag === 1) {
        const _ok = _bind$39;
        _ok._0;
      } else {
        return _bind$39;
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(environment);
  while (true) {
    let key;
    let value;
    _L: {
      const _bind$39 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
      if (_bind$39 === undefined) {
        break;
      } else {
        const _Some = _bind$39;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L;
      }
    }
    const _bind$39 = _M0MP211localreview3awk5State12put__element(st, "ENVIRON", key, _M0FP211localreview3awk12input__value(value));
    if (_bind$39.$tag === 1) {
      const _ok = _bind$39;
      _ok._0;
    } else {
      return _bind$39;
    }
    continue;
  }
  const session = new _M0TP211localreview3awk7Session(st, parsed.rules, 0, 0, false, false, true);
  const _it$3 = _M0MPB3Map5iter2GsRPB4JsonE(variables);
  while (true) {
    let key;
    let value;
    _L: {
      const _bind$39 = _M0MPB5Iter24nextGsRPB4JsonE(_it$3);
      if (_bind$39 === undefined) {
        break;
      } else {
        const _Some = _bind$39;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L;
      }
    }
    const _bind$39 = _M0MP211localreview3awk7Session6assign(session, key, value);
    if (_bind$39.$tag === 1) {
      const _ok = _bind$39;
      _ok._0;
    } else {
      return _bind$39;
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk7SessionRP211localreview3awk10ParseErrorE2Ok(session);
}
function _M0FP211localreview3awk12new__session(program, separator$46$opt, input_mode$46$opt, output_mode$46$opt, variables$46$opt, environment$46$opt, arguments$46$opt, step_limit$46$opt, clock_seconds$46$opt, io$46$opt, input$46$opt, output_sink$46$opt) {
  let separator;
  if (separator$46$opt === undefined) {
    separator = " ";
  } else {
    const _Some = separator$46$opt;
    separator = _Some;
  }
  let input_mode;
  if (input_mode$46$opt === undefined) {
    input_mode = "";
  } else {
    const _Some = input_mode$46$opt;
    input_mode = _Some;
  }
  let output_mode;
  if (output_mode$46$opt === undefined) {
    output_mode = "";
  } else {
    const _Some = output_mode$46$opt;
    output_mode = _Some;
  }
  let variables;
  if (variables$46$opt === undefined) {
    const _bind$2 = [];
    variables = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  } else {
    const _Some = variables$46$opt;
    variables = _Some;
  }
  let environment;
  if (environment$46$opt === undefined) {
    const _bind$2 = [];
    environment = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  } else {
    const _Some = environment$46$opt;
    environment = _Some;
  }
  let arguments_;
  if (arguments$46$opt.$tag === 1) {
    const _Some = arguments$46$opt;
    arguments_ = _Some._0;
  } else {
    arguments_ = ["moonbit-awk"];
  }
  let step_limit;
  if (step_limit$46$opt === undefined) {
    step_limit = 100000000;
  } else {
    const _Some = step_limit$46$opt;
    step_limit = _Some;
  }
  let clock_seconds;
  if (clock_seconds$46$opt.$tag === 1) {
    const _Some = clock_seconds$46$opt;
    clock_seconds = _Some._0;
  } else {
    clock_seconds = 0;
  }
  let io;
  if (io$46$opt.$tag === 1) {
    const _Some = io$46$opt;
    io = _Some._0;
  } else {
    io = undefined;
  }
  let input;
  if (input$46$opt.$tag === 1) {
    const _Some = input$46$opt;
    input = _Some._0;
  } else {
    input = undefined;
  }
  let output_sink;
  if (output_sink$46$opt.$tag === 1) {
    const _Some = output_sink$46$opt;
    output_sink = _Some._0;
  } else {
    output_sink = undefined;
  }
  return _M0FP211localreview3awk20new__session_2einner(program, separator, input_mode, output_mode, variables, environment, arguments_, step_limit, clock_seconds, io, input, output_sink);
}
function _M0FP211localreview3awk17replacement__text(replacement, matched) {
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const cs = _M0MPC16string6String9to__array(replacement);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      if (_M0MPC15array5Array2atGcE(cs, i.val) === 38) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, matched);
        i.val = i.val + 1 | 0;
      } else {
        if (_M0MPC15array5Array2atGcE(cs, i.val) === 92 && ((i.val + 1 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 38 || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 92))) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0));
          i.val = i.val + 2 | 0;
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(cs, i.val));
          i.val = i.val + 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(out);
}
function _M0MP211localreview3awk5State8io__call(self, request) {
  const _bind$2 = _M0MP211localreview3awk5State4tick(self);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  let host;
  _L: {
    const _bind$3 = self.io;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("this operation requires an IO host"));
    } else {
      const _Some = _bind$3;
      const _host = _Some;
      host = _host;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk7IOReplyRP211localreview3awk10ParseErrorE2Ok(host(request));
}
function _M0MP211localreview3awk5State13close__stream(self, name) {
  if (_M0MPB3Map8containsGsRP211localreview3awk9MainInputE(self.readers, name) && (_M0IP016_24default__implPB2Eq10not__equalGsE(name, "-") || !self.protected_stdin)) {
    _M0MPB3Map6removeGsRP211localreview3awk9MainInputE(self.readers, name);
  } else {
    if (_M0MPB3Map8containsGssE(self.writers, name)) {
      _M0MPB3Map6removeGssE(self.writers, name);
    } else {
      return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(-1);
    }
  }
  let code;
  _L: {
    const _bind$2 = _M0MP211localreview3awk5State8io__call(self, new _M0DTP211localreview3awk9IORequest11CloseStream(name));
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    switch (_bind$3.$tag) {
      case 3: {
        const _IOStatus = _bind$3;
        const _code = _IOStatus._0;
        code = _code;
        break _L;
      }
      case 0: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(0);
      }
      case 4: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(-1);
      }
      default: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid close reply"));
      }
    }
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(code);
}
function _M0MP211localreview3awk5State13flush__stream(self, name) {
  const _bind$2 = self.io;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(name === "" ? 0 : -1);
  }
  let code;
  _L: {
    const _bind$3 = _M0MP211localreview3awk5State8io__call(self, new _M0DTP211localreview3awk9IORequest11FlushStream(name));
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    switch (_bind$4.$tag) {
      case 3: {
        const _IOStatus = _bind$4;
        const _code = _IOStatus._0;
        code = _code;
        break _L;
      }
      case 0: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(0);
      }
      case 4: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(-1);
      }
      default: {
        return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid flush reply"));
      }
    }
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(code);
}
function _M0FP211localreview3awk9calculate(op, a, b, st) {
  if (op === "concat") {
    const _bind$2 = _M0MP211localreview3awk5State12text_2einner(st, a, false);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _tmp$2 = _tmp;
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, b, false);
    let _tmp$3;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$3 = _ok._0;
    } else {
      return _bind$3;
    }
    const text = `${_tmp$2}${_tmp$3}`;
    if (text.length > 1000000) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("string length budget"));
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(text));
  }
  if (_M0MPC15array5Array8containsGsE(["==", "!=", "<", ">", "<=", ">="], op)) {
    let _tmp;
    let _tmp$2;
    if (a.$tag === 2) {
      _tmp$2 = true;
    } else {
      _tmp$2 = false;
    }
    if (!_tmp$2) {
      let _tmp$3;
      let _tmp$4;
      if (b.$tag === 2) {
        _tmp$4 = true;
      } else {
        _tmp$4 = false;
      }
      if (!_tmp$4) {
        _tmp$3 = _M0MPC16double6Double7is__nan(_M0MP211localreview3awk5Value6number(a)) || _M0MPC16double6Double7is__nan(_M0MP211localreview3awk5Value6number(b));
      } else {
        _tmp$3 = false;
      }
      _tmp = _tmp$3;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk7boolean(op === "!="));
    }
    let cmp;
    _L: {
      _L$2: {
        if (a.$tag === 2) {
          break _L$2;
        } else {
          if (b.$tag === 2) {
            break _L$2;
          } else {
            cmp = $compare_float(_M0MP211localreview3awk5Value6number(a), _M0MP211localreview3awk5Value6number(b));
          }
        }
        break _L;
      }
      const _bind$2 = _M0MP211localreview3awk5State12text_2einner(st, a, false);
      let _tmp$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$3 = _ok._0;
      } else {
        return _bind$2;
      }
      const _tmp$4 = _tmp$3;
      const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, b, false);
      let _tmp$5;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$5 = _ok._0;
      } else {
        return _bind$3;
      }
      cmp = _M0MPC16string6String16lexical__compare(_tmp$4, _tmp$5);
    }
    let _tmp$3;
    switch (op) {
      case "==": {
        _tmp$3 = cmp === 0;
        break;
      }
      case "!=": {
        _tmp$3 = cmp !== 0;
        break;
      }
      case "<": {
        _tmp$3 = cmp < 0;
        break;
      }
      case ">": {
        _tmp$3 = cmp > 0;
        break;
      }
      case "<=": {
        _tmp$3 = cmp <= 0;
        break;
      }
      default: {
        _tmp$3 = cmp >= 0;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk7boolean(_tmp$3));
  }
  const left = _M0MP211localreview3awk5Value6number(a);
  const right = _M0MP211localreview3awk5Value6number(b);
  let _tmp;
  _L: {
    _L$2: {
      _L$3: {
        _L$4: {
          _L$5: {
            _L$6: {
              _L$7: {
                _L$8: {
                  _L$9: {
                    _L$10: {
                      _L$11: {
                        switch (op) {
                          case "+": {
                            break _L$11;
                          }
                          case "+=": {
                            break _L$11;
                          }
                          case "-": {
                            break _L$10;
                          }
                          case "-=": {
                            break _L$10;
                          }
                          case "*": {
                            break _L$8;
                          }
                          case "*=": {
                            break _L$8;
                          }
                          case "/": {
                            break _L$6;
                          }
                          case "/=": {
                            break _L$6;
                          }
                          case "%": {
                            break _L$4;
                          }
                          case "%=": {
                            break _L$4;
                          }
                          case "^": {
                            break _L$2;
                          }
                          case "^=": {
                            break _L$2;
                          }
                          default: {
                            return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported operator ${op}`));
                          }
                        }
                      }
                      _tmp = left + right;
                      break _L$9;
                    }
                    _tmp = left - right;
                  }
                  break _L$7;
                }
                _tmp = left * right;
              }
              break _L$5;
            }
            if (right === 0) {
              return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("division by zero"));
            }
            _tmp = left / right;
          }
          break _L$3;
        }
        if (right === 0) {
          return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("division by zero"));
        }
        _tmp = _M0IPC16double6DoublePB3Mod3mod(left, right);
      }
      break _L;
    }
    _tmp = _M0FPC14math3pow(left, right);
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk6finite(_tmp));
}
function _M0MP211localreview3awk5State12named__field(self, name) {
  let names;
  const _bind$2 = self.field_names;
  if (_bind$2.$tag === 0) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("named fields require a CSV header"));
  } else {
    const _Some = _bind$2;
    const _names = _Some._0;
    names = _names;
  }
  const index = new _M0TPB8MutLocalGiE(0);
  const _bind$3 = names.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const field = names[i];
      if (field === name) {
        index.val = i + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return index.val === 0 ? new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text("")) : _M0MP211localreview3awk5State4read(self, new _M0DTP211localreview3awk4Slot9FieldSlot(index.val));
}
function _M0MP211localreview3awk9MainInput9configure(self, st) {
  self.csv = st.input_mode;
  self.csv_started = false;
  self.csv_header_done = false;
  const _bind$2 = _M0MP211localreview3awk5State8variable(st, "RS");
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  const rs = _M0MPC16string6String9to__array(_tmp$2);
  self.mode = _M0MPC15array5Array9is__emptyGcE(rs) ? 2 : _M0IPC15array5ArrayPB2Eq5equalGcE(rs, [10]) ? 0 : rs.length === 1 && _M0MPC15array5Array2atGcE(rs, 0) < 128 ? 1 : 3;
  if (rs.length === 1) {
    self.separator = _M0MPC15array5Array2atGcE(rs, 0);
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk5State11csv__header(self, fields) {
  self.field_names = new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_M0MPC15array5Array3mapGRP211localreview3awk5ValuesE(fields, (v) => _M0MP211localreview3awk5Value4text(v)));
  const dest = _M0MPB3Map2atGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, "FIELDS");
  self.entries = self.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(dest) | 0;
  _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(dest);
  const _bind$2 = fields.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const value = fields[i];
      const _bind$3 = _M0MP211localreview3awk5State12put__element(self, "FIELDS", _M0MPC13int3Int18to__string_2einner(i + 1 | 0, 10), new _M0DTP211localreview3awk5Value4Text(_M0MP211localreview3awk5Value4text(value)));
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk9MainInput6record(self, st) {
  let mode;
  _L: {
    _L$2: {
      const _bind$2 = self.csv;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _mode = _Some;
        mode = _mode;
        break _L$2;
      }
      break _L;
    }
    while (true) {
      let text;
      let fields;
      _L$3: {
        const _bind$2 = _M0MP211localreview3awk9MainInput8csv__row(self, st, mode);
        let _bind$3;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _bind$3 = _ok._0;
        } else {
          return _bind$2;
        }
        if (_bind$3 === undefined) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _text = _x._0;
          const _fields = _x._1;
          text = _text;
          fields = _fields;
          break _L$3;
        }
      }
      if (mode.header && !self.csv_header_done) {
        self.csv_header_done = true;
        const _bind$2 = _M0MP211localreview3awk5State11csv__header(st, fields);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        continue;
      }
      _M0MPC15array5Array5clearGsE(st.fields);
      const _bind$2 = fields.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const field = fields[_];
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(st.fields, field);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(text);
    }
    return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  const scanned = new _M0TPB8MutLocalGiE(self.start);
  while (true) {
    const _bind$2 = _M0MP211localreview3awk5State4tick(st);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    if (self.start === self.data.length) {
      if (self.eof) {
        return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      const _bind$3 = _M0MP211localreview3awk9MainInput4more(self, st);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      scanned.val = self.start;
      continue;
    }
    if (self.mode <= 1) {
      const sep = self.mode === 0 ? 10 : self.separator;
      while (true) {
        if (scanned.val < self.data.length) {
          const _bind$3 = _M0MP211localreview3awk5State4tick(st);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          if (_M0MPC15array5Array2atGcE(self.data, scanned.val) === sep) {
            const text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, self.start, scanned.val));
            self.start = scanned.val + 1 | 0;
            return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(self.mode === 0 ? _M0FP211localreview3awk16drop__record__cr(text) : text);
          }
          scanned.val = scanned.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (self.mode === 2) {
        const first = new _M0TPB8MutLocalGiE(self.start);
        while (true) {
          if (first.val < self.data.length && (_M0MPC15array5Array2atGcE(self.data, first.val) === 10 || _M0MPC15array5Array2atGcE(self.data, first.val) === 13)) {
            first.val = first.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (first.val === self.data.length) {
          self.start = first.val;
          continue;
        }
        let _tmp = first.val;
        while (true) {
          const i = _tmp;
          if (i < self.data.length) {
            _L$2: {
              const _bind$3 = _M0MP211localreview3awk5State4tick(st);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              if (_M0MPC15array5Array2atGcE(self.data, i) !== 10) {
                break _L$2;
              }
              let _tmp$2;
              if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.data, i + 1 | 0), 10)) {
                _tmp$2 = i + 2 | 0;
              } else {
                if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.data, i + 1 | 0), 13) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.data, i + 2 | 0), 10)) {
                  _tmp$2 = i + 3 | 0;
                } else {
                  break _L$2;
                }
              }
              const end = new _M0TPB8MutLocalGiE(_tmp$2);
              while (true) {
                if (end.val < self.data.length && (_M0MPC15array5Array2atGcE(self.data, end.val) === 10 || _M0MPC15array5Array2atGcE(self.data, end.val) === 13)) {
                  end.val = end.val + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RT", new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, i, end.val))));
              const text = _M0FP211localreview3awk16drop__record__cr(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, first.val, i)));
              self.start = end.val;
              return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(text);
            }
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (self.eof) {
          const end = new _M0TPB8MutLocalGiE(self.data.length);
          if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.data, end.val - 1 | 0), 10)) {
            end.val = end.val - 1 | 0;
          }
          if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(self.data, end.val - 1 | 0), 13)) {
            end.val = end.val - 1 | 0;
          }
          const text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, first.val, end.val));
          const _bind$3 = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, self.start, undefined));
          const bytes = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), false);
          const token_bytes = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(text, 0, text.length), false).length;
          _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RT", new _M0DTP211localreview3awk5Value4Text(_M0FPC28encoding4utf821decode__lossy_2einner(_M0MPC15bytes5Bytes12view_2einner(bytes, token_bytes, undefined), false)));
          self.start = self.data.length;
          return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(text);
        }
      } else {
        const _bind$3 = _M0MP211localreview3awk5State8variable(st, "RS");
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
        let rs;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          rs = _ok._0;
        } else {
          return _bind$4;
        }
        const chars = self.data;
        let found;
        if (_M0MPC16string6String9to__array(rs).length <= 1) {
          if (_M0MPC16string6String9is__empty(rs)) {
            found = { _0: self.start, _1: self.start };
          } else {
            const sep = _M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(rs), 0);
            const found$2 = new _M0TPB8MutLocalGOUiiEE(undefined);
            let _tmp$2 = self.start;
            while (true) {
              const i = _tmp$2;
              if (i < chars.length) {
                if (_M0MPC15array5Array2atGcE(chars, i) === sep) {
                  found$2.val = { _0: i, _1: i + 1 | 0 };
                  break;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            found = found$2.val;
          }
        } else {
          const _bind$5 = _M0MP211localreview3awk5State5regex(st, rs);
          let _tmp$2;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$2 = _ok._0;
          } else {
            return _bind$5;
          }
          const _bind$6 = _M0FP211localreview3awk20regex__match_2einner(_tmp$2, chars, self.start, st, self.start);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            found = _ok._0;
          } else {
            return _bind$6;
          }
        }
        let a;
        let b;
        _L$2: {
          _L$3: {
            if (found === undefined) {
            } else {
              const _Some = found;
              const _x = _Some;
              const _a = _x._0;
              const _b = _x._1;
              a = _a;
              b = _b;
              break _L$3;
            }
            break _L$2;
          }
          if (a !== b) {
            _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RT", new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, a, b))));
            const text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, self.start, a));
            self.start = b;
            return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(text);
          }
        }
      }
    }
    if (self.eof) {
      const text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(self.data, self.start, undefined));
      self.start = self.data.length;
      if (self.mode === 3) {
        _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RT", new _M0DTP211localreview3awk5Value4Text(""));
      }
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(self.mode === 0 ? _M0FP211localreview3awk16drop__record__cr(text) : text);
    }
    const consumed = self.start;
    const _bind$3 = _M0MP211localreview3awk9MainInput4more(self, st);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    scanned.val = scanned.val - consumed | 0;
    continue;
  }
}
function _M0MP211localreview3awk5State13stream__limit(self) {
  if ((_M0MPB3Map6lengthGsRP211localreview3awk5ValueE(self.readers) + _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(self.writers) | 0) >= 128) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("open stream limit"));
  } else {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
}
function _M0MP211localreview3awk5State14read__redirect(self, name, pipe) {
  if (_M0MPB3Map8containsGssE(self.writers, name)) {
    return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("cannot read from writer stream"));
  }
  let stream;
  const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk9MainInputE(self.readers, name);
  if (_bind$2 === undefined) {
    const _bind$3 = _M0MP211localreview3awk5State13stream__limit(self);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    _L: {
      _L$2: {
        let message;
        _L$3: {
          _L$4: {
            const _bind$4 = _M0MP211localreview3awk5State8io__call(self, new _M0DTP211localreview3awk9IORequest10OpenReader(name, pipe));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              return _bind$4;
            }
            switch (_bind$5.$tag) {
              case 0: {
                break;
              }
              case 3: {
                const _IOStatus = _bind$5;
                const _x = _IOStatus._0;
                if (_x === -1) {
                  if (pipe) {
                    return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(undefined);
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
              case 4: {
                const _IOFailed = _bind$5;
                const _message = _IOFailed._0;
                message = _message;
                break _L$4;
              }
              default: {
                break _L$2;
              }
            }
            break _L$3;
          }
          return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure(message));
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("IO host must acknowledge OpenReader"));
    }
    const host = _M0MPC16option6Option6unwrapGRPB5EntryGiRP211localreview3awk7SessionEE(self.io);
    const stream$2 = new _M0TP211localreview3awk9MainInput((request) => {
      _L$2: {
        switch (request.$tag) {
          case 0: {
            break _L$2;
          }
          case 2: {
            break _L$2;
          }
          default: {
            let message;
            _L$3: {
              let text;
              _L$4: {
                const _bind$4 = host(new _M0DTP211localreview3awk9IORequest10ReadReader(name));
                switch (_bind$4.$tag) {
                  case 1: {
                    const _IOData = _bind$4;
                    const _text = _IOData._0;
                    text = _text;
                    break _L$4;
                  }
                  case 2: {
                    return _M0DTP211localreview3awk10InputReply3End__;
                  }
                  case 4: {
                    const _IOFailed = _bind$4;
                    const _message = _IOFailed._0;
                    message = _message;
                    break _L$3;
                  }
                  default: {
                    return new _M0DTP211localreview3awk10InputReply6Failed("invalid reader reply");
                  }
                }
              }
              return new _M0DTP211localreview3awk10InputReply5Chunk(text);
            }
            return new _M0DTP211localreview3awk10InputReply6Failed(message);
          }
        }
      }
      return _M0DTP211localreview3awk10InputReply5Ready__;
    }, [], 0, false, true, undefined, 0, true, 0, 10, undefined, false, false);
    const _bind$4 = _M0MP211localreview3awk9MainInput9configure(stream$2, self);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    _M0MPB3Map3setGsRP211localreview3awk9MainInputE(self.readers, name, stream$2);
    if (name === "-" && !pipe) {
      self.protected_stdin = true;
    }
    stream = stream$2;
  } else {
    const _Some = _bind$2;
    const _stream = _Some;
    stream = _stream;
  }
  const _bind$3 = _M0MP211localreview3awk9MainInput6record(stream, self);
  let record;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    record = _ok._0;
  } else {
    return _bind$3;
  }
  let text;
  _L: {
    _L$2: {
      if (record === undefined) {
      } else {
        const _Some = record;
        const _text = _Some;
        text = _text;
        break _L$2;
      }
      break _L;
    }
    if (text.length > 1000000) {
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
    }
  }
  return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(record);
}
function _M0MP211localreview3awk9MainInput5close(self) {
  if (self.opened) {
    const _func = self.reader;
    _func(_M0DTP211localreview3awk12InputRequest5Close__);
  }
  self.opened = false;
  _M0MPC15array5Array5clearGcE(self.data);
  self.start = 0;
  self.eof = false;
  self.failure = undefined;
}
function _M0MP211localreview3awk5State15argument__count(self) {
  const _bind$2 = _M0MP211localreview3awk5State8variable(self, "ARGC");
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const n = _M0MP211localreview3awk5Value6number(_tmp);
  if (n < 0 || (n > 100000 || _M0MPC16double6Double7is__nan(n))) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("ARGC out of range"));
  }
  return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(_M0MPC16double6Double7to__int(n));
}
function _M0MP211localreview3awk5State11open__input(self, source) {
  while (true) {
    const _bind$2 = _M0MP211localreview3awk5State4tick(self);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk5State15argument__count(self);
    let count;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      count = _ok._0;
    } else {
      return _bind$3;
    }
    let name;
    if (source.index >= count) {
      if (source.had_file) {
        return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(false);
      }
      name = "-";
    } else {
      const _bind$4 = _M0MP211localreview3awk5State12text_2einner(self, _M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPB3Map3getGsRP211localreview3awk5ValueE(_M0MPB3Map2atGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, "ARGV"), _M0MPC13int3Int18to__string_2einner(source.index, 10)), _M0DTP211localreview3awk5Value5Empty__), false);
      let value;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        value = _ok._0;
      } else {
        return _bind$4;
      }
      source.index = source.index + 1 | 0;
      if (_M0MPC16string6String9is__empty(value)) {
        continue;
      }
      const _bind$5 = "=";
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(value, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
      const key = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
      if (parts.length > 1 && (_M0FP211localreview3awk10identifier(key) && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(key)), (c) => c < 128))) {
        const _tmp = _M0MPC16string6String11sub_2einner(value, key.length + 1 | 0, undefined);
        const _bind$6 = "\n";
        const _bind$7 = _M0MP211localreview3awk5State16assign__argument(self, key, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))), 0)));
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          return _bind$7;
        }
        continue;
      }
      name = value;
    }
    let message;
    _L: {
      _L$2: {
        const _func = source.reader;
        const _bind$4 = _func(new _M0DTP211localreview3awk12InputRequest4Open(name));
        switch (_bind$4.$tag) {
          case 3: {
            const _Failed = _bind$4;
            const _message = _Failed._0;
            message = _message;
            break _L$2;
          }
          case 0: {
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("input provider must acknowledge Open"));
          }
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error45localreview_2fawk_2eParseError_2eInputFailure(message));
    }
    source.opened = true;
    source.had_file = true;
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "FILENAME", new _M0DTP211localreview3awk5Value4Text(name));
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "FNR", new _M0DTP211localreview3awk5Value6Number(0));
    const _bind$4 = _M0MP211localreview3awk9MainInput9configure(source, self);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(true);
  }
}
function _M0MP211localreview3awk5State11take__input(self) {
  let source;
  const _bind$2 = self.input;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("getline requires a pull input source"));
  } else {
    const _Some = _bind$2;
    const _source = _Some;
    source = _source;
  }
  while (true) {
    let _tmp;
    if (!source.opened) {
      const _bind$3 = _M0MP211localreview3awk5State11open__input(self, source);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = !_tmp$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
    const _tmp$2 = self.vars;
    const _bind$3 = _M0MP211localreview3awk5State8variable(self, "RS");
    let _tmp$3;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$3 = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk5State12text_2einner(self, _tmp$3, false);
    let _tmp$4;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$4 = _ok._0;
    } else {
      return _bind$4;
    }
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$2, "RT", new _M0DTP211localreview3awk5Value4Text(_tmp$4));
    let text;
    _L: {
      _L$2: {
        const _bind$5 = _M0MP211localreview3awk9MainInput6record(source, self);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        if (_bind$6 === undefined) {
          _M0MP211localreview3awk9MainInput5close(source);
        } else {
          const _Some = _bind$6;
          const _text = _Some;
          text = _text;
          break _L$2;
        }
        break _L;
      }
      if (text.length > 1000000) {
        return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
      }
      const _tmp$5 = self.vars;
      const _bind$5 = _M0MP211localreview3awk5State8variable(self, "NR");
      let _tmp$6;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$6 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$5, "NR", new _M0DTP211localreview3awk5Value6Number(_M0MP211localreview3awk5Value6number(_tmp$6) + 1));
      const _tmp$7 = self.vars;
      const _bind$6 = _M0MP211localreview3awk5State8variable(self, "FNR");
      let _tmp$8;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$8 = _ok._0;
      } else {
        return _bind$6;
      }
      _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$7, "FNR", new _M0DTP211localreview3awk5Value6Number(_M0MP211localreview3awk5Value6number(_tmp$8) + 1));
      return new _M0DTPC16result6ResultGOsRP211localreview3awk10ParseErrorE2Ok(text);
    }
    continue;
  }
}
function _M0MP211localreview3awk5State12open__writer(self, name, mode) {
  if (_M0MPB3Map8containsGsRP211localreview3awk9MainInputE(self.readers, name) && (_M0IP016_24default__implPB2Eq10not__equalGsE(name, "-") || !self.protected_stdin)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("cannot write to reader stream"));
  }
  if (_M0MPB3Map8containsGssE(self.writers, name)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(mode, "|") && _M0MPC15array5Array8containsGsE(["-", "/dev/stdout", "/dev/stderr"], name)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  const _bind$2 = _M0MP211localreview3awk5State13stream__limit(self);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  let message;
  _L: {
    const _bind$3 = _M0MP211localreview3awk5State8io__call(self, new _M0DTP211localreview3awk9IORequest10OpenWriter(name, mode));
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    switch (_bind$4.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGssE(self.writers, name, mode));
      }
      case 4: {
        const _IOFailed = _bind$4;
        const _message = _IOFailed._0;
        message = _message;
        break _L;
      }
      default: {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("IO host must acknowledge OpenWriter"));
      }
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`output: ${message}`));
}
function _M0MP211localreview3awk5State15write__redirect(self, name, mode, text) {
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("output length budget"));
  }
  const _bind$2 = _M0MP211localreview3awk5State12open__writer(self, name, mode);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  if (!_M0MPB3Map8containsGssE(self.writers, name) && (name === "-" || name === "/dev/stdout")) {
    const _bind$3 = _M0MP211localreview3awk5State4emit(self, text);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
  }
  let message;
  _L: {
    const _bind$3 = _M0MP211localreview3awk5State8io__call(self, new _M0DTP211localreview3awk9IORequest11WriteWriter(name, text));
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    switch (_bind$4.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      case 4: {
        const _IOFailed = _bind$4;
        const _message = _IOFailed._0;
        message = _message;
        break _L;
      }
      default: {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid write reply"));
      }
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`output: ${message}`));
}
function _M0FP211localreview3awk14emit__redirect(text, destination, st) {
  let mode;
  let name;
  _L: {
    if (destination === undefined) {
      return _M0MP211localreview3awk5State4emit(st, text);
    } else {
      const _Some = destination;
      const _x = _Some;
      const _mode = _x._0;
      const _name = _x._1;
      mode = _mode;
      name = _name;
      break _L;
    }
  }
  return _M0MP211localreview3awk5State15write__redirect(st, name, mode, text);
}
function _M0FP211localreview3awk18execute__statement(stmt, st) {
  let _tmp = stmt;
  let _tmp$2 = st;
  _L: while (true) {
    const stmt$2 = _tmp;
    const st$2 = _tmp$2;
    const _bind$2 = _M0MP211localreview3awk5State4tick(st$2);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    let value;
    _L$2: {
      let value$2;
      _L$3: {
        let name;
        let indices;
        _L$4: {
          let name$2;
          let key;
          let body;
          _L$5: {
            let step;
            let first;
            let condition;
            let body$2;
            _L$6: {
              let body$3;
              let condition$2;
              _L$7: {
                let condition$3;
                let body$4;
                _L$8: {
                  let yes;
                  let condition$4;
                  let no;
                  _L$9: {
                    let exprs;
                    let redirect;
                    _L$10: {
                      let exprs$2;
                      let redirect$2;
                      _L$11: {
                        let expr;
                        _L$12: {
                          let statements;
                          _L$13: {
                            switch (stmt$2.$tag) {
                              case 0: {
                                const _Block = stmt$2;
                                const _statements = _Block._0;
                                statements = _statements;
                                break _L$13;
                              }
                              case 3: {
                                const _Expression = stmt$2;
                                const _expr = _Expression._0;
                                expr = _expr;
                                break _L$12;
                              }
                              case 1: {
                                const _Print = stmt$2;
                                const _exprs = _Print._0;
                                const _redirect = _Print._1;
                                exprs$2 = _exprs;
                                redirect$2 = _redirect;
                                break _L$11;
                              }
                              case 2: {
                                const _Printf = stmt$2;
                                const _exprs$2 = _Printf._0;
                                const _redirect$2 = _Printf._1;
                                exprs = _exprs$2;
                                redirect = _redirect$2;
                                break _L$10;
                              }
                              case 4: {
                                const _If = stmt$2;
                                const _condition = _If._0;
                                const _yes = _If._1;
                                const _no = _If._2;
                                yes = _yes;
                                condition$4 = _condition;
                                no = _no;
                                break _L$9;
                              }
                              case 5: {
                                const _While = stmt$2;
                                const _condition$2 = _While._0;
                                const _body = _While._1;
                                condition$3 = _condition$2;
                                body$4 = _body;
                                break _L$8;
                              }
                              case 6: {
                                const _Do = stmt$2;
                                const _body$2 = _Do._0;
                                const _condition$3 = _Do._1;
                                body$3 = _body$2;
                                condition$2 = _condition$3;
                                break _L$7;
                              }
                              case 7: {
                                const _For = stmt$2;
                                const _first = _For._0;
                                const _condition$4 = _For._1;
                                const _step = _For._2;
                                const _body$3 = _For._3;
                                step = _step;
                                first = _first;
                                condition = _condition$4;
                                body$2 = _body$3;
                                break _L$6;
                              }
                              case 8: {
                                const _ForIn = stmt$2;
                                const _key = _ForIn._0;
                                const _name = _ForIn._1;
                                const _body$4 = _ForIn._2;
                                name$2 = _name;
                                key = _key;
                                body = _body$4;
                                break _L$5;
                              }
                              case 9: {
                                const _Delete = stmt$2;
                                const _name$2 = _Delete._0;
                                const _indices = _Delete._1;
                                name = _name$2;
                                indices = _indices;
                                break _L$4;
                              }
                              case 10: {
                                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow9BreakFlow__);
                              }
                              case 11: {
                                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow12ContinueFlow__);
                              }
                              case 12: {
                                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow8NextFlow__);
                              }
                              case 13: {
                                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow12NextFileFlow__);
                              }
                              case 14: {
                                const _Exit = stmt$2;
                                const _value = _Exit._0;
                                value$2 = _value;
                                break _L$3;
                              }
                              default: {
                                const _Return = stmt$2;
                                const _value$2 = _Return._0;
                                value = _value$2;
                                break _L$2;
                              }
                            }
                          }
                          const _bind$3 = statements.length;
                          let _tmp$3 = 0;
                          while (true) {
                            const _ = _tmp$3;
                            if (_ < _bind$3) {
                              const statement = statements[_];
                              const _bind$4 = _M0FP211localreview3awk18execute__statement(statement, st$2);
                              let flow;
                              if (_bind$4.$tag === 1) {
                                const _ok = _bind$4;
                                flow = _ok._0;
                              } else {
                                return _bind$4;
                              }
                              let _tmp$4;
                              if (flow.$tag === 0) {
                                _tmp$4 = true;
                              } else {
                                _tmp$4 = false;
                              }
                              if (!_tmp$4) {
                                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(flow);
                              }
                              _tmp$3 = _ + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                        }
                        const _bind$3 = _M0FP211localreview3awk8evaluate(expr, st$2);
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _ok._0;
                        } else {
                          return _bind$3;
                        }
                        return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                      }
                      const _bind$3 = _M0FP211localreview3awk21evaluate__destination(redirect$2, st$2);
                      let destination;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        destination = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _bind$4 = _M0MPC15array5Array3mapGRP211localreview3awk4ExprRP211localreview3awk5ValueEHRPC15error5Error(exprs$2, (e) => _M0FP211localreview3awk8evaluate(e, st$2));
                      let values;
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        values = _ok._0;
                      } else {
                        return _bind$4;
                      }
                      let mode;
                      let name$3;
                      _L$12: {
                        _L$13: {
                          if (destination === undefined) {
                          } else {
                            const _Some = destination;
                            const _x = _Some;
                            const _mode = _x._0;
                            const _name = _x._1;
                            mode = _mode;
                            name$3 = _name;
                            break _L$13;
                          }
                          break _L$12;
                        }
                        const _bind$5 = _M0MP211localreview3awk5State12open__writer(st$2, name$3, mode);
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          _ok._0;
                        } else {
                          return _bind$5;
                        }
                      }
                      let text;
                      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(exprs$2)) {
                        const _tmp$3 = st$2.record;
                        const _bind$5 = _M0MP211localreview3awk5State8variable(st$2, "ORS");
                        let _tmp$4;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          _tmp$4 = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        const _bind$6 = _M0MP211localreview3awk5State12text_2einner(st$2, _tmp$4, false);
                        let _tmp$5;
                        if (_bind$6.$tag === 1) {
                          const _ok = _bind$6;
                          _tmp$5 = _ok._0;
                        } else {
                          return _bind$6;
                        }
                        text = `${_tmp$3}${_tmp$5}`;
                      } else {
                        const _bind$5 = _M0MPC15array5Array3mapGRP211localreview3awk5ValuesEHRP211localreview3awk10ParseError(values, (value$3) => _M0MP211localreview3awk5State12text_2einner(st$2, value$3, true));
                        let fields;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          fields = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        let mode$2;
                        _L$13: {
                          _L$14: {
                            const _bind$6 = st$2.output_mode;
                            if (_bind$6 === undefined) {
                              const _bind$7 = _M0MP211localreview3awk5State8variable(st$2, "OFS");
                              let _tmp$3;
                              if (_bind$7.$tag === 1) {
                                const _ok = _bind$7;
                                _tmp$3 = _ok._0;
                              } else {
                                return _bind$7;
                              }
                              const _bind$8 = _M0MP211localreview3awk5State12text_2einner(st$2, _tmp$3, false);
                              let _bind$9;
                              if (_bind$8.$tag === 1) {
                                const _ok = _bind$8;
                                _bind$9 = _ok._0;
                              } else {
                                return _bind$8;
                              }
                              const _tmp$4 = _M0MPC15array5Array4joinGsE(fields, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
                              const _bind$10 = _M0MP211localreview3awk5State8variable(st$2, "ORS");
                              let _tmp$5;
                              if (_bind$10.$tag === 1) {
                                const _ok = _bind$10;
                                _tmp$5 = _ok._0;
                              } else {
                                return _bind$10;
                              }
                              const _bind$11 = _M0MP211localreview3awk5State12text_2einner(st$2, _tmp$5, false);
                              let _tmp$6;
                              if (_bind$11.$tag === 1) {
                                const _ok = _bind$11;
                                _tmp$6 = _ok._0;
                              } else {
                                return _bind$11;
                              }
                              text = `${_tmp$4}${_tmp$6}`;
                            } else {
                              const _Some = _bind$6;
                              const _mode = _Some;
                              mode$2 = _mode;
                              break _L$14;
                            }
                            break _L$13;
                          }
                          text = `${_M0FP211localreview3awk10csv__write(fields, mode$2.separator)}\n`;
                        }
                      }
                      const _bind$5 = _M0FP211localreview3awk14emit__redirect(text, destination, st$2);
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                    }
                    const _bind$3 = _M0FP211localreview3awk21evaluate__destination(redirect, st$2);
                    let destination;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      destination = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    const _bind$4 = _M0MPC15array5Array3mapGRP211localreview3awk4ExprRP211localreview3awk5ValueEHRPC15error5Error(exprs, (e) => _M0FP211localreview3awk8evaluate(e, st$2));
                    let values;
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      values = _ok._0;
                    } else {
                      return _bind$4;
                    }
                    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(values)) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("printf requires a format"));
                    }
                    const _bind$5 = _M0MP211localreview3awk5State12text_2einner(st$2, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
                    let _tmp$3;
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _tmp$3 = _ok._0;
                    } else {
                      return _bind$5;
                    }
                    const _bind$6 = _M0FP211localreview3awk22format__values_2einner(_tmp$3, _M0MPC15array9ArrayView9to__ownedGRP211localreview3awk5ValueE(_M0MPC15array5Array12view_2einnerGRP211localreview3awk5ValueE(values, 1, undefined)), st$2, false);
                    let _tmp$4;
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _tmp$4 = _ok._0;
                    } else {
                      return _bind$6;
                    }
                    const _bind$7 = _M0FP211localreview3awk14emit__redirect(_tmp$4, destination, st$2);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                  }
                  const _bind$3 = _M0FP211localreview3awk8evaluate(condition$4, st$2);
                  let _tmp$3;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  if (_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                    _tmp = yes;
                    continue;
                  } else {
                    let other;
                    _L$10: {
                      if (no === undefined) {
                        return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                      } else {
                        const _Some = no;
                        const _other = _Some;
                        other = _other;
                        break _L$10;
                      }
                    }
                    _tmp = other;
                    continue;
                  }
                }
                _L$9: while (true) {
                  const _bind$3 = _M0FP211localreview3awk8evaluate(condition$3, st$2);
                  let _tmp$3;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  if (_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                    let flow;
                    _L$10: {
                      _L$11: {
                        const _bind$4 = _M0FP211localreview3awk18execute__statement(body$4, st$2);
                        let _bind$5;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind$5 = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        switch (_bind$5.$tag) {
                          case 0: {
                            break;
                          }
                          case 2: {
                            break;
                          }
                          case 1: {
                            break _L$9;
                          }
                          default: {
                            flow = _bind$5;
                            break _L$11;
                          }
                        }
                        break _L$10;
                      }
                      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(flow);
                    }
                    continue;
                  } else {
                    break;
                  }
                }
                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
              }
              _L$8: while (true) {
                let flow;
                _L$9: {
                  _L$10: {
                    const _bind$3 = _M0FP211localreview3awk18execute__statement(body$3, st$2);
                    let _bind$4;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _bind$4 = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    switch (_bind$4.$tag) {
                      case 0: {
                        break;
                      }
                      case 2: {
                        break;
                      }
                      case 1: {
                        break _L$8;
                      }
                      default: {
                        flow = _bind$4;
                        break _L$10;
                      }
                    }
                    break _L$9;
                  }
                  return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(flow);
                }
                const _bind$3 = _M0FP211localreview3awk8evaluate(condition$2, st$2);
                let _tmp$3;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _tmp$3 = _ok._0;
                } else {
                  return _bind$3;
                }
                if (!_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                  break;
                }
                continue;
              }
              return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
            }
            let expr;
            _L$7: {
              _L$8: {
                if (first === undefined) {
                } else {
                  const _Some = first;
                  const _expr = _Some;
                  expr = _expr;
                  break _L$8;
                }
                break _L$7;
              }
              const _bind$3 = _M0FP211localreview3awk8evaluate(expr, st$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
            _L$8: while (true) {
              const _bind$3 = _M0MP211localreview3awk5State4tick(st$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              let expr$2;
              _L$9: {
                _L$10: {
                  if (condition === undefined) {
                  } else {
                    const _Some = condition;
                    const _expr = _Some;
                    expr$2 = _expr;
                    break _L$10;
                  }
                  break _L$9;
                }
                const _bind$4 = _M0FP211localreview3awk8evaluate(expr$2, st$2);
                let _tmp$3;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp$3 = _ok._0;
                } else {
                  return _bind$4;
                }
                if (!_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                  break;
                }
              }
              let flow;
              _L$10: {
                _L$11: {
                  const _bind$4 = _M0FP211localreview3awk18execute__statement(body$2, st$2);
                  let _bind$5;
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _bind$5 = _ok._0;
                  } else {
                    return _bind$4;
                  }
                  switch (_bind$5.$tag) {
                    case 0: {
                      break;
                    }
                    case 2: {
                      break;
                    }
                    case 1: {
                      break _L$8;
                    }
                    default: {
                      flow = _bind$5;
                      break _L$11;
                    }
                  }
                  break _L$10;
                }
                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(flow);
              }
              let expr$3;
              _L$11: {
                _L$12: {
                  if (step === undefined) {
                  } else {
                    const _Some = step;
                    const _expr = _Some;
                    expr$3 = _expr;
                    break _L$12;
                  }
                  break _L$11;
                }
                const _bind$4 = _M0FP211localreview3awk8evaluate(expr$3, st$2);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
              continue;
            }
            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
          }
          const keys = [];
          const _bind$3 = _M0MP211localreview3awk5State5array(st$2, name$2);
          let _tmp$3;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$3 = _ok._0;
          } else {
            return _bind$3;
          }
          const _it = _M0MPB3Map5iter2GsRPB4JsonE(_tmp$3);
          while (true) {
            let k;
            _L$6: {
              const _bind$4 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
              if (_bind$4 === undefined) {
                break;
              } else {
                const _Some = _bind$4;
                const _x = _Some;
                const _k = _x._0;
                k = _k;
                break _L$6;
              }
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(keys, k);
            continue;
          }
          _M0MPC15array5Array8sort__byGsE(keys, (a, b) => _M0MPC16string6String16lexical__compare(a, b));
          const _bind$4 = keys.length;
          let _tmp$4 = 0;
          _L$6: while (true) {
            const _ = _tmp$4;
            if (_ < _bind$4) {
              const k = keys[_];
              const _bind$5 = _M0MP211localreview3awk5State13write_2einner(st$2, new _M0DTP211localreview3awk4Slot12VariableSlot(key), new _M0DTP211localreview3awk5Value4Text(k), false);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              let flow;
              _L$7: {
                _L$8: {
                  const _bind$6 = _M0FP211localreview3awk18execute__statement(body, st$2);
                  let _bind$7;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _bind$7 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  switch (_bind$7.$tag) {
                    case 0: {
                      break;
                    }
                    case 2: {
                      break;
                    }
                    case 1: {
                      break _L$6;
                    }
                    default: {
                      flow = _bind$7;
                      break _L$8;
                    }
                  }
                  break _L$7;
                }
                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(flow);
              }
              _tmp$4 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
        }
        const _bind$3 = _M0MP211localreview3awk5State5array(st$2, name);
        let array;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          array = _ok._0;
        } else {
          return _bind$3;
        }
        let keys;
        _L$5: {
          _L$6: {
            if (indices.$tag === 1) {
              const _Some = indices;
              const _keys = _Some._0;
              keys = _keys;
              break _L$6;
            } else {
              st$2.entries = st$2.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(array) | 0;
              _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(array);
            }
            break _L$5;
          }
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(keys)) {
            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("empty array subscript"));
          }
          const _bind$4 = _M0FP211localreview3awk10array__key(keys, st$2);
          let key;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            key = _ok._0;
          } else {
            return _bind$4;
          }
          if (_M0MPB3Map8containsGsRP211localreview3awk5ValueE(array, key)) {
            _M0MPB3Map6removeGsRP211localreview3awk5ValueE(array, key);
            st$2.entries = st$2.entries - 1 | 0;
          }
        }
        return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
      }
      let status;
      let expr;
      _L$4: {
        _L$5: {
          if (value$2 === undefined) {
            status = undefined;
          } else {
            const _Some = value$2;
            const _expr = _Some;
            expr = _expr;
            break _L$5;
          }
          break _L$4;
        }
        const _bind$3 = _M0FP211localreview3awk8evaluate(expr, st$2);
        let _tmp$3;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$3 = _ok._0;
        } else {
          return _bind$3;
        }
        const n = _M0MPC16double6Double5trunc(_M0MP211localreview3awk5Value6number(_tmp$3));
        status = _M0MPC16double6Double7is__nan(n) || _M0MPC16double6Double7is__inf(n) ? 0 : Number(BigInt.asIntN(32, $i64_trunc_f64(n))) | 0;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk4Flow8ExitFlow(status));
    }
    let _tmp$3;
    let expr;
    _L$3: {
      _L$4: {
        if (value === undefined) {
          _tmp$3 = _M0DTP211localreview3awk5Value5Empty__;
        } else {
          const _Some = value;
          const _expr = _Some;
          expr = _expr;
          break _L$4;
        }
        break _L$3;
      }
      const _bind$3 = _M0FP211localreview3awk8evaluate(expr, st$2);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk4Flow10ReturnFlow(_tmp$3));
  }
}
function _M0FP211localreview3awk10array__key(keys, st) {
  const values = [];
  const _bind$2 = keys.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const key = keys[_];
      const _bind$3 = _M0FP211localreview3awk8evaluate(key, st);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp$2, false);
      let _tmp$3;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$3 = _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, _tmp$3);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0MP211localreview3awk5State8variable(st, "SUBSEP");
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp$2, false);
  let _bind$5;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _bind$5 = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGsRPC15error5ErrorE2Ok(_M0MPC15array5Array4joinGsE(values, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
}
function _M0FP211localreview3awk8evaluate(expr, st) {
  const _bind$2 = _M0MP211localreview3awk5State4tick(st);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  st.eval_depth = st.eval_depth + 1 | 0;
  if (st.eval_depth > 128) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("evaluation depth budget"));
  }
  const _defer = () => {
    st.eval_depth = st.eval_depth - 1 | 0;
  };
  let _err;
  _L: {
    let _defer_result;
    let name;
    let args;
    _L$2: {
      _L$3: {
        let left;
        let op;
        let right;
        _L$4: {
          _L$5: {
            let left$2;
            let op$2;
            let right$2;
            _L$6: {
              _L$7: {
                let left$3;
                let name$2;
                _L$8: {
                  _L$9: {
                    let left$4;
                    let right$3;
                    _L$10: {
                      _L$11: {
                        let left$5;
                        let right$4;
                        _L$12: {
                          _L$13: {
                            let yes;
                            let condition;
                            let no;
                            _L$14: {
                              _L$15: {
                                let delta;
                                let target;
                                let prefix;
                                _L$16: {
                                  _L$17: {
                                    let target$2;
                                    let op$3;
                                    let expr$2;
                                    _L$18: {
                                      _L$19: {
                                        let op$4;
                                        let child;
                                        _L$20: {
                                          _L$21: {
                                            _L$22: {
                                              _L$23: {
                                                let name$3;
                                                _L$24: {
                                                  _L$25: {
                                                    let pattern;
                                                    _L$26: {
                                                      _L$27: {
                                                        let target$3;
                                                        let source;
                                                        _L$28: {
                                                          _L$29: {
                                                            switch (expr.$tag) {
                                                              case 13: {
                                                                const _Getline = expr;
                                                                const _target = _Getline._0;
                                                                const _source = _Getline._1;
                                                                target$3 = _target;
                                                                source = _source;
                                                                break _L$29;
                                                              }
                                                              case 0: {
                                                                const _Literal = expr;
                                                                const _v = _Literal._0;
                                                                _defer_result = _v;
                                                                break;
                                                              }
                                                              case 1: {
                                                                const _RegexLiteral = expr;
                                                                const _pattern = _RegexLiteral._0;
                                                                pattern = _pattern;
                                                                break _L$27;
                                                              }
                                                              case 4: {
                                                                const _NamedField = expr;
                                                                const _name = _NamedField._0;
                                                                name$3 = _name;
                                                                break _L$25;
                                                              }
                                                              case 2: {
                                                                break _L$23;
                                                              }
                                                              case 3: {
                                                                break _L$23;
                                                              }
                                                              case 5: {
                                                                break _L$23;
                                                              }
                                                              case 6: {
                                                                _err = new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("tuple is only supported with in");
                                                                break _L;
                                                              }
                                                              case 7: {
                                                                const _Unary = expr;
                                                                const _op = _Unary._0;
                                                                const _child = _Unary._1;
                                                                op$4 = _op;
                                                                child = _child;
                                                                break _L$21;
                                                              }
                                                              case 9: {
                                                                const _Assign = expr;
                                                                const _op$2 = _Assign._0;
                                                                const _target$2 = _Assign._1;
                                                                const _expr = _Assign._2;
                                                                target$2 = _target$2;
                                                                op$3 = _op$2;
                                                                expr$2 = _expr;
                                                                break _L$19;
                                                              }
                                                              case 10: {
                                                                const _Increment = expr;
                                                                const _target$3 = _Increment._0;
                                                                const _delta = _Increment._1;
                                                                const _prefix = _Increment._2;
                                                                delta = _delta;
                                                                target = _target$3;
                                                                prefix = _prefix;
                                                                break _L$17;
                                                              }
                                                              case 11: {
                                                                const _Conditional = expr;
                                                                const _condition = _Conditional._0;
                                                                const _yes = _Conditional._1;
                                                                const _no = _Conditional._2;
                                                                yes = _yes;
                                                                condition = _condition;
                                                                no = _no;
                                                                break _L$15;
                                                              }
                                                              case 8: {
                                                                const _Binary = expr;
                                                                const _x = _Binary._0;
                                                                switch (_x) {
                                                                  case "&&": {
                                                                    const _left = _Binary._1;
                                                                    const _right = _Binary._2;
                                                                    left$5 = _left;
                                                                    right$4 = _right;
                                                                    break _L$13;
                                                                  }
                                                                  case "||": {
                                                                    const _left$2 = _Binary._1;
                                                                    const _right$2 = _Binary._2;
                                                                    left$4 = _left$2;
                                                                    right$3 = _right$2;
                                                                    break _L$11;
                                                                  }
                                                                  case "in": {
                                                                    const _left$3 = _Binary._1;
                                                                    const _x$2 = _Binary._2;
                                                                    if (_x$2.$tag === 2) {
                                                                      const _Variable = _x$2;
                                                                      const _name$2 = _Variable._0;
                                                                      left$3 = _left$3;
                                                                      name$2 = _name$2;
                                                                      break _L$9;
                                                                    } else {
                                                                      _err = new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("in requires an array name");
                                                                      break _L;
                                                                    }
                                                                  }
                                                                  case "~": {
                                                                    const _left$4 = _Binary._1;
                                                                    const _right$3 = _Binary._2;
                                                                    left$2 = _left$4;
                                                                    op$2 = _x;
                                                                    right$2 = _right$3;
                                                                    break _L$7;
                                                                  }
                                                                  case "!~": {
                                                                    const _left$5 = _Binary._1;
                                                                    const _right$4 = _Binary._2;
                                                                    left$2 = _left$5;
                                                                    op$2 = _x;
                                                                    right$2 = _right$4;
                                                                    break _L$7;
                                                                  }
                                                                  default: {
                                                                    const _left$6 = _Binary._1;
                                                                    const _right$5 = _Binary._2;
                                                                    left = _left$6;
                                                                    op = _x;
                                                                    right = _right$5;
                                                                    break _L$5;
                                                                  }
                                                                }
                                                              }
                                                              default: {
                                                                const _Call = expr;
                                                                const _name$2 = _Call._0;
                                                                const _args = _Call._1;
                                                                name = _name$2;
                                                                args = _args;
                                                                break _L$3;
                                                              }
                                                            }
                                                            break _L$28;
                                                          }
                                                          let location;
                                                          let e;
                                                          _L$30: {
                                                            _L$31: {
                                                              let index;
                                                              _L$32: {
                                                                _L$33: {
                                                                  if (target$3 === undefined) {
                                                                    location = undefined;
                                                                  } else {
                                                                    const _Some = target$3;
                                                                    const _x = _Some;
                                                                    if (_x.$tag === 3) {
                                                                      const _Field = _x;
                                                                      const _index = _Field._0;
                                                                      index = _index;
                                                                      break _L$33;
                                                                    } else {
                                                                      e = _x;
                                                                      break _L$31;
                                                                    }
                                                                  }
                                                                  break _L$32;
                                                                }
                                                                const _bind$3 = _M0FP211localreview3awk8evaluate(index, st);
                                                                if (_bind$3.$tag === 1) {
                                                                  const _ok = _bind$3;
                                                                  _ok._0;
                                                                } else {
                                                                  const _err$2 = _bind$3;
                                                                  _err = _err$2._0;
                                                                  break _L;
                                                                }
                                                                location = new _M0DTP211localreview3awk4Slot9FieldSlot(0);
                                                              }
                                                              break _L$30;
                                                            }
                                                            const _bind$3 = _M0FP211localreview3awk4slot(e, st);
                                                            if (_bind$3.$tag === 1) {
                                                              const _ok = _bind$3;
                                                              location = _ok._0;
                                                            } else {
                                                              const _err$2 = _bind$3;
                                                              _err = _err$2._0;
                                                              break _L;
                                                            }
                                                          }
                                                          const _bind$3 = _M0MPC16option6Option3mapGUbRP211localreview3awk4ExprEUbsEEHRPC15error5Error(source, (pair) => {
                                                            let pipe;
                                                            let expr$3;
                                                            _L$31: {
                                                              const _pipe = pair._0;
                                                              const _expr = pair._1;
                                                              pipe = _pipe;
                                                              expr$3 = _expr;
                                                              break _L$31;
                                                            }
                                                            const _bind$4 = _M0FP211localreview3awk8evaluate(expr$3, st);
                                                            let _tmp;
                                                            if (_bind$4.$tag === 1) {
                                                              const _ok = _bind$4;
                                                              _tmp = _ok._0;
                                                            } else {
                                                              return _bind$4;
                                                            }
                                                            const _bind$5 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
                                                            let _tmp$2;
                                                            if (_bind$5.$tag === 1) {
                                                              const _ok = _bind$5;
                                                              _tmp$2 = _ok._0;
                                                            } else {
                                                              return _bind$5;
                                                            }
                                                            return new _M0DTPC16result6ResultGUbsERPC15error5ErrorE2Ok({ _0: pipe, _1: _tmp$2 });
                                                          });
                                                          let source$2;
                                                          if (_bind$3.$tag === 1) {
                                                            const _ok = _bind$3;
                                                            source$2 = _ok._0;
                                                          } else {
                                                            const _err$2 = _bind$3;
                                                            _err = _err$2._0;
                                                            break _L;
                                                          }
                                                          let _try_err;
                                                          _L$31: {
                                                            _L$32: {
                                                              let record;
                                                              let pipe;
                                                              let name$4;
                                                              _L$33: {
                                                                _L$34: {
                                                                  if (source$2 === undefined) {
                                                                    const _bind$4 = _M0MP211localreview3awk5State11take__input(st);
                                                                    if (_bind$4.$tag === 1) {
                                                                      const _ok = _bind$4;
                                                                      record = _ok._0;
                                                                    } else {
                                                                      const _err$2 = _bind$4;
                                                                      _try_err = _err$2._0;
                                                                      break _L$32;
                                                                    }
                                                                  } else {
                                                                    const _Some = source$2;
                                                                    const _x = _Some;
                                                                    const _pipe = _x._0;
                                                                    const _name = _x._1;
                                                                    pipe = _pipe;
                                                                    name$4 = _name;
                                                                    break _L$34;
                                                                  }
                                                                  break _L$33;
                                                                }
                                                                const _bind$4 = _M0MP211localreview3awk5State14read__redirect(st, name$4, pipe);
                                                                if (_bind$4.$tag === 1) {
                                                                  const _ok = _bind$4;
                                                                  record = _ok._0;
                                                                } else {
                                                                  const _err$2 = _bind$4;
                                                                  _try_err = _err$2._0;
                                                                  break _L$32;
                                                                }
                                                              }
                                                              let text;
                                                              _L$34: {
                                                                _L$35: {
                                                                  if (record === undefined) {
                                                                    _defer_result = new _M0DTP211localreview3awk5Value6Number(0);
                                                                  } else {
                                                                    const _Some = record;
                                                                    const _text = _Some;
                                                                    text = _text;
                                                                    break _L$35;
                                                                  }
                                                                  break _L$34;
                                                                }
                                                                let location$2;
                                                                _L$36: {
                                                                  _L$37: {
                                                                    if (location === undefined) {
                                                                      const _bind$4 = _M0MP211localreview3awk5State19set__record_2einner(st, text, false);
                                                                      if (_bind$4.$tag === 1) {
                                                                        const _ok = _bind$4;
                                                                        _ok._0;
                                                                      } else {
                                                                        const _err$2 = _bind$4;
                                                                        _try_err = _err$2._0;
                                                                        break _L$32;
                                                                      }
                                                                    } else {
                                                                      const _Some = location;
                                                                      const _x = _Some;
                                                                      if (_x.$tag === 1) {
                                                                        const _bind$4 = _M0MP211localreview3awk5State19set__record_2einner(st, text, true);
                                                                        if (_bind$4.$tag === 1) {
                                                                          const _ok = _bind$4;
                                                                          _ok._0;
                                                                        } else {
                                                                          const _err$2 = _bind$4;
                                                                          _try_err = _err$2._0;
                                                                          break _L$32;
                                                                        }
                                                                      } else {
                                                                        location$2 = _x;
                                                                        break _L$37;
                                                                      }
                                                                    }
                                                                    break _L$36;
                                                                  }
                                                                  const _bind$4 = _M0MP211localreview3awk5State13write_2einner(st, location$2, _M0FP211localreview3awk12input__value(text), false);
                                                                  if (_bind$4.$tag === 1) {
                                                                    const _ok = _bind$4;
                                                                    _ok._0;
                                                                  } else {
                                                                    const _err$2 = _bind$4;
                                                                    _try_err = _err$2._0;
                                                                    break _L$32;
                                                                  }
                                                                }
                                                                _defer_result = new _M0DTP211localreview3awk5Value6Number(1);
                                                              }
                                                              break _L$31;
                                                            }
                                                            let e$2;
                                                            _L$33: {
                                                              _L$34: {
                                                                if (_try_err.$tag === 0) {
                                                                  _defer_result = new _M0DTP211localreview3awk5Value6Number(-1);
                                                                } else {
                                                                  e$2 = _try_err;
                                                                  break _L$34;
                                                                }
                                                                break _L$33;
                                                              }
                                                              _err = e$2;
                                                              break _L;
                                                            }
                                                          }
                                                        }
                                                        break _L$26;
                                                      }
                                                      const _bind$3 = _M0MP211localreview3awk5State5regex(st, pattern);
                                                      let _tmp;
                                                      if (_bind$3.$tag === 1) {
                                                        const _ok = _bind$3;
                                                        _tmp = _ok._0;
                                                      } else {
                                                        const _err$2 = _bind$3;
                                                        _err = _err$2._0;
                                                        break _L;
                                                      }
                                                      const _bind$4 = _M0FP211localreview3awk20regex__match_2einner(_tmp, _M0MPC16string6String9to__array(st.record), 0, st, 0);
                                                      let _tmp$2;
                                                      if (_bind$4.$tag === 1) {
                                                        const _ok = _bind$4;
                                                        _tmp$2 = _ok._0;
                                                      } else {
                                                        const _err$2 = _bind$4;
                                                        _err = _err$2._0;
                                                        break _L;
                                                      }
                                                      _defer_result = _M0FP211localreview3awk7boolean(_M0IP016_24default__implPB2Eq10not__equalGOUiiEE(_tmp$2, undefined));
                                                    }
                                                    break _L$24;
                                                  }
                                                  const _bind$3 = _M0FP211localreview3awk8evaluate(name$3, st);
                                                  let _tmp;
                                                  if (_bind$3.$tag === 1) {
                                                    const _ok = _bind$3;
                                                    _tmp = _ok._0;
                                                  } else {
                                                    const _err$2 = _bind$3;
                                                    _err = _err$2._0;
                                                    break _L;
                                                  }
                                                  const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
                                                  let _tmp$2;
                                                  if (_bind$4.$tag === 1) {
                                                    const _ok = _bind$4;
                                                    _tmp$2 = _ok._0;
                                                  } else {
                                                    const _err$2 = _bind$4;
                                                    _err = _err$2._0;
                                                    break _L;
                                                  }
                                                  const _bind$5 = _M0MP211localreview3awk5State12named__field(st, _tmp$2);
                                                  if (_bind$5.$tag === 1) {
                                                    const _ok = _bind$5;
                                                    _defer_result = _ok._0;
                                                  } else {
                                                    const _err$2 = _bind$5;
                                                    _err = _err$2._0;
                                                    break _L;
                                                  }
                                                }
                                                break _L$22;
                                              }
                                              const _bind$3 = _M0FP211localreview3awk4slot(expr, st);
                                              let _tmp;
                                              if (_bind$3.$tag === 1) {
                                                const _ok = _bind$3;
                                                _tmp = _ok._0;
                                              } else {
                                                const _err$2 = _bind$3;
                                                _err = _err$2._0;
                                                break _L;
                                              }
                                              const _bind$4 = _M0MP211localreview3awk5State4read(st, _tmp);
                                              if (_bind$4.$tag === 1) {
                                                const _ok = _bind$4;
                                                _defer_result = _ok._0;
                                              } else {
                                                const _err$2 = _bind$4;
                                                _err = _err$2._0;
                                                break _L;
                                              }
                                            }
                                            break _L$20;
                                          }
                                          const _bind$3 = _M0FP211localreview3awk8evaluate(child, st);
                                          let v;
                                          if (_bind$3.$tag === 1) {
                                            const _ok = _bind$3;
                                            v = _ok._0;
                                          } else {
                                            const _err$2 = _bind$3;
                                            _err = _err$2._0;
                                            break _L;
                                          }
                                          _defer_result = op$4 === "!" ? _M0FP211localreview3awk7boolean(!_M0MP211localreview3awk5Value5truth(v)) : _M0FP211localreview3awk6finite((op$4 === "-" ? -1 : 1) * _M0MP211localreview3awk5Value6number(v));
                                        }
                                        break _L$18;
                                      }
                                      const _bind$3 = _M0FP211localreview3awk4slot(target$2, st);
                                      let location;
                                      if (_bind$3.$tag === 1) {
                                        const _ok = _bind$3;
                                        location = _ok._0;
                                      } else {
                                        const _err$2 = _bind$3;
                                        _err = _err$2._0;
                                        break _L;
                                      }
                                      const _bind$4 = _M0FP211localreview3awk8evaluate(expr$2, st);
                                      let right$5;
                                      if (_bind$4.$tag === 1) {
                                        const _ok = _bind$4;
                                        right$5 = _ok._0;
                                      } else {
                                        const _err$2 = _bind$4;
                                        _err = _err$2._0;
                                        break _L;
                                      }
                                      let value;
                                      if (op$3 === "=") {
                                        value = right$5;
                                      } else {
                                        const _bind$5 = _M0MP211localreview3awk5State4read(st, location);
                                        let _tmp;
                                        if (_bind$5.$tag === 1) {
                                          const _ok = _bind$5;
                                          _tmp = _ok._0;
                                        } else {
                                          const _err$2 = _bind$5;
                                          _err = _err$2._0;
                                          break _L;
                                        }
                                        const _bind$6 = _M0FP211localreview3awk9calculate(op$3, _tmp, right$5, st);
                                        if (_bind$6.$tag === 1) {
                                          const _ok = _bind$6;
                                          value = _ok._0;
                                        } else {
                                          const _err$2 = _bind$6;
                                          _err = _err$2._0;
                                          break _L;
                                        }
                                      }
                                      const _bind$5 = _M0MP211localreview3awk5State13write_2einner(st, location, value, false);
                                      if (_bind$5.$tag === 1) {
                                        const _ok = _bind$5;
                                        _ok._0;
                                      } else {
                                        const _err$2 = _bind$5;
                                        _err = _err$2._0;
                                        break _L;
                                      }
                                      _defer_result = value;
                                    }
                                    break _L$16;
                                  }
                                  const _bind$3 = _M0FP211localreview3awk4slot(target, st);
                                  let location;
                                  if (_bind$3.$tag === 1) {
                                    const _ok = _bind$3;
                                    location = _ok._0;
                                  } else {
                                    const _err$2 = _bind$3;
                                    _err = _err$2._0;
                                    break _L;
                                  }
                                  const _bind$4 = _M0MP211localreview3awk5State4read(st, location);
                                  let _tmp;
                                  if (_bind$4.$tag === 1) {
                                    const _ok = _bind$4;
                                    _tmp = _ok._0;
                                  } else {
                                    const _err$2 = _bind$4;
                                    _err = _err$2._0;
                                    break _L;
                                  }
                                  const before = _M0FP211localreview3awk6finite(_M0MP211localreview3awk5Value6number(_tmp));
                                  const _bind$5 = _M0FP211localreview3awk9calculate("+", before, new _M0DTP211localreview3awk5Value6Number(delta + 0), st);
                                  let after;
                                  if (_bind$5.$tag === 1) {
                                    const _ok = _bind$5;
                                    after = _ok._0;
                                  } else {
                                    const _err$2 = _bind$5;
                                    _err = _err$2._0;
                                    break _L;
                                  }
                                  const _bind$6 = _M0MP211localreview3awk5State13write_2einner(st, location, after, false);
                                  if (_bind$6.$tag === 1) {
                                    const _ok = _bind$6;
                                    _ok._0;
                                  } else {
                                    const _err$2 = _bind$6;
                                    _err = _err$2._0;
                                    break _L;
                                  }
                                  _defer_result = prefix ? after : before;
                                }
                                break _L$14;
                              }
                              let _tmp;
                              const _bind$3 = _M0FP211localreview3awk8evaluate(condition, st);
                              let _tmp$2;
                              if (_bind$3.$tag === 1) {
                                const _ok = _bind$3;
                                _tmp$2 = _ok._0;
                              } else {
                                const _err$2 = _bind$3;
                                _err = _err$2._0;
                                break _L;
                              }
                              if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                                _tmp = yes;
                              } else {
                                _tmp = no;
                              }
                              const _bind$4 = _M0FP211localreview3awk8evaluate(_tmp, st);
                              if (_bind$4.$tag === 1) {
                                const _ok = _bind$4;
                                _defer_result = _ok._0;
                              } else {
                                const _err$2 = _bind$4;
                                _err = _err$2._0;
                                break _L;
                              }
                            }
                            break _L$12;
                          }
                          let _tmp;
                          const _bind$3 = _M0FP211localreview3awk8evaluate(left$5, st);
                          let _tmp$2;
                          if (_bind$3.$tag === 1) {
                            const _ok = _bind$3;
                            _tmp$2 = _ok._0;
                          } else {
                            const _err$2 = _bind$3;
                            _err = _err$2._0;
                            break _L;
                          }
                          if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                            const _bind$4 = _M0FP211localreview3awk8evaluate(right$4, st);
                            let _tmp$3;
                            if (_bind$4.$tag === 1) {
                              const _ok = _bind$4;
                              _tmp$3 = _ok._0;
                            } else {
                              const _err$2 = _bind$4;
                              _err = _err$2._0;
                              break _L;
                            }
                            _tmp = _M0MP211localreview3awk5Value5truth(_tmp$3);
                          } else {
                            _tmp = false;
                          }
                          _defer_result = _M0FP211localreview3awk7boolean(_tmp);
                        }
                        break _L$10;
                      }
                      let _tmp;
                      const _bind$3 = _M0FP211localreview3awk8evaluate(left$4, st);
                      let _tmp$2;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _tmp$2 = _ok._0;
                      } else {
                        const _err$2 = _bind$3;
                        _err = _err$2._0;
                        break _L;
                      }
                      if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                        _tmp = true;
                      } else {
                        const _bind$4 = _M0FP211localreview3awk8evaluate(right$3, st);
                        let _tmp$3;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _tmp$3 = _ok._0;
                        } else {
                          const _err$2 = _bind$4;
                          _err = _err$2._0;
                          break _L;
                        }
                        _tmp = _M0MP211localreview3awk5Value5truth(_tmp$3);
                      }
                      _defer_result = _M0FP211localreview3awk7boolean(_tmp);
                    }
                    break _L$8;
                  }
                  let key;
                  let keys;
                  _L$10: {
                    _L$11: {
                      if (left$3.$tag === 6) {
                        const _Tuple = left$3;
                        const _keys = _Tuple._0;
                        keys = _keys;
                        break _L$11;
                      } else {
                        const _bind$3 = _M0FP211localreview3awk8evaluate(left$3, st);
                        let _tmp;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _tmp = _ok._0;
                        } else {
                          const _err$2 = _bind$3;
                          _err = _err$2._0;
                          break _L;
                        }
                        const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          key = _ok._0;
                        } else {
                          const _err$2 = _bind$4;
                          _err = _err$2._0;
                          break _L;
                        }
                      }
                      break _L$10;
                    }
                    const _bind$3 = _M0FP211localreview3awk10array__key(keys, st);
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      key = _ok._0;
                    } else {
                      const _err$2 = _bind$3;
                      _err = _err$2._0;
                      break _L;
                    }
                  }
                  const _bind$3 = _M0MP211localreview3awk5State5array(st, name$2);
                  let _tmp;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp = _ok._0;
                  } else {
                    const _err$2 = _bind$3;
                    _err = _err$2._0;
                    break _L;
                  }
                  _defer_result = _M0FP211localreview3awk7boolean(_M0MPB3Map8containsGsRP211localreview3awk5ValueE(_tmp, key));
                }
                break _L$6;
              }
              const _bind$3 = _M0FP211localreview3awk8evaluate(left$2, st);
              let _tmp;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp = _ok._0;
              } else {
                const _err$2 = _bind$3;
                _err = _err$2._0;
                break _L;
              }
              const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
              let text;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                text = _ok._0;
              } else {
                const _err$2 = _bind$4;
                _err = _err$2._0;
                break _L;
              }
              const _bind$5 = _M0FP211localreview3awk14regex__pattern(right$2, st);
              let pattern;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                pattern = _ok._0;
              } else {
                const _err$2 = _bind$5;
                _err = _err$2._0;
                break _L;
              }
              const _bind$6 = _M0MP211localreview3awk5State5regex(st, pattern);
              let _tmp$2;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp$2 = _ok._0;
              } else {
                const _err$2 = _bind$6;
                _err = _err$2._0;
                break _L;
              }
              const _bind$7 = _M0FP211localreview3awk20regex__match_2einner(_tmp$2, _M0MPC16string6String9to__array(text), 0, st, 0);
              let _tmp$3;
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _tmp$3 = _ok._0;
              } else {
                const _err$2 = _bind$7;
                _err = _err$2._0;
                break _L;
              }
              _defer_result = _M0FP211localreview3awk7boolean(_M0IP016_24default__implPB2Eq10not__equalGOUiiEE(_tmp$3, undefined) === (op$2 === "~"));
            }
            break _L$4;
          }
          const _bind$3 = _M0FP211localreview3awk8evaluate(left, st);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            const _err$2 = _bind$3;
            _err = _err$2._0;
            break _L;
          }
          const _tmp$2 = _tmp;
          const _bind$4 = _M0FP211localreview3awk8evaluate(right, st);
          let _tmp$3;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            const _err$2 = _bind$4;
            _err = _err$2._0;
            break _L;
          }
          const _bind$5 = _M0FP211localreview3awk9calculate(op, _tmp$2, _tmp$3, st);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _defer_result = _ok._0;
          } else {
            const _err$2 = _bind$5;
            _err = _err$2._0;
            break _L;
          }
        }
        break _L$2;
      }
      if (_M0MPB3Map8containsGsRP211localreview3awk11FunctionDefE(st.functions, name)) {
        const _bind$3 = _M0FP211localreview3awk14call__function(name, args, st);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _defer_result = _ok._0;
        } else {
          const _err$2 = _bind$3;
          _err = _err$2._0;
          break _L;
        }
      } else {
        const _bind$3 = _M0FP211localreview3awk7builtin(name, args, st);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _defer_result = _ok._0;
        } else {
          const _err$2 = _bind$3;
          _err = _err$2._0;
          break _L;
        }
      }
    }
    _defer();
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_defer_result);
  }
  _defer();
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE3Err(_err);
}
function _M0FP211localreview3awk7builtin(name, args, st) {
  if (name === "close") {
    const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk5State13close__stream(st, _tmp$2);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_tmp$3 + 0));
  }
  if (name === "fflush") {
    let stream;
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
      stream = "";
    } else {
      const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        stream = _ok._0;
      } else {
        return _bind$3;
      }
    }
    const _bind$2 = _M0MP211localreview3awk5State13flush__stream(st, stream);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_tmp + 0));
  }
  if (name === "system") {
    const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
    let command;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      command = _ok._0;
    } else {
      return _bind$3;
    }
    let _tmp$2;
    let code;
    _L: {
      _L$2: {
        const _bind$4 = _M0MP211localreview3awk5State8io__call(st, new _M0DTP211localreview3awk9IORequest7Execute(command));
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        switch (_bind$5.$tag) {
          case 3: {
            const _IOStatus = _bind$5;
            const _code = _IOStatus._0;
            code = _code;
            break _L$2;
          }
          case 4: {
            _tmp$2 = new _M0DTP211localreview3awk5Value6Number(-1);
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid system reply"));
          }
        }
        break _L;
      }
      _tmp$2 = new _M0DTP211localreview3awk5Value6Number(code + 0);
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_tmp$2);
  }
  if (name === "rand") {
    if (2147483647n === 0n) {
      $panic();
    }
    st.random_state = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, st.random_state * 48271n)) % BigInt.asIntN(64, 2147483647n));
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number($f64_convert_i64(BigInt.asIntN(64, st.random_state)) / 2147483647));
  }
  if (name === "srand") {
    const old = st.random_seed;
    let seed;
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
      seed = _M0MPC16double6Double5trunc(st.clock_seconds);
    } else {
      const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      seed = _M0MP211localreview3awk5Value6number(_tmp);
    }
    st.random_seed = seed;
    const normalized = Math.abs(_M0IPC16double6DoublePB3Mod3mod(_M0MPC16double6Double5trunc(seed), 2147483646));
    st.random_state = _M0MPC16double6Double7is__nan(normalized) || _M0MPC16double6Double7is__inf(normalized) ? 1n : BigInt.asUintN(64, $i64_trunc_f64(normalized) + 1n);
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(old));
  }
  if (name === "match") {
    if (args.length !== 2) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("match arguments"));
    }
    const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
    let text;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      text = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP211localreview3awk14regex__pattern(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 1), st);
    let pattern;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      pattern = _ok._0;
    } else {
      return _bind$4;
    }
    let start;
    let length;
    _L: {
      let a;
      let b;
      _L$2: {
        const _bind$5 = _M0MP211localreview3awk5State5regex(st, pattern);
        let _tmp$2;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$2 = _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0FP211localreview3awk20regex__match_2einner(_tmp$2, _M0MPC16string6String9to__array(text), 0, st, 0);
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          return _bind$6;
        }
        if (_bind$7 === undefined) {
          start = 0;
          length = -1;
          break _L;
        } else {
          const _Some = _bind$7;
          const _x = _Some;
          const _a = _x._0;
          const _b = _x._1;
          a = _a;
          b = _b;
          break _L$2;
        }
      }
      start = a + 1 | 0;
      length = b - a | 0;
      break _L;
    }
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RSTART", new _M0DTP211localreview3awk5Value6Number(start + 0));
    _M0MPB3Map3setGsRP211localreview3awk5ValueE(st.vars, "RLENGTH", new _M0DTP211localreview3awk5Value6Number(length + 0));
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(start + 0));
  }
  if (name === "sub" || name === "gsub") {
    const _bind$2 = _M0FP211localreview3awk10substitute(args, st, name === "gsub");
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_tmp);
  }
  if (name === "split") {
    if (args.length < 2 || args.length > 3) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("split arguments"));
    }
    const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
    let text;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      text = _ok._0;
    } else {
      return _bind$3;
    }
    let array;
    const _bind$4 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, 1);
    if (_bind$4.$tag === 2) {
      const _Variable = _bind$4;
      const _name = _Variable._0;
      array = _name;
    } else {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("split requires array name"));
    }
    let sep;
    if (args.length === 3) {
      const _bind$5 = _M0FP211localreview3awk14regex__pattern(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 2), st);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        sep = _ok._0;
      } else {
        return _bind$5;
      }
    } else {
      const _bind$5 = _M0MP211localreview3awk5State8variable(st, "FS");
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      const _bind$6 = _M0MP211localreview3awk5State12text_2einner(st, _tmp$2, false);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        sep = _ok._0;
      } else {
        return _bind$6;
      }
    }
    let fields;
    _L: {
      _L$2: {
        if (args.length === 2) {
          let mode;
          _L$3: {
            const _bind$5 = st.input_mode;
            if (_bind$5 === undefined) {
              break _L$2;
            } else {
              const _Some = _bind$5;
              const _mode = _Some;
              mode = _mode;
              break _L$3;
            }
          }
          const _bind$5 = _M0FP211localreview3awk11csv__fields(text, mode, st);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            fields = _ok._0;
          } else {
            return _bind$5;
          }
        } else {
          break _L$2;
        }
        break _L;
      }
      let _tmp$2;
      if (args.length === 3) {
        const _bind$5 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, 2);
        let _tmp$3;
        if (_bind$5.$tag === 1) {
          _tmp$3 = true;
        } else {
          _tmp$3 = false;
        }
        _tmp$2 = _tmp$3;
      } else {
        _tmp$2 = false;
      }
      const _bind$5 = _M0FP211localreview3awk21split__fields_2einner(text, sep, st, _tmp$2);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        fields = _ok._0;
      } else {
        return _bind$5;
      }
    }
    const _bind$5 = _M0MP211localreview3awk5State5array(st, array);
    let dest;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      dest = _ok._0;
    } else {
      return _bind$5;
    }
    st.entries = st.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(dest) | 0;
    _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(dest);
    const _bind$6 = fields.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$6) {
        const field = fields[i];
        const _bind$7 = _M0MP211localreview3awk5State12put__element(st, array, _M0MPC13int3Int18to__string_2einner(i + 1 | 0, 10), field);
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          return _bind$7;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(fields.length + 0));
  }
  if (name === "length") {
    if (args.length === 1) {
      let array;
      _L: {
        _L$2: {
          const _bind$2 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, 0);
          if (_bind$2.$tag === 2) {
            const _Variable = _bind$2;
            const _array = _Variable._0;
            array = _array;
            break _L$2;
          }
          break _L;
        }
        if (_M0MP211localreview3awk5State10has__array(st, array)) {
          const _bind$2 = _M0MP211localreview3awk5State5array(st, array);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_M0MPB3Map6lengthGsRP211localreview3awk5ValueE(_tmp) + 0));
        }
      }
    }
  }
  if (name === "length") {
    if (args.length > 1) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("length arguments"));
    }
    let text;
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
      text = st.record;
    } else {
      const _bind$2 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        text = _ok._0;
      } else {
        return _bind$3;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_M0MPC16string6String9to__array(text).length + 0));
  }
  const values = [];
  const _bind$2 = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const arg = args[_];
      const _bind$3 = _M0FP211localreview3awk8evaluate(arg, st);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(values, _tmp$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (name === "sprintf") {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(values)) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("sprintf requires a format"));
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP211localreview3awk22format__values_2einner(_tmp$2, _M0MPC15array9ArrayView9to__ownedGRP211localreview3awk5ValueE(_M0MPC15array5Array12view_2einnerGRP211localreview3awk5ValueE(values, 1, undefined)), st, false);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_tmp$3));
  }
  if (name === "substr") {
    if (values.length < 2 || values.length > 3) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("substr arguments"));
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    const cs = _M0MPC16string6String9to__array(_tmp$2);
    const start_number = _M0MPC16double6Double5trunc(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 1)));
    const start = start_number < 1 ? 0 : start_number > cs.length + 0 ? cs.length : _M0MPC16double6Double7to__int(start_number) - 1 | 0;
    const available = cs.length - start | 0;
    const requested = values.length === 3 ? _M0MPC16double6Double5trunc(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 2))) : available + 0;
    const length = requested < 0 ? 0 : requested > available + 0 ? available : _M0MPC16double6Double7to__int(requested);
    const _tmp$3 = _M0MPC15array5Array3mapGcsE(_M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(cs, start, start + length | 0)), (c) => _M0IPC14char4CharPB4Show10to__string(c));
    const _bind$4 = "";
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))));
  }
  if (name === "index") {
    if (values.length !== 2) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("index arguments"));
    }
    const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
    let text;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      text = _ok._0;
    } else {
      return _bind$3;
    }
    let _tmp$2;
    let i;
    _L: {
      _L$2: {
        const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 1), false);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$6 = _M0MPC16string6String4find(text, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
        if (_bind$6 === undefined) {
          _tmp$2 = 0;
        } else {
          const _Some = _bind$6;
          const _i = _Some;
          i = _i;
          break _L$2;
        }
        break _L;
      }
      _tmp$2 = (_M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(text, 0, i))).length + 1 | 0) + 0;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_tmp$2));
  }
  if (name === "atan2") {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0FPC14math5atan2(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)), _M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 1)))));
  }
  if (values.length !== 1) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`${name} requires one argument`));
  }
  switch (name) {
    case "int": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0MPC16double6Double5trunc(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "sqrt": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(Math.sqrt(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "sin": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0FPC14math3sin(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "cos": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0FPC14math3cos(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "exp": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0FPC14math3exp(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "log": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_M0FP211localreview3awk6finite(_M0FPC14math2ln(_M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "tolower": {
      const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String9to__lower(_tmp$2)));
    }
    case "toupper": {
      const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0), false);
      let _tmp$3;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$3 = _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String9to__upper(_tmp$3)));
    }
    default: {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported function ${name}`));
    }
  }
}
function _M0FP211localreview3awk14regex__pattern(expr, st) {
  let pattern;
  _L: {
    if (expr.$tag === 1) {
      const _RegexLiteral = expr;
      const _pattern = _RegexLiteral._0;
      pattern = _pattern;
      break _L;
    } else {
      const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
    }
  }
  return new _M0DTPC16result6ResultGsRPC15error5ErrorE2Ok(pattern);
}
function _M0FP211localreview3awk10substitute(args, st, global) {
  if (args.length < 2 || args.length > 3) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("substitution arguments"));
  }
  const _bind$2 = _M0FP211localreview3awk14regex__pattern(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
  let pattern;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    pattern = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 1), st);
  let _tmp;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
  let replacement;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    replacement = _ok._0;
  } else {
    return _bind$4;
  }
  let target;
  if (args.length === 3) {
    const _bind$5 = _M0FP211localreview3awk4slot(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 2), st);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      target = _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    target = new _M0DTP211localreview3awk4Slot9FieldSlot(0);
  }
  const _bind$5 = _M0MP211localreview3awk5State4read(st, target);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP211localreview3awk5State12text_2einner(st, _tmp$2, false);
  let _tmp$3;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _tmp$3 = _ok._0;
  } else {
    return _bind$6;
  }
  const chars = _M0MPC16string6String9to__array(_tmp$3);
  const _bind$7 = _M0MP211localreview3awk5State5regex(st, pattern);
  let regex;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    regex = _ok._0;
  } else {
    return _bind$7;
  }
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const from = new _M0TPB8MutLocalGiE(0);
  const copied = new _M0TPB8MutLocalGiE(0);
  const count = new _M0TPB8MutLocalGiE(0);
  const last_nonempty_end = new _M0TPB8MutLocalGiE(-1);
  const size = new _M0TPB8MutLocalGiE(0);
  const add = (s) => {
    size.val = size.val + s.length | 0;
    if (size.val > 1000000) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("substitution output limit"));
    }
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0IPB13StringBuilderPB6Logger13write__string(out, s));
  };
  while (true) {
    if (from.val <= chars.length) {
      let a;
      let b;
      _L: {
        const _bind$8 = _M0FP211localreview3awk20regex__match_2einner(regex, chars, from.val, st, 0);
        let _bind$9;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _bind$9 = _ok._0;
        } else {
          return _bind$8;
        }
        if (_bind$9 === undefined) {
          break;
        } else {
          const _Some = _bind$9;
          const _x = _Some;
          const _a = _x._0;
          const _b = _x._1;
          a = _a;
          b = _b;
          break _L;
        }
      }
      if (a === b && a === last_nonempty_end.val) {
        from.val = a + 1 | 0;
        continue;
      }
      const _bind$8 = add(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, copied.val, a)));
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _ok._0;
      } else {
        return _bind$8;
      }
      const _bind$9 = add(_M0FP211localreview3awk17replacement__text(replacement, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, a, b))));
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        return _bind$9;
      }
      copied.val = b;
      count.val = count.val + 1 | 0;
      if (!global) {
        break;
      }
      if (a === b) {
        from.val = b + 1 | 0;
      } else {
        from.val = b;
        last_nonempty_end.val = b;
      }
      continue;
    } else {
      break;
    }
  }
  if (count.val > 0) {
    const _bind$8 = add(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, copied.val, undefined)));
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _ok._0;
    } else {
      return _bind$8;
    }
    const _bind$9 = _M0MP211localreview3awk5State13write_2einner(st, target, new _M0DTP211localreview3awk5Value4Text(_M0MPB13StringBuilder10to__string(out)), false);
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      _ok._0;
    } else {
      return _bind$9;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(count.val + 0));
}
function _M0FP211localreview3awk4slot(expr, st) {
  let name;
  let keys;
  _L: {
    let index;
    _L$2: {
      let name$2;
      _L$3: {
        switch (expr.$tag) {
          case 2: {
            const _Variable = expr;
            const _name = _Variable._0;
            name$2 = _name;
            break _L$3;
          }
          case 3: {
            const _Field = expr;
            const _index = _Field._0;
            index = _index;
            break _L$2;
          }
          case 5: {
            const _Element = expr;
            const _name$2 = _Element._0;
            const _keys = _Element._1;
            name = _name$2;
            keys = _keys;
            break _L;
          }
          default: {
            return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("assignment target"));
          }
        }
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk4Slot12VariableSlot(name$2));
    }
    const _bind$2 = _M0FP211localreview3awk8evaluate(index, st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0FP211localreview3awk12field__index(_M0MP211localreview3awk5Value6number(_tmp));
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk4Slot9FieldSlot(_tmp$2));
  }
  const _bind$2 = _M0FP211localreview3awk10array__key(keys, st);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRPC15error5ErrorE2Ok(new _M0DTP211localreview3awk4Slot11ElementSlot(name, _tmp));
}
function _M0FP211localreview3awk14call__function(name, args, st) {
  const f = _M0MPB3Map2atGsRP211localreview3awk11FunctionDefE(st.functions, name);
  if (st.frames.length >= 64) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("function recursion limit"));
  }
  const _tmp = f.params;
  const _bind$2 = [];
  const _tmp$2 = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const frame = new _M0TP211localreview3awk5Frame(_tmp, _tmp$2, _M0MPB3Map3MapGsRPB3MapGsRP211localreview3awk5ValueEE(new _M0TPB9ArrayViewGUsRPB3MapGsRP211localreview3awk5ValueEEE(_bind$3, 0, 0), undefined), []);
  const _bind$4 = f.params;
  const _bind$5 = _bind$4.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const param = _bind$4[i];
      const kind = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(st.kinds, `${name}::${param}`), 0);
      if (i < args.length) {
        let arg;
        _L: {
          _L$2: {
            let actual;
            _L$3: {
              const _bind$6 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, i);
              if (_bind$6.$tag === 2) {
                const _Variable = _bind$6;
                const _actual = _Variable._0;
                if (kind === 2 || _M0MP211localreview3awk5State10has__array(st, _actual)) {
                  actual = _actual;
                  break _L$3;
                } else {
                  arg = _bind$6;
                  break _L$2;
                }
              } else {
                arg = _bind$6;
                break _L$2;
              }
            }
            const _tmp$4 = frame.arrays;
            const _bind$6 = _M0MP211localreview3awk5State5array(st, actual);
            let _tmp$5;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$5 = _ok._0;
            } else {
              return _bind$6;
            }
            _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(_tmp$4, param, _tmp$5);
            break _L;
          }
          const _tmp$4 = frame.vars;
          const _bind$6 = _M0FP211localreview3awk8evaluate(arg, st);
          let _tmp$5;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$5 = _ok._0;
          } else {
            return _bind$6;
          }
          _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$4, param, _tmp$5);
        }
      } else {
        if (kind === 2) {
          const _bind$6 = [];
          const array = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$6, 0, 0), undefined);
          _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(frame.arrays, param, array);
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(frame.owned, array);
        } else {
          _M0MPB3Map3setGsRP211localreview3awk5ValueE(frame.vars, param, _M0DTP211localreview3awk5Value5Empty__);
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(st.frames, frame);
  const _defer = () => {
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(st.frames);
    const _bind$6 = frame.owned;
    const _bind$7 = _bind$6.length;
    let _tmp$4 = 0;
    while (true) {
      const _ = _tmp$4;
      if (_ < _bind$7) {
        const array = _bind$6[_];
        st.entries = st.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(array) | 0;
        _tmp$4 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  let _err;
  _L: {
    let _defer_result;
    let flow;
    _L$2: {
      _L$3: {
        const _bind$6 = _M0FP211localreview3awk18execute__statement(f.body, st);
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          const _err$2 = _bind$6;
          _err = _err$2._0;
          break _L;
        }
        switch (_bind$7.$tag) {
          case 0: {
            _defer_result = _M0DTP211localreview3awk5Value5Empty__;
            break;
          }
          case 6: {
            const _ReturnFlow = _bind$7;
            const _value = _ReturnFlow._0;
            _defer_result = _value;
            break;
          }
          default: {
            flow = _bind$7;
            break _L$3;
          }
        }
        break _L$2;
      }
      _err = new _M0DTPC15error5Error38localreview_2fawk_2eRuntimeFlow_2eJump(flow);
      break _L;
    }
    _defer();
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE2Ok(_defer_result);
  }
  _defer();
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRPC15error5ErrorE3Err(_err);
}
function _M0FP211localreview3awk21evaluate__destination(redirect, st) {
  let mode;
  let expression;
  _L: {
    if (redirect === undefined) {
      return new _M0DTPC16result6ResultGOUssERPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = redirect;
      const _x = _Some;
      const _mode = _x._0;
      const _expression = _x._1;
      mode = _mode;
      expression = _expression;
      break _L;
    }
  }
  const _bind$2 = _M0FP211localreview3awk8evaluate(expression, st);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk5State12text_2einner(st, _tmp, false);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGOUssERPC15error5ErrorE2Ok({ _0: mode, _1: _tmp$2 });
}
function _M0FP211localreview3awk13execute__rule(body, st) {
  let _try_err;
  _L: {
    const _bind$2 = _M0FP211localreview3awk18execute__statement(body, st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_tmp);
  }
  let e;
  _L$2: {
    let message;
    _L$3: {
      let flow;
      _L$4: {
        switch (_try_err.$tag) {
          case 8: {
            const _Jump = _try_err;
            const _flow = _Jump._0;
            flow = _flow;
            break _L$4;
          }
          case 1: {
            const _Invalid = _try_err;
            const _message = _Invalid._0;
            message = _message;
            break _L$3;
          }
          default: {
            e = _try_err;
            break _L$2;
          }
        }
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(message));
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))));
}
function _M0MP211localreview3awk7Session5begin(self) {
  if (self.phase !== 0) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("BEGIN has already run"));
  }
  self.phase = 1;
  const _bind$2 = self.rules;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const rule = _bind$2[_];
      if (rule.phase === "BEGIN") {
        let code;
        _L: {
          _L$2: {
            const _bind$4 = _M0FP211localreview3awk13execute__rule(rule.body, self.state);
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              return _bind$4;
            }
            switch (_bind$5.$tag) {
              case 0: {
                break;
              }
              case 5: {
                const _ExitFlow = _bind$5;
                const _code = _ExitFlow._0;
                code = _code;
                break _L$2;
              }
              default: {
                return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next/nextfile outside input processing"));
              }
            }
            break _L;
          }
          let n;
          _L$3: {
            _L$4: {
              if (code === undefined) {
              } else {
                const _Some = code;
                const _n = _Some;
                n = _n;
                break _L$4;
              }
              break _L$3;
            }
            self.status = n;
          }
          self.stopped = true;
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk7Session11begin__file(self, name) {
  if (self.phase !== 1 || self.stopped) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("session cannot start an input file"));
  }
  _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.state.vars, "FILENAME", new _M0DTP211localreview3awk5Value4Text(name));
  _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.state.vars, "FNR", new _M0DTP211localreview3awk5Value6Number(0));
  self.skip_file = false;
  self.feed_header_pending = true;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0FP211localreview3awk21execute__record__rule(rule, st) {
  let _try_err;
  _L: {
    let yes;
    if (rule.active) {
      yes = true;
    } else {
      let _tmp;
      let expr;
      _L$2: {
        _L$3: {
          const _bind$2 = rule.condition;
          if (_bind$2 === undefined) {
            _tmp = true;
          } else {
            const _Some = _bind$2;
            const _expr = _Some;
            expr = _expr;
            break _L$3;
          }
          break _L$2;
        }
        const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err = _err._0;
          break _L;
        }
        _tmp = _M0MP211localreview3awk5Value5truth(_tmp$2);
      }
      yes = _tmp;
    }
    if (!yes) {
      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
    }
    let expr;
    _L$2: {
      _L$3: {
        const _bind$2 = rule.until;
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _expr = _Some;
          expr = _expr;
          break _L$3;
        }
        break _L$2;
      }
      const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      rule.active = !_M0MP211localreview3awk5Value5truth(_tmp);
    }
    const _bind$2 = _M0FP211localreview3awk18execute__statement(rule.body, st);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_tmp);
  }
  let e;
  _L$2: {
    let message;
    _L$3: {
      let flow;
      _L$4: {
        switch (_try_err.$tag) {
          case 8: {
            const _Jump = _try_err;
            const _flow = _Jump._0;
            flow = _flow;
            break _L$4;
          }
          case 1: {
            const _Invalid = _try_err;
            const _message = _Invalid._0;
            message = _message;
            break _L$3;
          }
          default: {
            e = _try_err;
            break _L$2;
          }
        }
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(message));
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))));
}
function _M0MP211localreview3awk7Session15process__record(self) {
  const st = self.state;
  const _bind$2 = self.rules;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  _L: while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const rule = _bind$2[_];
      if (rule.phase === "record") {
        let code;
        _L$2: {
          _L$3: {
            const _bind$4 = _M0FP211localreview3awk21execute__record__rule(rule, st);
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              return _bind$4;
            }
            switch (_bind$5.$tag) {
              case 0: {
                break;
              }
              case 3: {
                break _L;
              }
              case 4: {
                self.skip_file = true;
                break _L;
              }
              case 5: {
                const _ExitFlow = _bind$5;
                const _code = _ExitFlow._0;
                code = _code;
                break _L$3;
              }
              default: {
                return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid control flow outside function"));
              }
            }
            break _L$2;
          }
          let n;
          _L$4: {
            _L$5: {
              if (code === undefined) {
              } else {
                const _Some = code;
                const _n = _Some;
                n = _n;
                break _L$5;
              }
              break _L$4;
            }
            self.status = n;
          }
          self.stopped = true;
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk7Session4feed(self, record) {
  if (self.phase !== 1 || (self.stopped || self.skip_file)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("session cannot process a record"));
  }
  const st = self.state;
  const _bind$2 = _M0MP211localreview3awk5State4tick(st);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  let mode;
  _L: {
    _L$2: {
      const _bind$3 = st.input_mode;
      if (_bind$3 === undefined) {
        const _bind$4 = _M0MP211localreview3awk5State19set__record_2einner(st, record, false);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
      } else {
        const _Some = _bind$3;
        const _mode = _Some;
        mode = _mode;
        break _L$2;
      }
      break _L;
    }
    let raw;
    let fields;
    _L$3: {
      let _bind$3;
      const _bind$4 = _M0FP211localreview3awk11csv__record(record, mode, st);
      let _bind$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$5 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_bind$5 === undefined) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      } else {
        const _Some = _bind$5;
        const _row = _Some;
        _bind$3 = _row;
      }
      const _raw = _bind$3._0;
      const _fields = _bind$3._1;
      raw = _raw;
      fields = _fields;
      break _L$3;
    }
    if (mode.header && self.feed_header_pending) {
      self.feed_header_pending = false;
      const _bind$3 = _M0MP211localreview3awk5State11csv__header(st, fields);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
    }
    self.feed_header_pending = false;
    const _bind$3 = _M0MP211localreview3awk5State19set__record_2einner(st, raw, false);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    _M0MPC15array5Array5clearGsE(st.fields);
    const _bind$4 = fields.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$4) {
        const field = fields[_];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(st.fields, field);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    st.reuse_csv_fields = true;
  }
  const _tmp = st.vars;
  const _bind$3 = _M0MP211localreview3awk5State8variable(st, "NR");
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp, "NR", new _M0DTP211localreview3awk5Value6Number(_M0MP211localreview3awk5Value6number(_tmp$2) + 1));
  const _tmp$3 = st.vars;
  const _bind$4 = _M0MP211localreview3awk5State8variable(st, "FNR");
  let _tmp$4;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$4 = _ok._0;
  } else {
    return _bind$4;
  }
  _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$3, "FNR", new _M0DTP211localreview3awk5Value6Number(_M0MP211localreview3awk5Value6number(_tmp$4) + 1));
  return _M0MP211localreview3awk7Session15process__record(self);
}
function _M0MP211localreview3awk7Session6finish(self) {
  if (self.phase !== 1) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("END cannot run in this session phase"));
  }
  self.phase = 2;
  self.stopped = true;
  const _bind$2 = self.rules;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const rule = _bind$2[_];
      if (rule.phase === "END") {
        let code;
        _L: {
          _L$2: {
            const _bind$4 = _M0FP211localreview3awk13execute__rule(rule.body, self.state);
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              return _bind$4;
            }
            switch (_bind$5.$tag) {
              case 0: {
                break;
              }
              case 5: {
                const _ExitFlow = _bind$5;
                const _code = _ExitFlow._0;
                code = _code;
                break _L$2;
              }
              default: {
                return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next/nextfile outside input processing"));
              }
            }
            break _L;
          }
          let n;
          _L$3: {
            _L$4: {
              if (code === undefined) {
              } else {
                const _Some = code;
                const _n = _Some;
                n = _n;
                break _L$4;
              }
              break _L$3;
            }
            self.status = n;
          }
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
}
function _M0MP211localreview3awk7Session5drain(self) {
  const _tmp = self.state.output;
  const _bind$2 = "";
  const output = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  _M0MPC15array5Array5clearGsE(self.state.output);
  self.state.output_size = 0;
  return output;
}
function _M0MP211localreview3awk7Session11is__stopped(self) {
  return self.stopped;
}
function _M0MP211localreview3awk7Session12needs__input(self) {
  return _M0MPC15array5Array3anyGRP211localreview3awk4RuleE(self.rules, (rule) => _M0IP016_24default__implPB2Eq10not__equalGsE(rule.phase, "BEGIN"));
}
function _M0MP211localreview3awk7Session18should__skip__file(self) {
  return self.skip_file;
}
function _M0MP211localreview3awk7Session12exit__status(self) {
  return self.status;
}
function _M0MP211localreview3awk7Session5steps(self) {
  return self.state.steps;
}
function _M0MP211localreview3awk7Session15argument__count(self) {
  return _M0MP211localreview3awk5State15argument__count(self.state);
}
function _M0MP211localreview3awk7Session8argument(self, index) {
  const _tmp = self.state;
  const _bind$2 = _M0MP211localreview3awk5State5array(self.state, "ARGV");
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  return _M0MP211localreview3awk5State12text_2einner(_tmp, _M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPB3Map3getGsRP211localreview3awk5ValueE(_tmp$2, _M0MPC13int3Int18to__string_2einner(index, 10)), _M0DTP211localreview3awk5Value5Empty__), false);
}
function _M0MP211localreview3awk7Session9close__io(self) {
  const names = [];
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(self.state.readers);
  while (true) {
    let name;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        name = _name;
        break _L;
      }
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGsE(name, "-") || !self.state.protected_stdin) {
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(names, name);
    }
    continue;
  }
  const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(self.state.writers);
  while (true) {
    let name;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _name = _x._0;
        name = _name;
        break _L;
      }
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(names, name);
    continue;
  }
  let host;
  _L: {
    _L$2: {
      const _bind$2 = self.state.io;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _host = _Some;
        host = _host;
        break _L$2;
      }
      break _L;
    }
    const _bind$2 = names.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const name = names[_];
        host(new _M0DTP211localreview3awk9IORequest11CloseStream(name));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    host(new _M0DTP211localreview3awk9IORequest11FlushStream(""));
  }
  _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(self.state.readers);
  _M0MPB3Map5clearGsRP211localreview3awk9MainInputE(self.state.writers);
  self.state.protected_stdin = false;
}
function _M0MP211localreview3awk7Session7advance(self) {
  if (self.phase !== 1 || self.stopped) {
    return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(false);
  }
  if (self.skip_file) {
    let source;
    _L: {
      _L$2: {
        const _bind$2 = self.state.input;
        if (_bind$2 === undefined) {
        } else {
          const _Some = _bind$2;
          const _source = _Some;
          source = _source;
          break _L$2;
        }
        break _L;
      }
      _M0MP211localreview3awk9MainInput5close(source);
    }
    self.skip_file = false;
  }
  let text;
  _L: {
    const _bind$2 = _M0MP211localreview3awk5State11take__input(self.state);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(false);
    } else {
      const _Some = _bind$3;
      const _text = _Some;
      text = _text;
      break _L;
    }
  }
  const _bind$2 = _M0MP211localreview3awk5State19set__record_2einner(self.state, text, false);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  self.state.reuse_csv_fields = true;
  const _bind$3 = _M0MP211localreview3awk7Session15process__record(self);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGbRP211localreview3awk10ParseErrorE2Ok(true);
}
function _M0MP211localreview3awk7Session12close__input(self) {
  let source;
  _L: {
    const _bind$2 = self.state.input;
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _source = _Some;
      source = _source;
      break _L;
    }
  }
  _M0MP211localreview3awk9MainInput5close(source);
}
function _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, input_mode, output_mode, step_limit, clock_seconds) {
  if (input.length > 1000000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("input limit"));
  }
  const chars = _M0MPC16string6String9to__array(input);
  const position = _M0MPC13ref3Ref3RefGiE(0);
  const _bind$2 = _M0FP211localreview3awk12new__session(program, separator, input_mode, output_mode, undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, step_limit, new _M0DTPC16option6OptionGdE4Some(clock_seconds), _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None__, new _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4Some((request) => {
    _L: {
      switch (request.$tag) {
        case 0: {
          break _L;
        }
        case 2: {
          break _L;
        }
        default: {
          if (position.val === chars.length) {
            return _M0DTP211localreview3awk10InputReply3End__;
          } else {
            const end = _M0MPC13int3Int3min(position.val + 32768 | 0, chars.length);
            const text = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, position.val, end));
            position.val = end;
            return new _M0DTP211localreview3awk10InputReply5Chunk(text);
          }
        }
      }
    }
    return _M0DTP211localreview3awk10InputReply5Ready__;
  }), _M0DTPC16option6OptionGOWsEOsE4None__);
  let session;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    session = _ok._0;
  } else {
    return _bind$2;
  }
  const _defer = () => {
    _M0MP211localreview3awk7Session12close__input(session);
  };
  let _err;
  _L: {
    const _bind$3 = _M0MP211localreview3awk7Session5begin(session);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      const _err$2 = _bind$3;
      _err = _err$2._0;
      break _L;
    }
    if (_M0MP211localreview3awk7Session12needs__input(session)) {
      while (true) {
        const _bind$4 = _M0MP211localreview3awk7Session7advance(session);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          const _err$2 = _bind$4;
          _err = _err$2._0;
          break _L;
        }
        if (_tmp) {
          continue;
        } else {
          break;
        }
      }
    }
    const _bind$4 = _M0MP211localreview3awk7Session6finish(session);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      const _err$2 = _bind$4;
      _err = _err$2._0;
      break _L;
    }
    const _defer_result = new _M0TP211localreview3awk9RunResult(_M0MP211localreview3awk7Session5drain(session), _M0MP211localreview3awk7Session12exit__status(session), _M0MP211localreview3awk7Session5steps(session));
    _defer();
    return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok(_defer_result);
  }
  _defer();
  return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(_err);
}
function _M0FP211localreview3awk11run_2einner(program, input, separator, input_mode, output_mode) {
  const _bind$2 = _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, input_mode, output_mode, 1000000, 0);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_tmp.output);
}
function _M0FP411localreview3awk3cmd3web21string__field_2einner(request, name, default_) {
  _L: {
    let fields;
    _L$2: {
      if (request.$tag === 6) {
        const _Object = request;
        const _fields = _Object._0;
        fields = _fields;
        break _L$2;
      } else {
        break _L;
      }
    }
    _L$3: {
      const _bind$2 = _M0MPB3Map3getGsRPB4JsonE(fields, name);
      if (_bind$2 === undefined) {
        break _L$3;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 4) {
          const _String = _x;
          const _s = _String._0;
          return _s;
        } else {
          break _L$3;
        }
      }
    }
    break _L;
  }
  return default_;
}
function _M0FP411localreview3awk3cmd3web11string__map(request, name) {
  const _bind$2 = [];
  const out = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  let fields;
  _L: {
    _L$2: {
      if (request.$tag === 6) {
        const _Object = request;
        const _fields = _Object._0;
        fields = _fields;
        break _L$2;
      }
      break _L;
    }
    _L$3: {
      _L$4: {
        let values;
        _L$5: {
          const _bind$3 = _M0MPB3Map3getGsRPB4JsonE(fields, name);
          if (_bind$3 === undefined) {
            break _L$4;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            if (_x.$tag === 6) {
              const _Object = _x;
              const _values = _Object._0;
              values = _values;
              break _L$5;
            } else {
              break _L$4;
            }
          }
        }
        const _it = _M0MPB3Map5iter2GsRPB4JsonE(values);
        while (true) {
          let k;
          let v;
          _L$6: {
            const _bind$3 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
            if (_bind$3 === undefined) {
              break;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              const _k = _x._0;
              const _v = _x._1;
              k = _k;
              v = _v;
              break _L$6;
            }
          }
          let s;
          _L$7: {
            _L$8: {
              if (v.$tag === 4) {
                const _String = v;
                const _s = _String._0;
                s = _s;
                break _L$8;
              }
              break _L$7;
            }
            _M0MPB3Map3setGssE(out, k, s);
          }
          continue;
        }
        break _L$3;
      }
    }
  }
  return out;
}
function _M0FP411localreview3awk3cmd3web23session__result_2einner(session, id, processed, prefix) {
  const _bind$2 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "session", _1: _M0IPC13int3IntPB6ToJson8to__json(id) }, { _0: "output", _1: _M0IPC16string6StringPB6ToJson8to__json(`${prefix}${_M0MP211localreview3awk7Session5drain(session)}`) }, { _0: "stopped", _1: _M0IPC14bool4BoolPB6ToJson8to__json(_M0MP211localreview3awk7Session11is__stopped(session)) }, { _0: "needsInput", _1: _M0IPC14bool4BoolPB6ToJson8to__json(_M0MP211localreview3awk7Session12needs__input(session)) }, { _0: "skipFile", _1: _M0IPC14bool4BoolPB6ToJson8to__json(_M0MP211localreview3awk7Session18should__skip__file(session)) }, { _0: "exitStatus", _1: _M0IPC13int3IntPB6ToJson8to__json(_M0MP211localreview3awk7Session12exit__status(session)) }, { _0: "steps", _1: _M0IPC13int3IntPB6ToJson8to__json(_M0MP211localreview3awk7Session5steps(session)) }, { _0: "processed", _1: _M0IPC13int3IntPB6ToJson8to__json(processed) }];
  return _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 9), undefined));
}
function _M0FP411localreview3awk3cmd3web13session__json(input) {
  const active = new _M0TPB8MutLocalGORP211localreview3awk7SessionE(undefined);
  const id = new _M0TPB8MutLocalGiE(-1);
  const prefix = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let request;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      request = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const action = _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "action", "");
    if (action === "open") {
      if (_M0MPB3Map6lengthGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions) >= 64) {
        _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("too many sessions");
        break _L;
      }
      let arguments_;
      _L$2: {
        _L$3: {
          let xs;
          _L$4: {
            if (request.$tag === 6) {
              const _Object = request;
              const _x = _Object._0;
              const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "arguments");
              if (_x$2 === undefined) {
                break _L$3;
              } else {
                const _Some = _x$2;
                const _x$3 = _Some;
                if (_x$3.$tag === 5) {
                  const _Array = _x$3;
                  const _xs = _Array._0;
                  xs = _xs;
                  break _L$4;
                } else {
                  break _L$3;
                }
              }
            } else {
              break _L$3;
            }
          }
          arguments_ = _M0MPC15array5Array3mapGRPB4JsonsE(xs, (x) => {
            if (x.$tag === 4) {
              const _String = x;
              const _s = _String._0;
              return _s;
            } else {
              return "";
            }
          });
          break _L$2;
        }
        arguments_ = ["moonbit-awk"];
      }
      let limit;
      let n;
      _L$3: {
        _L$4: {
          if (request.$tag === 6) {
            const _Object = request;
            const _x = _Object._0;
            const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "stepLimit");
            if (_x$2 === undefined) {
              limit = 100000000;
            } else {
              const _Some = _x$2;
              const _x$3 = _Some;
              if (_x$3.$tag === 3) {
                const _Number = _x$3;
                const _n = _Number._0;
                n = _n;
                break _L$4;
              } else {
                limit = 100000000;
              }
            }
          } else {
            limit = 100000000;
          }
          break _L$3;
        }
        if (n >= 1 && n <= 1000000000) {
          limit = _M0MPC16double6Double7to__int(n);
        } else {
          _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("invalid step limit");
          break _L;
        }
      }
      const _bind$3 = _M0FP211localreview3awk12new__session(_M0FP411localreview3awk3cmd3web21string__field_2einner(request, "program", ""), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "separator", " "), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "inputMode", ""), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "outputMode", ""), _M0FP411localreview3awk3cmd3web11string__map(request, "variables"), _M0FP411localreview3awk3cmd3web11string__map(request, "environment"), new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(arguments_), limit, new _M0DTPC16option6OptionGdE4Some(_M0FP411localreview3awk3cmd3web16current__seconds()), _M0DTPC16option6OptionGOWRP211localreview3awk9IORequestERP211localreview3awk7IOReplyE4None__, _M0DTPC16option6OptionGOWRP211localreview3awk12InputRequestERP211localreview3awk10InputReplyE4None__, _M0DTPC16option6OptionGOWsEOsE4None__);
      let session;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        session = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      _M0FP411localreview3awk3cmd3web13next__session.val = _M0FP411localreview3awk3cmd3web13next__session.val + 1 | 0;
      id.val = _M0FP411localreview3awk3cmd3web13next__session.val;
      _M0MPB3Map3setGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions, id.val, session);
      active.val = session;
      const _bind$4 = _M0MP211localreview3awk7Session5begin(session);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L;
      }
      return _M0MPC14json4Json17stringify_2einner(_M0FP411localreview3awk3cmd3web23session__result_2einner(session, id.val, 0, ""), false, 0, undefined);
    }
    let _tmp;
    _L$2: {
      _L$3: {
        let n;
        _L$4: {
          if (request.$tag === 6) {
            const _Object = request;
            const _x = _Object._0;
            const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "session");
            if (_x$2 === undefined) {
              break _L$3;
            } else {
              const _Some = _x$2;
              const _x$3 = _Some;
              if (_x$3.$tag === 3) {
                const _Number = _x$3;
                const _n = _Number._0;
                n = _n;
                break _L$4;
              } else {
                break _L$3;
              }
            }
          } else {
            break _L$3;
          }
        }
        _tmp = _M0MPC16double6Double7to__int(n);
        break _L$2;
      }
      _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("missing session");
      break _L;
    }
    id.val = _tmp;
    if (action === "close") {
      _M0MPB3Map6removeGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions, id.val);
      return "{\"ok\":true}";
    }
    let session;
    const _bind$3 = _M0MPB3Map3getGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions, id.val);
    if (_bind$3 === undefined) {
      _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("unknown session");
      break _L;
    } else {
      const _Some = _bind$3;
      const _s = _Some;
      session = _s;
    }
    active.val = session;
    const processed = new _M0TPB8MutLocalGiE(0);
    switch (action) {
      case "file": {
        const _bind$4 = _M0MP211localreview3awk7Session11begin__file(session, _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "name", ""));
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L;
        }
        break;
      }
      case "record": {
        const _bind$5 = _M0MP211localreview3awk7Session4feed(session, _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "record", ""));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          const _err = _bind$5;
          _try_err = _err._0;
          break _L;
        }
        processed.val = 1;
        break;
      }
      case "records": {
        let records;
        _L$3: {
          _L$4: {
            if (request.$tag === 6) {
              const _Object = request;
              const _x = _Object._0;
              const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "records");
              if (_x$2 === undefined) {
                break _L$4;
              } else {
                const _Some = _x$2;
                const _x$3 = _Some;
                if (_x$3.$tag === 5) {
                  const _Array = _x$3;
                  const _xs = _Array._0;
                  records = _xs;
                } else {
                  break _L$4;
                }
              }
            } else {
              break _L$4;
            }
            break _L$3;
          }
          _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("missing records");
          break _L;
        }
        if (records.length > 1000) {
          _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("batch record limit");
          break _L;
        }
        const size = new _M0TPB8MutLocalGiE(0);
        const _bind$6 = records.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$6) {
            const record = records[_];
            if (_M0MP211localreview3awk7Session11is__stopped(session) || (_M0MP211localreview3awk7Session18should__skip__file(session) || size.val >= 65536)) {
              break;
            }
            let text;
            if (record.$tag === 4) {
              const _String = record;
              const _s = _String._0;
              text = _s;
            } else {
              _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("record must be a string");
              break _L;
            }
            const _bind$7 = _M0MP211localreview3awk7Session4feed(session, text);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _ok._0;
            } else {
              const _err = _bind$7;
              _try_err = _err._0;
              break _L;
            }
            processed.val = processed.val + 1 | 0;
            const output = _M0MP211localreview3awk7Session5drain(session);
            size.val = size.val + output.length | 0;
            _M0IPB13StringBuilderPB6Logger13write__string(prefix, output);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      case "assign": {
        const _bind$7 = _M0MP211localreview3awk7Session6assign(session, _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "name", ""), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "value", ""));
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          const _err = _bind$7;
          _try_err = _err._0;
          break _L;
        }
        break;
      }
      case "argument": {
        let index;
        let n;
        _L$4: {
          _L$5: {
            if (request.$tag === 6) {
              const _Object = request;
              const _x = _Object._0;
              const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "index");
              if (_x$2 === undefined) {
                index = 0;
              } else {
                const _Some = _x$2;
                const _x$3 = _Some;
                if (_x$3.$tag === 3) {
                  const _Number = _x$3;
                  const _n = _Number._0;
                  n = _n;
                  break _L$5;
                } else {
                  index = 0;
                }
              }
            } else {
              index = 0;
            }
            break _L$4;
          }
          index = _M0MPC16double6Double7to__int(n);
        }
        const _tmp$3 = { _0: "ok", _1: _M0MPC14json4Json7boolean(true) };
        const _bind$8 = _M0MP211localreview3awk7Session15argument__count(session);
        let _tmp$4;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$4 = _ok._0;
        } else {
          const _err = _bind$8;
          _try_err = _err._0;
          break _L;
        }
        const _tmp$5 = { _0: "argc", _1: _M0IPC13int3IntPB6ToJson8to__json(_tmp$4) };
        const _bind$9 = _M0MP211localreview3awk7Session8argument(session, index);
        let _tmp$6;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$6 = _ok._0;
        } else {
          const _err = _bind$9;
          _try_err = _err._0;
          break _L;
        }
        const _bind$10 = [_tmp$3, _tmp$5, { _0: "value", _1: _M0IPC16string6StringPB6ToJson8to__json(_tmp$6) }];
        return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$10, 0, 3), undefined)), false, 0, undefined);
      }
      case "end": {
        const _bind$11 = _M0MP211localreview3awk7Session6finish(session);
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _ok._0;
        } else {
          const _err = _bind$11;
          _try_err = _err._0;
          break _L;
        }
        _M0MPB3Map6removeGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions, id.val);
        break;
      }
      default: {
        _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("unknown action");
        break _L;
      }
    }
    return _M0MPC14json4Json17stringify_2einner(_M0FP411localreview3awk3cmd3web23session__result_2einner(session, id.val, processed.val, _M0MPB13StringBuilder10to__string(prefix)), false, 0, undefined);
  }
  const e = _try_err;
  const _tmp = _M0MPB13StringBuilder10to__string(prefix);
  let _tmp$2;
  let s;
  _L$2: {
    _L$3: {
      const _bind$2 = active.val;
      if (_bind$2 === undefined) {
        _tmp$2 = "";
      } else {
        const _Some = _bind$2;
        const _s = _Some;
        s = _s;
        break _L$3;
      }
      break _L$2;
    }
    _tmp$2 = _M0MP211localreview3awk7Session5drain(s);
  }
  const output = `${_tmp}${_tmp$2}`;
  _M0MPB3Map6removeGiRP211localreview3awk7SessionE(_M0FP411localreview3awk3cmd3web8sessions, id.val);
  const _bind$2 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))) }, { _0: "output", _1: _M0IPC16string6StringPB6ToJson8to__json(output) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 3), undefined)), false, 0, undefined);
}
function _M0FP411localreview3awk3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind$2 = "\n---\n";
    const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(input, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
    if (parts.length !== 2) {
      return "ERROR: use program then newline --- newline data";
    }
    const _bind$3 = _M0FP211localreview3awk11run_2einner(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0)), _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 1)), " ", "", "");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      return _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview3awk10ParseErrorE(e))}`;
}
function _M0FP411localreview3awk3cmd3web7execute(program, input, separator) {
  let _try_err;
  _L: {
    const _bind$2 = _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, "", "", 1000000, 0);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPC14json4Json17stringify_2einner(_M0IP211localreview3awk9RunResultPB6ToJson8to__json(_tmp), false, 0, undefined);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview3awk10ParseErrorE(e))}`;
}
function _M0FP411localreview3awk3cmd3web10bridge__io(io, request) {
  let value;
  let command;
  _L: {
    _L$2: {
      let name;
      _L$3: {
        _L$4: {
          let name$2;
          _L$5: {
            _L$6: {
              let name$3;
              let text;
              _L$7: {
                _L$8: {
                  let name$4;
                  let mode;
                  _L$9: {
                    _L$10: {
                      let name$5;
                      _L$11: {
                        _L$12: {
                          let name$6;
                          let pipe;
                          _L$13: {
                            switch (request.$tag) {
                              case 0: {
                                const _OpenReader = request;
                                const _name = _OpenReader._0;
                                const _pipe = _OpenReader._1;
                                name$6 = _name;
                                pipe = _pipe;
                                break _L$13;
                              }
                              case 1: {
                                const _ReadReader = request;
                                const _name$2 = _ReadReader._0;
                                name$5 = _name$2;
                                break _L$12;
                              }
                              case 2: {
                                const _OpenWriter = request;
                                const _name$3 = _OpenWriter._0;
                                const _mode = _OpenWriter._1;
                                name$4 = _name$3;
                                mode = _mode;
                                break _L$10;
                              }
                              case 3: {
                                const _WriteWriter = request;
                                const _name$4 = _WriteWriter._0;
                                const _text = _WriteWriter._1;
                                name$3 = _name$4;
                                text = _text;
                                break _L$8;
                              }
                              case 4: {
                                const _CloseStream = request;
                                const _name$5 = _CloseStream._0;
                                name$2 = _name$5;
                                break _L$6;
                              }
                              case 5: {
                                const _FlushStream = request;
                                const _name$6 = _FlushStream._0;
                                name = _name$6;
                                break _L$4;
                              }
                              default: {
                                const _Execute = request;
                                const _command = _Execute._0;
                                command = _command;
                                break _L$2;
                              }
                            }
                          }
                          const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("open-reader") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name$6) }, { _0: "pipe", _1: _M0IPC14bool4BoolPB6ToJson8to__json(pipe) }];
                          value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 3), undefined));
                          break _L$11;
                        }
                        const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("read-reader") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name$5) }];
                        value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined));
                      }
                      break _L$9;
                    }
                    const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("open-writer") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name$4) }, { _0: "mode", _1: _M0IPC16string6StringPB6ToJson8to__json(mode) }];
                    value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 3), undefined));
                  }
                  break _L$7;
                }
                const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("write-writer") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name$3) }, { _0: "text", _1: _M0IPC16string6StringPB6ToJson8to__json(text) }];
                value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 3), undefined));
              }
              break _L$5;
            }
            const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("close") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name$2) }];
            value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined));
          }
          break _L$3;
        }
        const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("flush") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name) }];
        value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined));
      }
      break _L;
    }
    const _bind$2 = [{ _0: "op", _1: _M0MPC14json4Json6string("system") }, { _0: "command", _1: _M0IPC16string6StringPB6ToJson8to__json(command) }];
    value = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined));
  }
  const response = _M0FP411localreview3awk3cmd3web10host__call(io, "io", _M0MPC14json4Json17stringify_2einner(value, false, 0, undefined));
  if (response === "O") {
    return _M0DTP211localreview3awk7IOReply7IOReady__;
  } else {
    if (response === "E") {
      return _M0DTP211localreview3awk7IOReply5IOEnd__;
    } else {
      const _bind$2 = "D";
      if (_M0MPC16string6String11has__prefix(response, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
        return new _M0DTP211localreview3awk7IOReply6IOData(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(response, 1, undefined)));
      } else {
        const _bind$3 = "S";
        if (_M0MPC16string6String11has__prefix(response, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
          let _try_err;
          _L$2: {
            let n;
            _L$3: {
              const _bind$4 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(response, 1, undefined));
              const _bind$5 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), 1024);
              let _bind$6;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _bind$6 = _ok._0;
              } else {
                const _err = _bind$5;
                _try_err = _err._0;
                break _L$2;
              }
              if (_bind$6.$tag === 3) {
                const _Number = _bind$6;
                const _n = _Number._0;
                n = _n;
                break _L$3;
              } else {
                return new _M0DTP211localreview3awk7IOReply8IOFailed("invalid status reply");
              }
            }
            return new _M0DTP211localreview3awk7IOReply8IOStatus(_M0MPC16double6Double7to__int(n));
          }
          return new _M0DTP211localreview3awk7IOReply8IOFailed("invalid status reply");
        } else {
          return new _M0DTP211localreview3awk7IOReply8IOFailed(response);
        }
      }
    }
  }
}
function _M0FP411localreview3awk3cmd3web15host__run__json(input, io) {
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let request;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      request = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    let arguments_;
    _L$2: {
      _L$3: {
        let xs;
        _L$4: {
          if (request.$tag === 6) {
            const _Object = request;
            const _x = _Object._0;
            const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "arguments");
            if (_x$2 === undefined) {
              break _L$3;
            } else {
              const _Some = _x$2;
              const _x$3 = _Some;
              if (_x$3.$tag === 5) {
                const _Array = _x$3;
                const _xs = _Array._0;
                xs = _xs;
                break _L$4;
              } else {
                break _L$3;
              }
            }
          } else {
            break _L$3;
          }
        }
        arguments_ = _M0MPC15array5Array3mapGRPB4JsonsE(xs, (x) => {
          if (x.$tag === 4) {
            const _String = x;
            const _s = _String._0;
            return _s;
          } else {
            return "";
          }
        });
        break _L$2;
      }
      arguments_ = ["moonbit-awk"];
    }
    let limit;
    let n;
    _L$3: {
      _L$4: {
        if (request.$tag === 6) {
          const _Object = request;
          const _x = _Object._0;
          const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "stepLimit");
          if (_x$2 === undefined) {
            limit = 100000000;
          } else {
            const _Some = _x$2;
            const _x$3 = _Some;
            if (_x$3.$tag === 3) {
              const _Number = _x$3;
              const _n = _Number._0;
              n = _n;
              break _L$4;
            } else {
              limit = 100000000;
            }
          }
        } else {
          limit = 100000000;
        }
        break _L$3;
      }
      if (n >= 1 && n <= 1000000000) {
        limit = _M0MPC16double6Double7to__int(n);
      } else {
        _try_err = new _M0DTPC15error5Error60localreview_2fawk_2fcmd_2fweb_2eBridgeError_2eInvalidRequest("invalid step limit");
        break _L;
      }
    }
    const _bind$3 = _M0FP211localreview3awk20new__session_2einner(_M0FP411localreview3awk3cmd3web21string__field_2einner(request, "program", ""), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "separator", " "), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "inputMode", ""), _M0FP411localreview3awk3cmd3web21string__field_2einner(request, "outputMode", ""), _M0FP411localreview3awk3cmd3web11string__map(request, "variables"), _M0FP411localreview3awk3cmd3web11string__map(request, "environment"), arguments_, limit, _M0FP411localreview3awk3cmd3web16current__seconds(), (request$2) => _M0FP411localreview3awk3cmd3web10bridge__io(io, request$2), (request$2) => {
      let response;
      let name;
      _L$4: {
        _L$5: {
          switch (request$2.$tag) {
            case 0: {
              const _Open = request$2;
              const _name = _Open._0;
              name = _name;
              break _L$5;
            }
            case 1: {
              response = _M0FP411localreview3awk3cmd3web10host__call(io, "read", "");
              break;
            }
            default: {
              response = _M0FP411localreview3awk3cmd3web10host__call(io, "close", "");
            }
          }
          break _L$4;
        }
        response = _M0FP411localreview3awk3cmd3web10host__call(io, "open", name);
      }
      if (response === "O") {
        return _M0DTP211localreview3awk10InputReply5Ready__;
      } else {
        if (response === "E") {
          return _M0DTP211localreview3awk10InputReply3End__;
        } else {
          const _bind$4 = "D";
          if (_M0MPC16string6String11has__prefix(response, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            return new _M0DTP211localreview3awk10InputReply5Chunk(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(response, 1, undefined)));
          } else {
            return new _M0DTP211localreview3awk10InputReply6Failed(response);
          }
        }
      }
    }, (text) => {
      const result = _M0FP411localreview3awk3cmd3web10host__call(io, "write", text);
      return result === "O" ? undefined : result;
    });
    let session;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      session = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _defer = () => {
      _M0MP211localreview3awk7Session12close__input(session);
      _M0MP211localreview3awk7Session9close__io(session);
    };
    let _err;
    _L$4: {
      const _bind$4 = _M0MP211localreview3awk7Session5begin(session);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        const _err$2 = _bind$4;
        _err = _err$2._0;
        break _L$4;
      }
      if (_M0MP211localreview3awk7Session12needs__input(session)) {
        while (true) {
          const _bind$5 = _M0MP211localreview3awk7Session7advance(session);
          let _tmp;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp = _ok._0;
          } else {
            const _err$2 = _bind$5;
            _err = _err$2._0;
            break _L$4;
          }
          if (_tmp) {
            continue;
          } else {
            break;
          }
        }
      }
      const _bind$5 = _M0MP211localreview3awk7Session6finish(session);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        const _err$2 = _bind$5;
        _err = _err$2._0;
        break _L$4;
      }
      const _bind$6 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "exitStatus", _1: _M0IPC13int3IntPB6ToJson8to__json(_M0MP211localreview3awk7Session12exit__status(session)) }, { _0: "steps", _1: _M0IPC13int3IntPB6ToJson8to__json(_M0MP211localreview3awk7Session5steps(session)) }];
      const _defer_result = _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 3), undefined)), false, 0, undefined);
      _defer();
      return _defer_result;
    }
    _defer();
    _try_err = _err;
    break _L;
  }
  const e = _try_err;
  const _bind$2 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined)), false, 0, undefined);
}
(() => {
})();
export { _M0FP411localreview3awk3cmd3web13session__json as session_json, _M0FP411localreview3awk3cmd3web3run as run, _M0FP411localreview3awk3cmd3web7execute as execute, _M0FP411localreview3awk3cmd3web15host__run__json as host_run_json }
//# sourceMappingURL=web.js.map
