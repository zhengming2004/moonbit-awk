# Changelog

## 0.5.0 — 2026-09-19

- Added RS/RT scanning and unredirected getline with a shared main input cursor across BEGIN, records, functions, END, ARGV edits and file transitions.
- Added pull input callbacks, advance/close_input and an optional output sink; retained manual feed sessions.
- Reworked the CLI around bounded UTF-8 IO, prompt flushing and OS backpressure. Fixed Unicode whitespace splitting and final-record slicing.
- Added 303 native record/getline programs, 19 generated backend groups, 4 provider-contract groups, 10 pull host checks and expanded real CLI comparisons from 37 to 65.
- Explicitly retained tested GoAWK 1.32 quirks; redirected IO, full conformance, arbitrary chunk-boundary parity and full performance remain incomplete.

## 0.4.0 — 2026-09-17

- Added a bounded MoonBit leftmost-longest regex engine, pattern literals, match/sub/gsub and regex field splitting.
- Added user functions, static scalar/array inference, recursion, reference array arguments and nonlocal control flow.
- Added printf/sprintf, OFMT/CONVFMT, exact decimal rounding, mathematical/random builtins and IEEE numeric coercion.
- Added reusable Session APIs and a multi-file incremental Node CLI with environment/ARGV, -v, nextfile, output draining and partial-error output.
- Added 514 core and 37 real-host comparisons against unmodified official GoAWK v1.32.0, 25 public API groups per JS/Wasm-GC backend, and bridge lifetime/batching checks.
- Full I/O, RS, CSV/TSV, complete Unicode regex/byte/locale behavior, complete upstream conformance and comparative performance remain open.

## 0.3.0

Added the AST evaluator, typed strings/numbers, control flow, associative arrays, field rewriting, range rules and initial single-file CLI. The historical GNU Awk corpus contains 46 cases.
