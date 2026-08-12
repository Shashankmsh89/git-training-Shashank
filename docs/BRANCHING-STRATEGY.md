# Branching Strategy

## Strategy used in this repository

This repository used a practical trunk-based development approach with short-lived feature branches and a small set of support branches.

The main branch was used as the integration line:
- `main`

Feature and support branches were created from relevant points in history, such as:
- `feature/add-navigation`
- `feature/add-footer`
- `feature/add-sidebar`
- `feature/interactive-rebase`
- `feature/stash-demo`
- `hotfix/urgent-fix`
- `test/revert-branch`
- `test/reset-branch`

## Actual branch naming pattern used

The repository followed a simple naming pattern:
- `main` for the stable integration branch
- `feature/<short-name>` for features or new work
- `hotfix/<short-name>` for urgent fixes
- `test/<short-name>` for experiments or recovery tests

Examples from this repository:
- `feature/add-navigation`
- `feature/add-footer`
- `feature/add-sidebar`
- `feature/stash-demo`
- `hotfix/urgent-fix`
- `test/revert-branch`

## When to branch

Branches were created when work was intentionally isolated from the main integration line, such as:
- implementing a UI enhancement
- resolving a merge conflict exercise
- testing a revert/reset scenario
- demonstrating stash recovery
- testing a Git bisect scenario

## Where to branch from

Branches were created from the most relevant base:
- feature work was created from `main`
- hotfix work was created from an appropriate `main`-based point
- experiments were created from `main` or a safe temporary base

## When to merge

Merges occurred when the branch had completed its purpose and the change was ready to integrate:
- `feature/add-navigation` was fast-forward merged into `main`
- `feature/add-sidebar` was also fast-forward merged after rebase
- `feature/add-footer` was merged with a merge commit after a real conflict was resolved

## When to rebase

Rebase was used for branch cleanup and integration when the branch was still private to the developer and not shared.

The repository used rebase in practice for:
- `feature/add-sidebar`

This is appropriate when the branch is still local or limited in scope. The safety rule is:
- Do not rebase shared or public history that others may depend on.

## Why shared history should not be rebased

Rebasing rewrites commit IDs. If a branch has been shared with others, rewriting it can break their local references and create confusion. This is especially important on branches that are already pushed and used by multiple contributors.

## GitHub implementation vs Azure DevOps assignment

This repository is hosted on GitHub, not Azure DevOps. The original assignment described Azure DevOps branch policies and pull requests, but the actual implementation in this repository used GitHub equivalents:
- GitHub branches for feature and hotfix isolation
- GitHub pull request workflow for branch review and collaboration when authenticated
- GitHub repository remote instead of Azure DevOps repository

Azure DevOps-specific policy concepts such as work item linking and Azure branch policies were explicitly excluded because they do not apply in this GitHub-based repository.

## Actual branch flow in this repository

```text
main
├── feature/add-navigation
├── feature/add-footer
├── feature/add-sidebar
├── feature/stash-demo
├── hotfix/urgent-fix
├── feature/interactive-rebase
├── test/revert-branch
├── test/reset-branch
└── test/bisect-demo (if created as part of a local exercise)
```

## Summary

This repository demonstrated a GitHub-based trunk-style workflow with short-lived branches, fast-forward merges where appropriate, a conflict merge, rebase usage, and a hotfix branch. The actual repository history confirms the branch strategy used here.
