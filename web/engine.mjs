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
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
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
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
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
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGRP211localreview3awk5ValueE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
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
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB4IterGRPC16string10StringViewEE(param0) {
  this.val = param0;
}
const _M0MPC16double6Double8mod__ffi = (a, b) => (a % b);
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
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 1;
function _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid.prototype.$tag = 0;
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
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTP211localreview3awk4Expr8Variable(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr8Variable.prototype.$tag = 1;
function _M0DTP211localreview3awk4Expr5Field(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr5Field.prototype.$tag = 2;
function _M0DTP211localreview3awk4Expr7Element(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr7Element.prototype.$tag = 3;
function _M0DTP211localreview3awk4Expr5Tuple(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Expr5Tuple.prototype.$tag = 4;
function _M0DTP211localreview3awk4Expr5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr5Unary.prototype.$tag = 5;
function _M0DTP211localreview3awk4Expr6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr6Binary.prototype.$tag = 6;
function _M0DTP211localreview3awk4Expr6Assign(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr6Assign.prototype.$tag = 7;
function _M0DTP211localreview3awk4Expr9Increment(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr9Increment.prototype.$tag = 8;
function _M0DTP211localreview3awk4Expr11Conditional(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk4Expr11Conditional.prototype.$tag = 9;
function _M0DTP211localreview3awk4Expr4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk4Expr4Call.prototype.$tag = 10;
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTP211localreview3awk9Statement5Print(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement5Print.prototype.$tag = 1;
function _M0DTP211localreview3awk9Statement10Expression(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement10Expression.prototype.$tag = 2;
function _M0DTP211localreview3awk9Statement2If(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk9Statement2If.prototype.$tag = 3;
function _M0DTP211localreview3awk9Statement5While(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement5While.prototype.$tag = 4;
function _M0DTP211localreview3awk9Statement2Do(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement2Do.prototype.$tag = 5;
function _M0DTP211localreview3awk9Statement3For(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP211localreview3awk9Statement3For.prototype.$tag = 6;
function _M0DTP211localreview3awk9Statement5ForIn(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview3awk9Statement5ForIn.prototype.$tag = 7;
function _M0DTP211localreview3awk9Statement6Delete(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview3awk9Statement6Delete.prototype.$tag = 8;
function _M0DTP211localreview3awk9Statement5Break() {}
_M0DTP211localreview3awk9Statement5Break.prototype.$tag = 9;
const _M0DTP211localreview3awk9Statement5Break__ = new _M0DTP211localreview3awk9Statement5Break();
function _M0DTP211localreview3awk9Statement8Continue() {}
_M0DTP211localreview3awk9Statement8Continue.prototype.$tag = 10;
const _M0DTP211localreview3awk9Statement8Continue__ = new _M0DTP211localreview3awk9Statement8Continue();
function _M0DTP211localreview3awk9Statement4Next() {}
_M0DTP211localreview3awk9Statement4Next.prototype.$tag = 11;
const _M0DTP211localreview3awk9Statement4Next__ = new _M0DTP211localreview3awk9Statement4Next();
function _M0DTP211localreview3awk9Statement4Exit(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk9Statement4Exit.prototype.$tag = 12;
function _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk5Token(param0, param1) {
  this.text = param0;
  this.quoted = param1;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP211localreview3awk6Cursor(param0, param1) {
  this.tokens = param0;
  this.pos = param1;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk4Rule(param0, param1, param2, param3, param4) {
  this.phase = param0;
  this.condition = param1;
  this.until = param2;
  this.body = param3;
  this.active = param4;
}
function $compare_float(a, b) {
  return (a >= b) - (a <= b);
}
function _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
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
function _M0DTP211localreview3awk4Flow8ExitFlow(param0) {
  this._0 = param0;
}
_M0DTP211localreview3awk4Flow8ExitFlow.prototype.$tag = 4;
function _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview3awk5State(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.vars = param0;
  this.arrays = param1;
  this.fields = param2;
  this.record = param3;
  this.output = param4;
  this.output_size = param5;
  this.steps = param6;
  this.step_limit = param7;
  this.entries = param8;
  this.eval_depth = param9;
}
function _M0TPB9ArrayViewGUsRPB3MapGsRP211localreview3awk5ValueEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP211localreview3awk9RunResult(param0, param1, param2) {
  this.output = param0;
  this.exit_status = param1;
  this.steps = param2;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
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
const _M0FPC15debug6renderN6constrS1705 = 16;
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
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
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
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
function _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGcEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
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
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
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
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
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
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
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
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
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
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
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
    return _M0FPC15abort5abortGRPC16string10StringViewE("negative repeat count");
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
          return _M0FPC15abort5abortGRPC16string10StringViewE("repeat result too large");
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
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
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
function _M0MPC15array5Array4pushGRPC16string10StringViewE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
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
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
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
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
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
    const _bind = code >>> 5 | 0;
    switch (_bind) {
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
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
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
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
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
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(self, f) {
  return new _M0TPB4IterGRP211localreview3awk5ValueE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
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
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
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
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    const _Some = _bind;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(_n);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC16string10StringViewE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
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
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
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
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
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
function _M0MPC15array10FixedArray4iterGRPC16string10StringViewE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
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
function _M0MPC15array13ReadOnlyArray4iterGRPC16string10StringViewE(self) {
  return _M0MPC15array10FixedArray4iterGRPC16string10StringViewE(self);
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
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(self) {
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
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGcE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGcE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
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
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview3awk5ValueE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview3awk5ValueE(_bind$2, _bind$3, psl, hash, key, value);
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGsRP211localreview3awk5ValueEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGsRP211localreview3awk5ValueEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP211localreview3awk5ValueE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview3awk5ValueE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGsRP211localreview3awk5ValueEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPB3Map3getGsRP211localreview3awk5ValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map8containsGsRP211localreview3awk5ValueE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map13remove__entryGsRP211localreview3awk5ValueE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGsRP211localreview3awk5ValueE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind = self.entries[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
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
function _M0MPB3Map18remove__with__hashGsRP211localreview3awk5ValueE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map6removeGsRP211localreview3awk5ValueE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP211localreview3awk5ValueE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(self) {
  return self.size;
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRP211localreview3awk5ValueEE(self, value, start, end) {
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
function _M0MPB3Map5clearGsRP211localreview3awk5ValueE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRP211localreview3awk5ValueEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
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
function _M0MPB3Map5iter2GsRP211localreview3awk5ValueE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0MPC15array5Array3mapGcsE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPB4Iter3allGcE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return true;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter6filterGRPC16string10StringViewE(self, f) {
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    while (true) {
      const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB4Iter9flat__mapGRPC16string10StringViewRPC16string10StringViewE(self, f) {
  const current_iter = new _M0TPB8MutLocalGORPB4IterGRPC16string10StringViewEE(_M0MPC15array13ReadOnlyArray4iterGRPC16string10StringViewE([]));
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = current_iter.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _iter = _Some;
      let _tmp = _M0MPB4Iter4nextGRPC16string10StringViewE(_iter);
      while (true) {
        const x = _tmp;
        if (x === undefined) {
          const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
          if (_bind$2 === undefined) {
            return undefined;
          } else {
            const _Some$2 = _bind$2;
            const _x = _Some$2;
            const iter = f(_x);
            current_iter.val = iter;
            _tmp = _M0MPB4Iter4nextGRPC16string10StringViewE(iter);
            continue;
          }
        } else {
          const _Some$2 = x;
          return _Some$2;
        }
      }
    }
  }, undefined);
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRP211localreview3awk5ValueE(self) {
  return _M0MPB4Iter4nextGRPC16string10StringViewE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
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
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPC16string10StringViewE("View index out of bounds");
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP211localreview3awk5ValueE(self, new_len) {
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
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
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
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
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
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
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
    const _bind = _M0FPB24fixed__choose__pivot__byGsE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGsE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGsE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
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
  const _bind = self.length;
  _M0MPC15array12MutArrayView8sort__byGsE(new _M0TPB12MutArrayViewGsE(self, 0, _bind), cmp);
}
function _M0MPC15array5Array3getGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : -1;
}
function _M0MPC15array5Array3getGRP211localreview3awk5ValueE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPC15array5Array5clearGRP211localreview3awk5ValueE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP211localreview3awk5ValueE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPC16string10StringViewE(arr, v);
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC16string10StringViewE(self, _x);
      continue;
    }
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
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
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
      _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, `${_last}${finish}`);
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
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRPC16string10StringViewE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
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
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRPC16string10StringViewE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRPC16string10StringViewE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPC16string10StringViewE(parts, _M0MPC16string6String4trim(_last, undefined));
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
        _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, close);
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
            _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(out, close);
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
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
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
                _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRPC16string10StringViewE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRPC16string10StringViewE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
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
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, head);
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
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, `${_name$3}=${_first}`);
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
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPC16string10StringViewE(_self, `${label}: ${_first}`);
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
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
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
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
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
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
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
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
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
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
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
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$5 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
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
  const _bind = _accept_state_298;
  switch (_bind) {
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
      const _bind = _accept_state_216;
      switch (_bind) {
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
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
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
                          const _bind = rest_start + 1 | 0;
                          _tmp$2 = _bind;
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
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
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
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
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
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
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
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
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
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
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
      const _bind = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
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
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
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
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
        _M0MPC15array5Array4pushGRPC16string10StringViewE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRPC16string10StringViewE(cache, "\n");
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
          const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
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
            _M0MPC15array5Array4pushGRPC16string10StringViewE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
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
            _M0MPC15array5Array4pushGRPC16string10StringViewE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
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
function _M0FPC14math3pow(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function _M0IP211localreview3awk10ParseErrorPC15debug5Debug8to__repr(_x_326) {
  let _arg_327;
  _L: {
    const _Invalid = _x_326;
    const _$42$arg_327 = _Invalid._0;
    _arg_327 = _$42$arg_327;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_327) }]);
}
function _M0IP211localreview3awk9RunResultPB6ToJson8to__json(_x_317) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "output", _M0IPC16string6StringPB6ToJson8to__json(_x_317.output));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "exit_status", _M0IPC13int3IntPB6ToJson8to__json(_x_317.exit_status));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "steps", _M0IPC13int3IntPB6ToJson8to__json(_x_317.steps));
  return _M0MPC14json4Json6object($36$map);
}
function _M0FP211localreview3awk6finite(n) {
  if (_M0MPC16double6Double7is__nan(n) || _M0MPC16double6Double7is__inf(n)) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("non-finite number"));
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(n));
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
function _M0FP211localreview3awk12input__value(text) {
  const trimmed = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(text, undefined));
  const cs = _M0MPC16string6String9to__array(trimmed);
  if (!_M0MPC15array5Array9is__emptyGcE(cs) && _M0FP211localreview3awk11number__end(cs, 0, true) === cs.length) {
    let n;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(trimmed, 0, trimmed.length));
        if (_bind.$tag === 1) {
          const _ok = _bind;
          n = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      return new _M0DTP211localreview3awk5Value4Text(text);
    }
    if (!_M0MPC16double6Double7is__nan(n) && !_M0MPC16double6Double7is__inf(n)) {
      return new _M0DTP211localreview3awk5Value13NumericString(text, n);
    }
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
    let n;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          return new _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok(0);
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
    return new _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok(n);
  }
  const cs = _M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(s, undefined)));
  const end = _M0FP211localreview3awk11number__end(cs, 0, true);
  if (end === 0) {
    return new _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok(0);
  }
  let n;
  let _try_err;
  _L$2: {
    _L$3: {
      const _tmp = _M0MPC15array5Array3mapGcsE(_M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(cs, 0, end)), (c) => _M0IPC14char4CharPB4Show10to__string(c));
      const _bind = "";
      const _bind$2 = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
      const _bind$3 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        n = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    return new _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("numeric conversion"));
  }
  const _bind = _M0FP211localreview3awk6finite(n);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGdRP211localreview3awk10ParseErrorE2Ok(n);
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
function _M0MP211localreview3awk5State8variable(self, name) {
  if (_M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name)) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`array used as scalar: ${name}`));
  }
  let value;
  _L: {
    const _bind = _M0MPB3Map3getGsRP211localreview3awk5ValueE(self.vars, name);
    if (_bind === undefined) {
      _M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, name, _M0DTP211localreview3awk5Value5Empty__);
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk5Value5Empty__);
    } else {
      const _Some = _bind;
      const _value = _Some;
      value = _value;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(value);
}
function _M0MP211localreview3awk5State5array(self, name) {
  if (_M0MPB3Map8containsGsRP211localreview3awk5ValueE(self.vars, name)) {
    return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`scalar used as array: ${name}`));
  }
  let a;
  _L: {
    const _bind = _M0MPB3Map3getGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name);
    if (_bind === undefined) {
      const _bind$2 = [];
      const a$2 = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$2, 0, 0), undefined);
      _M0MPB3Map3setGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name, a$2);
      return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(a$2);
    } else {
      const _Some = _bind;
      const _a = _Some;
      a = _a;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRPB3MapGsRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(a);
}
function _M0MP211localreview3awk5State12put__element(self, name, key, value) {
  const _bind = _M0MP211localreview3awk5State5array(self, name);
  let a;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    a = _ok._0;
  } else {
    return _bind;
  }
  if (!_M0MPB3Map8containsGsRP211localreview3awk5ValueE(a, key)) {
    if (self.entries >= 100000) {
      return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("array entry budget"));
    }
    self.entries = self.entries + 1 | 0;
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(a, key, value));
}
function _M0FP211localreview3awk13split__fields(text, separator) {
  let _tmp;
  if (_M0MPC16string6String9is__empty(separator)) {
    _tmp = true;
  } else {
    const _bind = "\n";
    _tmp = _M0MPC16string6String8contains(separator, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid literal separator"));
  }
  if (_M0MPC16string6String9is__empty(text)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok([]);
  }
  let _tmp$2;
  if (separator === " ") {
    const _bind = " ";
    _tmp$2 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPB4Iter9flat__mapGRPC16string10StringViewRPC16string10StringViewE(_M0MPB4Iter9flat__mapGRPC16string10StringViewRPC16string10StringViewE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (s) => {
      const _bind$2 = "\t";
      return _M0MPC16string10StringView5split(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
    }), (s) => {
      const _bind$2 = "\n";
      return _M0MPC16string10StringView5split(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
    }), (s) => !_M0MPC16string10StringView9is__empty(s)), (s) => _M0FP211localreview3awk12input__value(_M0MPC16string10StringView9to__owned(s))));
  } else {
    _tmp$2 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewRP211localreview3awk5ValueE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(separator, 0, separator.length)), (s) => _M0FP211localreview3awk12input__value(_M0MPC16string10StringView9to__owned(s))));
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk5ValueERP211localreview3awk10ParseErrorE2Ok(_tmp$2);
}
function _M0MP211localreview3awk5State11set__record(self, text) {
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
  }
  self.record = text;
  const _bind = _M0MP211localreview3awk5State8variable(self, "FS");
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP211localreview3awk13split__fields(text, _M0MP211localreview3awk5Value4text(_tmp));
  let fields;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    fields = _ok._0;
  } else {
    return _bind$2;
  }
  if (fields.length > 10000) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field count budget"));
  }
  _M0MPC15array5Array5clearGRP211localreview3awk5ValueE(self.fields);
  const _bind$3 = fields.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const field = fields[_];
      _M0MPC15array5Array4pushGRPC16string10StringViewE(self.fields, field);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", new _M0DTP211localreview3awk5Value6Number(self.fields.length + 0)));
}
function _M0MP211localreview3awk5State7rebuild(self) {
  const _bind = _M0MP211localreview3awk5State8variable(self, "OFS");
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const ofs = _M0MP211localreview3awk5Value4text(_tmp);
  const length = new _M0TPB8MutLocalGiE(0);
  const _bind$2 = self.fields;
  const _bind$3 = _bind$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const value = _bind$2[_];
      length.val = length.val + (_M0MP211localreview3awk5Value4text(value).length + ofs.length | 0) | 0;
      if (length.val > 1000000) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("record length budget"));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.record = _M0MPC15array5Array4joinGsE(_M0MPC15array5Array3mapGRP211localreview3awk5ValuesE(self.fields, (v) => _M0MP211localreview3awk5Value4text(v)), new _M0TPC16string10StringView(ofs, 0, ofs.length));
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, "NF", new _M0DTP211localreview3awk5Value6Number(self.fields.length + 0)));
}
function _M0FP211localreview3awk12field__index(n) {
  if (n < 0 || n > 10000) {
    return new _M0DTPC16result6ResultGiRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("field index 0..10000 required"));
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
    return i === 0 ? new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk12input__value(self.record)) : new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0MPC16option6Option10unwrap__orGRP211localreview3awk5ValueE(_M0MPC15array5Array3getGRP211localreview3awk5ValueE(self.fields, i - 1 | 0), _M0DTP211localreview3awk5Value5Empty__));
  }
  const _bind = _M0MP211localreview3awk5State5array(self, name);
  let a;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    a = _ok._0;
  } else {
    return _bind;
  }
  let v;
  _L$2: {
    const _bind$2 = _M0MPB3Map3getGsRP211localreview3awk5ValueE(a, key);
    if (_bind$2 === undefined) {
      const _bind$3 = _M0MP211localreview3awk5State12put__element(self, name, key, _M0DTP211localreview3awk5Value5Empty__);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk5Value5Empty__);
    } else {
      const _Some = _bind$2;
      const _v = _Some;
      v = _v;
      break _L$2;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(v);
}
function _M0MP211localreview3awk5State5write(self, slot, value) {
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
      if (_M0MPB3Map8containsGsRPB3MapGsRP211localreview3awk5ValueEE(self.arrays, name$2)) {
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`array used as scalar: ${name$2}`));
      }
      if (name$2 === "NF") {
        const _bind = _M0MP211localreview3awk5Value6number(value);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          return _bind;
        }
        const _bind$2 = _M0FP211localreview3awk12field__index(_tmp);
        let size;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          size = _ok._0;
        } else {
          return _bind$2;
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
            _M0MPC15array5Array4pushGRPC16string10StringViewE(self.fields, _M0DTP211localreview3awk5Value5Empty__);
            continue;
          } else {
            break;
          }
        }
        return _M0MP211localreview3awk5State7rebuild(self);
      } else {
        if (_M0MPC15array5Array8containsGsE(["RS", "OFMT", "CONVFMT", "ARGV", "ARGC", "ENVIRON"], name$2)) {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported special variable ${name$2}`));
        }
        let _tmp;
        if (name$2 === "FS") {
          let _tmp$2;
          if (_M0MPC16string6String9is__empty(_M0MP211localreview3awk5Value4text(value))) {
            _tmp$2 = true;
          } else {
            const _tmp$3 = _M0MP211localreview3awk5Value4text(value);
            const _bind = "\n";
            _tmp$2 = _M0MPC16string6String8contains(_tmp$3, new _M0TPC16string10StringView(_bind, 0, _bind.length));
          }
          _tmp = _tmp$2;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid literal separator"));
        }
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPB3Map3setGsRP211localreview3awk5ValueE(self.vars, name$2, value));
      }
    }
    if (i === 0) {
      return _M0MP211localreview3awk5State11set__record(self, _M0MP211localreview3awk5Value4text(value));
    } else {
      while (true) {
        if (self.fields.length < i) {
          _M0MPC15array5Array4pushGRPC16string10StringViewE(self.fields, _M0DTP211localreview3awk5Value5Empty__);
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array3setGRP211localreview3awk5ValueE(self.fields, i - 1 | 0, value);
      return _M0MP211localreview3awk5State7rebuild(self);
    }
  }
  return _M0MP211localreview3awk5State12put__element(self, name, key, value);
}
function _M0MP211localreview3awk5State4emit(self, text) {
  if (text.length > (1000000 - self.output_size | 0)) {
    return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("output length budget"));
  }
  self.output_size = self.output_size + text.length | 0;
  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array4pushGRPC16string10StringViewE(self.output, text));
}
function _M0FP211localreview3awk8reserved(s) {
  return _M0MPC15array5Array8containsGsE(["BEGIN", "END", "if", "else", "while", "do", "for", "in", "break", "continue", "next", "exit", "delete", "print", "printf", "function", "return", "getline"], s);
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
    case "==": {
      return 6;
    }
    case "!=": {
      return 6;
    }
    case "<": {
      return 6;
    }
    case ">": {
      return 6;
    }
    case "<=": {
      return 6;
    }
    case ">=": {
      return 6;
    }
    case "+": {
      return 8;
    }
    case "-": {
      return 8;
    }
    case "*": {
      return 9;
    }
    case "/": {
      return 9;
    }
    case "%": {
      return 9;
    }
    case "^": {
      return 11;
    }
    case "++": {
      return 12;
    }
    case "--": {
      return 12;
    }
    default: {
      return 0;
    }
  }
}
function _M0FP211localreview3awk6lvalue(e) {
  switch (e.$tag) {
    case 1: {
      return true;
    }
    case 2: {
      return true;
    }
    case 3: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP211localreview3awk4word(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c === 95 || (c >= 48 && c <= 57 || c > 127)));
}
function _M0FP211localreview3awk10identifier(s) {
  const cs = _M0MPC16string6String9to__array(s);
  return !_M0MPC15array5Array9is__emptyGcE(cs) && (_M0FP211localreview3awk4word(_M0MPC15array5Array2atGcE(cs, 0)) && (!_M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, 0)) && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), _M0FP211localreview3awk4word)));
}
function _M0MP211localreview3awk6Cursor4peek(self) {
  return self.pos < self.tokens.length ? (_M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).quoted ? "<string>" : _M0MPC15array5Array2atGRPC16string10StringViewE(self.tokens, self.pos).text) : "<eof>";
}
function _M0MP211localreview3awk6Cursor3eat(self, text) {
  if (_M0MP211localreview3awk6Cursor4peek(self) === text) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
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
  const _bind = _M0MP211localreview3awk6Cursor4take(self);
  let t;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    t = _ok._0;
  } else {
    return _bind;
  }
  let _tmp;
  if (t.quoted) {
    _tmp = new _M0DTP211localreview3awk4Expr7Literal(new _M0DTP211localreview3awk5Value4Text(t.text));
  } else {
    if (t.text === "(") {
      const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
      let first;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        first = _ok._0;
      } else {
        return _bind$2;
      }
      const entries = [first];
      while (true) {
        if (_M0MP211localreview3awk6Cursor3eat(self, ",")) {
          const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          _M0MPC15array5Array4pushGRPC16string10StringViewE(entries, _tmp$2);
          continue;
        } else {
          break;
        }
      }
      const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ")");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = entries.length === 1 ? first : new _M0DTP211localreview3awk4Expr5Tuple(entries);
    } else {
      if (t.text === "$") {
        const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 13, depth + 1 | 0, false);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          return _bind$2;
        }
        _tmp = new _M0DTP211localreview3awk4Expr5Field(_tmp$2);
      } else {
        if (_M0MPC15array5Array8containsGsE(["+", "-", "!"], t.text)) {
          const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 10, depth + 1 | 0, false);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          _tmp = new _M0DTP211localreview3awk4Expr5Unary(t.text, _tmp$2);
        } else {
          if (t.text === "++" || t.text === "--") {
            const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 12, depth + 1 | 0, false);
            let target;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              target = _ok._0;
            } else {
              return _bind$2;
            }
            if (!_M0FP211localreview3awk6lvalue(target)) {
              return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("increment target"));
            }
            _tmp = new _M0DTP211localreview3awk4Expr9Increment(target, t.text === "++" ? 1 : -1, true);
          } else {
            if (_M0FP211localreview3awk10identifier(t.text) && !_M0FP211localreview3awk8reserved(t.text)) {
              if (_M0MP211localreview3awk6Cursor3eat(self, "[")) {
                const _bind$2 = _M0MP211localreview3awk6Cursor9arguments(self, "]", depth + 1 | 0);
                let keys;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  keys = _ok._0;
                } else {
                  return _bind$2;
                }
                if (_M0MPC15array5Array9is__emptyGRPB4JsonE(keys)) {
                  return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("empty array subscript"));
                }
                _tmp = new _M0DTP211localreview3awk4Expr7Element(t.text, keys);
              } else {
                if (_M0MP211localreview3awk6Cursor3eat(self, "(")) {
                  if (!_M0MPC15array5Array8containsGsE(["length", "substr", "index", "split", "int", "sqrt", "tolower", "toupper"], t.text)) {
                    return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported function ${t.text}`));
                  }
                  const _bind$2 = _M0MP211localreview3awk6Cursor9arguments(self, ")", depth + 1 | 0);
                  let _tmp$2;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$2 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  _tmp = new _M0DTP211localreview3awk4Expr4Call(t.text, _tmp$2);
                } else {
                  _tmp = new _M0DTP211localreview3awk4Expr8Variable(t.text);
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
                  const _bind$2 = t.text;
                  const _bind$3 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$2 = _ok._0;
                  } else {
                    const _err = _bind$3;
                    _try_err = _err._0;
                    break _L$2;
                  }
                  break _L;
                }
                return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid number"));
              }
              const _bind$2 = _M0FP211localreview3awk6finite(_tmp$2);
              let _tmp$3;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$3 = _ok._0;
              } else {
                return _bind$2;
              }
              _tmp = new _M0DTP211localreview3awk4Expr7Literal(_tmp$3);
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
      return new _M0DTPC16result6ResultGRP211localreview3awk4ExprRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("print redirection is unsupported; parenthesize a comparison"));
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
                    const _bind$2 = _M0MPC15array5Array3getGcE(_M0MPC16string6String9to__array(op), 0);
                    if (_bind$2 === -1) {
                    } else {
                      const _Some = _bind$2;
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
          break _L;
        }
        p.val = 7;
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
      const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth + 1 | 0, false);
      let yes;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        yes = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ":");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 2, depth + 1 | 0, false);
      let _tmp$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$2 = _ok._0;
      } else {
        return _bind$4;
      }
      left.val = new _M0DTP211localreview3awk4Expr11Conditional(left.val, yes, _tmp$2);
      continue;
    }
    const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, p.val === 1 || op === "^" ? p.val : p.val + 1 | 0, depth + 1 | 0, false);
    let right;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      right = _ok._0;
    } else {
      return _bind$2;
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
      const _bind = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, depth, false);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(args, _tmp);
      if (!_M0MP211localreview3awk6Cursor3eat(self, ",")) {
        break;
      }
      continue;
    }
    const _bind = _M0MP211localreview3awk6Cursor4need(self, close);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4ExprERP211localreview3awk10ParseErrorE2Ok(args);
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
        const _bind = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          return _bind;
        }
        _M0MPC15array5Array4pushGRPC16string10StringViewE(body, _tmp);
        _M0MP211localreview3awk6Cursor10separators(self);
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5Block(body));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "if")) {
    const _bind = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      condition = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let yes;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      yes = _ok._0;
    } else {
      return _bind$4;
    }
    _M0MP211localreview3awk6Cursor8newlines(self);
    let no;
    if (_M0MP211localreview3awk6Cursor3eat(self, "else")) {
      const _bind$5 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        no = _ok._0;
      } else {
        return _bind$5;
      }
    } else {
      no = undefined;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement2If(condition, yes, no));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "while")) {
    const _bind = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      condition = _ok._0;
    } else {
      return _bind$2;
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
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5While(condition, _tmp));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "do")) {
    const _bind = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
    let body;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      body = _ok._0;
    } else {
      return _bind;
    }
    _M0MP211localreview3awk6Cursor8newlines(self);
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, "while");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
    let condition;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      condition = _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0MP211localreview3awk6Cursor4need(self, ")");
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0MP211localreview3awk6Cursor14end__statement(self);
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _ok._0;
    } else {
      return _bind$6;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement2Do(body, condition));
  }
  if (_M0MP211localreview3awk6Cursor3eat(self, "for")) {
    const _bind = _M0MP211localreview3awk6Cursor4need(self, "(");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    let first;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ";") {
      first = undefined;
    } else {
      const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        first = _ok._0;
      } else {
        return _bind$2;
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
          if (_x.$tag === 6) {
            const _Binary = _x;
            const _x$2 = _Binary._0;
            if (_x$2 === "in") {
              const _x$3 = _Binary._1;
              if (_x$3.$tag === 1) {
                const _Variable = _x$3;
                const _key = _Variable._0;
                const _x$4 = _Binary._2;
                if (_x$4.$tag === 1) {
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
      const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, ")");
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP211localreview3awk6Cursor9statement(self, depth + 1 | 0);
      let _tmp;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement5ForIn(key, array, _tmp));
    }
    const _bind$2 = _M0MP211localreview3awk6Cursor4need(self, ";");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    let condition;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ";") {
      condition = undefined;
    } else {
      const _bind$3 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        condition = _ok._0;
      } else {
        return _bind$3;
      }
    }
    const _bind$3 = _M0MP211localreview3awk6Cursor4need(self, ";");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    let step;
    if (_M0MP211localreview3awk6Cursor4peek(self) === ")") {
      step = undefined;
    } else {
      const _bind$4 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        step = _ok._0;
      } else {
        return _bind$4;
      }
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
    return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk9Statement3For(first, condition, step, _tmp));
  }
  let result;
  if (_M0MP211localreview3awk6Cursor3eat(self, "print")) {
    const values = [];
    if (!_M0MPC15array5Array8containsGsE([";", "\n", "}", "<eof>", "else"], _M0MP211localreview3awk6Cursor4peek(self))) {
      const _bind = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, true);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(values, _tmp);
      while (true) {
        if (_M0MP211localreview3awk6Cursor3eat(self, ",")) {
          const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, true);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          _M0MPC15array5Array4pushGRPC16string10StringViewE(values, _tmp$2);
          continue;
        } else {
          break;
        }
      }
    }
    result = new _M0DTP211localreview3awk9Statement5Print(values);
  } else {
    if (_M0MP211localreview3awk6Cursor3eat(self, "break")) {
      result = _M0DTP211localreview3awk9Statement5Break__;
    } else {
      if (_M0MP211localreview3awk6Cursor3eat(self, "continue")) {
        result = _M0DTP211localreview3awk9Statement8Continue__;
      } else {
        if (_M0MP211localreview3awk6Cursor3eat(self, "next")) {
          result = _M0DTP211localreview3awk9Statement4Next__;
        } else {
          if (_M0MP211localreview3awk6Cursor3eat(self, "exit")) {
            let _tmp;
            if (_M0MPC15array5Array8containsGsE([";", "\n", "}", "<eof>", "else"], _M0MP211localreview3awk6Cursor4peek(self))) {
              _tmp = undefined;
            } else {
              const _bind = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp = _ok._0;
              } else {
                return _bind;
              }
            }
            result = new _M0DTP211localreview3awk9Statement4Exit(_tmp);
          } else {
            if (_M0MP211localreview3awk6Cursor3eat(self, "delete")) {
              const _bind = _M0MP211localreview3awk6Cursor4take(self);
              let name;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                name = _ok._0;
              } else {
                return _bind;
              }
              if (name.quoted || !_M0FP211localreview3awk10identifier(name.text)) {
                return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("array name"));
              }
              let keys;
              if (_M0MP211localreview3awk6Cursor3eat(self, "[")) {
                const _bind$2 = _M0MP211localreview3awk6Cursor9arguments(self, "]", 0);
                let _tmp;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp = _ok._0;
                } else {
                  return _bind$2;
                }
                keys = new _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4Some(_tmp);
              } else {
                keys = _M0DTPC16option6OptionGRPB5ArrayGRP211localreview3awk4ExprEE4None__;
              }
              result = new _M0DTP211localreview3awk9Statement6Delete(name.text, keys);
            } else {
              const _bind = _M0MP211localreview3awk6Cursor18expression_2einner(self, 1, 0, false);
              let _tmp;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp = _ok._0;
              } else {
                return _bind;
              }
              result = new _M0DTP211localreview3awk9Statement10Expression(_tmp);
            }
          }
        }
      }
    }
  }
  const _bind = _M0MP211localreview3awk6Cursor14end__statement(self);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk9StatementRP211localreview3awk10ParseErrorE2Ok(result);
}
function _M0FP211localreview3awk3lex(source, newlines) {
  if (source.length > 100000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("source limit"));
  }
  const cs = _M0MPC16string6String9to__array(source);
  const ts = [];
  const i = new _M0TPB8MutLocalGiE(0);
  const parens = new _M0TPB8MutLocalGiE(0);
  const brackets = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 32 || (c === 9 || c === 13)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 10) {
        if (newlines && (parens.val === 0 && brackets.val === 0)) {
          _M0MPC15array5Array4pushGRPC16string10StringViewE(ts, new _M0TP211localreview3awk5Token("\n", false));
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
      if (_M0FP211localreview3awk5digit(c) || c === 46 && ((i.val + 1 | 0) < cs.length && _M0FP211localreview3awk5digit(_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0)))) {
        const end = _M0FP211localreview3awk11number__end(cs, i.val, false);
        const _tmp = _M0MPC15array5Array3mapGcsE(_M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(cs, i.val, end)), (c$2) => _M0IPC14char4CharPB4Show10to__string(c$2));
        const _bind = "";
        _M0MPC15array5Array4pushGRPC16string10StringViewE(ts, new _M0TP211localreview3awk5Token(_M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length)), false));
        i.val = end;
        continue;
      }
      if (c === 34 || c === 39) {
        const quote = c;
        i.val = i.val + 1 | 0;
        const s = new _M0TPB8MutLocalGsE("");
        const closed = new _M0TPB8MutLocalGbE(false);
        while (true) {
          if (i.val < cs.length) {
            const ch = _M0MPC15array5Array2atGcE(cs, i.val);
            i.val = i.val + 1 | 0;
            if (ch === quote) {
              closed.val = true;
              break;
            }
            if (ch === 92) {
              if (i.val >= cs.length) {
                return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("truncated escape"));
              }
              const _tmp = s.val;
              const _bind = _M0MPC15array5Array2atGcE(cs, i.val);
              let _tmp$2;
              switch (_bind) {
                case 110: {
                  _tmp$2 = "\n";
                  break;
                }
                case 114: {
                  _tmp$2 = "\r";
                  break;
                }
                case 116: {
                  _tmp$2 = "\t";
                  break;
                }
                case 92: {
                  _tmp$2 = "\\";
                  break;
                }
                case 34: {
                  _tmp$2 = "\"";
                  break;
                }
                case 39: {
                  _tmp$2 = "'";
                  break;
                }
                default: {
                  return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unsupported escape"));
                }
              }
              s.val = `${_tmp}${_tmp$2}`;
              i.val = i.val + 1 | 0;
            } else {
              s.val = `${s.val}${_M0IPC14char4CharPB4Show10to__string(ch)}`;
            }
            continue;
          } else {
            break;
          }
        }
        if (!closed.val) {
          return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("unterminated string"));
        }
        _M0MPC15array5Array4pushGRPC16string10StringViewE(ts, new _M0TP211localreview3awk5Token(s.val, true));
        continue;
      }
      if (_M0FP211localreview3awk4word(c)) {
        const s = new _M0TPB8MutLocalGsE("");
        while (true) {
          if (i.val < cs.length && _M0FP211localreview3awk4word(_M0MPC15array5Array2atGcE(cs, i.val))) {
            s.val = `${s.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRPC16string10StringViewE(ts, new _M0TP211localreview3awk5Token(s.val, false));
        continue;
      }
      const s = new _M0TPB8MutLocalGsE(_M0IPC14char4CharPB4Show10to__string(c));
      if (c === 40) {
        parens.val = parens.val + 1 | 0;
      }
      if (c === 41) {
        parens.val = parens.val - 1 | 0;
      }
      if (c === 91) {
        brackets.val = brackets.val + 1 | 0;
      }
      if (c === 93) {
        brackets.val = brackets.val - 1 | 0;
      }
      i.val = i.val + 1 | 0;
      if (i.val < cs.length) {
        const pair = `${s.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
        if (pair === "==" || (pair === "!=" || (pair === ">=" || (pair === "<=" || (pair === "=~" || (pair === "!~" || (pair === "+=" || (pair === "-=" || (pair === "*=" || (pair === "/=" || (pair === "%=" || (pair === "^=" || (pair === "++" || (pair === "--" || (pair === "&&" || pair === "||"))))))))))))))) {
          s.val = pair;
          i.val = i.val + 1 | 0;
        }
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(ts, new _M0TP211localreview3awk5Token(s.val, false));
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk6CursorRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk6Cursor(ts, 0));
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
            switch (stmt$2.$tag) {
              case 9: {
                break _L$5;
              }
              case 10: {
                break _L$5;
              }
              case 11: {
                if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase$2, "record")) {
                  return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next outside record action"));
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
              case 3: {
                const _If = stmt$2;
                const _yes = _If._1;
                const _no = _If._2;
                yes = _yes;
                no = _no;
                break _L$3;
              }
              case 4: {
                const _While = stmt$2;
                const _body = _While._1;
                body = _body;
                break _L$2;
              }
              case 5: {
                const _Do = stmt$2;
                const _body$2 = _Do._0;
                body = _body$2;
                break _L$2;
              }
              case 6: {
                const _For = stmt$2;
                const _body$3 = _For._3;
                body = _body$3;
                break _L$2;
              }
              case 7: {
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
        const _bind = statements.length;
        let _tmp$4 = 0;
        while (true) {
          const _ = _tmp$4;
          if (_ < _bind) {
            const statement = statements[_];
            const _bind$2 = _M0FP211localreview3awk17validate__control(statement, loops$2, phase$2);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            _tmp$4 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGuRP211localreview3awk10ParseErrorE2Ok(undefined);
      }
      const _bind = _M0FP211localreview3awk17validate__control(yes, loops$2, phase$2);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
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
function _M0FP211localreview3awk5parse(program) {
  const _bind = _M0FP211localreview3awk3lex(program, true);
  let c;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    c = _ok._0;
  } else {
    return _bind;
  }
  const rules = [];
  _M0MP211localreview3awk6Cursor10separators(c);
  while (true) {
    if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MP211localreview3awk6Cursor4peek(c), "<eof>")) {
      const phase = _M0MP211localreview3awk6Cursor3eat(c, "BEGIN") ? "BEGIN" : _M0MP211localreview3awk6Cursor3eat(c, "END") ? "END" : "record";
      let condition;
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(phase, "record") || _M0MP211localreview3awk6Cursor4peek(c) === "{") {
        condition = undefined;
      } else {
        const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(c, 1, 0, false);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          condition = _ok._0;
        } else {
          return _bind$2;
        }
      }
      let until;
      _L: {
        _L$2: {
          if (condition === undefined) {
            break _L$2;
          } else {
            if (_M0MP211localreview3awk6Cursor3eat(c, ",")) {
              const _bind$2 = _M0MP211localreview3awk6Cursor18expression_2einner(c, 1, 0, false);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                until = _ok._0;
              } else {
                return _bind$2;
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
        const _bind$2 = _M0MP211localreview3awk6Cursor9statement(c, 0);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          body = _ok._0;
        } else {
          return _bind$2;
        }
      } else {
        _L$2: {
          _L$3: {
            if (phase === "record") {
              if (condition === undefined) {
                break _L$3;
              } else {
                const _bind$2 = _M0MP211localreview3awk6Cursor14end__statement(c);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                body = new _M0DTP211localreview3awk9Statement5Print([]);
              }
            } else {
              break _L$3;
            }
            break _L$2;
          }
          return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("expected rule action"));
        }
      }
      const _bind$2 = _M0FP211localreview3awk17validate__control(body, 0, phase);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(rules, new _M0TP211localreview3awk4Rule(phase, condition, until, body, false));
      _M0MP211localreview3awk6Cursor10separators(c);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview3awk4RuleERP211localreview3awk10ParseErrorE2Ok(rules);
}
function _M0FP211localreview3awk9calculate(op, a, b) {
  if (op === "concat") {
    const text = `${_M0MP211localreview3awk5Value4text(a)}${_M0MP211localreview3awk5Value4text(b)}`;
    if (text.length > 1000000) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("string length budget"));
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(text));
  }
  if (_M0MPC15array5Array8containsGsE(["==", "!=", "<", ">", "<=", ">="], op)) {
    let cmp;
    _L: {
      _L$2: {
        if (a.$tag === 2) {
          break _L$2;
        } else {
          if (b.$tag === 2) {
            break _L$2;
          } else {
            const _bind = _M0MP211localreview3awk5Value6number(a);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              return _bind;
            }
            const _tmp$2 = _tmp;
            const _bind$2 = _M0MP211localreview3awk5Value6number(b);
            let _tmp$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp$3 = _ok._0;
            } else {
              return _bind$2;
            }
            cmp = $compare_float(_tmp$2, _tmp$3);
          }
        }
        break _L;
      }
      cmp = _M0MPC16string6String16lexical__compare(_M0MP211localreview3awk5Value4text(a), _M0MP211localreview3awk5Value4text(b));
    }
    let _tmp;
    switch (op) {
      case "==": {
        _tmp = cmp === 0;
        break;
      }
      case "!=": {
        _tmp = cmp !== 0;
        break;
      }
      case "<": {
        _tmp = cmp < 0;
        break;
      }
      case ">": {
        _tmp = cmp > 0;
        break;
      }
      case "<=": {
        _tmp = cmp <= 0;
        break;
      }
      default: {
        _tmp = cmp >= 0;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(_M0FP211localreview3awk7boolean(_tmp));
  }
  const _bind = _M0MP211localreview3awk5Value6number(a);
  let left;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    left = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP211localreview3awk5Value6number(b);
  let right;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    right = _ok._0;
  } else {
    return _bind$2;
  }
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
  return _M0FP211localreview3awk6finite(_tmp);
}
function _M0FP211localreview3awk10array__key(keys, st) {
  const values = [];
  const _bind = keys.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const key = keys[_];
      const _bind$2 = _M0FP211localreview3awk8evaluate(key, st);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(values, _M0MP211localreview3awk5Value4text(_tmp$2));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _M0MP211localreview3awk5State8variable(st, "SUBSEP");
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP211localreview3awk5Value4text(_tmp$2);
  return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_M0MPC15array5Array4joinGsE(values, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
}
function _M0FP211localreview3awk8evaluate(expr, st) {
  const _bind = _M0MP211localreview3awk5State4tick(st);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  st.eval_depth = st.eval_depth + 1 | 0;
  if (st.eval_depth > 128) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("evaluation depth budget"));
  }
  let result;
  let name;
  let args;
  _L: {
    _L$2: {
      let left;
      let op;
      let right;
      _L$3: {
        _L$4: {
          let left$2;
          let name$2;
          _L$5: {
            _L$6: {
              let left$3;
              let right$2;
              _L$7: {
                _L$8: {
                  let left$4;
                  let right$3;
                  _L$9: {
                    _L$10: {
                      let yes;
                      let condition;
                      let no;
                      _L$11: {
                        _L$12: {
                          let delta;
                          let target;
                          let prefix;
                          _L$13: {
                            _L$14: {
                              let target$2;
                              let op$2;
                              let expr$2;
                              _L$15: {
                                _L$16: {
                                  let op$3;
                                  let child;
                                  _L$17: {
                                    _L$18: {
                                      _L$19: {
                                        _L$20: {
                                          switch (expr.$tag) {
                                            case 0: {
                                              const _Literal = expr;
                                              const _v = _Literal._0;
                                              result = _v;
                                              break;
                                            }
                                            case 1: {
                                              break _L$20;
                                            }
                                            case 2: {
                                              break _L$20;
                                            }
                                            case 3: {
                                              break _L$20;
                                            }
                                            case 4: {
                                              return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("tuple is only supported with in"));
                                            }
                                            case 5: {
                                              const _Unary = expr;
                                              const _op = _Unary._0;
                                              const _child = _Unary._1;
                                              op$3 = _op;
                                              child = _child;
                                              break _L$18;
                                            }
                                            case 7: {
                                              const _Assign = expr;
                                              const _op$2 = _Assign._0;
                                              const _target = _Assign._1;
                                              const _expr = _Assign._2;
                                              target$2 = _target;
                                              op$2 = _op$2;
                                              expr$2 = _expr;
                                              break _L$16;
                                            }
                                            case 8: {
                                              const _Increment = expr;
                                              const _target$2 = _Increment._0;
                                              const _delta = _Increment._1;
                                              const _prefix = _Increment._2;
                                              delta = _delta;
                                              target = _target$2;
                                              prefix = _prefix;
                                              break _L$14;
                                            }
                                            case 9: {
                                              const _Conditional = expr;
                                              const _condition = _Conditional._0;
                                              const _yes = _Conditional._1;
                                              const _no = _Conditional._2;
                                              yes = _yes;
                                              condition = _condition;
                                              no = _no;
                                              break _L$12;
                                            }
                                            case 6: {
                                              const _Binary = expr;
                                              const _x = _Binary._0;
                                              switch (_x) {
                                                case "&&": {
                                                  const _left = _Binary._1;
                                                  const _right = _Binary._2;
                                                  left$4 = _left;
                                                  right$3 = _right;
                                                  break _L$10;
                                                }
                                                case "||": {
                                                  const _left$2 = _Binary._1;
                                                  const _right$2 = _Binary._2;
                                                  left$3 = _left$2;
                                                  right$2 = _right$2;
                                                  break _L$8;
                                                }
                                                case "in": {
                                                  const _left$3 = _Binary._1;
                                                  const _x$2 = _Binary._2;
                                                  if (_x$2.$tag === 1) {
                                                    const _Variable = _x$2;
                                                    const _name = _Variable._0;
                                                    left$2 = _left$3;
                                                    name$2 = _name;
                                                    break _L$6;
                                                  } else {
                                                    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("in requires an array name"));
                                                  }
                                                }
                                                default: {
                                                  const _left$4 = _Binary._1;
                                                  const _right$3 = _Binary._2;
                                                  left = _left$4;
                                                  op = _x;
                                                  right = _right$3;
                                                  break _L$4;
                                                }
                                              }
                                            }
                                            default: {
                                              const _Call = expr;
                                              const _name = _Call._0;
                                              const _args = _Call._1;
                                              name = _name;
                                              args = _args;
                                              break _L$2;
                                            }
                                          }
                                          break _L$19;
                                        }
                                        const _bind$2 = _M0FP211localreview3awk4slot(expr, st);
                                        let _tmp;
                                        if (_bind$2.$tag === 1) {
                                          const _ok = _bind$2;
                                          _tmp = _ok._0;
                                        } else {
                                          return _bind$2;
                                        }
                                        const _bind$3 = _M0MP211localreview3awk5State4read(st, _tmp);
                                        if (_bind$3.$tag === 1) {
                                          const _ok = _bind$3;
                                          result = _ok._0;
                                        } else {
                                          return _bind$3;
                                        }
                                      }
                                      break _L$17;
                                    }
                                    const _bind$2 = _M0FP211localreview3awk8evaluate(child, st);
                                    let v;
                                    if (_bind$2.$tag === 1) {
                                      const _ok = _bind$2;
                                      v = _ok._0;
                                    } else {
                                      return _bind$2;
                                    }
                                    if (op$3 === "!") {
                                      result = _M0FP211localreview3awk7boolean(!_M0MP211localreview3awk5Value5truth(v));
                                    } else {
                                      const _tmp = op$3 === "-" ? -1 : 1;
                                      const _bind$3 = _M0MP211localreview3awk5Value6number(v);
                                      let _tmp$2;
                                      if (_bind$3.$tag === 1) {
                                        const _ok = _bind$3;
                                        _tmp$2 = _ok._0;
                                      } else {
                                        return _bind$3;
                                      }
                                      const _bind$4 = _M0FP211localreview3awk6finite(_tmp * _tmp$2);
                                      if (_bind$4.$tag === 1) {
                                        const _ok = _bind$4;
                                        result = _ok._0;
                                      } else {
                                        return _bind$4;
                                      }
                                    }
                                  }
                                  break _L$15;
                                }
                                const _bind$2 = _M0FP211localreview3awk4slot(target$2, st);
                                let location;
                                if (_bind$2.$tag === 1) {
                                  const _ok = _bind$2;
                                  location = _ok._0;
                                } else {
                                  return _bind$2;
                                }
                                const _bind$3 = _M0FP211localreview3awk8evaluate(expr$2, st);
                                let right$4;
                                if (_bind$3.$tag === 1) {
                                  const _ok = _bind$3;
                                  right$4 = _ok._0;
                                } else {
                                  return _bind$3;
                                }
                                let value;
                                if (op$2 === "=") {
                                  value = right$4;
                                } else {
                                  const _bind$4 = _M0MP211localreview3awk5State4read(st, location);
                                  let _tmp;
                                  if (_bind$4.$tag === 1) {
                                    const _ok = _bind$4;
                                    _tmp = _ok._0;
                                  } else {
                                    return _bind$4;
                                  }
                                  const _bind$5 = _M0FP211localreview3awk9calculate(op$2, _tmp, right$4);
                                  if (_bind$5.$tag === 1) {
                                    const _ok = _bind$5;
                                    value = _ok._0;
                                  } else {
                                    return _bind$5;
                                  }
                                }
                                const _bind$4 = _M0MP211localreview3awk5State5write(st, location, value);
                                if (_bind$4.$tag === 1) {
                                  const _ok = _bind$4;
                                  _ok._0;
                                } else {
                                  return _bind$4;
                                }
                                result = value;
                              }
                              break _L$13;
                            }
                            const _bind$2 = _M0FP211localreview3awk4slot(target, st);
                            let location;
                            if (_bind$2.$tag === 1) {
                              const _ok = _bind$2;
                              location = _ok._0;
                            } else {
                              return _bind$2;
                            }
                            const _bind$3 = _M0MP211localreview3awk5State4read(st, location);
                            let _tmp;
                            if (_bind$3.$tag === 1) {
                              const _ok = _bind$3;
                              _tmp = _ok._0;
                            } else {
                              return _bind$3;
                            }
                            const _bind$4 = _M0MP211localreview3awk5Value6number(_tmp);
                            let _tmp$2;
                            if (_bind$4.$tag === 1) {
                              const _ok = _bind$4;
                              _tmp$2 = _ok._0;
                            } else {
                              return _bind$4;
                            }
                            const _bind$5 = _M0FP211localreview3awk6finite(_tmp$2);
                            let before;
                            if (_bind$5.$tag === 1) {
                              const _ok = _bind$5;
                              before = _ok._0;
                            } else {
                              return _bind$5;
                            }
                            const _bind$6 = _M0FP211localreview3awk9calculate("+", before, new _M0DTP211localreview3awk5Value6Number(delta + 0));
                            let after;
                            if (_bind$6.$tag === 1) {
                              const _ok = _bind$6;
                              after = _ok._0;
                            } else {
                              return _bind$6;
                            }
                            const _bind$7 = _M0MP211localreview3awk5State5write(st, location, after);
                            if (_bind$7.$tag === 1) {
                              const _ok = _bind$7;
                              _ok._0;
                            } else {
                              return _bind$7;
                            }
                            result = prefix ? after : before;
                          }
                          break _L$11;
                        }
                        let _tmp;
                        const _bind$2 = _M0FP211localreview3awk8evaluate(condition, st);
                        let _tmp$2;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          _tmp$2 = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                          _tmp = yes;
                        } else {
                          _tmp = no;
                        }
                        const _bind$3 = _M0FP211localreview3awk8evaluate(_tmp, st);
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          result = _ok._0;
                        } else {
                          return _bind$3;
                        }
                      }
                      break _L$9;
                    }
                    let _tmp;
                    const _bind$2 = _M0FP211localreview3awk8evaluate(left$4, st);
                    let _tmp$2;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _tmp$2 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                      const _bind$3 = _M0FP211localreview3awk8evaluate(right$3, st);
                      let _tmp$3;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _tmp$3 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      _tmp = _M0MP211localreview3awk5Value5truth(_tmp$3);
                    } else {
                      _tmp = false;
                    }
                    result = _M0FP211localreview3awk7boolean(_tmp);
                  }
                  break _L$7;
                }
                let _tmp;
                const _bind$2 = _M0FP211localreview3awk8evaluate(left$3, st);
                let _tmp$2;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp$2 = _ok._0;
                } else {
                  return _bind$2;
                }
                if (_M0MP211localreview3awk5Value5truth(_tmp$2)) {
                  _tmp = true;
                } else {
                  const _bind$3 = _M0FP211localreview3awk8evaluate(right$2, st);
                  let _tmp$3;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  _tmp = _M0MP211localreview3awk5Value5truth(_tmp$3);
                }
                result = _M0FP211localreview3awk7boolean(_tmp);
              }
              break _L$5;
            }
            let key;
            let keys;
            _L$7: {
              _L$8: {
                if (left$2.$tag === 4) {
                  const _Tuple = left$2;
                  const _keys = _Tuple._0;
                  keys = _keys;
                  break _L$8;
                } else {
                  const _bind$2 = _M0FP211localreview3awk8evaluate(left$2, st);
                  let _tmp;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  key = _M0MP211localreview3awk5Value4text(_tmp);
                }
                break _L$7;
              }
              const _bind$2 = _M0FP211localreview3awk10array__key(keys, st);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                key = _ok._0;
              } else {
                return _bind$2;
              }
            }
            const _bind$2 = _M0MP211localreview3awk5State5array(st, name$2);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            result = _M0FP211localreview3awk7boolean(_M0MPB3Map8containsGsRP211localreview3awk5ValueE(_tmp, key));
          }
          break _L$3;
        }
        const _bind$2 = _M0FP211localreview3awk8evaluate(left, st);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        const _tmp$2 = _tmp;
        const _bind$3 = _M0FP211localreview3awk8evaluate(right, st);
        let _tmp$3;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$3 = _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0FP211localreview3awk9calculate(op, _tmp$2, _tmp$3);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          result = _ok._0;
        } else {
          return _bind$4;
        }
      }
      break _L;
    }
    const _bind$2 = _M0FP211localreview3awk7builtin(name, args, st);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      result = _ok._0;
    } else {
      return _bind$2;
    }
  }
  st.eval_depth = st.eval_depth - 1 | 0;
  return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(result);
}
function _M0FP211localreview3awk7builtin(name, args, st) {
  if (name === "split") {
    if (args.length < 2 || args.length > 3) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("split arguments"));
    }
    const _bind = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    const text = _M0MP211localreview3awk5Value4text(_tmp);
    let array;
    const _bind$2 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, 1);
    if (_bind$2.$tag === 1) {
      const _Variable = _bind$2;
      const _name = _Variable._0;
      array = _name;
    } else {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("split requires array name"));
    }
    let sep;
    if (args.length === 3) {
      const _bind$3 = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 2), st);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      sep = _M0MP211localreview3awk5Value4text(_tmp$2);
    } else {
      const _bind$3 = _M0MP211localreview3awk5State8variable(st, "FS");
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      sep = _M0MP211localreview3awk5Value4text(_tmp$2);
    }
    const _bind$3 = _M0FP211localreview3awk13split__fields(text, sep);
    let fields;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      fields = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0MP211localreview3awk5State5array(st, array);
    let dest;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      dest = _ok._0;
    } else {
      return _bind$4;
    }
    st.entries = st.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(dest) | 0;
    _M0MPB3Map5clearGsRP211localreview3awk5ValueE(dest);
    const _bind$5 = fields.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$5) {
        const field = fields[i];
        const _bind$6 = _M0MP211localreview3awk5State12put__element(st, array, _M0MPC13int3Int18to__string_2einner(i + 1 | 0, 10), field);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(fields.length + 0));
  }
  if (name === "length") {
    if (args.length > 1) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("length arguments"));
    }
    let text;
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
      text = st.record;
    } else {
      const _bind = _M0FP211localreview3awk8evaluate(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), st);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      text = _M0MP211localreview3awk5Value4text(_tmp);
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_M0MPC16string6String9to__array(text).length + 0));
  }
  const values = [];
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const arg = args[_];
      const _bind$2 = _M0FP211localreview3awk8evaluate(arg, st);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC16string10StringViewE(values, _tmp$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (name === "substr") {
    if (values.length < 2 || values.length > 3) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("substr arguments"));
    }
    const cs = _M0MPC16string6String9to__array(_M0MP211localreview3awk5Value4text(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)));
    const _bind$2 = _M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 1));
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      return _bind$2;
    }
    const start_number = _M0MPC16double6Double5trunc(_tmp$2);
    const start = start_number < 1 ? 0 : start_number > cs.length + 0 ? cs.length : _M0MPC16double6Double7to__int(start_number) - 1 | 0;
    const available = cs.length - start | 0;
    let requested;
    if (values.length === 3) {
      const _bind$3 = _M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 2));
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      requested = _M0MPC16double6Double5trunc(_tmp$3);
    } else {
      requested = available + 0;
    }
    const length = requested < 0 ? 0 : requested > available + 0 ? available : _M0MPC16double6Double7to__int(requested);
    const _tmp$3 = _M0MPC15array5Array3mapGcsE(_M0MPC15array9ArrayView9to__ownedGcE(_M0MPC15array5Array12view_2einnerGcE(cs, start, start + length | 0)), (c) => _M0IPC14char4CharPB4Show10to__string(c));
    const _bind$3 = "";
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))));
  }
  if (name === "index") {
    if (values.length !== 2) {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("index arguments"));
    }
    const text = _M0MP211localreview3awk5Value4text(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0));
    let _tmp$2;
    let i;
    _L: {
      _L$2: {
        const _bind$2 = _M0MP211localreview3awk5Value4text(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 1));
        const _bind$3 = _M0MPC16string6String4find(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
        if (_bind$3 === undefined) {
          _tmp$2 = 0;
        } else {
          const _Some = _bind$3;
          const _i = _Some;
          i = _i;
          break _L$2;
        }
        break _L;
      }
      _tmp$2 = (_M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(text, 0, i))).length + 1 | 0) + 0;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value6Number(_tmp$2));
  }
  if (values.length !== 1) {
    return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`${name} requires one argument`));
  }
  switch (name) {
    case "int": {
      const _bind$2 = _M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0));
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      return _M0FP211localreview3awk6finite(_M0MPC16double6Double5trunc(_tmp$2));
    }
    case "sqrt": {
      const _bind$3 = _M0MP211localreview3awk5Value6number(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0));
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      return _M0FP211localreview3awk6finite(Math.sqrt(_tmp$3));
    }
    case "tolower": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String9to__lower(_M0MP211localreview3awk5Value4text(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    case "toupper": {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk5Value4Text(_M0MPC16string6String9to__upper(_M0MP211localreview3awk5Value4text(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)))));
    }
    default: {
      return new _M0DTPC16result6ResultGRP211localreview3awk5ValueRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid(`unsupported function ${name}`));
    }
  }
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
          case 1: {
            const _Variable = expr;
            const _name = _Variable._0;
            name$2 = _name;
            break _L$3;
          }
          case 2: {
            const _Field = expr;
            const _index = _Field._0;
            index = _index;
            break _L$2;
          }
          case 3: {
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
      return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk4Slot12VariableSlot(name$2));
    }
    const _bind = _M0FP211localreview3awk8evaluate(index, st);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0MP211localreview3awk5Value6number(_tmp);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0FP211localreview3awk12field__index(_tmp$2);
    let _tmp$3;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$3 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk4Slot9FieldSlot(_tmp$3));
  }
  const _bind = _M0FP211localreview3awk10array__key(keys, st);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP211localreview3awk4SlotRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk4Slot11ElementSlot(name, _tmp));
}
function _M0FP211localreview3awk18execute__statement(stmt, st) {
  let _tmp = stmt;
  let _tmp$2 = st;
  _L: while (true) {
    const stmt$2 = _tmp;
    const st$2 = _tmp$2;
    const _bind = _M0MP211localreview3awk5State4tick(st$2);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    let value;
    _L$2: {
      let name;
      let indices;
      _L$3: {
        let name$2;
        let key;
        let body;
        _L$4: {
          let step;
          let first;
          let condition;
          let body$2;
          _L$5: {
            let body$3;
            let condition$2;
            _L$6: {
              let condition$3;
              let body$4;
              _L$7: {
                let yes;
                let condition$4;
                let no;
                _L$8: {
                  let exprs;
                  _L$9: {
                    let expr;
                    _L$10: {
                      let statements;
                      _L$11: {
                        switch (stmt$2.$tag) {
                          case 0: {
                            const _Block = stmt$2;
                            const _statements = _Block._0;
                            statements = _statements;
                            break _L$11;
                          }
                          case 2: {
                            const _Expression = stmt$2;
                            const _expr = _Expression._0;
                            expr = _expr;
                            break _L$10;
                          }
                          case 1: {
                            const _Print = stmt$2;
                            const _exprs = _Print._0;
                            exprs = _exprs;
                            break _L$9;
                          }
                          case 3: {
                            const _If = stmt$2;
                            const _condition = _If._0;
                            const _yes = _If._1;
                            const _no = _If._2;
                            yes = _yes;
                            condition$4 = _condition;
                            no = _no;
                            break _L$8;
                          }
                          case 4: {
                            const _While = stmt$2;
                            const _condition$2 = _While._0;
                            const _body = _While._1;
                            condition$3 = _condition$2;
                            body$4 = _body;
                            break _L$7;
                          }
                          case 5: {
                            const _Do = stmt$2;
                            const _body$2 = _Do._0;
                            const _condition$3 = _Do._1;
                            body$3 = _body$2;
                            condition$2 = _condition$3;
                            break _L$6;
                          }
                          case 6: {
                            const _For = stmt$2;
                            const _first = _For._0;
                            const _condition$4 = _For._1;
                            const _step = _For._2;
                            const _body$3 = _For._3;
                            step = _step;
                            first = _first;
                            condition = _condition$4;
                            body$2 = _body$3;
                            break _L$5;
                          }
                          case 7: {
                            const _ForIn = stmt$2;
                            const _key = _ForIn._0;
                            const _name = _ForIn._1;
                            const _body$4 = _ForIn._2;
                            name$2 = _name;
                            key = _key;
                            body = _body$4;
                            break _L$4;
                          }
                          case 8: {
                            const _Delete = stmt$2;
                            const _name$2 = _Delete._0;
                            const _indices = _Delete._1;
                            name = _name$2;
                            indices = _indices;
                            break _L$3;
                          }
                          case 9: {
                            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow9BreakFlow__);
                          }
                          case 10: {
                            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow12ContinueFlow__);
                          }
                          case 11: {
                            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow8NextFlow__);
                          }
                          default: {
                            const _Exit = stmt$2;
                            const _value = _Exit._0;
                            value = _value;
                            break _L$2;
                          }
                        }
                      }
                      const _bind$2 = statements.length;
                      let _tmp$3 = 0;
                      while (true) {
                        const _ = _tmp$3;
                        if (_ < _bind$2) {
                          const statement = statements[_];
                          const _bind$3 = _M0FP211localreview3awk18execute__statement(statement, st$2);
                          let flow;
                          if (_bind$3.$tag === 1) {
                            const _ok = _bind$3;
                            flow = _ok._0;
                          } else {
                            return _bind$3;
                          }
                          let _tmp$4;
                          if (flow.$tag === 0) {
                            _tmp$4 = true;
                          } else {
                            _tmp$4 = false;
                          }
                          if (!_tmp$4) {
                            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
                          }
                          _tmp$3 = _ + 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                    }
                    const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st$2);
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _ok._0;
                    } else {
                      return _bind$2;
                    }
                    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                  }
                  const values = [];
                  const _bind$2 = exprs.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _ = _tmp$3;
                    if (_ < _bind$2) {
                      const expr = exprs[_];
                      const _bind$3 = _M0FP211localreview3awk8evaluate(expr, st$2);
                      let _tmp$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _tmp$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      _M0MPC15array5Array4pushGRPC16string10StringViewE(values, _M0MP211localreview3awk5Value4text(_tmp$4));
                      _tmp$3 = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  let line;
                  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(exprs)) {
                    line = st$2.record;
                  } else {
                    const _bind$3 = _M0MP211localreview3awk5State8variable(st$2, "OFS");
                    let _tmp$4;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _tmp$4 = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    const _bind$4 = _M0MP211localreview3awk5Value4text(_tmp$4);
                    line = _M0MPC15array5Array4joinGsE(values, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
                  }
                  const _bind$3 = _M0MP211localreview3awk5State8variable(st$2, "ORS");
                  let _tmp$4;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$4 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  const _bind$4 = _M0MP211localreview3awk5State4emit(st$2, `${line}${_M0MP211localreview3awk5Value4text(_tmp$4)}`);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _ok._0;
                  } else {
                    return _bind$4;
                  }
                  return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                }
                const _bind$2 = _M0FP211localreview3awk8evaluate(condition$4, st$2);
                let _tmp$3;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp$3 = _ok._0;
                } else {
                  return _bind$2;
                }
                if (_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                  _tmp = yes;
                  continue;
                } else {
                  let other;
                  _L$9: {
                    if (no === undefined) {
                      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
                    } else {
                      const _Some = no;
                      const _other = _Some;
                      other = _other;
                      break _L$9;
                    }
                  }
                  _tmp = other;
                  continue;
                }
              }
              _L$8: while (true) {
                const _bind$2 = _M0FP211localreview3awk8evaluate(condition$3, st$2);
                let _tmp$3;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp$3 = _ok._0;
                } else {
                  return _bind$2;
                }
                if (_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                  let flow;
                  _L$9: {
                    _L$10: {
                      const _bind$3 = _M0FP211localreview3awk18execute__statement(body$4, st$2);
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
                    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
                  }
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
            }
            _L$7: while (true) {
              let flow;
              _L$8: {
                _L$9: {
                  const _bind$2 = _M0FP211localreview3awk18execute__statement(body$3, st$2);
                  let _bind$3;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _bind$3 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  switch (_bind$3.$tag) {
                    case 0: {
                      break;
                    }
                    case 2: {
                      break;
                    }
                    case 1: {
                      break _L$7;
                    }
                    default: {
                      flow = _bind$3;
                      break _L$9;
                    }
                  }
                  break _L$8;
                }
                return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
              }
              const _bind$2 = _M0FP211localreview3awk8evaluate(condition$2, st$2);
              let _tmp$3;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$3 = _ok._0;
              } else {
                return _bind$2;
              }
              if (!_M0MP211localreview3awk5Value5truth(_tmp$3)) {
                break;
              }
              continue;
            }
            return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
          }
          let expr;
          _L$6: {
            _L$7: {
              if (first === undefined) {
              } else {
                const _Some = first;
                const _expr = _Some;
                expr = _expr;
                break _L$7;
              }
              break _L$6;
            }
            const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st$2);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          _L$7: while (true) {
            const _bind$2 = _M0MP211localreview3awk5State4tick(st$2);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            let expr$2;
            _L$8: {
              _L$9: {
                if (condition === undefined) {
                } else {
                  const _Some = condition;
                  const _expr = _Some;
                  expr$2 = _expr;
                  break _L$9;
                }
                break _L$8;
              }
              const _bind$3 = _M0FP211localreview3awk8evaluate(expr$2, st$2);
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
            }
            let flow;
            _L$9: {
              _L$10: {
                const _bind$3 = _M0FP211localreview3awk18execute__statement(body$2, st$2);
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
                    break _L$7;
                  }
                  default: {
                    flow = _bind$4;
                    break _L$10;
                  }
                }
                break _L$9;
              }
              return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
            }
            let expr$3;
            _L$10: {
              _L$11: {
                if (step === undefined) {
                } else {
                  const _Some = step;
                  const _expr = _Some;
                  expr$3 = _expr;
                  break _L$11;
                }
                break _L$10;
              }
              const _bind$3 = _M0FP211localreview3awk8evaluate(expr$3, st$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
            continue;
          }
          return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
        }
        const keys = [];
        const _bind$2 = _M0MP211localreview3awk5State5array(st$2, name$2);
        let _tmp$3;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$3 = _ok._0;
        } else {
          return _bind$2;
        }
        const _it = _M0MPB3Map5iter2GsRP211localreview3awk5ValueE(_tmp$3);
        while (true) {
          let k;
          _L$5: {
            const _bind$3 = _M0MPB5Iter24nextGsRP211localreview3awk5ValueE(_it);
            if (_bind$3 === undefined) {
              break;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              const _k = _x._0;
              k = _k;
              break _L$5;
            }
          }
          _M0MPC15array5Array4pushGRPC16string10StringViewE(keys, k);
          continue;
        }
        _M0MPC15array5Array8sort__byGsE(keys, (a, b) => _M0MPC16string6String16lexical__compare(a, b));
        const _bind$3 = keys.length;
        let _tmp$4 = 0;
        _L$5: while (true) {
          const _ = _tmp$4;
          if (_ < _bind$3) {
            const k = keys[_];
            const _bind$4 = _M0MP211localreview3awk5State5write(st$2, new _M0DTP211localreview3awk4Slot12VariableSlot(key), new _M0DTP211localreview3awk5Value4Text(k));
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            let flow;
            _L$6: {
              _L$7: {
                const _bind$5 = _M0FP211localreview3awk18execute__statement(body, st$2);
                let _bind$6;
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _bind$6 = _ok._0;
                } else {
                  return _bind$5;
                }
                switch (_bind$6.$tag) {
                  case 0: {
                    break;
                  }
                  case 2: {
                    break;
                  }
                  case 1: {
                    break _L$5;
                  }
                  default: {
                    flow = _bind$6;
                    break _L$7;
                  }
                }
                break _L$6;
              }
              return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(flow);
            }
            _tmp$4 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
      }
      const _bind$2 = _M0MP211localreview3awk5State5array(st$2, name);
      let array;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        array = _ok._0;
      } else {
        return _bind$2;
      }
      let keys;
      _L$4: {
        _L$5: {
          if (indices.$tag === 1) {
            const _Some = indices;
            const _keys = _Some._0;
            keys = _keys;
            break _L$5;
          } else {
            st$2.entries = st$2.entries - _M0MPB3Map6lengthGsRP211localreview3awk5ValueE(array) | 0;
            _M0MPB3Map5clearGsRP211localreview3awk5ValueE(array);
          }
          break _L$4;
        }
        if (_M0MPC15array5Array9is__emptyGRPB4JsonE(keys)) {
          return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("empty array subscript"));
        }
        const _bind$3 = _M0FP211localreview3awk10array__key(keys, st$2);
        let key;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          key = _ok._0;
        } else {
          return _bind$3;
        }
        if (_M0MPB3Map8containsGsRP211localreview3awk5ValueE(array, key)) {
          _M0MPB3Map6removeGsRP211localreview3awk5ValueE(array, key);
          st$2.entries = st$2.entries - 1 | 0;
        }
      }
      return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(_M0DTP211localreview3awk4Flow6Normal__);
    }
    let status;
    let expr;
    _L$3: {
      _L$4: {
        if (value === undefined) {
          status = undefined;
        } else {
          const _Some = value;
          const _expr = _Some;
          expr = _expr;
          break _L$4;
        }
        break _L$3;
      }
      const _bind$2 = _M0FP211localreview3awk8evaluate(expr, st$2);
      let _tmp$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$3 = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP211localreview3awk5Value6number(_tmp$3);
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      const n = _M0MPC16double6Double5trunc(_tmp$4);
      if (n < 0 || n > 255) {
        return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("exit status 0..255 required"));
      }
      status = _M0MPC16double6Double7to__int(n);
    }
    return new _M0DTPC16result6ResultGRP211localreview3awk4FlowRP211localreview3awk10ParseErrorE2Ok(new _M0DTP211localreview3awk4Flow8ExitFlow(status));
  }
}
function _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, step_limit) {
  let _tmp;
  if (_M0MPC16string6String9is__empty(separator)) {
    _tmp = true;
  } else {
    const _bind = "\n";
    _tmp = _M0MPC16string6String8contains(separator, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("invalid literal separator"));
  }
  if (input.length > 1000000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("input limit"));
  }
  if (step_limit < 1 || step_limit > 10000000) {
    return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("step limit 1..10000000 required"));
  }
  const _bind = _M0FP211localreview3awk5parse(program);
  let rules;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    rules = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = [{ _0: "NR", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "FNR", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "NF", _1: new _M0DTP211localreview3awk5Value6Number(0) }, { _0: "FS", _1: new _M0DTP211localreview3awk5Value4Text(separator) }, { _0: "OFS", _1: new _M0DTP211localreview3awk5Value4Text(" ") }, { _0: "ORS", _1: new _M0DTP211localreview3awk5Value4Text("\n") }, { _0: "SUBSEP", _1: new _M0DTP211localreview3awk5Value4Text("\u001c") }];
  const _tmp$2 = _M0MPB3Map3MapGsRP211localreview3awk5ValueE(new _M0TPB9ArrayViewGUsRP211localreview3awk5ValueEE(_bind$2, 0, 7), undefined);
  const _bind$3 = [];
  const st = new _M0TP211localreview3awk5State(_tmp$2, _M0MPB3Map3MapGsRPB3MapGsRP211localreview3awk5ValueEE(new _M0TPB9ArrayViewGUsRPB3MapGsRP211localreview3awk5ValueEEE(_bind$3, 0, 0), undefined), [], "", [], 0, 0, step_limit, 0, 0);
  const status = new _M0TPB8MutLocalGiE(0);
  const exiting = new _M0TPB8MutLocalGbE(false);
  const _bind$4 = rules.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$4) {
      const rule = rules[_];
      if (rule.phase === "BEGIN") {
        let code;
        _L: {
          _L$2: {
            const _bind$5 = _M0FP211localreview3awk18execute__statement(rule.body, st);
            let _bind$6;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _bind$6 = _ok._0;
            } else {
              return _bind$5;
            }
            switch (_bind$6.$tag) {
              case 0: {
                break;
              }
              case 4: {
                const _ExitFlow = _bind$6;
                const _code = _ExitFlow._0;
                code = _code;
                break _L$2;
              }
              default: {
                return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next/break/continue outside record or loop"));
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
            status.val = n;
          }
          exiting.val = true;
          break;
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!exiting.val) {
    const _bind$5 = "\n";
    const lines = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(input, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
    let count;
    if (_M0MPC16string6String9is__empty(input)) {
      count = 0;
    } else {
      const _bind$6 = "\n";
      if (_M0MPC16string6String11has__suffix(input, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
        count = lines.length - 1 | 0;
      } else {
        count = lines.length;
      }
    }
    const _bind$6 = 0;
    let _tmp$4 = _bind$6;
    while (true) {
      const i = _tmp$4;
      if (i < count) {
        const _bind$7 = _M0MP211localreview3awk5State4tick(st);
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          return _bind$7;
        }
        const _bind$8 = _M0MP211localreview3awk5State11set__record(st, _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(lines, i)));
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
        const _tmp$5 = st.vars;
        const _bind$9 = _M0MP211localreview3awk5State8variable(st, "NR");
        let _tmp$6;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$6 = _ok._0;
        } else {
          return _bind$9;
        }
        const _bind$10 = _M0MP211localreview3awk5Value6number(_tmp$6);
        let _tmp$7;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _tmp$7 = _ok._0;
        } else {
          return _bind$10;
        }
        const _bind$11 = _M0FP211localreview3awk6finite(_tmp$7 + 1);
        let _tmp$8;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _tmp$8 = _ok._0;
        } else {
          return _bind$11;
        }
        _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$5, "NR", _tmp$8);
        const _tmp$9 = st.vars;
        const _bind$12 = _M0MP211localreview3awk5State8variable(st, "FNR");
        let _tmp$10;
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          _tmp$10 = _ok._0;
        } else {
          return _bind$12;
        }
        const _bind$13 = _M0MP211localreview3awk5Value6number(_tmp$10);
        let _tmp$11;
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          _tmp$11 = _ok._0;
        } else {
          return _bind$13;
        }
        const _bind$14 = _M0FP211localreview3awk6finite(_tmp$11 + 1);
        let _tmp$12;
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          _tmp$12 = _ok._0;
        } else {
          return _bind$14;
        }
        _M0MPB3Map3setGsRP211localreview3awk5ValueE(_tmp$9, "FNR", _tmp$12);
        const _bind$15 = rules.length;
        let _tmp$13 = 0;
        _L: while (true) {
          const _ = _tmp$13;
          if (_ < _bind$15) {
            const rule = rules[_];
            _L$2: {
              if (_M0IP016_24default__implPB2Eq10not__equalGsE(rule.phase, "record")) {
                break _L$2;
              }
              let yes;
              if (rule.active) {
                yes = true;
              } else {
                let expr;
                _L$3: {
                  _L$4: {
                    const _bind$16 = rule.condition;
                    if (_bind$16 === undefined) {
                      yes = true;
                    } else {
                      const _Some = _bind$16;
                      const _expr = _Some;
                      expr = _expr;
                      break _L$4;
                    }
                    break _L$3;
                  }
                  const _bind$16 = _M0FP211localreview3awk8evaluate(expr, st);
                  let _tmp$14;
                  if (_bind$16.$tag === 1) {
                    const _ok = _bind$16;
                    _tmp$14 = _ok._0;
                  } else {
                    return _bind$16;
                  }
                  yes = _M0MP211localreview3awk5Value5truth(_tmp$14);
                }
              }
              if (yes) {
                let expr;
                _L$3: {
                  _L$4: {
                    const _bind$16 = rule.until;
                    if (_bind$16 === undefined) {
                    } else {
                      const _Some = _bind$16;
                      const _expr = _Some;
                      expr = _expr;
                      break _L$4;
                    }
                    break _L$3;
                  }
                  const _bind$16 = _M0FP211localreview3awk8evaluate(expr, st);
                  let _tmp$14;
                  if (_bind$16.$tag === 1) {
                    const _ok = _bind$16;
                    _tmp$14 = _ok._0;
                  } else {
                    return _bind$16;
                  }
                  rule.active = !_M0MP211localreview3awk5Value5truth(_tmp$14);
                }
                let code;
                _L$4: {
                  _L$5: {
                    const _bind$16 = _M0FP211localreview3awk18execute__statement(rule.body, st);
                    let _bind$17;
                    if (_bind$16.$tag === 1) {
                      const _ok = _bind$16;
                      _bind$17 = _ok._0;
                    } else {
                      return _bind$16;
                    }
                    switch (_bind$17.$tag) {
                      case 0: {
                        break;
                      }
                      case 3: {
                        break _L;
                      }
                      case 4: {
                        const _ExitFlow = _bind$17;
                        const _code = _ExitFlow._0;
                        code = _code;
                        break _L$5;
                      }
                      default: {
                        return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("break/continue outside loop"));
                      }
                    }
                    break _L$4;
                  }
                  let n;
                  _L$6: {
                    _L$7: {
                      if (code === undefined) {
                      } else {
                        const _Some = code;
                        const _n = _Some;
                        n = _n;
                        break _L$7;
                      }
                      break _L$6;
                    }
                    status.val = n;
                  }
                  exiting.val = true;
                  break;
                }
              }
              break _L$2;
            }
            _tmp$13 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (exiting.val) {
          break;
        }
        _tmp$4 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind$5 = rules.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$5) {
      const rule = rules[_];
      if (rule.phase === "END") {
        let code;
        _L: {
          _L$2: {
            const _bind$6 = _M0FP211localreview3awk18execute__statement(rule.body, st);
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
              case 4: {
                const _ExitFlow = _bind$7;
                const _code = _ExitFlow._0;
                code = _code;
                break _L$2;
              }
              default: {
                return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE3Err(new _M0DTPC15error5Error40localreview_2fawk_2eParseError_2eInvalid("next/break/continue outside record or loop"));
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
            status.val = n;
          }
          break;
        }
      }
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$5 = st.output;
  const _bind$6 = "";
  return new _M0DTPC16result6ResultGRP211localreview3awk9RunResultRP211localreview3awk10ParseErrorE2Ok(new _M0TP211localreview3awk9RunResult(_M0MPC15array5Array4joinGsE(_tmp$5, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length)), status.val, st.steps));
}
function _M0FP211localreview3awk11run_2einner(program, input, separator) {
  const _bind = _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, 1000000);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGsRP211localreview3awk10ParseErrorE2Ok(_tmp.output);
}
function _M0FP411localreview3awk3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = "\n---\n";
    const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(input, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
    if (parts.length !== 2) {
      return "ERROR: use program then newline --- newline data";
    }
    const _bind$2 = _M0FP211localreview3awk11run_2einner(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0)), _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 1)), " ");
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      return _ok._0;
    } else {
      const _err = _bind$2;
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
    const _bind = _M0FP211localreview3awk25run__with__status_2einner(program, input, separator, 1000000);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPC14json4Json17stringify_2einner(_M0IP211localreview3awk9RunResultPB6ToJson8to__json(_tmp), false, 0, undefined);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview3awk10ParseErrorE(e))}`;
}
(() => {
})();
export { _M0FP411localreview3awk3cmd3web3run as run, _M0FP411localreview3awk3cmd3web7execute as execute }
//# sourceMappingURL=web.js.map
