# Merge Conflict Documentation

## Conflict scenario

A real merge conflict was created while merging `feature/add-footer` into `main`.
Both branches modified the same `section` in `src/index.html`:
- `main` updated the home section messaging.
- `feature/add-footer` added footer-related text in the same area.

## Conflict markers

The conflict was visible in `src/index.html` as:

<<<<<<< HEAD
...main changes...
=======
...feature/add-footer changes...
>>>>>>> feature/add-footer

This confirmed the conflict was real and not auto-resolved.

## Resolution

The final version preserves the updated main messaging while including the footer content after the home section. This kept both branch intentions intact:
- main's improved messaging was retained
- feature branch footer content was kept and styled

## Why this resolution was chosen

The final merge result provides a consistent landing section and the footer feature in the same page. It avoids losing either branch's work and reflects a sensible combination of the two changes.

## Merge commit

The merge commit hash is `b4c35c8`.

## Note

No screenshots were fabricated. The conflict was reproduced and resolved using actual Git operations.
