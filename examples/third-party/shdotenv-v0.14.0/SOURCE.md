# shdotenv source attribution

The preserved files under `src/` are copied byte-for-byte from the public
`ko1nksm/shdotenv` v0.14.0 release at commit
`777e8edb65482b036e0275a895d4cb6be8511c7d`. The project is MIT-licensed; its
unmodified license text is included here. SHA-256 pins are in `source.json`.

The upstream [`src/shdotenv`](https://github.com/ko1nksm/shdotenv/blob/777e8edb65482b036e0275a895d4cb6be8511c7d/src/shdotenv)
loads `src/lib.awk` and `src/parser.awk` and invokes the configured AWK command
for its normal parse path. Its README describes the tool as a shell script with
embedded AWK. This makes those parser files an existing public consumer path,
not a tutorial sample.

`consumer.env` is a small synthetic input created for this project. The
replay runs the original shell entrypoint once with the pinned, unmodified
GoAWK v1.32.0 executable and once with this repository's `tools/awk.mjs` as the
configured AWK command. The runner checks all preserved upstream file hashes
and records the result in `evidence/shdotenv-consumer.json`.

The independent reference is the official [GoAWK v1.32.0 release](https://github.com/benhoyt/goawk/releases/tag/v1.32.0), Windows amd64 asset `goawk_v1.32.0_windows_amd64.zip`. The archive SHA-256 is `2cebd8d64a8eaf84b2787edec8c0274760166e077bc2bdbb69d41537b56cf32c`; the extracted `goawk.exe` SHA-256 is `ab0575dd3662183428e672e2ad9fe5b7742d7c63a659a50e24a8739c58ef359b`.

This verifies one parse invocation and one supported `.env` input. It does not
claim upstream adoption, migration of a user's script, full shdotenv or AWK
compatibility, or validation of the separate `export` path and every dialect.
