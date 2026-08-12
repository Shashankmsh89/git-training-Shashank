# Git Bisect

## Purpose

This repository used a local `git bisect` exercise to locate the first bad commit in a small change sequence.

## The test scenario

A feature section in `src/index.html` was intentionally broken in one commit and then fixed later. The goal was to prove that `git bisect` can find the first bad commit without manually checking every revision.

## Commands used

```bash
git bisect start
git bisect bad HEAD
git bisect good HEAD~2
git bisect run python -c "import pathlib,sys; t=pathlib.Path('src/index.html').read_text(encoding='utf-8'); sys.exit(0 if '<section id=\"features\">' in t and '</section>' in t else 1)"
```

## Actual result

The actual bisect output identified the first bad commit as:

```text
1f5b554ad99334d1153b686cd1991accb2ae8156 is the first bad commit
commit 1f5b554ad99334d1153b686cd1991accb2ae8156
Author: Shashank Masih <Shashank_masih@amicusglobal.com>
Date:   Wed Aug 12 15:55:37 2026 +0530

    fix: adjust feature section markup
```

## Why this matters

The bisect result shows the actual commit responsible for the broken markup. Git bisect reduced the search to the exact bad revision using a deterministic check on the HTML file.

## Notes

- This was done locally in the repository only.
- No remote branch or GitHub configuration was changed as part of the exercise.
- The repository was reset back to the valid branch state after the bisect procedure.
