# Git Blame

## Purpose

`git blame` was used to trace ownership and history for the feature section in `src/index.html`.

## Command used

```bash
git blame src/index.html
```

## Actual output excerpt

```text
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  1) <!DOCTYPE html>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  2) <html lang="en">
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  3) <head>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  4)   <meta charset="UTF-8">
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  5)   <meta name="viewport" content="width=device-width, initial-scale=1.0">
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  6)   <title>Git Training App</title>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  7)   <link rel="stylesheet" href="style.css">
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  8) </head>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  9) <body>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  10)   <header>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  11)   <nav>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  12)     <ul>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  13)       <li><a href="#home">Home</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  14)       <li><a href="#features">Features</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  15)       <li><a href="#about">About</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  17)       <li><a href="#contact">Contact</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  18)     </ul>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  19)   </nav>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  20)     <h1>Git Training App</h1>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  21)   </header>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  22)   <main>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  23)     <aside class="sidebar">
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  24)       <h2>Sidebar</h2>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  25)       <ul>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  27)         <li><a href="#home">Home</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  28)         <li><a href="#features">Features</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  30)         <li><a href="#about">About</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  31)         <li><a href="#contact">Contact</a></li>
^00b40a0 (Shashank Masih 2026-08-12 17:52:46 +0530  32)       </ul>
^00b40a0 (Shashank Masih 2026-08-12 +0530  33)     </aside>
...
```

## Interpretation

The blame output confirms the structure was introduced by the repository baseline and then extended by subsequent feature commits. It is especially useful for tracing which commit introduced or changed a specific block in the HTML file.
