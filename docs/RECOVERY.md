# Recovery Documentation

## Part A — Revert

A deliberate bad commit was created on a safe branch called `test/revert-branch`:
- `chore: add temporary broken file for revert exercise`

The commit was then reverted with:

```bash
git revert <bad-commit>
```

This created a new commit that undo the bad change without rewriting history.

### Outcome
- A new commit was added: `Revert "chore: add temporary broken file for revert exercise"`
- The repository history remained intact
- This is the safe approach on shared branches because it preserves commit history

## Part B — Reset and Reflog

A temporary branch `test/reset-branch` was created and a test commit was made:
- `chore: add temporary reset file`

The branch was then reset with:

```bash
git reset --hard HEAD~1
```

This removed the commit from the current branch, but the commit was still recoverable through the reflog.

### Reflog recovery

Using `git reflog` showed the lost commit reference, and it was recovered with:

```bash
git reset --hard <lost-commit-hash>
```

### Why reset is dangerous on shared branches

- `git reset --hard` rewrites branch history and discards commits from the current branch tip.
- If the branch is shared, collaborators may already depend on those commits.
- This can require force-pushing and cause confusion or data loss.

### Revert vs Reset

- `git revert` adds a new commit that undoes a previous commit. It is safe on shared/public branches.
- `git reset --hard` changes the branch pointer and can remove commits from the branch history. It is best used only on private or temporary branches.

### Recovery lesson

The reflog keeps a record of recent HEAD positions, making it possible to recover commits that were removed by a destructive reset.
