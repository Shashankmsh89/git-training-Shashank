# Commit Conventions

## Format

The repository used the conventional format:

```text
type: subject
```

Examples of valid commit types used in the actual history:
- `feat`
- `fix`
- `docs`
- `chore`
- `style`

## Actual examples from the repository history

### Good examples

These are real commit messages from the repository:
- `docs: add initial README`
- `chore: add gitignore`
- `feat: add index html with base structure`
- `feat: add base stylesheet`
- `feat: add application javascript`
- `docs: add log and diff command documentation`
- `feat: add navigation structure`
- `feat: add navigation links`
- `style: improve navigation layout`
- `merge: resolve feature/add-footer into main with footer and updated home messaging`
- `docs: add merge conflict documentation`
- `docs: add recovery documentation`
- `feat: restore stashed feature work`

### Bad examples seen in the repo history

These examples show why consistent message quality matters in real work:
- `WIP`
- `fix`
- `oops`
- `update`

These are intentionally vague and do not describe the change clearly. They are useful examples of what should be avoided when writing commit messages.

## Why consistent commit messages matter

Consistent messages help with:
- understanding the context of a change later
- reviewing git history quickly
- using tools like `git log`, `git bisect`, and `git blame` with meaningful intent
- keeping a clean and understandable repository history
- making branch and release review easier in team environments

## Recommended rules

- Use a short, direct subject after the type
- Keep the subject in the imperative mood when possible
- Use the message to describe what changed, not how it was implemented
- Prefer `feat` for new user-visible behavior
- Prefer `fix` for bug fixes
- Prefer `docs` for documentation updates
- Prefer `chore` for maintenance and tooling tasks
- Prefer `style` for layout or formatting changes
- Prefer `refactor` and `test` when those categories are used in a project

## Summary

This repository already demonstrates the value of conventional commit messages. The actual history includes both strong examples and weak examples, which makes the purpose of clear commit conventions easy to understand.
