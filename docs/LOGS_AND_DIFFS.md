# Git Log and Diff Commands

## `git log --oneline --graph`

This command shows a compact commit history in a readable graph format. It prints one commit per line and renders branch structure and merge relationships using ASCII art.

What it shows:
- commit hashes and summary messages
- branch relationships and merge points
- current HEAD and branch pointers
- the overall shape of the repository history

## `git diff HEAD~2..HEAD`

This command shows the changes introduced by the last two commits relative to the current `HEAD`. It compares the commit at `HEAD~2` with the latest commit at `HEAD`.

What it shows:
- added, modified, and deleted lines across files
- the actual content differences between two commit points
- which files changed and how they changed

### Why these commands matter

- `git log --oneline --graph` is useful for reviewing history quickly and understanding commit flow.
- `git diff HEAD~2..HEAD` is useful for inspecting recent changes before pushing or reviewing work.
