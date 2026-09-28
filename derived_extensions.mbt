///|
pub extend RunResult with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend RunResult with Eq::{not_equal, equal}

///|
pub extend RunResult with ToJson::{to_json}

///|
pub extend ParseError with @moonbitlang/core/debug.Debug::{to_repr}
