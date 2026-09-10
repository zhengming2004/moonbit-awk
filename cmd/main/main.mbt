///|
fn run(input : String) -> String {
  try {
    let parts = input.split("\n---\n").collect()
    if parts.length() != 2 {
      return "ERROR: use program then newline --- newline data"
    }
    @lib.run(parts[0].to_owned(), parts[1].to_owned())
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {
  println(
    run(
      "BEGIN { total = 0 }\n{ total += $2; print NR, $1, $2 }\nEND { print \"total\", total }\n---\napple 12\npear 7\npeach 9\n",
    ),
  )
}
