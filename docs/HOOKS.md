# Git Hooks

## Purpose

This repository uses a local Git hook to enforce conventional commit messages before a commit is created.

## Hook configuration used

The repository was configured with a local hook directory:

```bash
git config core.hooksPath .githooks
```

The hook script lives at `.githooks/commit-msg` and enforces a pattern similar to:

```text
^(feat|fix|docs|chore|style|refactor|test): .+
```

## Hook script

```sh
#!/usr/bin/env sh

msg_file="$1"
pattern='^(feat|fix|docs|chore|style|refactor|test): .+'

if [ -z "$msg_file" ]; then
  echo "ERROR: commit message file is required." >&2
  exit 1
fi

message=$(tr -d '\r' < "$msg_file")

if ! printf '%s\n' "$message" | grep -Eq "$pattern"; then
  echo "ERROR: commit message must match '<type>: <subject>' using a valid conventional type." >&2
  echo "Example: feat: add user login" >&2
  exit 1
fi

exit 0
```

## Validation performed

An invalid commit message was tested:

```bash
git commit --allow-empty -m "broken commit message"
```

This was rejected with the hook message:

```text
ERROR: commit message must match '<type>: <subject>' using a valid conventional type.
Example: feat: add user login
```

A valid commit then succeeded:

```bash
git commit --allow-empty -m "docs: validate local hook"
```

This confirmed the hook is working as intended.
